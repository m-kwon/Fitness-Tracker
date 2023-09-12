const Exercise = require('../db/Exercise');
const mongoose = require('mongoose');

const getExercise = (req, res) => {
  const { programId } = req.params;
  Exercise.find({programId})
    .then(exercises => res.status(200).send(exercises))
    .catch(err => res.status(400).send(err));
};

const postExercise = (req, res) => {
  const exercise = req.body;
  Exercise.create({...exercise, creator: req.userId})
    .then(exercises => res.status(200).send(exercises))
    .catch(err => res.status(400).send(err));
};

const deleteExercise = (req, res) => {
  const { exerciseId } = req.params;
  Exercise.deleteOne({_id: exerciseId})
    .then(exercise => res.status(200).send(exercise))
    .catch(err => res.status(400).send(err));
};

const updateExercise = (req, res) => {
  const { exerciseId } = req.params;
  const exercise = req.body;
  if (!mongoose.Types.ObjectId.isValid(exerciseId)) {
    return res.status(400).send('No program found.');
  }
  Exercise.findByIdAndUpdate(exerciseId, {...exercise, _id: exerciseId}, {new: true})
    .then(exercise => res.status(200).send(exercise))
    .catch(err => res.status(400).send(err));
}

module.exports = {
  getExercise,
  postExercise,
  deleteExercise,
  updateExercise
};