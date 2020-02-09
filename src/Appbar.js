import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  logo: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: 'bold',
  },
  root: {
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    height: 72,
    justifyContent: 'space-between',
    left: 0,
    padding: '0 calc(10% + 32px)',
    position: 'fixed',
    right: 0,
    top: 0,
  },
  tab: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    fontWeight: 'bold',
    marginLeft: 32,
  },
  tabs: {
    display: 'flex',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.logo}>
          H
        </div>
      </div>
      <div className={classes.tabs}>
        <div className={classes.tab}>
          About Halo
        </div>
        <div className={classes.tab}>
          Where is Halo active?
        </div>
        <div className={classes.tab}>
          Happy Clients
        </div>
        <div className={classes.tab}>
          Partners
        </div>
        <div className={classes.tab}>
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default App;
