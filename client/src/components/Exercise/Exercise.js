import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import AddExercise from './AddExercise';
import { getExercises, deleteExercise } from '../../redux/actions/exercises';

const Exercise = ({match}) => {

  const programId = match.params.programId;

  const dispatch = useDispatch();

  const exercises = useSelector(state => state.exercises);

  useEffect(() => {
    dispatch(getExercises(programId));
  }, []);

  const exerciseList = exercises.map(exercise => {
    return (
      <TableRow key={exercise._id}>
        <TableCell component="th" scope="row">{exercise.name}</TableCell>
        <TableCell align="right">{exercise.weight}</TableCell>
        <TableCell align="right">{exercise.sets}</TableCell>
        <TableCell align="right">{exercise.reps}</TableCell>
        <TableCell align="right"><Button color="secondary" onClick={() => {dispatch(deleteExercise(exercise._id))}}>Delete</Button></TableCell>
      </TableRow>
    )
  });

  return (
    <div>
      <AddExercise programId={programId} getExercises={getExercises}/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exercise Name</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Sets</TableCell>
              <TableCell align="right">Reps</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exerciseList}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Exercise;
