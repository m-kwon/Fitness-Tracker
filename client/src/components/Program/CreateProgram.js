import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TextField, Select, MenuItem, InputLabel, FormLabel, Button, makeStyles } from '@material-ui/core';
import { createProgram } from '../../redux/actions/programs';

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

const CreateProgram = () => {

  const classes = useStyles();

  const userId = useSelector(style => style.userId);

  const dispatch = useDispatch();

  const weeks = [];
  for (let i = 0; i <= 25; i++) {
    weeks.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
  }

  const initialState = {name: '', numOfWeeks: ''};

  const [programForm, setProgramForm] = useState(initialState);

  const handleChange = (e) => {
    setProgramForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (programForm.name.length && programForm.numOfWeeks > 0) {
      dispatch(createProgram({...programForm, userId}));
      setProgramForm(initialState);
    }
  };

  return (
    <form className={classes.root}>
      <TextField className={classes.formField} name="name" variant="outlined" label="Program Name" onChange={handleChange} value={programForm.name}/>
      <Select className={classes.formField} name="numOfWeeks" defaultValue="" variant="outlined" onChange={handleChange} value={programForm.numOfWeeks}>
        {weeks}
      </Select>
      <Button className={classes.formField} variant="outlined" onClick={handleSubmit}>Create Program</Button>
    </form>
  )
}

export default CreateProgram;