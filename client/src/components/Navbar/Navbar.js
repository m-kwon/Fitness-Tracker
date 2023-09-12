import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Typography, Toolbar, Button, Avatar, makeStyles } from '@material-ui/core';
import decode from 'jwt-decode';
import useStyles from './styles.js';

const Navbar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">Fitness Tracker</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
      <Typography component={Link} to="/browse" className={classes.links} variant="h6" align="center">Browse</Typography>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result?.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;