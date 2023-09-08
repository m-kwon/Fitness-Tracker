import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { TextField, Select, MenuItem, InputLabel, FormLabel, Button } from '@material-ui/core';

const CreateProgram = ({userId}) => {

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
      axios.post('http://localhost:3000/program/create', {...programForm, userId})
        .then(success => console.log(success.data))
        .catch(err => console.log(err))
    }
  };

  return (
    <div className="create-program">
      <form>
        <InputLabel>Program Name</InputLabel>
        <TextField name="name" variant="outlined" label="Program Name" onChange={handleChange}/>
        <InputLabel>Number of Weeks</InputLabel>
        <Select name="numOfWeeks" defaultValue="" variant="outlined" onChange={handleChange}>
          {weeks}
        </Select>
        <Button variant="outlined" onClick={handleSubmit}>Create Program</Button>
      </form>
    </div>
  )
}

export default CreateProgram;