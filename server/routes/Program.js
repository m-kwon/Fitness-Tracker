const express = require('express');
const router = express.Router();

const Program = require('../controllers/Program');

router
  .get('/:programId', Program.getProgram)
  .get('/user/:userId', Program.getProgramByUser)
  .post('/create', Program.postProgram);

module.exports = router;