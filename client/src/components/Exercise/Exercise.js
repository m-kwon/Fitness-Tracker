import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import ExerciseItem from './ExerciseItem';

const Exercise = ({match}) => {

  const programId = match.params.programId;

  const dispatch = useDispatch();

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/exercise/${programId}`)
      .then(exercises => setExercises(exercises.data))
      .catch(err => console.log(err));
  }, []);

  const exerciseList = exercises.map((exercise, index) => (<ExerciseItem key={index} exercise={exercise}/>))

  return (
    <div>
      Exercise
      {exerciseList}
    </div>
  )
}

export default Exercise;