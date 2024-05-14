const Pet = require("../../models/pet");
const Assign = require("../../models/assign")

const deletePet = async (req, res) => {
    const Profile_ID = req.params.id;
    const idTag = req.params.idTag;
    try {
        Pet.findOneAndDelete({Profile_ID: Profile_ID}).then(
            res.status(200).json({message:"successfully delete"})
        ).catch(err => {
            console.log(err)
        })

        Assign.findOneAndUpdate({idTag : idTag}, {Assigned_Pet : null}, {new : true})
    } catch(error) {

    }
}

module.exports = deletePet;