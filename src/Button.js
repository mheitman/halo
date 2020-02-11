import React from 'react';
import { fade, createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const FilledButton = withStyles(() => ({
  root: {
    color: 'white',
    // backgroundColor: '#6400ff',
    backgroundColor: '#000a4a',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    // fontSize: '14px',
    textTransform: 'inherit',
    '&:hover': {
      // backgroundColor: '#4b00bf',
      backgroundColor: '#3b004a',
    },
  },
}))(MuiButton);

const Button = withStyles(() => ({
  root: {
    color: 'white',
    // backgroundColor: '#6400ff',
    color: '#000a4a',
    backgroundColor: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    // fontSize: '14px',
    textTransform: 'inherit',
    '&:hover': {
      // backgroundColor: '#4b00bf',
      backgroundColor: '#eceef3',
    },
  },
}))(MuiButton);

export {
	Button,
	FilledButton
}
// export default FilledButton;