const Admin = require('../Models/child');
const bcrypt = require('bcryptjs');
const { loginValidation, registerValidation } = require('../validation');

const signUpAmin = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const usernameExists = await Admin.findOne({ username: req.body.email });
    if (usernameExists) {
        return res.status(400).send('Username already exists in the Database');
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10),
    );

    const admin = new Admin({
        name: req.body.name,
        username: username.body.email,
        organization: organization.body.email,
        designation: designation.body.email,
        password: hashedPassword,
    });

    try {
        const savedAdmin = await admin.save();
        res.status(200).send('Admin Registered Successfully');
    } catch (err) {
        res.statusCode(400).send(err);
    }
};

const loginAdmin = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const admin = await Admin.findOne({ username: req.body.email });
    if (!admin) {
        return res.status(400).send('Username does not Exist');
    }
    const validPass = await bcrypt.compare(req.body.password, admin.password);
    if (!validPass) {
        return res.status(400).send('Invalid Password');
    }
    res.status(200).send(admin);
};

module.exports = { signUpAmin, loginAdmin };
