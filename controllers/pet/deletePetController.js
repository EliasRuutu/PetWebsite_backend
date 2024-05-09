const Pet = require("../../models/pet");

const deletePet = async (req, res) => {
    const petID = req.params.id;
    try {
        Pet.findOneAndDelete({Profile_ID: petID}).then(
            res.status(200).json({message:"successfully delete"})
        ).catch(err => {
            
        })
    } catch(error) {

    }
}

module.exports = deletePet;