const Client = require("../../models/client");

const deleteClient = async function(req, res) {
    const deleteID = req.params.id;
    try {
        Client.findOneAndDelete({Profile_ID: deleteID}).then(
            res.status(200).json({message:"successfully delete"})
        ).catch(err=> {
            
        })
    } catch(error){
        console.log(error)
    }
}

module.exports = deleteClient;