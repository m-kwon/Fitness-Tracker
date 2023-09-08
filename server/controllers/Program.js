const Program = require('../db/Program');

const getProgram = (req, res) => {
  const { programId } = req.params;
  Program.find({_id: programId})
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const getProgramByUser = (req, res) => {
  const { userId } = req.params;
  Program.find({userId})
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const postProgram = (req, res) => {
  Program.create(req.body)
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  getProgram,
  getProgramByUser,
  postProgram
};