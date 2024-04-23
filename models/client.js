const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    phone: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    address: {
        type: String,
    },
    avatarName: {
        type: String,
    }
    salt: String // This is not typically necessary because bcrypt stores the salt with the hash
})

const clientSchema = new mongoose.Schema({
    Profile_ID : {
        type: String,
        required: true,
        unique: true
    },
    PersonalInfo: {
        type: personSchema,
        // required: true
    },
});

// clientSchema.pre('save', async function(next) {
//     const client = this;
//     if (!client.isModified('PersonalInfo.password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(client.PersonalInfo.password, salt);
//     client.PersonalInfo.password = hash;
//     client.PersonalInfo.salt = salt;
//     next();
// });

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;