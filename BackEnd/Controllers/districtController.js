const District = require('../models/district');

const getDistrict = (req, res) => {
    District.find()
        .then((districts) => res.json(districts))
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const postDistrict = (req, res) => {
    const { state, district } = req.body;
    const newDistrict = new District({
        state_name: state,
        district_name: district,
    });

    newDistrict
        .save()
        .then(() => res.json('District Added Successfully to Database'))
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

module.exports = { getDistrict, postDistrict };
