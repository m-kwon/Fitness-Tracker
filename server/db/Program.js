const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema;

const programSchema = new mongoose.Schema({
  name: String,
  numOfWeeks: Number,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;