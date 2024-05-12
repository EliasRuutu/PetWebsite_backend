const Pet = require("../../models/pet");

const getPet = async function (req, res) {
    console.log("👧🧑", req.params.idTag)
    const idTag = req.params.idTag;

    const currentPet = await Pet.findOne({idTag: idTag})
    .then((pet) => {
        res.status(200).json({ pet : pet });
    }).catch((error) => {
        res.status(500).json({message: "Network error"});
    })
}

module.exports = getPet;