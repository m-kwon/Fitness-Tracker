const Exercise = require('../db/Exercise');

const getExercise = (req, res) => {
  const { programId } = req.params;
  Exercise.find({programId})
    .then(exercises => res.status(200).send(exercises))
    .catch(err => res.status(400).send(err));
};

const postExercise = async (req, res) => {
  Exercise.create(req.body)
    .then(exercises => res.status(200).send(exercises))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  getExercise,
  postExercise
};