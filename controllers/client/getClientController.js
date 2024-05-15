const Client = require("../../models/client");

const getClient = async function (req, res) {
    console.log("here is getClient")
    try {
        const profileID = req.params.profileID;
        const client = await Client.findOne({Profile_ID : profileID});
        if(client) {
            res.status(200).json(client);
        } else {
            res.error(404).json({message: "Not found"})
            console.log("not found")
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = getClient
