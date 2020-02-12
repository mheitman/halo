import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faHome, faCalendarCheck, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import Appbar from './Appbar';
import Footer from './Footer';

import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

import agents from './assets/Agents.png'
import home from './assets/home.png'
import kitchen from './assets/kitchen.jpg'
import TrackVisibility from 'react-on-screen';
import skyrise from './assets/skyrise.jpg'

import house from './assets/iStock-house.jpg';
import people from './assets/iStock-people.jpg';

const useStyles = makeStyles({
  actionSections: {
    // display: 'flex',
    // justifyContent: 'space-around',
    padding: '80px 10%',
    // position: 'absolute',
    // bottom: 0,
    // flexWrap: 'wrap',
    // margin: 'auto',
  },
  // actionSectionsContainer: {
  //   position: 'absolute',
  //   // bottom: 0,
  //   // top: 0,
  //   minHeight: 'calc(1.6 * 80vw + 960px)',
  //   width: '100%',
  // },
  actionSectionsContainer2: {
    // position: 'absolute',
    // bottom: 0,
    paddingBottom: 200,
  },
  actionSectionRow: {
    display: 'flex',
    margin: '24px auto',
    // width: '72%',
  },
  actionSection: {
    // border: '2px solid black',
    // boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    // borderRadius: 24,
    // maxWidth: '17%',
    width: 'calc(50% - 12px)',
    margin: '0 12px',
    padding: 32,
    background: 'white',
    cursor: 'pointer',
  },
  actionSectionHeader: {
    fontSize: '18px',
    fontFamily: 'Avenir',
    textAlign: 'center',
    WebkitTextStroke: '1px',
  },
  actionSectionIcon: {
    width: 'min-content',
    margin: '20px auto',
    fontSize: '64px',
  },
  actionSectionText: {
    fontSize: '14px',
    textAlign: 'center',
    margin: '24px auto',
    lineHeight: '24px',
  },
  header: {
    // color: 'white',
    fontFamily: 'Avenir',
    fontSize: '42px',
    fontWeight: 'bold',
    letterSpacing: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerContainer: {
    // marginTop: 120,
    position: 'relative',
    zIndex: 10,
    height: 'calc(100vh - 104px)',
    paddingTop: 32,
  },
  icon: {
    // height: 200,
    width: 120,
  },
  largeText: {
    // color: '#6400ff',
    color: '#000a4a',
    fontFamily: 'Avenir',
    fontSize: '96px',
    letterSpacing: '2px',
    lineHeight: '112px',
    // margin: '48px auto',
    marginTop: 120,
    marginLeft: '10%',
    WebkitTextStroke: '10px',
    width: 600,
    // textAlign: 'center',
    padding: '24px 32px',
    background: '#ffffff75',
  },
  // root: {
  //   width: 500,
  // },
  skyrise: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    width: '80%',
    zIndex: 1000,
    objectFit: 'cover',
    objectPosition: 'top',
  },
  haloAbout: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '60px calc(10% + 48px)',
  },
  haloAboutContainer: {
    background: 'rgba(255, 255, 255, 0.7)',
    // padding: '240px calc(10% + 32px)',
    // position: 'absolute',
    // top: '100vh',
    // width: '100%',
  },
  landingContent: {
    // position: 'absolute',
    // top: '100vh',
    // width: '100%',
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
    width: '40%',
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
  haloAboutSubText: {
    float: 'right',
    fontFamily: 'Avenir',
    fontSize: '20px',
    // fontWeight: 'bold',
    margin: '24px 0',
    maxWidth: '72%',
    WebkitTextStroke: '1px',
  },
  haloAboutText: {
    // color: '#6400ff',
    // color: '#3b004a',
    color: '#000a4a',
    fontFamily: 'Avenir',
    fontSize: '36px',
    WebkitTextStroke: '3px',
  },
  haloAboutTextContainer: {
    width: '48%',
    textAlign: 'right',
  },
  subHeader: {
    // color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: '16px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subText: {
    fontSize: '24px',
    letterSpacing: '2px',
    // margin: 'auto',
    // textAlign: 'center',
    width: 420,
    WebkitTextStroke: '1px',
    marginLeft: '16%',
    marginTop: 20,
    padding: '20px 36px',
    background: '#00092bd1',
    color: 'white',
    fontFamily: 'Avenir',
  },
  kitchen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  kitchenImg: {
    width: '60vw',
    marginLeft: '10%',
    // borderRadius: 24,
    objectFit: 'contain',
    height: 'auto',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
  },
  // footer: {
  //   background: 'black',
  //   height: 280,
  // }
  root: {
    // paddingBottom: 200,
    background: '#f7ece9',
    marginTop: 72,
  },
  footer: {
    // paddingTop: 640,
  },
  clientsContainer: {
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'stretch',
    // flexDirection: 'column',
  },
  clientsTextContainer: {
    position: 'relative',
    // left: '-50%',
    // left: -240,
    height: 'max-content',
    right: '10%',
    top: 64,
    // padding: '120px 60px',
    background: 'rgba(255, 255, 255, 0.86)',
    minWidth: 480,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  clientsText: {
    padding: '60px',
  },
  clientText: {
    // fontSize: '14px',
    lineHeight: '28px',
    // color: 'rgba(0, 0, 0, 0.7)',
    // padding: 24,
  },
  clientName: {
    textAlign: 'right',
    padding: '24px 16px',
    fontFamily: 'Avenir',
    WebkitTextStroke: '1px',
  },
  largeQuoteContainer: {
    padding: '80px 120px',
    maxWidth: 720,
    margin: 'auto',
    // texta
  },
  largeQuoteText: {
    textAlign: 'center',
    // color: '#6400ff',
    fontFamily: 'Avenir',
    fontSize: '36px',
    WebkitTextStroke: '2px',
    lineHeight: '64px',
  },
  emphasisText: {
    WebkitTextStroke: '3px',
    // color: '#6400ff',
    // background: '#d5e3ef',
    background: 'white',
  },
  landingImage: {
    position: 'absolute',
    margin: 'auto',
    // left: 0,
    right: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'calc(100vh - 72px)',
    // float: 'right',
    // top: 0,
    // bottom: 0,
    // width: '60%',
    // // zIndex: -1,
    // objectFit: 'cover',
    // objectPosition: 'top',
  },
  houseImage: {
    width: '60%',
    // zIndex: -1,
    objectFit: 'cover',
    objectPosition: 'top',
    // borderRadius: 24,
  }
});

function ComponentToTrack({ isVisible, children, timeout }) {
  return <Grow in={isVisible} timeout={timeout}>{children}</Grow>;
}

function GrowComponent({ children, timeout }) {
  return (
    <TrackVisibility once>
      <ComponentToTrack timeout={timeout}>
        {children}
      </ComponentToTrack>
    </TrackVisibility>);
}

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      {/*<Slide in={true} direction="down" mountOnEnter>*/}
        <div className={classes.landingImageContainer}>
        <div className={classes.landingImage}>
          <img src={house} className={classes.houseImage} />
        </div>
        </div>
      {/*</Slide>*/}
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          Halo
        </div>
        <div className={classes.subHeader}>
          Home Access Lease Opportunity
        </div>
        <Grow in={true} timeout={500}>
        <div className={classes.largeText}>
          Make offers like a boss.
        </div>
        </Grow>
        <Grow in={true} timeout={700} direction="right" mountOnEnter>
        <div className={classes.subText}>
          Lease it from Halo. Buy it when you're ready.
        </div>
        </Grow>
      </div>
      <div className={classes.landingContent}>
        <div className={classes.haloAboutContainer}>
          <div className={classes.haloAbout}>
            <div className={classes.haloAboutTextContainer}>
              <GrowComponent timeout={500}>
                <div className={classes.haloAboutText}>
                  Designed for people who want to buy a house today, but don't currently qualify for mortgage financing.
                </div>
              </GrowComponent>
              <GrowComponent timeout={1000}>
                <div className={classes.haloAboutSubText}>
                  HALO partners with licensed real estate agents and mortgage lenders in each state we serve to help you achieve your home ownership dream.
                </div>
              </GrowComponent>
            </div>
            <div className={classes.haloAboutSteps}>
              <GrowComponent timeout={500}>
              <div>
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
              </GrowComponent>
            </div>
          </div>
        </div>
          <div className={classes.actionSections}>
            <div className={classes.actionSectionRow}>
                <div className={classes.actionSection}>
                <GrowComponent timeout={300}>
                <div>
                  <div className={classes.actionSectionIcon}>
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <div className={classes.actionSectionHeader}>
                    I am ready to buy a home, but need time to qualify for a mortgage.
                  </div>
                  <div className={classes.actionSectionText}>
                    Welcome to HALO! Choose your dream home. Rent it while you work on your mortgage. Buy it when you are ready.
                  </div>
                  </div>
              </GrowComponent>
                </div>
              <div className={classes.actionSection}>
                <GrowComponent timeout={600}>
                  <div>
                    <div className={classes.actionSectionIcon}>
                      <FontAwesomeIcon icon={faHandHoldingUsd} />
                    </div>
                    <div className={classes.actionSectionHeader}>
                      I am qualified for a mortgage, but want to bid with the power of cash.
                    </div>
                    <div className={classes.actionSectionText}>
                      Welcome to HALO-GO, your Guaranteed Offer. Make offers like a boss, using HALO’s cash!
                    </div>
                  </div>
                </GrowComponent>
              </div>
            {/*</div>
            <div className={classes.actionSectionRow}>*/}
              <div className={classes.actionSection}>
                <GrowComponent timeout={900}>
                  <div>
                    <div className={classes.actionSectionIcon}>
                      <FontAwesomeIcon icon={faCalendarCheck} />
                    </div>
                    <div className={classes.actionSectionHeader}>
                      I have found my new home, but want time to sell my current home at the best price.
                    </div>
                    <div className={classes.actionSectionText}>
                      Smart move! HALO will pay cash for your new home so you can move right in. Then take the time you need to sell your existing home.
                    </div>
                  </div>
                </GrowComponent>
              </div>
              <div className={classes.actionSection}>
                <GrowComponent timeout={1200}>
                  <div>
                    <div className={classes.actionSectionIcon}>
                      <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                    <div className={classes.actionSectionHeader}>
                      I’m an agent or lender, and want to learn how HALO can help my clients.
                    </div>
                    <div className={classes.actionSectionText}>
                      We'd love to work with you! Over 700 agent & lender partners are now registered with HALO.
                    </div>
                  </div>
                </GrowComponent>
              </div>
            </div>
          </div>
          <div className={classes.clientsContainer} onShow={() => console.log('hi')}>
            <div className={classes.kitchen}>
              <img src={people} className={classes.kitchenImg} />
            </div>
            <div className={classes.clientsTextContainer}>
            <div className={classes.clientsText}>
              <div className={classes.client}>
                <div className={classes.clientText}>
                  Thanks to David and his team a dream for my family and I came true. Owning a home is something I never thought would happen for me and this morning I got to see a smile on my children face because they are so happy with their new rooms. Thank you so much David and the Halo team. You guys really are making a difference in the world.
                </div>
                <div className={classes.clientName}>
                  Rickey E., Raleigh NC
                </div>
              </div>
              {/*<div className={classes.client}>
                <div className={classes.clientText}>
                  As a 16 year licensed real estate agent, I am a supporter of this program. We were able to close in 2 weeks! HALO was accessible and a pleasure to work with. I look forward to closing more transactions with HALO!
                </div>
                <div className={classes.clientName}>
                  Valencia W.H., Realtor®, Atlanta GA
                </div>
              </div>*/}
              <div className={classes.client}>
                <div className={classes.clientText}>
                  As a licensed Realtor in the state of AZ I have seen this program help dozens of families buy a home. One of my favorite parts of assisting clients with using this program is how fast and easy it is. We have closed homes in 2 weeks with an average closing of 3 weeks! Another great feature is this group ALWAYS gets a home inspection and provides a home warranty to ensure piece of mind for the new owner. Thank you Halo group for being honest, fast and helping families accomplish their homeownership goals.
                </div>
                <div className={classes.clientName}>
                  Josh C., Realtor®, Phoenix AZ
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className={classes.largeQuoteContainer}>
            <div className={classes.largeQuoteText}>
              Just completed the purchase of our home from HALO! Very happy and so thankful to David and his team for making this dream come true! <span className={classes.emphasisText}>I highly recommend this company to anyone looking for some help buying a house.</span>
            </div>
            <div className={classes.clientName}>
              - Laura B., Phoenix AZ
            </div>
          </div>
          <div className={classes.footer}><Footer /></div>
        </div>
    </div>
  );
}

export default Landing;
