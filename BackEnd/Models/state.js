const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema(
    {
        state_name: {
            type: String,
            required: true,
            minLength: 3,
        },
    },
    {
        versionKey: false,
    },
);

module.exports = mongoose.model('State', stateSchema);
