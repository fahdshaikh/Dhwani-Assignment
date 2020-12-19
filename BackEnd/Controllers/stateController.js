const State = require('../Models/state');

const getState = async (req, res) => {
    State.find()
        .then((states) => {
            res.json(states);
            console.log('Total States: ', states.length);
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const postState = async (req, res) => {
    const { state } = req.body;
    const newState = new State({
        state_name: state,
    });

    newState
        .save()
        .then(() =>
            res.json({ message: `${state} Added Successfully to Database` }),
        )
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

module.exports = { getState, postState };
