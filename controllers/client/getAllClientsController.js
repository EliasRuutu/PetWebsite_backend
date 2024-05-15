const Client = require("../../models/client");

const getAllClients = async function (req, res) {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = getAllClients
