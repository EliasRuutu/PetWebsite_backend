const Client = require("../../models/client");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const Pet = require("../../models/pet");

const checkExistingClient = async function (Profile_ID) {
  return await Client.findOne({ Profile_ID });
};

const registerClient = async function (req, res) {
  // const avatarName = req.file.filename;
  if (!req.file) return res.json("Register failed!");

  const Profile_ID = uuid.v5(JSON.stringify(req.body.email), uuid.v5.URL);

  const isAlreadyRegistered = await checkExistingClient(Profile_ID)

  if (isAlreadyRegistered) {

    if(req.body.clientID === "") {
      res.status(404).json("User already exists");
      return 0;
    }

    const updatedClientFields = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      avatarName: req.file.filename,
      address: req.body.address,
    }

    Client.findOneAndUpdate({Profile_ID: req.body.clientID}, updatedClientFields, { new : true })
    .then((result) => {
      res.status(202).json(result);
    })
    .catch((error) => {
      res.status(500).json({ message: "Network error" });
    })
  } else {
    const newClient = new Client({
      Profile_ID: Profile_ID,
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      avatarName: req.file.filename,
      address: req.body.address,
    });

    newClient
      .save()
      .then((user) => {
        console.log("Registered client successfully: client =>", newClient);
        res.status(200).json(user);
      })
      .catch((error) => {
        console.error("Regisger Error : ", error);
        res.status(500).json("Register failed!");
      });
  }
};

module.exports = registerClient;
