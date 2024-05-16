const Pet = require("../../models/pet");
const Assign = require("../../models/assign")

const deletePet = async (req, res) => {
    const Profile_ID = req.params.id;
    const idTag = req.params.idTag;
    console.log("Profile_ID", Profile_ID, "idTag", idTag);
    try {
        await Pet.findOneAndDelete({Profile_ID: Profile_ID});
        await Assign.findOneAndUpdate({Tag_ID: idTag}, {Assigned_Pet: null}, {new: true, upsert: false});

        res.status(200).json({message: "successfully deleted"});
    } catch(error) {

    }
}

module.exports = deletePet;