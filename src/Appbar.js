import React, { useLayoutEffect, useRef } from 'react';

import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { FilledButton } from './Button.js';

import logo from './assets/Halo-Logo.png';

import { DISPLAY_FONT } from './theme';


const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  logo: {
    fontFamily: DISPLAY_FONT,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 32,
    width: 160,
  },
  root: {
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    height: 96,
    justifyContent: 'space-between',
    left: 0,
    padding: '0 10%',
    position: 'fixed',
    right: 0,
    top: 0,
    transition: 'top 0.3s',
    zIndex: 1000,
  },
  tab: {
    borderBottom: '3px solid white',
    fontFamily: DISPLAY_FONT,
    fontSize: '20px',
    marginLeft: 32,
  },
  tabs: {
    alignItems: 'center',
    display: 'flex',
  },
  tabSelected: {
    borderBottom: '3px solid black',
    WebkitTextStroke: '0.5px',
  }
});

function App({ selected }) {
  const classes = useStyles();
  const root = useRef();


  useLayoutEffect(() => {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        root.current.style.top = '0';
      } else {
        if (window.pageYOffset > 280) {
          root.current.style.top = '-96px';
        }
      }
      prevScrollPos = currentScrollPos;
    }
  }, []);

  return (
    <div className={classes.root} ref={root}>
      <div className={classes.left}>
        <div className={classes.logo}>
          <Link to='/'><img src={logo} className={classes.logo} alt="" /></Link>
        </div>
      </div>
      <div className={classes.tabs}>
        <div className={classnames(classes.tab, selected === 0 && classes.tabSelected)}>
          <Link to="/about">About Halo</Link>
        </div>
        <div className={classnames(classes.tab, selected === 1 && classes.tabSelected)}>
          <Link to="/clients">Happy Clients</Link>
        </div>
        <div className={classnames(classes.tab, selected === 2 && classes.tabSelected)}>
          <Link to="/partners">Partners</Link>
        </div>
        <div className={classnames(classes.tab, selected === 3 && classes.tabSelected)}>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={classes.button}>
          <FilledButton href={process.env.PUBLIC_URL + '/apply'}>Get Started</FilledButton>
        </div>
      </div>
    </div>
  );
}

export default App;
