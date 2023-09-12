const Exercise = require('../db/Exercise');

const getExercise = (req, res) => {
  const { programId } = req.params;
  Exercise.find({programId})
    .then(exercises => res.status(200).send(exercises))
    .catch(err => res.status(400).send(err));
};

const postExercise = (req, res) => {
  Exercise.create(req.body)
    .then(exercises => res.status(200).send(exercises))
    .catch(err => res.status(400).send(err));
};

const deleteExercise = (req, res) => {
  const { exerciseId } = req.params;
  Exercise.deleteOne({_id: exerciseId})
    .then(exercise => res.status(200).send(exercise))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  getExercise,
  postExercise,
  deleteExercise
};