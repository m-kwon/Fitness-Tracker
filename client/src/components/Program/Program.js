import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

import { getPrograms } from '../../redux/actions/';
import CreateProgram from './CreateProgram';
import Exercise from '../Exercise/Exercise';

const Program = () => {

  const dispatch = useDispatch();

  const userId = useSelector(state => state.userId);
  const programs = useSelector(state => state.programs);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/program/user/${userId}`)
      .then(programs => dispatch(getPrograms(programs.data)))
      .catch(err => console.log(err));
  }, []);

  const programList = programs.map(program => {
    return (
      <TableRow key={program._id}>
        <TableCell component="th" scope="row">
          <Link to={`/program/${program._id}`}>{program.name}</Link>
        </TableCell>
        <TableCell align="right">{program.numOfWeeks}</TableCell>
        <TableCell align="right">{program.created}</TableCell>
        <TableCell align="right">{program.updated}</TableCell>
        <TableCell align="right">{program.userId}</TableCell>
        <TableCell align="right">{program._id}</TableCell>
      </TableRow>
    )
  });

  return (
    <div>
      <CreateProgram userId={userId}/>
      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Program Name</TableCell>
            <TableCell align="right">Number of Weeks</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Updated</TableCell>
            <TableCell align="right">User ID</TableCell>
            <TableCell align="right">Program ID</TableCell>
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