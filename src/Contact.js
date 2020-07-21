import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Appbar.js';
import Footer from './Footer.js';
import PrivacyPolicy from './PrivacyPolicy';
import { FilledButton } from './Button.js';

import { DISPLAY_FONT } from './theme';


const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  container: {
    minHeight: '100vh',
    margin: '0 10%',
    maxWidth: 1200,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },
  form: {
    background: 'white',
    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    flexGrow: 1,
    padding: '48px 48px',
    maxWidth: 720,
  },
  emphasisText: {
    borderBottom: '2px solid black',
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  formSection: {
    display: 'flex',
    margin: '12px 0',
  },
  header: {
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '48px',
    paddingTop: 64,
    WebkitTextStroke: '1px',
  },
  privacyPolicyText: {
    cursor: 'pointer',
    fontSize: '14px',
    margin: '24px 12px',
    textAlign: 'right',
  },
  registerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 12,
  },
  root: {
    background: '#f7ece9',
    position: 'relative',
    top: 96,
  },
  subText: {
    lineHeight: '28px',
    marginTop: 24,
  },
  text: {
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '36px',
    WebkitTextStroke: '0.5px',
  },
  textContainer: {
    marginRight: 24,
    maxWidth: '280px',
    textAlign: 'right',
  },
  textField: {
    flexGrow: 1,
    marginRight: 12,
  },
});


function Contact() {
  const classes = useStyles();

  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [displayError] = useState(false);

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
                variant="outlined"
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
