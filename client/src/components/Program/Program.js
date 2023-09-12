import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Typography, Paper } from '@material-ui/core';

import { getProgramsByUser, getPrograms } from '../../redux/actions/programs';
import CreateProgram from './CreateProgram';
import ProgramList from './ProgramList';

const Program = ({currentId, setCurrentId}) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem('profile'));
  const id = user?.result?.googleId || user?.result?._id;

  const programs = useSelector(state => state.programs);

  useEffect(() => {
    if (location.pathname === '/' && user?.result?.name) {
      dispatch(getProgramsByUser(id));
    } else {
      dispatch(getPrograms());
    }
  }, [location]);

  return (
    <div className="programs">
      {user?.result?.name && <CreateProgram currentId={currentId} setCurrentId={setCurrentId}/>}
      <ProgramList programs={programs} currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Program;