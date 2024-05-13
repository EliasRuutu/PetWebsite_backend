const Client = require("../../models/client");

const getClient = async function (req, res) {
    try {
        const profileID = req.params.profileID;
        const client = await Client.findOne({Profile_ID : profileID});
        console.log("✅👧✅", client)
        res.status(200).json(client);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = getClient
