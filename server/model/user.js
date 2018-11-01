//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//-----------------------------------------------------------------------------//
// Define a schema
//-----------------------------------------------------------------------------//

const schema = new Schema({
    username: String,
    password: String,
    salt:     String,
    email: {
        type:   String, 
        unique: true,
        sparse: true,
        trim:   true
    },
    coin: {
        type:    Number, 
        default: 0
    },
    storeCoin: {
        type:    Number, 
        default: 0
    },
    monsters: {
        type: Array,
        default: []
    },
    rank: {
        type:    Number, 
        default: 0
    },
    gameDifficulty: {
        type:    Number, 
        default: 0
    },
    updated: { 
        type:    Date, 
        default: Date.now 
    },
    created: Date
});

//-----------------------------------------------------------------------------//
// Compile our model
//-----------------------------------------------------------------------------//

const Model = mongoose.model('user', schema);

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

module.exports = Model;

//-----------------------------------------------------------------------------//