const db  = require('./index.js');
const Program = require('./Program.js');
const Exercise = require('./Exercise.js');
const mongoose = require('mongoose');

const programs = [
  {"name": "Program 1", "numOfWeeks": 6, "creator": "115303898040378773154"},
  {"name": "Program 2", "numOfWeeks": 6, "creator": "115303898040378773154"},
  {"name": "Program 3", "numOfWeeks": 6, "creator": "115303898040378773154"},
  {"name": "Program 4", "numOfWeeks": 6, "creator": "115303898040378773154"},
  {"name": "Program 5", "numOfWeeks": 6, "creator": "115303898040378773154"},
  {"name": "Program 1", "numOfWeeks": 6, "creator": "6126a36bd973462303961760"},
  {"name": "Program 2", "numOfWeeks": 6, "creator": "6126a36bd973462303961760"},
  {"name": "Program 3", "numOfWeeks": 6, "creator": "6126a36bd973462303961760"},
];

const exercises = [
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a440968f6c26881c670d"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "6126a440968f6c26881c670d"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a440968f6c26881c670d"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "6126a440968f6c26881c670d"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a445968f6c26881c670f"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "6126a445968f6c26881c670f"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a445968f6c26881c670f"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "6126a445968f6c26881c670f"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a44a968f6c26881c6711"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "6126a44a968f6c26881c6711"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a44a968f6c26881c6711"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "6126a44a968f6c26881c6711"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a469968f6c26881c6715"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "6126a469968f6c26881c6715"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a469968f6c26881c6715"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "6126a469968f6c26881c6715"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a46e968f6c26881c6717"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "6126a46e968f6c26881c6717"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a46e968f6c26881c6717"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "6126a46e968f6c26881c6717"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a474968f6c26881c6719"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "6126a474968f6c26881c6719"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "6126a474968f6c26881c6719"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "6126a474968f6c26881c6719"},
]

// const insertSampleData = function() {
//   Program.create(programs)
//     .then(() => mongoose.connection.close());
// };

// insertSampleData();

const insertExercises = function() {
  Exercise.create(exercises)
    .then(() => mongoose.connection.close());
};

insertExercises();