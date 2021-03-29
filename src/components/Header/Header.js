import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& a':{
        color:'#fff'
    },
    '& .active':{
        background:'#00000087'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const  Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <NavLink to="/home"><Button color="inherit">Home</Button></NavLink> 
          <NavLink to="/donation"><Button color="inherit">Donation</Button></NavLink> 
          <NavLink to="/events"><Button color="inherit">Events</Button></NavLink> 
          <NavLink to="/blog"><Button color="inherit">Blog</Button></NavLink> 
          <NavLink to="/register"><Button color="inherit">Register</Button></NavLink> 
          <NavLink to="/login"><Button color="inherit">Login</Button></NavLink> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
