import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Program from './Program/Program';
import Exercise from './Exercise/Exercise';

const App = () => {

  const programId = useSelector(state => state.programId);

  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Program}/>
          <Route path="/program/:programId" component={Exercise}/>
        </Switch>
      </Container>
    </Router>
  )
}

export default App;