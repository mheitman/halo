import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Appbar';
import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  header: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: '42px',
    fontWeight: 'bold',
    letterSpacing: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerContainer: {
    marginTop: 120,
  },
  largeText: {
    color: '#6400ff',
    fontFamily: 'Avenir',
    fontSize: '96px',
    letterSpacing: '2px',
    lineHeight: '112px',
    margin: '48px auto',
    WebkitTextStroke: '10px',
    width: 600,
    textAlign: 'center',
  },
  root: {
    width: 500,
  },
  skyrise: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    width: '80%',
    zIndex: -1,
  },
  haloAbout: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '120px calc(10% + 48px)',
  },
  haloAboutContainer: {
    background: 'rgba(255, 255, 255, 0.7)',
    // padding: '240px calc(10% + 32px)',
    position: 'absolute',
    top: '100vh',
    width: '100%',
  },
  haloAboutStep: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Avenir',
    fontSize: '24px',
    margin: '16px 0',
    // fontWeight: 'bold',
    WebkitTextStroke: '2px',
  },
  haloAboutSteps: {
    width: '48%',
  },
  haloAboutStepNumber: {
    border: '4px solid black',
    borderRadius: '50%',
    fontSize: '20px',
    // display: 'inline-block',
    marginRight: 12,
    height: '42px',
    lineHeight: '42px',
    textAlign: 'center',
    minWidth: '42px',
  },
  haloAboutText: {
    color: '#6400ff',
    fontFamily: 'Avenir',
    fontSize: '24px',
    textAlign: 'right',
    width: '42%',
    WebkitTextStroke: '2px',
  },
  subHeader: {
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: '16px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subText: {
    fontSize: '48px',
    letterSpacing: '2px',
    margin: 'auto',
    textAlign: 'center',
    width: 560,
    WebkitTextStroke: '4px',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <Appbar />
      <img src={skyrise} className={classes.skyrise} />
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          Halo
        </div>
        <div className={classes.subHeader}>
          Home Access Lease Opportunity
        </div>
        <div className={classes.largeText}>
          Buy your dream home.
        </div>
        <div className={classes.subText}>
          Lease it from Halo. Buy it when you're ready.
        </div>
      </div>
      <div className={classes.haloAboutContainer}>
        <div className={classes.haloAbout}>
          <div className={classes.haloAboutText}>
            Designed for people who want to buy a house today, but don't currently qualify for mortgage financing.
          </div>
          <div className={classes.haloAboutSteps}>
            <div className={classes.haloAboutStep}>
              <div className={classes.haloAboutStepNumber}>1</div>
              Lock in a price on your dream home.
            </div>
            <div className={classes.haloAboutStep}>
              <div className={classes.haloAboutStepNumber}>2</div>
              Rent it for up to 12 months.
            </div>
            <div className={classes.haloAboutStep}>
              <div className={classes.haloAboutStepNumber}>3</div>
              Purchase it from HALO when you are approved for a mortgage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
