const express = require('express');
const bodyParser = require('body-parser');
const { signUpAmin, loginAdmin } = require('../Controllers/adminController');
const {
    getChildren,
    postChild,
    getChild,
} = require('../Controllers/childController');
const {
    getDistrict,
    postDistrict,
} = require('../Controllers/districtController');
const { getState, postState } = require('../Controllers/stateController');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.post('/login', loginAdmin);
router.post('/signup', signUpAmin);

router.get('/children', getChildren);
router.post('/postChild', postChild);
router.post('/child/:name', getChild);

router.get('/districts', getDistrict);
router.post('/newDistrict', postDistrict);

router.get('/states', getState);
router.post('/newState', postState);

module.exports = router;
