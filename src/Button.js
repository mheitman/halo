import React from 'react';
import { fade, createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const Button = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: '#6400ff',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    // fontSize: '14px',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: '#4b00bf',
    },
  },
}))(MuiButton);

export default Button;