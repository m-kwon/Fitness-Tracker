const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema;

const exerciseSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  reps: Number,
  sets: Number,
  days: [String],
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  programId: {
    type: Schema.Types.ObjectId,
    ref: 'Program',
    required: true
  },
  creator: String,
  creatorName: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;