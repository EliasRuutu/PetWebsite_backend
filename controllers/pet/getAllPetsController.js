const Pet = require("../../models/pet");

const getAllPets = async function (req, res) {
  try {
      const pets = await Pet.find();
      res.status(200).json(pets);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}

module.exports = getAllPets;
