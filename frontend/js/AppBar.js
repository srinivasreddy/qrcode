import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export function MyComponent() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton aria-label="menu" className={classes.menuButton} color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          QR Code Generator
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
)}
