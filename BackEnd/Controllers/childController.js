const Child = require('../Models/child');

const getChildren = async (req, res) => {
    Child.find()
        .then((children) => {
            res.json(children);
            console.log('Total children: ', children.length);
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const postChild = async (req, res) => {
    const {
        name,
        gender,
        dob,
        father_name,
        mother_name,
        state,
        district_id,
        photo,
    } = req.body;
    if (name && gender && district_id) {
        const newChild = new Child({
            name: name,
            gender: gender,
            dob: dob || '',
            father_name: father_name || '',
            mother_name: mother_name || '',
            state: state,
            district_id: district_id,
            photo:
                photo ||
                'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
        });

        newChild
            .save()
            .then(() =>
                res.json({ message: `${name} Added Successfully to Database` }),
            )
            .catch((err) => {
                res.status(400).json({ message: `Error: ${err}` });
            });
    } else {
        res.status(400).json({
            Error: `Fill minimum required details ie. name, gender, state, district`,
        });
    }
};

const getChild = async (req, res) => {
    const name = req.params.name;
    let regex = new RegExp(name, 'i');
    Child.find({ name: regex })
        .exec()
        .then((child) => {
            res.json(child);
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

module.exports = { getChildren, postChild, getChild };
