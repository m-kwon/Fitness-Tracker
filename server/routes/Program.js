const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Program = require('../controllers/Program');

router
  .get('/id/:programId', Program.getProgram)
  .get('/all', Program.getAllPrograms)
  .get('/user/:userId', Program.getProgramByUser)
  .patch('/:programId', auth, Program.updateProgram)
  .post('/create', auth, Program.postProgram)
  .delete('/:programId', auth, Program.deleteProgram);

module.exports = router;