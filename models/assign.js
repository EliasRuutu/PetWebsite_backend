const mongoose = require("mongoose");

const assignSchema = new mongoose.Schema({
    Tag_ID: {
        type: String,
    },

    Tag_NO: {
        type: Number,
    },
    
    Assigned_Client: {
        type: String,
    },

    Assigned_Pet: {
        type: String
    },

    IsAssigned: {
        type: Boolean,
        default: false
    }
})

const Assign = mongoose.model('assigns', assignSchema)

module.exports = Assign;