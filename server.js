const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

mongoose.connect(db, { useNewUrlParser: true }).then( () => console.log('MongoDB connected')).catch( err => console.log(err));

app.use('/api/items', items);

const port = 80;

app.listen(port, () => console.log(`Server started on port ${port}`))