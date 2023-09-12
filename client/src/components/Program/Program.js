import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import { getPrograms, deleteProgram } from '../../redux/actions/programs';
import CreateProgram from './CreateProgram';
import Exercise from '../Exercise/Exercise';

const Program = () => {

  const dispatch = useDispatch();

  const userId = useSelector(state => state.userId);
  const programs = useSelector(state => state.programs);

  useEffect(() => {
    if (userId) {
      dispatch(getPrograms(userId));
    }
  }, []);

  const programList = programs.map(program => {
    return (
      <TableRow key={program._id}>
        <TableCell component="th" scope="row">
          <Link href={`/program/${program._id}`}>{program.name}</Link>
        </TableCell>
        <TableCell align="right">{program.numOfWeeks}</TableCell>
        <TableCell align="right">{program.created}</TableCell>
        <TableCell align="right">{program.updated}</TableCell>
        <TableCell align="right"><Button color="secondary" onClick={() => {dispatch(deleteProgram(program._id))}}>Delete</Button></TableCell>
      </TableRow>
    )
  });

  return (
    <div>
      <CreateProgram/>
      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Program Name</TableCell>
            <TableCell align="right">Number of Weeks</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Updated</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programList}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Program;