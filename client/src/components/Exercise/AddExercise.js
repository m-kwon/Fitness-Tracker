import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { TextField, Select, MenuItem, InputLabel, FormLabel, Button, makeStyles } from '@material-ui/core';
import { createExercise } from '../../redux/actions/exercises';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const AddExercise = ({getExercises, programId}) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const initialState = {
    name: '',
    weight: '',
    sets: '',
    reps: ''
  }

  const [exerciseForm, setExerciseForm] = useState(initialState);

  const handleChange = (e) => {
    setExerciseForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExercise({...exerciseForm, programId}));
    setExerciseForm(initialState);
  }

  return (
    <form className={classes.root}>
      <TextField className={classes.formField} name="name" variant="outlined" label="Exercise Name" onChange={handleChange} value={exerciseForm.name}/>
      <TextField className={classes.formField} name="weight" variant="outlined" label="Weight" type="number" onChange={handleChange} value={exerciseForm.weight}/>
      <TextField className={classes.formField} name="sets" variant="outlined" label="Sets" type="number" onChange={handleChange} value={exerciseForm.sets}/>
      <TextField className={classes.formField} name="reps" variant="outlined" label="Reps" type="number" onChange={handleChange} value={exerciseForm.reps}/>
      <Button className={classes.formField} variant="outlined" onClick={handleSubmit}>Add Exercise</Button>
    </form>
  )
}

export default AddExercise;