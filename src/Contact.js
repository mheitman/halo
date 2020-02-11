import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Appbar from './Appbar.js';
import { FilledButton } from './Button.js';
import Footer from './Footer.js';
import TextField from '@material-ui/core/TextField';

import PrivacyPolicy from './PrivacyPolicy';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: '42px',
    paddingTop: 48,
    WebkitTextStroke: '3px',
  },
  root: {
    background: '#f7ece9',
    position: 'relative',
    top: 72,
  },
  container: {
    margin: '0 10%',
    maxWidth: 1200,
    minHeight: '100vh',
    // position: 'relative',
    // top: 72,
  },
  form: {
    padding: '48px 48px',
    // margin: '48px 0',
    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    maxWidth: 640,
    flexGrow: 1,
    background: 'white',
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
  registerButton: {
    // float: 'right',
    marginRight: 12,
    display: 'flex',
    justifyContent: 'flex-end',
    // marginTop: 24,
  },
  privacyPolicyText: {
    margin: '24px 12px',
    textAlign: 'right',
    fontSize: '14px',
    cursor: 'pointer',
    // marginRight: 12,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textContainer: {
    maxWidth: '280px',
    marginRight: 24,
    textAlign: 'right',
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: '28px',
    WebkitTextStroke: '2px',
    // color: '#6400ff',
    color: '#000a4a',
  },
  subText: {
    marginTop: 24,
    lineHeight: '28px',
  },
  emphasisText: {
    // textDecoration: 'underline',
    borderBottom: '2px solid black',
    paddingBottom: 4,
    fontWeight: 'bold',
  }
});

const REQUIRED_FIELDS = [
]

function Contact() {
  const classes = useStyles();

  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
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
      <Appbar selected={3} />
      <div className={classes.container}>
        <div className={classes.header}>
          Contact Us
        </div>
        <div className={classes.content}>
          <div className={classes.textContainer}>
            <div className={classes.text}>
              Interested in learning more? Register to receive additional information.
            </div>
            <div className={classes.subText}>
              *Please note HALO is currently offered in AZ, TN, GA, and SC.
            </div>
          </div>
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
            <div className={classes.privacyPolicyText}>
              Please review our privacy policy <span className={classes.emphasisText} onClick={() => setOpen(true)}>here.</span>
            </div>
            <PrivacyPolicy open={open} setOpen={setOpen} />
            <div className={classes.registerButton}>
              <FilledButton onClick={submitForm}>Register Now</FilledButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
