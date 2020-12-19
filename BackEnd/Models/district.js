const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtSchema = new Schema(
    {
        state_name: {
            type: String,
            required: true,
            minLength: 1,
        },
        district_name: {
            type: String,
            required: true,
            minLength: 3,
        },
    },
    {
        versionKey: false,
    },
);

module.exports = mongoose.model('District', districtSchema);
