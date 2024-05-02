const Pet = require("../../models/Pet");
// const checkExistingClient = async function (Profile_ID) {
//   return await Client.findOne({ Profile_ID });
// };

const registerPet = async function (req, res) {
  // const avatarName = req.file.filename;
  if (!req.file) return res.json("Register really failed!");
  console.log(req.file.path)
  const isAlreadyRegistered = false;

  if (isAlreadyRegistered) {
    console.log("Client already exists:", isAlreadyRegistered);
    res.json("Client already exist");
  } else {
    console.log(req.body)
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
        console.log("Registered client successfully: client =>", newpet);
        res.status(200).json(newpet);
      })
      .catch((error) => {
        console.error("Register Error : ", error);
        res.status(500).json("Register failed!");
      });
  }
};

module.exports = registerPet;
