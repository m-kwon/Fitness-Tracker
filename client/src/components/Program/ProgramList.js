import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { deleteProgram } from '../../redux/actions/programs';

const ProgramList = ({setCurrentId, currentId, programs}) => {

  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();

  const programList = programs.map(program => {
    let disable = (user?.result?.googleId !== program?.creator && user?.result?._id !== program?.creator);
    return (
      <TableRow key={program._id}>
        <TableCell component="th" scope="row">
          <Link href={`/program/${program._id}`}>{program.name}</Link>
        </TableCell>
        <TableCell align="right">{program.numOfWeeks}</TableCell>
        <TableCell align="right">{program.creatorName}</TableCell>
        <TableCell align="right">{moment(program.created).fromNow()}</TableCell>
        <TableCell align="right">
          <Button color="primary" onClick={() => {setCurrentId(program._id)}} disabled={disable}><EditIcon/></Button>
          <Button color="secondary" onClick={() => {dispatch(deleteProgram(program._id))}} disabled={disable}><DeleteIcon/></Button>
        </TableCell>
      </TableRow>
    )
  });

  return (
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Program Name</TableCell>
          <TableCell align="right">Number of Weeks</TableCell>
          <TableCell align="right">Author</TableCell>
          <TableCell align="right">Created</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {programList}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ProgramList;