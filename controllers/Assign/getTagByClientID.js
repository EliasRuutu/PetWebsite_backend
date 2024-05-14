const Assign = require("../../models/assign")

const getTagByClientID = async function(req, res) {
    try {
        console.log("here")
        const assignedClientID = req.params.clientID;
        const idTag = req.params.idTag;

        const result = await Assign.findOne({ Assigned_Client: assignedClientID, Tag_ID: idTag });
        console.log("result", result);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json({ message: "network error" });
    }
}

module.exports = getTagByClientID;