import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Appbar from './Appbar.js';
import Button from './Button.js';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: '42px',
    marginTop: 48,
    WebkitTextStroke: '3px',
  },
  root: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    position: 'relative',
    top: 72,
  },
});

function Apply() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.header}>
        Apply Now
      </div>
    </div>
  );
}

export default Apply;
