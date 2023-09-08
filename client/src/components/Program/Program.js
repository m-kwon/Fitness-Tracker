import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { getPrograms } from '../../redux/actions/';
import CreateProgram from './CreateProgram';
import ProgramItem from './ProgramItem';

const Program = () => {

  const dispatch = useDispatch();

  const userId = useSelector(state => state.userId);
  const programs = useSelector(state => state.programs);

  useEffect(() => {
    axios.get(`http://localhost:3000/program/user/${userId}`)
      .then(programs => dispatch(getPrograms(programs.data)))
      .catch(err => console.log(err));
  }, []);

  const programList = programs.map(program => (<ProgramItem program={program}/>));

  return (
    <div>
      <CreateProgram userId={userId}/>
      {programList}
    </div>
  )
}

export default Program;