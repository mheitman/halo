import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Appbar from './Appbar.js';
import Footer from './Footer.js';
import { Button, FilledButton } from './Button.js';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const DISPLAY_FONT = `'EB Garamond', serif`;


const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  header: {
    // fontFamily: 'Avenir',
    fontSize: '64px',
    paddingTop: 48,
    WebkitTextStroke: '1px',
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
  },
  container: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    minHeight: '100vh',
    // position: 'relative',
    // top: 72,
  },
  root: {
    background: '#f7ece9',
    position: 'relative',
    top: 72,
    minHeight: '100vh',
  },
  form: {
    // padding: '48px 48px',
    // margin: '48px 0',
    // boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    // maxWidth: 640,
    flexGrow: 1,
    background: 'white',
    padding: '20px 0',
    // display: 'none',
  },
  textField: {
    // width: '48%',
    flexGrow: 1,
    marginRight: 12,
  },
  formSection: {
    margin: '12px 0',
    display: 'flex',
  },
  stepper: {
    margin: '32px 0',
    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
  },
  criteriaHeader: {
    fontSize: '28px',
    // fontFamily: 'Avenir',
    margin: '24px 0 36px',
    WebkitTextStroke: '0.5px',
    fontFamily: DISPLAY_FONT,
    // margin: 
  },
  requirement: {
    margin: '12px 0',
    paddingLeft: 20,
    fontSize: '14px',
  },
  meetsQualifications: {
    // fontFamily: 'Avenir',
    fontFamily: DISPLAY_FONT,
    WebkitTextStroke: '0.5px',
    marginTop: 32,
    fontSize: '22px',
    // marginBottom: -20,
  },
  registerButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    marginTop: 28,
  },
  registerButton: {
    marginLeft: 12,
  }
});

function Apply() {
  const classes = useStyles();

  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [displayError, setDisplayError] = useState(false);

  const handleInput = (name) => (event) => {
    setForm({
      ...form,
      [name]: event.target.value,
    })
  }

  const submitForm = () => {
    console.log(form)
  };

  const isEmpty = (name) => {
    return !(name in form) || form[name] === '';
  }

  const validate = () => {

  }

  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.container}>
        <div className={classes.header}>
          Apply Now
        </div>
        <div className={classes.stepper}>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Step key={0}>
              <StepLabel>
                Review Application Criteria
              </StepLabel>
              <StepContent>
                <div className={classes.criteriaHeader}>
                  HALO is on a mission to turn aspiring homebuyers into homeowners. In order to qualify for the HALO Program, you must meet the following minimum requirements:
                </div>
                <div className={classes.requirements}>
                  <div className={classes.requirement}>
                    Minimum current credit score of 480
                  </div>
                  <div className={classes.requirement}>
                    Minimum household income of $4,500 per month (I.e. total pre-tax income from applicant + co-applicant)
                  </div>
                  <div className={classes.requirement}>
                    Down Payment funds available at time of lease (minimum 3.5% of house price)
                  </div>
                  <div className={classes.requirement}>
                    Commitment to work on credit repair during the life of the lease
                  </div>
                  <div className={classes.requirement}>
                    100% commitment to obtaining a mortgage
                  </div>
                </div>
                <div className={classes.meetsQualifications}>
                  
                  <Checkbox
                    // checked={checked}
                    onChange={() => setActiveStep(1)}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  I meet the HALO qualifications.
                </div>
              </StepContent>
            </Step>
            <Step key={1}>
              <StepLabel>
                Submit Information
              </StepLabel>
              <StepContent>
                <div className={classes.form}>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      error={displayError && isEmpty('firstName')}
                      label='First Name'
                      onChange={handleInput('firstName')}
                      variant='outlined' />
                    <TextField
                      className={classes.textField}
                      required
                      label='Last Name'
                      onChange={handleInput('lastName')}
                      variant='outlined' />
                  </div>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      helperText=''
                      label='Email'
                      variant='outlined'
                      onChange={handleInput('email')} />
                    <TextField
                      className={classes.textField}
                      required
                      label='Phone'
                      variant='outlined'
                      onChange={handleInput('phone')} />
                  </div>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      label='What city do you want to buy a house?'
                      variant='outlined'
                      onChange={handleInput('buyCity')} />
                    <TextField
                      className={classes.textField}
                      required
                      label='What state do you want to buy a house?'
                      variant='outlined'
                      onChange={handleInput('buyState')} />
                  </div>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      label='What is your credit score?'
                      type='number'
                      variant='outlined'
                      onChange={handleInput('creditScore')} />
                  </div>
                  <div className={classes.registerButtons}>
                    <div className={classes.registerButton}>
                      <Button onClick={() => setActiveStep(0)}>Go Back</Button>
                    </div>
                    <div className={classes.registerButton}>
                      <FilledButton onClick={submitForm}>Submit Application</FilledButton>
                    </div>
                  </div>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
