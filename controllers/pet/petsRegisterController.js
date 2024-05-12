const Pet = require("../../models/pet");
const checkExistingPet= async function (idTag) {
  return await Pet.findOne({ idTag });
};

const registerPet = async function (req, res) {
  console.log("req.body", req.body);
  if (!req.file){
    console.log("Register really failed!")
    return res.json("Register really failed!");
  } 

  const isAlreadyRegistered = await checkExistingPet(req.body.idTag);
  console.log("isAlreadyRegistered", isAlreadyRegistered);

  if (isAlreadyRegistered) {
    const updatePetFields = {
      name: req.body.name,
      gender: req.body.gender,
      birthday: req.body.birthday,
      microchip: req.body.microchip,
      specialDCondition: req.body.specialDCondition,
      idTag: req.body.idTag,
      petAvatar: req.file.filename,
      path: req.file.path
    };

    Pet.findOneAndUpdate({ Profile_ID: req.body.Profile_ID }, updatePetFields, { new: true })
      .then((result) => {
        res.status(202).json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  } else {
    const newpet = new Pet({
      Profile_ID: req.body.Profile_ID,
      name: req.body.name,
      gender: req.body.gender,
      birthday: req.body.birthday,
      microchip: req.body.microchip,
      specialDCondition: req.body.specialDCondition,
      idTag: req.body.idTag,
      petAvatar: req.file.filename,
      path: req.file.path
    });

    newpet
      .save()
      .then((pet) => {
        console.log("Registered client successfully: client =>", pet);
        res.status(200).json(pet);
      })
      .catch((error) => {
        console.error("Register Error : ", error);
        res.status(500).json("Register failed!");
      });
  }
};


module.exports = registerPet;
