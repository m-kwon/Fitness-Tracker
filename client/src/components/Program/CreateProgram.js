import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { TextField, Select, MenuItem, InputLabel, FormLabel, Button, makeStyles } from '@material-ui/core';

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

const CreateProgram = ({userId}) => {

  const classes = useStyles();

  const weeks = [];
  for (let i = 0; i <= 25; i++) {
    weeks.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
  }

  const [programForm, setProgramForm] = useState({name: '', numOfWeeks: 0});

  const handleChange = (e) => {
    setProgramForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (programForm.name.length && programForm.numOfWeeks > 0) {
      axios.post('http://localhost:3000/api/program/create', {...programForm, userId})
        .then(success => console.log(success.data))
        .catch(err => console.log(err))
    }
  };

  return (
    <form className={classes.root}>
      <TextField className={classes.formField} name="name" variant="outlined" label="Program Name" onChange={handleChange}/>
      <Select className={classes.formField} name="numOfWeeks" defaultValue="" variant="outlined" onChange={handleChange}>
        {weeks}
      </Select>
      <Button className={classes.formField} variant="outlined" onClick={handleSubmit}>Create Program</Button>
    </form>
  )
}

export default CreateProgram;