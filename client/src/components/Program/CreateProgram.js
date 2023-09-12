import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TextField, Select, MenuItem, InputLabel, FormLabel, Button, makeStyles, Grid, Typography } from '@material-ui/core';
import { createProgram, updateProgram } from '../../redux/actions/programs';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
}));

const CreateProgram = ({setCurrentId, currentId}) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const weeks = [];
  for (let i = 0; i <= 25; i++) {
    weeks.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
  }

  const initialState = {name: '', numOfWeeks: ''};

  const [programForm, setProgramForm] = useState(initialState);

  const program = useSelector(state => currentId ? state.programs.find((p) => p._id === currentId) : null);

  const user = JSON.parse(localStorage.getItem('profile'));

  const handleChange = (e) => {
    setProgramForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const clearFields = () => {
    setProgramForm(initialState);
    setCurrentId(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (programForm.name.length && programForm.numOfWeeks > 0) {
      if (program) {
        dispatch(updateProgram(currentId, {...programForm, creatorName: user?.result?.name}));
      } else {
        dispatch(createProgram({...programForm, creatorName: user?.result?.name}));
      }
      clearFields();
    } else {
      alert('Please complete all form fields');
    }
  };

  useEffect(() => {
    if (program) {
      setProgramForm(program);
    }
  }, [currentId])

  return (
    <Grid container alignItems="center" justifyContent="center" style={{paddingBottom: "20px"}}>
      <div className={classes.root}>
      <TextField className={classes.formField} name="name" variant="outlined" label="Program Name" onChange={handleChange} value={programForm.name}/>
      <Select className={classes.formField} name="numOfWeeks" defaultValue="" variant="outlined" onChange={handleChange} value={programForm.numOfWeeks}>
        {weeks}
      </Select>
      <Button className={classes.formField} variant="outlined" onClick={handleSubmit} color="primary">{program ? 'Update Program' : 'Create Program'}</Button>
      <Button variant="outlined" onClick={clearFields} color="secondary">Clear</Button>
      </div>
    </Grid>
  )
}

export default CreateProgram;