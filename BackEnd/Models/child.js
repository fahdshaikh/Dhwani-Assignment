const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
        },
        gender: {
            type: String,
            required: true,
            minLength: 4,
        },
        dob: {
            type: String,
        },
        father_name: {
            type: String,
        },
        mother_name: {
            type: String,
        },
        state: {
            type: String,
            required: true,
            minLength: 3,
        },
        district_id: {
            type: String,
            required: true,
            minLength: 1,
        },
        photo: {
            type: String,
        },
    },
    {
        versionKey: false,
    },
);

module.exports = mongoose.model('Child', childSchema);
