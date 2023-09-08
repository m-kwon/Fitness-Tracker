const express = require('express');
const router = express.Router();

const Exercise = require('../controllers/Exercise');

router
  .get('/:programId', Exercise.getExercise)
  .post('/create', Exercise.postExercise);

module.exports = router;