import React from 'react';

import Grow from '@material-ui/core/Grow';
import TrackVisibility from 'react-on-screen';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'

import Appbar from './Appbar';
import Footer from './Footer';

import happyClient0 from './assets/clients/2.jpeg';
import happyClient1 from './assets/clients/14.png';
import happyClient2 from './assets/clients/6.jpeg';
import house from './assets/iStock-Kid Running Front Hall.jpg';
import livingRoom from './assets/iStock-Family in Living Room.jpg';
import people from './assets/iStock-people.jpg';

import AgentOfLenderIcon from './assets/icons/agent_of_lender.png';
import NeedHaloIcon from './assets/icons/need_halo.png';
import PowerOfCashIcon from './assets/icons/power_cash.png';
import TimeToSellHouseIcon from './assets/icons/time_sell_house.png';

import { DISPLAY_FONT } from './theme';


const useStyles = makeStyles((theme) => ({
  actionSection: {
    background: 'white',
    border: '4px solid white',
    cursor: 'pointer',
    margin: '16px 8px',
    padding: 24,
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-12px)'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '28vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '14vw',
    },
  },
  actionSectionHeader: {
    fontFamily: DISPLAY_FONT,
    fontSize: '24px',
    textAlign: 'center',
    WebkitTextStroke: '0.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
    },
  },
  actionSectionIcon: {
    margin: '20px auto',
    width: 'min-content',
  },
  actionSectionIconImage: {
    [theme.breakpoints.down('xs')]: {
      width: 48,
    },
    [theme.breakpoints.up('sm')]: {
      width: 64,
    },
  },
  actionSectionRow: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  actionSectionRows: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  actionSectionText: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Avenir',
    fontSize: '16px',
    lineHeight: '28px',
    margin: '24px auto',
    textAlign: 'center',
    WebkitTextStroke: '0.3px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
  },
  actionSections: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      margin: '20px 10%',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '80px 10%',
    },
  },
  clientName: {
    fontFamily: DISPLAY_FONT,
    fontSize: '28px',
    padding: '24px 16px',
    textAlign: 'right',
    WebkitTextStroke: '0.5px',
  },
  clientText: {
    lineHeight: '36px',
  },
  clientsContainer: {
    display: 'flex',
    width: '100vw',
  },
  clientsText: {
    padding: '60px',
  },
  clientsTextContainer: {
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.86)',
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    justifyContent: 'space-around',
    maxWidth: 540,
    position: 'relative',
    top: 64,
  },
  darkTextContainer: {
    marginTop: 120,
  },
  facebookIcon: {
    color: '#1777f2',
    fontSize: '48px',
  },
  facebookIconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '16px 0',
  },
  haloAbout: {
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 'auto',
    maxWidth: 1000,
    [theme.breakpoints.down('sm')]: {
      padding: '36px 5%',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      padding: '60px 5%',
    },
  },
  haloAboutContainer: {
    background: 'white',
    position: 'relative',
    '&::after': {
      borderLeft: '600px solid transparent',
      borderRight: '600px solid transparent',
      borderTop: '600px solid rgba(255, 255, 255, 0.5)',
      clear: 'both',
      content: '""',
      height: 0,
      left: '50%',
      marginLeft: '-600px',
      position: 'absolute',
      top: '100%',
      width: 0,
    }
  },
  haloAboutSection: {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: 48,
    margin: '32px auto',
    maxWidth: 400,
  },
  haloAboutStep: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Avenir',
    fontSize: '24px',
    margin: '16px 0',
    WebkitTextStroke: '1px',
  },
  haloAboutStepNumber: {
    border: '4px solid black',
    borderRadius: '50%',
    fontSize: '20px',
    height: '42px',
    lineHeight: '42px',
    marginRight: 16,
    minWidth: '42px',
    textAlign: 'center',
  },
  haloAboutSteps: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 32,
      marginLeft: 32,
    },
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  haloAboutSubText: {
    fontFamily: 'Avenir',
    margin: '24px 0 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: '28px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '32px',
      WebkitTextStroke: '0.3px',
    },
  },
  haloAboutSubTextRight: {
    fontFamily: 'Avenir',
    fontSize: '24px',
    lineHeight: '40px',
    marginTop: 32,
    maxWidth: 480,
    WebkitTextStroke: '0.5px',
  },
  haloAboutText: {
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '32px',
    margin: '16px 0',
    WebkitTextStroke: '0.5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  haloAboutTextContainer: {
    background: 'rgba(146, 146, 146, 0.1)',
    borderLeft: '4px solid #00094a',
    [theme.breakpoints.down('sm')]: {
      padding: '24px 32px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: 36,
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      padding: '42px 64px',
    },
  },
  happyPeopleImage: {
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: '42px auto',
      maxWidth: 600,
      width: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      height: '42vh',
      marginLeft: -60,
      marginRight: -200,
    },
    [theme.breakpoints.up('lg')]: {
      height: '56vh',
      marginLeft: -80,
      marginRight: -200,
    },
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: '42px',
    fontWeight: 'bold',
    letterSpacing: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerContainer: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      top: -36,
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 72,
      paddingTop: 72,
    },
  },
  highlight: {
    color: '#00094a',
    fontFamily: DISPLAY_FONT,
    fontSize: '28px',
    marginTop: 24,
    WebkitTextStroke: '1px',
  },
  houseImage: {
    objectFit: 'cover',
    objectPosition: 'top',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw',
    },
    [theme.breakpoints.up('sm')]: {
      height: '60vh',
      maxWidth: '64vw',
    },
  },
  icon: {
    width: 120,
  },
  landingImage: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 200px)',
      position: 'absolute',
      right: '10%',
    },
  },
  largeQuoteContainer: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '80px 10%',
    },
  },
  largeQuoteText: {
    fontFamily: 'Avenir',
    fontSize: '22px',
    lineHeight: '42px',
    textAlign: 'center',
    WebkitTextStroke: '0.5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: '28px',
      WebkitTextStroke: '0.2px',
    },
  },
  largeQuoteTextContainer: {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '48px 32px',
    position: 'relative',
    zIndex: 100,
    [theme.breakpoints.up('md')]: {
      marginRight: -120,
      minWidth: 400,
    },
  },
  largeText: {
    background: '#ffffffaa',
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '96px',
    padding: '24px 32px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '64px',
      position: 'relative',
      textAlign: 'center',
      WebkitTextStroke: '0.5px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '64px',
      marginLeft: '10%',
      marginTop: 120,
      width: 280,
      WebkitTextStroke: '0.5px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '82px',
      letterSpacing: '2px',
      lineHeight: '100px',
      width: 420,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '96px',
      lineHeight: '112px',
      width: 520,
    },
  },
  livingRoomImage: {
    height: 'auto',
    objectFit: 'contain',
    width: '60vw',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: 'auto',
      width: '90vw',
    },
  },
  peopleImage: {
    backgroundImage:`url(${people})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80vw',
    margin: '-200px 0 -200px',
  },
  peopleImageText: {
    color: '#00094a',
    fontFamily: DISPLAY_FONT,
    fontSize: '86px',
    maxWidth: 480,
    padding: '280px 20%',
    WebkitTextStroke: '0.5px',
  },
  peopleImageTextHighlight: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: 24,
  },
  root: {
    background: 'linear-gradient(0deg, #eef8fc, #f7ece9)',
    marginTop: 72,
  },
  standaloneQuote: {
    margin: 'auto',
    maxWidth: 1000,
  },
  standaloneQuoteContainer: {
    position: 'relative',
    margin: '100px 10% 40px',
  },
  standaloneQuoteText: {
    color: '#00094a',
    fontFamily: DISPLAY_FONT,
    maxWidth: 1000,
    WebkitTextStroke: '0.5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '48px',
    },
  },
  standaloneSubQuote: {
    background: '#00092bd1',
    color: 'white',
    fontFamily: 'Avenir',
    letterSpacing: '1px',
    padding: '20px 36px',
    WebkitTextStroke: '0.5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      margin: '24px 0',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      margin: '42px 60px',
    },
  },
  standaloneSubQuoteContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  subHeader: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: '16px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subText: {
    background: '#00092bd1',
    color: 'white',
    fontFamily: 'Avenir',
    letterSpacing: '1px',
    padding: '20px 36px',
    WebkitTextStroke: '0.5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      margin: 20,
      position: 'relative',
      textAlign: 'center',
      top: -32,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      marginLeft: '16%',
      marginTop: 20,
      width: 320,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      width: 480,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '22px',
      width: 640,
    },
  },
  testimonial: {
    alignItems: 'center',
    background: 'white',
    margin: '20px 10%',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      width: '42vw',
    },
  },
  testimonialContainer: {
    cursor: 'pointer',
    transition: 'transform 0.3s',
    [theme.breakpoints.up('sm')]: {
      '&:hover': {
        transform: 'translateX(32px)',
      }
    },
  },
  testimonialImage: {
    borderRadius: '50%',
    display: 'block',
    height: '160px',
    margin: 'auto',
    objectFit: 'cover',
    padding: 24,
    width: '160px',
  },
  testimonialInner: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'calc(10% + 72px)',
    },
  },
  testimonialName: {
    fontFamily: DISPLAY_FONT,
    fontSize: '20px',
    marginTop: 20,
    textAlign: 'right',
    WebkitTextStroke: '0.5px',
  },
  testimonialStar: {
    fontSize: '24px',
    margin: '0 8px',
    textAlign: 'right',
  },
  testimonialText: {
    fontFamily: 'Avenir',
    lineHeight: '24px',
    textAlign: 'left',
  },
  testimonialTextContainer: {
    padding: '24px 32px',
  },
  testimonialsHeader: {
    color: '#00094a',
    fontFamily: DISPLAY_FONT,
    fontSize: '64px',
    maxWidth: 400,
    textAlign: 'right',
    WebkitTextStroke: '0.5px',
  },
  testimonialsHeaderContainer: {
    marginRight: '10%',
    maxWidth: '30vw',
    position: 'relative',
    zIndex: 100,
  },
  testimonialsSection: {
    [theme.breakpoints.down('xs')]: {
      margin: '80px 0',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-around',
      margin: '120px 0',
    },
  },
  testimonialsSubHeader: {
    cursor: 'pointer',
    fontSize: '36px',
    fontFamily: DISPLAY_FONT,
    margin: '20px 0',
    textAlign: 'right',
    textDecoration: 'underline',
    transition: 'transform 0.3s',
    WebkitTextStroke: '0.5px',
    '&:hover': {
      transform: 'translateX(12px)',
    }
  },
  testimonialsStars: {
    color: '#00094a',
    marginBottom: 20,
    textAlign: 'right',
  },
}));


function GrowComponentToTrack({ isVisible, children, timeout }) {
  return <Grow in={isVisible} timeout={timeout}>{children}</Grow>;
}


function GrowComponent({ children, timeout }) {
  return (
    <TrackVisibility partialVisibility once>
      <GrowComponentToTrack timeout={timeout}>
        {children}
      </GrowComponentToTrack>
    </TrackVisibility>);
}


function Landing() {
  const classes = useStyles();

  const animation = {
    animationName: 'star',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  }

  const renderStar = (ind) => {
    return <FontAwesomeIcon
      icon={faStar}
      className={classes.testimonialStar}
      style={{ ...animation, animationDelay: `${0.2 * ind}s`}} />
  }

  const renderStars = () => {
    return (
      <div className={classes.testimonialsStars} style={animation}>
        {renderStar(0)}
        {renderStar(1)}
        {renderStar(2)}
        {renderStar(3)}
        {renderStar(4)}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.landing}>
        <div className={classes.landingImageContainer}>
          <div className={classes.landingImage}>
            <img src={house} className={classes.houseImage} alt="" />
          </div>
        </div>
        <div className={classes.headerContainer}>
          <Grow in={true} timeout={500}>
            <div className={classes.largeText}>
              Make offers like a boss!
            </div>
          </Grow>
          <Grow in={true} timeout={700} direction="right" mountOnEnter>
            <div className={classes.subText}>
              Whether you are pre-approved for a mortgage, or need more time to qualify, HALO can turn you into a cash buyer in as little as 10 days.
            </div>
          </Grow>
        </div>
      </div>
      <div className={classes.actionSections}>
        <div className={classes.actionSection}>
          <GrowComponent timeout={300}>
            <div className={classes.actionSectionInner}>
              <div className={classes.actionSectionIcon}>
                <img src={NeedHaloIcon}className={classes.actionSectionIconImage} alt="" />
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
            <div className={classes.actionSectionInner}>
              <div className={classes.actionSectionIcon}>
                <img src={PowerOfCashIcon}className={classes.actionSectionIconImage} alt="" />
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
            <div className={classes.actionSectionInner}>
              <div className={classes.actionSectionIcon}>
                <img src={TimeToSellHouseIcon}className={classes.actionSectionIconImage} alt="" />
              </div>
              <div className={classes.actionSectionHeader}>
                I have found my new home, but want time to sell my current home at the best price.
              </div>
              <div className={classes.actionSectionText}>
                Smart move! HALO will pay cash for your new home so you can move right in. Then take the time you need to sell your existing home, up to 12 months if needed.
              </div>
            </div>
          </GrowComponent>
        </div>
        <div className={classes.actionSection}>
          <GrowComponent timeout={1200}>
            <div className={classes.actionSectionInner}>
              <div className={classes.actionSectionIcon}>
                <img src={AgentOfLenderIcon}className={classes.actionSectionIconImage} alt="" />
              </div>
              <div className={classes.actionSectionHeader}>
                I’m an agent or lender, and want to turn my clients into cash buyers, whether they are pre-qualified or not.
              </div>
              <div className={classes.actionSectionText}>
                We’d love to work with you. Over 800 HALO partners are now enjoying faster, guaranteed closings.
              </div>
            </div>
          </GrowComponent>
        </div>
      </div>
      <div className={classes.landingContent}>
        <div className={classes.largeQuoteContainer}>
          <img src={people} className={classes.happyPeopleImage} alt="" />
          <GrowComponent timeout={500}>
            <div className={classes.haloAboutSection}>
              <div className={classes.haloAboutText}>
                Cash bids are 97% more likely to be accepted by a seller.
              </div>
              <div className={classes.haloAboutSubText}>
                Professional investors are buying homes in the same neighborhood as you. But they are paying cash. 
              </div>
              <div className={classes.haloAboutSubText}>
                Sellers <i>love</i> cash offers because they are guaranteed to close, whether you get a mortgage or not.
              </div>
              <div className={classes.haloAboutSubText}>
                HALO levels the playing field by turning you into a cash buyer, just like the pros.
              </div>
              <div className={classes.highlight}>Now who's the boss?</div>
            </div>
          </GrowComponent>
        </div>
        <div className={classes.haloAboutContainer}>
          <div className={classes.haloAboutContent}>
            <div className={classes.haloAbout}>
              <div className={classes.haloAboutSteps}>
                <GrowComponent timeout={500}>
                  <div className={classes.haloAboutStepsInner}>
                    <div className={classes.haloAboutStep}>
                      <div className={classes.haloAboutStepNumber}>1</div>
                      All cash offers.
                    </div>
                    <div className={classes.haloAboutStep}>
                      <div className={classes.haloAboutStepNumber}>2</div>
                       Rent to purchase.
                    </div>
                    <div className={classes.haloAboutStep}>
                      <div className={classes.haloAboutStepNumber}>3</div>
                      Buy while you sell. 
                    </div>
                  </div>
                </GrowComponent>
              </div>
              <div className={classes.haloAboutTextContainer}>
                <GrowComponent timeout={500}>
                  <div className={classes.haloAboutStepsInner}>
                    <div className={classes.haloAboutText}>
                      HALO partners with licensed real estate agents and mortgage lenders to help you achieve your homeownership dreams.
                    </div>
                  </div>
                </GrowComponent>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.standaloneQuoteContainer}>
          <div className={classes.standaloneQuote}>
            <GrowComponent timeout={500}>
              <div className={classes.standaloneQuoteText}>
                Hundreds of people now live in a home made possible by HALO - whether they were qualified for a mortgage or not.
              </div>
            </GrowComponent>
            <GrowComponent timeout={700}>
              <div className={classes.standaloneSubQuoteContainer}>
                <div className={classes.standaloneSubQuote}>
                  Read what they have to say about their HALO experience.
                </div>
              </div>
            </GrowComponent>
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
          <img src={livingRoom} className={classes.livingRoomImage} alt="" />
        </div>
        <div className={classes.testimonialsSection}>
          <div className={classes.testimonialsContainer}>
            <div className={classes.testimonialContainer}>
              <GrowComponent timeout={500}>
                <div className={classes.testimonial}>
                  <img className={classes.testimonialImage} src={happyClient0} alt="" />
                  <div className={classes.testimonialTextContainer}>
                    <div className={classes.testimonialText}>
                      As a 16 year licensed real estate agent, I am a supporter of this program. We were able to close in 2 weeks! HALO was accessible and a pleasure to work with. I look forward to closing more transactions with HALO!
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
                  <img className={classes.testimonialImage} src={happyClient1} alt="" />
                  <div className={classes.testimonialTextContainer}>
                    <div className={classes.testimonialText}>
                      As of Monday, I have purchased my home. At times it seemed that I wasn't going to finish this race, but my Halo team never gave up on me. The plan took a little longer to execute then planned but MISSION ACCOMPLISHED. I’m officially a homeowner.
                    </div>
                    <div className={classes.testimonialName}>
                      - Tan T., Atlanta GA
                    </div>
                  </div>
                </div>
              </GrowComponent>
            </div>
            <div className={classes.testimonialContainer}>
              <GrowComponent timeout={900}>
                <div className={classes.testimonial}>
                  <img className={classes.testimonialImage} src={happyClient2} alt="" />
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
            <div className={classes.facebookIconContainer}>
              <FontAwesomeIcon icon={faFacebook} className={classes.facebookIcon} />
            </div>
            {renderStars()}
            <div className={classes.testimonialsHeader}>
              Delighting homebuyers, agents, and lenders since 2016.
            </div>
            <div className={classes.testimonialsSubHeader}>
              <Link to="/clients">Read more stories ></Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
