const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Routes = require('./Routes/routes');

dotenv.config();

const app = express();

app.use(cors());

mongoose.connect(
    process.env.MONGODB_URL,
    {
        useUnifiedTopology: 'true',
        useNewUrlParser: 'true',
        useCreateIndex: 'true',
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to database');
        }
    },
);

app.use('/api', Routes);

app.listen(5000, () => {
    console.log('Server is live on port 5000');
});
