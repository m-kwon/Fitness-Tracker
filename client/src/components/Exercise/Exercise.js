import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

import AddExercise from './AddExercise';
import ExerciseList from './ExerciseList';
import { getExercises } from '../../redux/actions/exercises';
import { getProgramsById } from '../../redux/actions/programs';

const Exercise = ({match}) => {

  const programId = match.params.programId;

  const dispatch = useDispatch();

  const exercises = useSelector(state => state.exercises);

  const user = JSON.parse(localStorage.getItem('profile'));
  const id = user?.result.googleId || user?.result._id;

  const program = useSelector(state => state.programs)[0];

  const [exerciseId, setExerciseId] = useState(null);

  const weekdays = {
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
    '7': 'Sunday',
  };

  const date = new Date();
  const day = weekdays[date.getDay().toString()];

  const activeExercises = exercises.filter(exercise => exercise.days.indexOf(day) !== -1);
  const unactiveExercises = exercises.filter(exercise => exercise.days.indexOf(day) === -1);

  useEffect(() => {
    dispatch(getProgramsById(programId));
    dispatch(getExercises(programId));
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" style={{padding: "50px"}}>{program?.name} by {program?.creatorName}</Typography>

      {(user?.result?.googleId === program?.creator || user?.result?._id === program?.creator) && (
        <>
          <AddExercise programId={programId} getExercises={getExercises} exerciseId={exerciseId} setExerciseId={setExerciseId}/>
        </>
      )}
      <div style={{padding: "50px"}}>
        <ExerciseList name="Today's Exercises" exercises={activeExercises} exerciseId={exerciseId} setExerciseId={setExerciseId}/>
      </div>
      <div style={{padding: "50px"}}>
        <ExerciseList name="Rest of the Week" exercises={unactiveExercises} exerciseId={exerciseId} setExerciseId={setExerciseId}/>
      </div>
    </div>
  )
}

export default Exercise;