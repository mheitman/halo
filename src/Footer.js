import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  root: {
    height: 480,
    // background: 'rgba(0, 0, 0, 0.9)',
    background: '#010623',
    // marginTop: 240,
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // paddingTop: 200,
    // display: 'none',
  },
  logo: {
    paddingTop: 120,
    // padding: '40px 0',
    // background: 'white',
    // color: 'white',
    textAlign: 'center',
    // fontSize: '28px',
    // background: 'red',
    // color: 'black',
    color: '#ffffff44',
    fontFamily: 'Avenir',
    fontSize: '42px',
    fontWeight: 'bold',
    letterSpacing: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        Halo
      </div>
    </div>
  );
}

export default Footer;
