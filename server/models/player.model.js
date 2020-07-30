const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Name must be at least 2 characters.'
        ],
        minlength: [
            2,
            'Name must be at least 2 characters.'
        ]
    },
    position: {
        type: String
    }
}, {timestamps: true});
module.exports.Player = mongoose.model('Player', PlayerSchema);