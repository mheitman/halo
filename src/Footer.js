import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import logo from './assets/Halo_logo_wh.png';


const useStyles = makeStyles({
  logo: {
    color: '#ffffff44',
    fontFamily: 'Avenir',
    fontSize: '42px',
    fontWeight: 'bold',
    letterSpacing: '16px',
    paddingTop: 120,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  logoImage: {
    height: 76,
  },
  root: {
    background: '#010623',
    bottom: 0,
    height: 480,
    left: 0,
    right: 0,
  },
});


function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} className={classes.logoImage} alt="" />
      </div>
    </div>
  );
}

export default Footer;
