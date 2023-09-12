require('dotenv').config();
const mongoose = require('mongoose');
const mongoUri = process.env.MONGOURI || 'mongodb://localhost:27017/fitlog';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`Connected to ${mongoUri}`))
  .catch(err => console.log(err));

module.exports = db;