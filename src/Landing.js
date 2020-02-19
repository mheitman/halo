import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faHome, faCalendarCheck, faUserFriends, faStar } from '@fortawesome/free-solid-svg-icons'

import Appbar from './Appbar';
import Footer from './Footer';

import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import classnames from 'classnames';

import agents from './assets/Agents.png'
import home from './assets/home.png'
import kitchen from './assets/kitchen.jpg'
import TrackVisibility from 'react-on-screen';
import skyrise from './assets/skyrise.jpg'

// import house from './assets/iStock-house.jpg';
import house from './assets/iStock-Kid Running Front Hall.jpg';
import people from './assets/iStock-people.jpg';
import livingRoom from './assets/iStock-Family in Living Room.jpg';

import image2 from './assets/clients/2.jpeg';
import image6 from './assets/clients/6.jpeg';
import image9 from './assets/clients/9.jpeg';

import AgentOfLenderIcon from './assets/icons/agent_of_lender.png';
import NeedHaloIcon from './assets/icons/need_halo.png';
import PowerOfCashIcon from './assets/icons/power_cash.png';
import TimeToSellHouseIcon from './assets/icons/time_sell_house.png';

const DISPLAY_FONT = `'EB Garamond', serif`;

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
    // margin: '24px auto',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    width: 360,
    // width: '72%',
  },
  actionSectionRows: {
    display: 'flex',
  },
  actionSection: {
    // border: '2px solid black',
    // boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    // borderRadius: 24,
    // maxWidth: '17%',
    // width: 'calc(50% - 12px)',
    width: 280,
    height: 320,
    // height: 'auto',
    margin: '4px 0',
    padding: 32,
    background: 'white',
    cursor: 'pointer',
    border: '4px solid white',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-24px)'
      // border: '4px solid #00094a',
      // background: '#00094a11'
    }
  },
  actionSectionHeader: {
    // fontSize: '28px',
    fontSize: '22px',
    // fontFamily: 'Avenir',
    fontFamily: DISPLAY_FONT,
    textAlign: 'center',
    WebkitTextStroke: '0.5px',
  },
  actionSectionIcon: {
    width: 'min-content',
    margin: '20px auto',
    // fontSize: '64px',
  },
  actionSectionIconImage: {
    // width: 96,
    width: 64,
  },
  actionSectionText: {
    // fontSize: '18px',
    fontSize: '16px',
    textAlign: 'center',
    margin: '24px auto',
    // lineHeight: '32px',
    lineHeight: '24px',
    fontFamily: 'Avenir',
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
    paddingTop: 72,
  },
  icon: {
    // height: 200,
    width: 120,
  },
  largeText: {
    // color: '#6400ff',
    color: '#000a4a',
    // fontFamily: 'Avenir',
    fontSize: '120px',
    letterSpacing: '2px',
    lineHeight: '112px',
    // margin: '48px auto',
    marginTop: 120,
    marginLeft: '10%',
    // WebkitTextStroke: '10px',
    width: 600,
    // textAlign: 'center',
    padding: '24px 32px',
    background: '#ffffff75',
    fontFamily: DISPLAY_FONT,
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
    padding: '60px 10%',
    background: 'rgba(255, 255, 255, 0.7)',
  },
  haloAboutContainer: {
    // background: 'rgba(255, 255, 255, 0.7)',
    // padding: '240px calc(10% + 32px)',
    // position: 'absolute',
    // top: '100vh',
    // width: '100%',
    position: 'relative',
    // '&::after': {
    //   content: '"Hi"',
    //   background: 'transparent',
    //   width: '100%',
    //   marginLeft: '10%',
    //   marginTop: 200,
    // }
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
    fontSize: '32px',
    margin: '16px 0',
    // fontWeight: 'bold',
    WebkitTextStroke: '1px',
  },
  haloAboutSteps: {
    width: '40%',
    marginLeft: 48,
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
    // float: 'right',
    fontFamily: 'Avenir',
    // fontFamily: DISPLAY_FONT,
    // fontFamily: dis
    fontSize: '20px',
    maxWidth: 480,
    float: 'right',
    // fontWeight: 'bold',
    margin: '24px 0 0',
    // maxWidth: '72%',
    lineHeight: '32px',
    WebkitTextStroke: '0.5px',
  },
  haloAboutSubTextRight: {
    fontFamily: 'Avenir',
    // fontFamily: DISPLAY_FONT,
    // fontFamily: dis
    fontSize: '24px',
    maxWidth: 480,
    // float: 'right',
    // fontWeight: 'bold',
    // margin: '24px 0 0',
    marginTop: 32,
    // marginLeft: 48,
    // maxWidth: '72%',
    lineHeight: '40px',
    WebkitTextStroke: '0.5px',
  },
  haloAboutText: {
    // color: '#6400ff',
    // color: '#3b004a',
    color: '#000a4a',
    // fontFamily: 'Avenir',
    fontFamily: DISPLAY_FONT,
    fontSize: '42px',
    WebkitTextStroke: '1px',
    margin: '16px 0',
  },
  // haloAboutText: {
  //   color: '#000a4a',
  //   // fontFamily: 'Avenir',
  //   fontFamily: DISPLAY_FONT,
  //   fontSize: '24px',
  //   WebkitTextStroke: '0.5px',
  // },
  haloAboutTextContainer: {
    width: '48%',
    textAlign: 'right',
    borderRight: '4px solid #00094a',
    padding: '42px 64px',
    background: 'rgba(146, 146, 146, 0.1)',
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
    fontSize: '20px',
    letterSpacing: '2px',
    // margin: 'auto',
    // textAlign: 'center',
    width: 540,
    WebkitTextStroke: '0.5px',
    marginLeft: '16%',
    marginTop: 20,
    padding: '20px 36px',
    background: '#00092bd1',
    color: 'white',
    fontFamily: 'Avenir',
    // fontFamily: DISPLAY_FONT,
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
    width: '100vw',
  },
  clientsTextContainer: {
    position: 'relative',
    // left: '-50%',
    // left: -240,
    height: 'max-content',
    // right: '10%',
    top: 64,
    // padding: '120px 60px',
    background: 'rgba(255, 255, 255, 0.86)',
    // minWidth: 420,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: 540,
  },
  clientsText: {
    padding: '60px',
  },
  clientText: {
    // fontSize: '14px',
    lineHeight: '36px',
    // color: 'rgba(0, 0, 0, 0.7)',
    // padding: 24,
  },
  clientName: {
    textAlign: 'right',
    padding: '24px 16px',
    // fontFamily: 'Avenir',
    fontFamily: DISPLAY_FONT,
    WebkitTextStroke: '1px',
    fontSize: '22px',
  },
  largeQuoteContainer: {
    // padding: '80px 120px',
    // maxWidth: 720,
    margin: '120px 10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // texta
  },
  largeQuoteTextContainer: {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '48px 32px',
    zIndex: 1000,
    // position: 'relative',
    marginRight: -120,
    minWidth: 400,
    position: 'relative',
  },
  largeQuoteText: {
    textAlign: 'center',
    // color: '#6400ff',
    fontFamily: 'Avenir',
    // fontFamily: DISPLAY_FONT,
    fontSize: '24px',
    WebkitTextStroke: '0.5px',
    lineHeight: '42px',
  },
  emphasisText: {
    // WebkitTextStroke: '3px',
    // color: '#6400ff',
    // background: '#d5e3ef',
    background: 'white',
  },
  landingImage: {
    position: 'absolute',
    // margin: 'auto',
    // left: 0,
    right: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'calc(100vh - 120px)',
    // float: 'right',
    // top: 0,
    // bottom: 0,
    // width: '60%',
    // // zIndex: -1,
    // objectFit: 'cover',
    // objectPosition: 'top',
  },
  houseImage: {
    // width: '60%',
    height: '60vh',
    // zIndex: -1,
    objectFit: 'cover',
    objectPosition: 'top',
    // borderRadius: 24,
  },
  landing: {
    // maxWidth: 1000,
  },
  livingRoomImage: {
    width: '60vw',
    height: 'auto',
    objectFit: 'contain',
  },
  happyPeopleImage: {
    // width: '50vw',
    height: '60vh',
    objectFit: 'contain',
    marginRight: -200,
    marginLeft: -80,
  },
  darkTextContainer: {
    // padding: '240px 0',
    // color: 'white',
    marginTop: 120,
    // textAlign: 'center',
    // background: 'rgba(0, 0, 0, 0.1)',
  },
  testimonial: {
    background: 'white',
    display: 'flex',
    width: '42vw',
    // margin: '0 10%',
    alignItems: 'center',
    margin: '20px 10%',
    // transition: 'transform 0.3s',
    // '&:hover': {
    //   transform: 'translateX(-24px)'
    //   // border: '4px solid #00094a',
    //   // background: '#00094a11'
    // }
  },
  testimonialContainer: {
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateX(32px)'
      // border: '4px solid #00094a',
      // background: '#00094a11'
    }
  },
  testimonialInner: {
    marginLeft: 'calc(10% + 72px)',
  },
  testimonialImage: {
    minWidth: '160px',
    height: '160px',
    borderRadius: '50%',
    padding: 24,
    objectFit: 'cover',
  },
  testimonialTextContainer: {
    padding: '24px 32px',
  },
  testimonialText: {
    // fontSize: '14px',
    fontFamily: 'Avenir',
    textAlign: 'left',
    lineHeight: '24px',
  },
  testimonialName: {
    fontFamily: DISPLAY_FONT,
    textAlign: 'right',
    marginTop: 20,
    fontSize: '20px',
    WebkitTextStroke: '0.5px',
  },
  testimonialsHeader: {
    fontFamily: DISPLAY_FONT,
    fontSize: '100px',
    // width: '32vw',
    // marginRight: '10%',
    textAlign: 'right',
    color: '#00094a',
    // maxWidth: '30vw',
  },
  testimonialsHeaderContainer: {
    marginRight: '10%',
    maxWidth: '30vw',
    position: 'relative',
    zIndex: 100,
  },
  testimonialsSubHeader: {
    fontSize: '42px',
    fontFamily: DISPLAY_FONT,
    // textAlign: 'rig'
    textDecoration: 'underline',
    margin: '20px 0',
    textAlign: 'right',
    WebkitTextStroke: '0.5px',
    cursor: 'pointer',
  },
  testimonialsSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  testimonialStar: {
    fontSize: '24px',
    margin: '0 8px',
    textAlign: 'right',
  },
  testimonialsStars: {
    textAlign: 'right',
    color: '#00094a',
    marginBottom: 20,
  },
  peopleImage: {
    height: '80vw',
    margin: '-200px 0 -200px',
    backgroundImage:`url(${people})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // float: 'right',
  },
  peopleImageText: {
    padding: '280px 20%',
    fontFamily: DISPLAY_FONT,
    fontSize: '86px',
    maxWidth: 480,
    WebkitTextStroke: '0.5px',
    color: '#00094a',
    // paddin
    // background: 'white',
  },
  peopleImageTextHighlight: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: 24,
  },
  highlight: {
    background: '#00094a14',
    padding: '0 12px',
    WebkitTextStroke: '1px',
    color: '#00094a',
  }
});

function GrowComponentToTrack({ isVisible, children, timeout }) {
  return <Grow in={isVisible} timeout={timeout}>{children}</Grow>;
}

function SlideComponentToTrack({ isVisible, children, timeout }) {
  return <Slide in={isVisible} timeout={timeout} direction='right'>{children}</Slide>;
}

function GrowComponent({ children, timeout }) {
  return (
    <TrackVisibility partialVisibility once>
      <GrowComponentToTrack timeout={timeout}>
        {children}
      </GrowComponentToTrack>
    </TrackVisibility>);
}

function SlideComponent({ children, timeout }) {
  return (
    <TrackVisibility partialVisibility once>
      <SlideComponentToTrack timeout={timeout}>
        {children}
      </SlideComponentToTrack>
    </TrackVisibility>);
}

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.landing}>
        {/*<Slide in={true} direction="down" mountOnEnter>*/}
          <div className={classes.landingImageContainer}>
          <div className={classes.landingImage}>
            <img src={house} className={classes.houseImage} />
          </div>
          </div>
        {/*</Slide>*/}
        <div className={classes.headerContainer}>
          {/*<div className={classes.header}>
            Halo
          </div>
          <div className={classes.subHeader}>
            Home Access Lease Opportunity
          </div>*/}
          <Grow in={true} timeout={500}>
          <div className={classes.largeText}>
            Make offers like a boss!
          </div>
          </Grow>
          <Grow in={true} timeout={700} direction="right" mountOnEnter>
          <div className={classes.subText}>
            Whether you are pre-approved for a mortgage, or need time to work on it, HALO can turn you into a cash buyer in as little as 10 days
          </div>
          </Grow>
        </div>
      </div>
      <div className={classes.landingContent}>
        <div className={classes.haloAboutContainer}>
          <div className={classes.haloAbout}>
            <div className={classes.haloAboutTextContainer}>
              <GrowComponent timeout={500}>
                <div>
                  <div className={classes.haloAboutText}>
                    Hundreds of people now live in a home made possible by HALO. Cash is king, and we’ve got your back.
                  </div>
                  <div className={classes.haloAboutSubText}>
                    Professional investors are buying homes in the same neighborhood as you. But they are paying cash. 
                  </div>
                  <div className={classes.haloAboutSubText}>
                    Sellers love cash offers because they are guaranteed to close, whether you get a mortgage or not.
                  </div>
                  <div className={classes.haloAboutSubText}>
                    HALO levels the playing field by turning you into a cash buyer, just like the pros. <span className={classes.highlight}>Now who's the boss?</span>
                  </div>
                </div>
              </GrowComponent>
            </div>
            <div className={classes.haloAboutSteps}>
              <GrowComponent timeout={500}>
              <div>
                <div className={classes.haloAboutStep}>
                  <div className={classes.haloAboutStepNumber}>1</div>
                  Rent to Purchase.
                </div>
                <div className={classes.haloAboutStep}>
                  <div className={classes.haloAboutStepNumber}>2</div>
                   All Cash Offers.
                </div>
                <div className={classes.haloAboutStep}>
                  <div className={classes.haloAboutStepNumber}>3</div>
                  Buy while you Sell. 
                </div>
                <GrowComponent timeout={1000}>
                <div>
                <div className={classes.haloAboutSubTextRight}>
                  HALO partners with licensed real estate agents and mortgage lenders in each market we serve to help you achieve your homeownership dreams.
                </div>
                  </div>
              </GrowComponent>
                </div>
              </GrowComponent>
            </div>
          </div>
        </div>
        {/*<div className={classes.peopleImage}>
          <div className={classes.peopleImageText}>
            <GrowComponent timeout={500}>
              <div className={classes.peopleImageTextHighlight}>
                Whatever your situation, we've got your back!
              </div>
            </GrowComponent>
          </div>
        </div>*/}
        <div className={classes.largeQuoteContainer}>
          <img src={people} className={classes.happyPeopleImage} />
          <div className={classes.actionSectionRows}>
          <div className={classes.actionSectionRow}>
              <div className={classes.actionSection}>
                <GrowComponent timeout={300}>
                <div>
                  <div className={classes.actionSectionIcon}>
                    <img src={NeedHaloIcon}className={classes.actionSectionIconImage} />
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
                      <img src={PowerOfCashIcon}className={classes.actionSectionIconImage} />
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
            </div>
            <div className={classes.actionSectionRow}>
              <div className={classes.actionSection}>
                <GrowComponent timeout={900}>
                  <div>
                    <div className={classes.actionSectionIcon}>
                      <img src={TimeToSellHouseIcon}className={classes.actionSectionIconImage} />
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
                      <img src={AgentOfLenderIcon}className={classes.actionSectionIconImage} />
                    </div>
                    <div className={classes.actionSectionHeader}>
                      I’m an agent or lender, and want to learn how HALO can help my clients.
                    </div>
                    <div className={classes.actionSectionText}>
                      We'd love to work with you! Over 800 agent & lender partners are now registered with HALO.
                    </div>
                  </div>
                </GrowComponent>
              </div>
            </div>
            </div>
          </div>
          {/*<div className={classes.actionSections}>
            <div className={classes.actionSectionRow}>
              <div className={classes.actionSection}>
                <GrowComponent timeout={300}>
                <div>
                  <div className={classes.actionSectionIcon}>
                    <img src={NeedHaloIcon}className={classes.actionSectionIconImage} />
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
                      <img src={PowerOfCashIcon}className={classes.actionSectionIconImage} />
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
              <div className={classes.actionSection}>
                <GrowComponent timeout={900}>
                  <div>
                    <div className={classes.actionSectionIcon}>
                      <img src={TimeToSellHouseIcon}className={classes.actionSectionIconImage} />
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
                      <img src={AgentOfLenderIcon}className={classes.actionSectionIconImage} />
                    </div>
                    <div className={classes.actionSectionHeader}>
                      I’m an agent or lender, and want to learn how HALO can help my clients.
                    </div>
                    <div className={classes.actionSectionText}>
                      We'd love to work with you! Over 800 agent & lender partners are now registered with HALO.
                    </div>
                  </div>
                </GrowComponent>
              </div>
            </div>
          </div>*/}
          {/*<div className={classes.clientsContainer}>
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
                  - Rickey E., Raleigh NC
                </div>
              </div>
              {/*<div className={classes.client}>
                <div className={classes.clientText}>
                  As a 16 year licensed real estate agent, I am a supporter of this program. We were able to close in 2 weeks! HALO was accessible and a pleasure to work with. I look forward to closing more transactions with HALO!
                </div>
                <div className={classes.clientName}>
                  Valencia W.H., Realtor®, Atlanta GA
                </div>
              </div>
              <div className={classes.client}>
                <div className={classes.clientText}>
                  As a licensed Realtor in the state of AZ I have seen this program help dozens of families buy a home. One of my favorite parts of assisting clients with using this program is how fast and easy it is. We have closed homes in 2 weeks with an average closing of 3 weeks! Another great feature is this group ALWAYS gets a home inspection and provides a home warranty to ensure piece of mind for the new owner. Thank you Halo group for being honest, fast and helping families accomplish their homeownership goals.
                </div>
                <div className={classes.clientName}>
                  - Josh C., Realtor®, Phoenix AZ
                </div>
              </div>
              </div>
            </div>
          </div>*/}
          <div className={classes.testimonialsSection}>
            <div className={classes.testimonialsContainer}>
            <div className={classes.testimonialContainer}>
            <GrowComponent timeout={500}>
              <div className={classes.testimonial}>
                <img className={classes.testimonialImage} src={image2} />
                <div className={classes.testimonialTextContainer}>
                  <div className={classes.testimonialText}>
                    As a 16 year licensed real estate agent, I am a supporter of this program. We were able to close in 2 weeks! Chris was accessible and a pleasure to work with. I look forward to closing more transactions with HALO!
                  </div>
                  <div className={classes.testimonialName}>
                    - Valencia W., GA
                  </div>
                </div>
              </div>
              </GrowComponent>
              </div>
              <div className={classes.testimonialContainer}>
              <GrowComponent timeout={700}>
              <div className={classnames(classes.testimonial, classes.testimonialInner)}>
                <img className={classes.testimonialImage} src={image9} />
                <div className={classes.testimonialTextContainer}>
                  <div className={classes.testimonialText}>
                    Just completed the purchase of our home from HALO! Very happy and so thankful to David and his team for making this dream come true! I highly recommend this company to anyone looking for some help buying a house.
                  </div>
                  <div className={classes.testimonialName}>
                    - Milton V., NC
                  </div>
                </div>
              </div>
              </GrowComponent>
              </div>
              <div className={classes.testimonialContainer}>
              <GrowComponent timeout={900}>
              <div className={classes.testimonial}>
                <img className={classes.testimonialImage} src={image6} />
                <div className={classes.testimonialTextContainer}>
                  <div className={classes.testimonialText}>
                    Thanks to David and his team a dream for my family and I came true. Owning a home is something I never thought would happen for me and this morning I got to see a smile on my children face because they are so happy with their new rooms. Thank you so much David and the Halo team. You guys really are making a difference in the world.
                  </div>
                  <div className={classes.testimonialName}>
                    - Rickey E., AZ
                  </div>
                </div>
              </div>
              </GrowComponent>
            </div>
            </div>
            <div className={classes.testimonialsHeaderContainer}>
              <div className={classes.testimonialsStars}>
                <FontAwesomeIcon icon={faStar} className={classes.testimonialStar} />
                <FontAwesomeIcon icon={faStar} className={classes.testimonialStar} />
                <FontAwesomeIcon icon={faStar} className={classes.testimonialStar} />
                <FontAwesomeIcon icon={faStar} className={classes.testimonialStar} />
                <FontAwesomeIcon icon={faStar} className={classes.testimonialStar} />
              </div>
              <div className={classes.testimonialsHeader}>
                Real people. Real happy.
              </div>
              <div className={classes.testimonialsSubHeader}>
                Read more stories >
              </div>
            </div>
          </div>
          <div className={classes.largeQuoteContainer}>
          <GrowComponent timeout={500}>
            <div className={classes.largeQuoteTextContainer}>
              <div className={classes.largeQuoteText}>
                Just completed the purchase of our home from HALO! Very happy and so thankful to David and his team for making this dream come true! <span className={classes.emphasisText}>I highly recommend this company to anyone looking for some help buying a house.</span>
              </div>
              <div className={classes.clientName}>
                - Laura B., Phoenix AZ
              </div>
            </div>
            </GrowComponent>
            <img src={livingRoom} className={classes.livingRoomImage} />
          </div>
          <div className={classes.footer}><Footer /></div>
        </div>
    </div>
  );
}

export default Landing;
