import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { FilledButton } from './Button.js';

import logo from './assets/Halo-Logo.png';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  logo: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 32,
  },
  root: {
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    height: 72,
    justifyContent: 'space-between',
    left: 0,
    padding: '0 10%',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
  tab: {
    fontFamily: 'Avenir',
    fontSize: '14px',
    fontWeight: 'bold',
    marginLeft: 32,
    borderBottom: '4px solid white',
    // '&.selected': {
    //   background: 'red',
    // }
    // borderBottom: props.selected && 
  },
  selected: {
    borderBottom: '4px solid black',
    WebkitTextStroke: '0.5px',
  },
  tabs: {
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    width: 160,
  }
});

function App({ selected }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.logo}>
          <Link to='/'><img src={logo} className={classes.logo} /></Link>
        </div>
      </div>
      <div className={classes.tabs}>
        <div className={classnames(classes.tab, selected === 0 && classes.selected)}>
          <Link to={'/about'}>About Halo</Link>
        </div>
        <div className={classnames(classes.tab, selected === 1 && classes.selected)}>
          <Link to='/clients'>Happy Clients</Link>
        </div>
        <div className={classnames(classes.tab, selected === 2 && classes.selected)}>
          <Link to='/partners'>Partners</Link>
        </div>
        <div className={classnames(classes.tab, selected === 3 && classes.selected)}>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className={classes.button}>
          <FilledButton href={process.env.PUBLIC_URL + '/apply'}>Get Started</FilledButton>
        </div>
      </div>
    </div>
  );
}

export default App;
