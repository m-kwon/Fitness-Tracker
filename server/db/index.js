const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/fitlog';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = db;