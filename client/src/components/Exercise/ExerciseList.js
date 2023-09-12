import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { deleteExercise } from '../../redux/actions/exercises';

const ExerciseList = ({exercises, name, exerciseId, setExerciseId}) => {

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));
  const id = user?.result.googleId || user?.result._id;

  const program = useSelector(state => state.programs)[0];

  const disable = (user?.result?.googleId !== program?.creator) && (user?.result?._id !== program?.creator);

  const exerciseList = exercises.map(exercise => {

    return (
      <TableRow key={exercise._id}>
        <TableCell component="th" scope="row">{exercise.name}</TableCell>
        <TableCell align="right">{exercise.weight}</TableCell>
        <TableCell align="right">{exercise.sets}</TableCell>
        <TableCell align="right">{exercise.reps}</TableCell>
        <TableCell align="right">{exercise.days.map((day) => day.slice(0, 3)).join(', ')}</TableCell>
        <TableCell align="right">
          <Button color="primary" onClick={() => {setExerciseId(exercise._id)}} disabled={disable}><EditIcon/></Button>
          <Button color="secondary" onClick={() => {dispatch(deleteExercise(exercise._id))}} disabled={disable}><DeleteIcon/></Button>
        </TableCell>
      </TableRow>
    )
  });

  return (
    <TableContainer>
    <Typography variant="h4" align="center" style={{padding: "20px"}}>{name}</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Exercise Name</TableCell>
          <TableCell align="right">Weight</TableCell>
          <TableCell align="right">Sets</TableCell>
          <TableCell align="right">Reps</TableCell>
          <TableCell align="right">Days</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exerciseList}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ExerciseList;