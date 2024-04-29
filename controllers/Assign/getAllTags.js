const Assign = require("../../models/assign");

const getAllTags = async function (req, res) {
    try {
        const allTags = await Assign.find();
        res.status(200).json(allTags);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = getAllTags
