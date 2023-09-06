import React from 'react';
import Navbar from './Navbar/Navbar';
import Exercise from './Exercise/Exercise';
import AddExercise from './Exercise/AddExercise';
import ExerciseList from './Exercise/ExerciseList';
import Program from './Program/Program';
import AddProgram from './Program/AddProgram';
import ProgramList from './Program/ProgramList';

const App = () => {
  return (
    <div>
      App
      <Navbar />
      <Program />
      <AddProgram />
      <ProgramList />
      <Exercise />
      <AddExercise />
      <ExerciseList />
    </div>
  )
}

export default App;