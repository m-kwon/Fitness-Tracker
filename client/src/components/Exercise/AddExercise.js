import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { TextField, InputLabel, FormLabel, Button, makeStyles, Checkbox, FormGroup, FormControlLabel, FormControl, Grid } from '@material-ui/core';

import { createExercise, updateExercise } from '../../redux/actions/exercises';

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

const AddExercise = ({getExercises, programId, exerciseId, setExerciseId}) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const exercise = useSelector(state => exerciseId ? state.exercises.find((p) => p._id === exerciseId) : null);

  useEffect(() => {
    if (exercise) {
      setExerciseForm(exercise);
    };
  }, [exerciseId]);

  const initialState = {
    name: '',
    weight: '',
    sets: '',
    reps: '',
    days: []
  };

  const [exerciseForm, setExerciseForm] = useState(initialState);

  const handleChange = (e) => {
    setExerciseForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleDayChange = (e) => {
    if (e.target.checked) {
      setExerciseForm(prevState => ({
        ...prevState,
        days: [...prevState.days, e.target.value]
      }))
    } else {
      let filtered = exerciseForm.days.filter(day => day !== e.target.value);
      setExerciseForm(prevState => ({...prevState, days: filtered}));
    }
  }

  const clearFields = () => {
    setExerciseForm(initialState);
    setExerciseId(null);
  }

  const handleSubmit = (e) => {
    if (exerciseForm.name && exerciseForm.weight && exerciseForm.sets && exerciseForm.reps && exerciseForm.days.length) {
      if (exerciseId) {
        dispatch(updateExercise(exerciseId, exerciseForm))
      } else {
        dispatch(createExercise({...exerciseForm, programId}));
      }
      clearFields();
    } else {
      alert('Invalid submission. Please fill in all blank fields.')
    }
  }

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item style={{paddingBottom: "20px"}}>
        <TextField className={classes.formField} name="name" variant="outlined" label="Exercise Name" onChange={handleChange} value={exerciseForm.name}/>
        <TextField className={classes.formField} name="weight" variant="outlined" label="Weight" type="number" onChange={handleChange} value={exerciseForm.weight}/>
        <TextField className={classes.formField} name="sets" variant="outlined" label="Sets" type="number" onChange={handleChange} value={exerciseForm.sets}/>
        <TextField className={classes.formField} name="reps" variant="outlined" label="Reps" type="number" onChange={handleChange} value={exerciseForm.reps}/>
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel value="Monday" control={<Checkbox color="primary" />} label="Monday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Monday") !== -1}/>
            <FormControlLabel value="Tuesday" control={<Checkbox color="primary" />} label="Tuesday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Tuesday") !== -1}/>
            <FormControlLabel value="Wednesday" control={<Checkbox color="primary" />} label="Wednesday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Wednesday") !== -1}/>
            <FormControlLabel value="Thursday" control={<Checkbox color="primary" />} label="Thursday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Thursday") !== -1}/>
            <FormControlLabel value="Friday" control={<Checkbox color="primary" />} label="Friday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Friday") !== -1}/>
            <FormControlLabel value="Saturday" control={<Checkbox color="primary" />} label="Saturday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Saturday") !== -1}/>
            <FormControlLabel value="Sunday" control={<Checkbox color="primary" />} label="Sunday" labelPlacement="top" onChange={handleDayChange} checked={exerciseForm.days.indexOf("Sunday") !== -1}/>
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Button className={classes.formField} variant="outlined" color="primary" onClick={handleSubmit}>{exercise ? 'Update Exercise' : 'Add Exercise'}</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={clearFields} color="secondary">Clear</Button>
      </Grid>
    </Grid>
  )
}

export default AddExercise;