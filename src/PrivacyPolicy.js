import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Appbar from './Appbar.js';
import Button from './Button.js';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  header: {
    fontFamily: 'Avenir',
    // fontSize: '18px',
    // marginTop: 48,
    margin: '20px 0 4px',
    WebkitTextStroke: '1px',
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: '24px',
    WebkitTextStroke: '1px',
    // margin: '12px 0',
  },
  text: {
    fontSize: '14px',
    lineHeight: '24px',
    // margin: '12px 0',
    marginBottom: 12,
  },
  root: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    position: 'relative',
    top: 72,
  },
  content: {
    paddingBottom: 32,
    // padding: 32,
    // maxHeight: 600,
  },
  bold: {
    WebkitTextStroke: '0.5px',
  }
});

function PrivacyPolicy({ open, setOpen }) {
  const classes = useStyles();

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={() => setOpen(false)}>
      <DialogTitle classes={{root: classes.title}}>Privacy Policy</DialogTitle>
      <DialogContent>
        <div className={classes.content}>
          <div className={classes.header}>
            Privacy Notice
          </div>
          <div className={classes.text}>
            This privacy notice discloses the privacy practices for <a className={classes.bold} href='https://haloprogram.com'>www.haloprogram.com</a>. This privacy notice applies solely to information collected by this website. It will notify you of the following:
          </div>
          <ol className={classes.text}>
            <li className={classes.listItem}>
              What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.
            </li>
            <li className={classes.listItem}>
              What choices are available to you regarding the use of your data.
            </li>
            <li className={classes.listItem}>
              The security procedures in place to protect the misuse of your information.
            </li>
            <li className={classes.listItem}>
              How you can correct any inaccuracies in the information.
            </li>
          </ol>
          <div className={classes.header}>
            Information Collection, Use, and Sharing
          </div>
          <div className={classes.text}>
            We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.
          </div>
          <div className={classes.text}>
            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.
          </div>
          <div className={classes.text}>
            Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
          </div>
          <div className={classes.header}>
            Your Access to and Control Over Information
          </div>
          <div className={classes.text}>
            You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
          </div>
          <ol className={classes.text}>
            <li className={classes.listItem}>
              See what data we have about you, if any.
            </li>
            <li className={classes.listItem}>
              Change/correct any data we have about you.
            </li>
            <li className={classes.listItem}>
              Have us delete any data we have about you.
            </li>
            <li className={classes.listItem}>
              Express any concern you have about our use of your data.
            </li>
          </ol>
          <div className={classes.header}>
            Security
          </div>
          <div className={classes.text}>
            We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
          </div>
          <div className={classes.text}>
            Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.
          </div>
          <div className={classes.text}>
            While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
          </div>
          <div className={classnames(classes.text, classes.bold)}>
            If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 844 425 6463 or via email at info@haloprogram.com.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyPolicy;