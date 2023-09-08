const express = require('express');
const router = express.Router();

const User = require('../controllers/User');

router
  .post('/login', User.login)
  .post('/create', User.createUser)

module.exports = router;