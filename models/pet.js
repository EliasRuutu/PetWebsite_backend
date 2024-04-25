const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// const personSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         // required: true
//     },
//     lastName: {
//         type: String,
//         // required: true
//     },
//     email: {
//         type: String,
//         // required: true
//     },
//     phone: {
//         type: String,
//         // required: true
//     },
//     password: {
//         type: String,
//         // required: true
//     },
//     address: {
//         type: String,
//     },
//     avatarName: {
//         type: String,
//     },
//     salt: String // This is not typically necessary because bcrypt stores the salt with the hash
// })

const petSchema = new mongoose.Schema({
    Profile_ID: {
        type: String,
        required: true
    },

    name: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    birthday: {
        type: String,
        // required: true
    },
    microchip: {
        type: String,
        // required: true
    },
    specialDCondition: {
        type: String,
        // required: true
    },
    petAvatar: {
        type: String,
    },
    idTag: {
        type: String,
    },
    path: {
        type: String,
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

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;