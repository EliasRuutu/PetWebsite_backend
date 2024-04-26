const mongoose = require("mongoose");

const assignSchema = new mongoose.Schema({
    Tag_ID: {
        type: String,
    },

    Assigned_Client: {
        type: String,
    },

    Assigned_Pet: {
        type: String
    }
})

const Assign = mongoose.model('assigns', assignSchema)

module.exports = Assign;