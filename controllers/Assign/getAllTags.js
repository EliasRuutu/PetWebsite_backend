const Assign = require("../../models/assign");

const getAllTags = async function (req, res) {
    try {
        const allTags = await Assign.find();
        if(allTags) {
            res.status(200).json(allTags);
        } else {
            res.status(404).json("not found");
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = getAllTags
