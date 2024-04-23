const Client = require('../models/client');
const bcrypt = require('bcrypt');

const checkExistingClient = async function (Profile_ID) {
    return await Client.findOne({ Profile_ID });
} 

const registerClient = async function(req, res) {
    const { Profile_ID, PersonalInfo } = req.body;

    const isAlreadyRegistered = await checkExistingClient(Profile_ID)
    
    if(isAlreadyRegistered) {
        console.log('Client already exists:', isAlreadyRegistered);
        res.json("Client already exist");
    } else {
        const newClient = new Client({
            Profile_ID: Profile_ID,
            PersonalInfo: PersonalInfo
        })

        newClient.save().then((user) => {
            console.log('Registered client successfully: client =>', newClient);
            res.json("Register success!");
        })
        .catch(error => {
            console.error('Regisger Error : ', error);
            res.json("Register failed!");
        })
    }
}

module.exports = registerClient;