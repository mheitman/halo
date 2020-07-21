import React, { useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Appbar.js';
import Footer from './Footer.js';
import { Button, FilledButton } from './Button.js';

import { DISPLAY_FONT } from './theme';


const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  container: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    minHeight: '100vh',
  },
  criteriaHeader: {
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '48px',
    margin: '24px 0 12px',
    maxWidth: 800,
    WebkitTextStroke: '0.5px',
  },
  criteriaSubHeader: {
    fontFamily: DISPLAY_FONT,
    fontSize: '24px',
    margin: '24px 0 24px',
    WebkitTextStroke: '0.5px',
  },
  form: {
    background: 'white',
    flexGrow: 1,
    padding: '20px 0',
  },
  formSection: {
    display: 'flex',
    margin: '12px 0',
  },
  header: {
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '64px',
    paddingTop: 48,
    WebkitTextStroke: '1px',
  },
  meetsQualifications: {
    fontFamily: DISPLAY_FONT,
    fontSize: '24px',
    marginTop: 32,
    WebkitTextStroke: '0.5px',
  },
  registerButton: {
    marginLeft: 12,
  },
  registerButtons: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginTop: 28,
  },
  requirement: {
    margin: '12px 0',
    paddingLeft: 20,
  },
  root: {
    background: '#f7ece9',
    minHeight: '100vh',
    position: 'relative',
    top: 72,
  },
  stepper: {
    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    margin: '32px 0',
  },
  textField: {
    flexGrow: 1,
    marginRight: 12,
  },
});


function Apply() {
  const classes = useStyles();

  const [form, setForm] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [displayError] = useState(false);

  const handleInput = (name) => (event) => {
    setForm({
      ...form,
      [name]: event.target.value,
    })
  }

  const isEmpty = (name) => {
    return !(name in form) || form[name] === '';
  }

  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.container}>
        <div className={classes.header}>
          Get Started
        </div>
        <div className={classes.stepper}>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Step key={0}>
              <StepLabel>
                Review Application Criteria
              </StepLabel>
              <StepContent>
                <div className={classes.criteriaHeader}>
                  HALO is on a mission to turn aspiring homebuyers into homeowners.
                </div>
                <div className={classes.criteriaSubHeader}>
                  In order to qualify for the HALO Program, you must meet the following minimum requirements:
                </div>
                <div className={classes.requirements}>
                  <ul>
                    <li>
                      <div className={classes.requirement}>
                        Minimum current credit score of 480
                      </div>
                    </li>
                    <li>
                      <div className={classes.requirement}>
                        Minimum household income of $4,500 per month (I.e. total pre-tax income from applicant + co-applicant)
                      </div>
                    </li>
                    <li>
                      <div className={classes.requirement}>
                        Down Payment funds available at time of lease (minimum 3.5% of house price)
                      </div>
                    </li>
                    <li>
                      <div className={classes.requirement}>
                        Commitment to work on credit repair during the life of the lease
                      </div>
                    </li>
                    <li>
                      <div className={classes.requirement}>
                        100% commitment to obtaining a mortgage
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={classes.meetsQualifications}>
                  <Checkbox
                    onChange={() => setActiveStep(1)}
                    color="primary" />
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
                      label="First Name"
                      onChange={handleInput('firstName')}
                      variant="outlined" />
                    <TextField
                      className={classes.textField}
                      required
                      label="Last Name"
                      onChange={handleInput('lastName')}
                      variant="outlined" />
                  </div>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      helperText=''
                      label="Email"
                      variant="outlined"
                      onChange={handleInput('email')} />
                    <TextField
                      className={classes.textField}
                      required
                      label="Phone"
                      variant="outlined"
                      onChange={handleInput('phone')} />
                  </div>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      label="What city do you want to buy a house?"
                      variant="outlined"
                      onChange={handleInput('buyCity')} />
                    <TextField
                      className={classes.textField}
                      required
                      label="What state do you want to buy a house?"
                      variant="outlined"
                      onChange={handleInput('buyState')} />
                  </div>
                  <div className={classes.formSection}>
                    <TextField
                      className={classes.textField}
                      required
                      label="What is your credit score?"
                      type="number"
                      variant='outlined'
                      onChange={handleInput('creditScore')} />
                  </div>
                  <div className={classes.registerButtons}>
                    <div className={classes.registerButton}>
                      <Button onClick={() => setActiveStep(0)}>Go Back</Button>
                    </div>
                    <div className={classes.registerButton}>
                      <FilledButton>Submit Application</FilledButton>
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
