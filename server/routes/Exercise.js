const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Exercise = require('../controllers/Exercise');

router
  .get('/:programId', Exercise.getExercise)
  .post('/create', auth, Exercise.postExercise)
  .delete('/:exerciseId', auth, Exercise.deleteExercise)
  .patch('/:exerciseId', auth, Exercise.updateExercise)

module.exports = router;