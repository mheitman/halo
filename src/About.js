import React, { createRef, useState } from 'react';

import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import TrackVisibility from 'react-on-screen';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Appbar';
import Footer from './Footer';

import { DISPLAY_FONT } from './theme';


const useStyles = makeStyles({
  container: {
    maxWidth: 'calc(100vw - 360px)',
    top: 72,
  },
  faqNavContainer: {
    bottom: 0,
    padding: '140px 40px',
    position: 'fixed',
    right: 0,
    top: 0,
    width: 360,
  },
  faqNavLink: {
    cursor: 'pointer',
    fontFamily: DISPLAY_FONT,
    fontSize: '15px',
    margin: '10px 0',
    paddingRight: 32,
    transition: 'all 0.5s',
    WebkitTextStroke: '0.2px',
    '&:hover': {
      transform: 'translateX(-4px)',
    }
  },
  faqSection: {
    marginTop: -96,
    paddingTop: 96,
  },
  header: {
    color: '#000a4a',
    fontFamily: DISPLAY_FONT,
    fontSize: '48px',
    WebkitTextStroke: '1px',
  },
  page: {
    background: 'rgba(255, 255, 255, 0.4)',
    marginLeft: 296,
    marginRight: 96,
    padding: '72px 48px',
    position: 'relative',
  },
  root: {
    background: '#f7ece9',
    position: 'relative',
    top: 72,
  },
  section: {
    marginTop: -96,
    paddingTop: 96,
  },
  sectionHeader: {
    fontFamily: DISPLAY_FONT,
    fontSize: '24px',
    margin: '32px 0 4px',
    WebkitTextStroke: '0.5px',
  },
  sectionNavContainer: {
    bottom: 0,
    left: 0,
    minWidth: 240,
    paddingTop: 220,
    position: 'fixed',
    textAlign: 'right',
    top: 0,
  },
  sectionNavLink: {
    borderRight: '3px solid #000a4a',
    color: '#000a4a',
    cursor: 'pointer',
    fontFamily: DISPLAY_FONT,
    fontSize: '20px',
    maxWidth: '18vw',
    padding: '8px 36px',
    WebkitTextStroke: '0.5px',
  },
  sectionNavLinkText: {
    transition: 'all 0.5s',
    '&:hover': {
      transform: 'translateX(4px)',
      WebkitTextStroke: '0.7px',
    }
  },
  sectionSubHeader: {
    fontFamily: DISPLAY_FONT,
    fontSize: '20px',
    margin: '24px 0 4px',
    WebkitTextStroke: '0.5px',
  },
  sectionText: {
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '36px',
    marginBottom: 16,
  },
});


const FAQS = [
  {
    question: 'How does it work?',
    answer: ['The first step is to qualify for the program (see “How do I Apply” at the end of this FAQ sheet). Once you qualify, HALO will introduce you to a local, licensed real estate agent who will help you find the right home for you. HALO is not involved in selecting your home - that’s up to you!'],
  },
  {
    question: 'Where do you have houses available?',
    answer: ['HALO is currently available in major metro areas of AZ, GA, SC and TN. We don’t maintain an inventory of houses. Qualified HALO clients get to pick their own house from any available for sale.'],
  },
  {
    question: 'Are all homes eligible for HALO?',
    answer: ['HALO is available on houses and townhouses for sale at $150,000 or more. Condos, manufactured homes and land are not eligible. We do not require new homes, but we will order an inspection on the home you select and reserve the right to decline the home if there are issues that can’t, or won’t, be remedied by the seller.'],
  },
  {
    question: 'How much is the monthly rent?',
    answer: ['No two customers and no two homes are identical, so lease terms are determined on an individual basis and factor in the cost of the home, property taxes, HOA fees (if any) and insurance costs. Rents start at $1,300/month.'],
  },
  {
    question: 'Does part of my rent go toward the purchase price of the home?',
    answer: ['Until you qualify for a mortgage, you are a tenant paying rent. Thus no part of your rent is credited when you purchase the home.'],
  },
  {
    question: 'How much house can I afford?',
    answer: ['As part of the approval process, a licensed mortgage lender will review your application and determine how much house you can afford. A general rule of thumb is 2.5 to 3 times your gross household annual income, but any other debts you have will also need to be considered (auto, credit cards, student loans, etc). Of course, you can always pick a house for less than the maximum! Once you select a home, you will be presented with a commitment letter detailing the lease terms and the price you will pay to buy the home from HALO when you get your mortgage. This is when you will be required to make the Option payment, which will be refunded later if you buy the home from HALO.'],
  },
  {
    question: 'Once I find my house, what happens next?',
    answer: ['After you sign a commitment letter and make required payments, HALO will purchase the home and lease it to you for up to 12 months. In addition to the lease, you will sign a Purchase Option agreement, which guarantees your right to buy the home at a fixed price from HALO at any time during the life of the lease. A typical Purchase Option agreement will provide two Option Purchase Prices at different dates (for example, 6 months and 12 months). The Option Purchase Prices are fixed upfront and are based on HALO’s acquisition cost and how long you wait to buy the home.'],
  },
  {
    question: 'How much does the Purchase Option cost?',
    answer: ['The payment for the Purchase Option agreement is 3.5% - 5% of your final option Purchase Price (example: $7,000 - $10,000 on a $200,000 home). The amount of the option payment is determined by HALO based upon our financial review of your application and the property you select. This option payment will be credited back to you if you purchase your home from HALO. This is designed to ensure that you are committed to buying the home, and that when you obtain a mortgage, your down payment funds are available.'],
  },
  {
    question: 'When do I need to pay HALO the option payment?',
    answer: ['The Purchase Option agreement is due as soon as HALO’s offer is accepted by the seller. This is also when you sign the commitment letter (see Once I find my house, what happens next? above).'],
  },
  {
    question: 'What happens if I still can’t qualify for a mortgage at the end of the lease?',
    answer: [
      'The #1 goal of the HALO program is to help our tenants become homeowners. As part of being accepted into the program, a licensed mortgage originator reviews your finances and believes that you will qualify for a mortgage by the time your lease ends. This means that in most cases, as long as you continue to make your payments on time, don’t make poor credit decisions, and follow the guidelines set out by the credit repair specialists, you should qualify for a mortgage by the end of your lease.',
      `In the event that you change your mind or do not stay on course to get a mortgage, the option payment is non-refundable. In this situation, HALO will use these funds to help offset part of the cost of re-selling your home. Your loss is HALO's loss, so we are true partners in this effort.`,
      'However, HALO reserves the right to extend your lease if you still wish to purchase the home but need a little more time to qualify for a mortgage. In this case, a new review of your finances will be conducted to assess if you have been making your payments on time and otherwise complying with the steps necessary to repair your credit. Depending on the outcome of this review, HALO (at its sole discretion) may extend the contract on a month-to-month basis. If an extension is granted, the Purchase Price and Rent may increase accordingly.',
    ],
  },
  {
    question: 'What if the house value goes up? Or goes down?',
    answer: ['Your future Purchase Price is fixed at the time HALO buys the home. This means that regardless of how much your home may go up in value during the life of the lease, your price is locked-in; HALO cannot sell your home to anyone else or change the price as long as you comply with the terms of your lease. Conversely, if the home value declines, your Purchase Price is still fixed as it is locked in at the time HALO purchases the home.'],
  },
  {
    question: 'What upfront fees will I pay?',
    answer: [`As soon as you are accepted into the HALO program, you are required to pay $500 to confirm your acceptance. This $500 will be credited towards your first rent payment (if you drop out of the program, you will forfeit this payment). After you find a home and HALO contracts to purchase it, HALO charges a processing fee equal to one-month's rent (example: $1750 rent = $1750 Processing Fee). This fee is used to help cover our expenses in bidding, appraising, inspecting and purchasing the home you have chosen, and is paid when you sign the Letter of Commitment.`],
  },
  {
    question: 'Is there an application fee?',
    answer: ['No. You can apply on our website after you have finished reading the FAQs (see How do I Apply? below).'],
  },
  {
    question: 'Are there any closing costs?',
    answer: ['HALO pays all closing costs at the time we purchase the home. You will pay all closing costs when you purchase the home from HALO at the end of the lease. The closing costs are usually driven by lender requirements and include appraisal, credit check, inspection, title & escrow fees and local transfer fees.'],
  },
  {
    question: 'What do I need to qualify?',
    answer: [
      'From our side, we are looking for clients who are committed to getting, and keeping, their finances in order so that they can qualify for a mortgage at the end of the lease. We look for clients who have a clear path to achieving these mutual goals. At a minimum, prospects should meet the following criteria in order to initiate an application:',
      'Minimum current credit score of 480',
      'Minimum household income of $4,500 per month (i.e. total pre-tax income from applicant + co-applicant)',
      'Available funds for option payment and fees',
      'Commitment to credit repair during the life of the lease which starts with paying all your bills on time',
      'Please note: while HALO works with licensed mortgage lenders as part of the approval process, HALO does not provide mortgage financing and does not guarantee that clients will obtain a mortgage at the end of their lease.',
    ],
  },
  {
    question: 'Does HALO provide credit repair counseling as part of the program?',
    answer: [`HALO, along with our mortgage partners, will provide guidance on how to repair and improve your credit score. When you are accepted into the program, HALO specialists will deliver a detailed, customized credit repair roadmap that should, if properly followed, lead to a mortgage qualification within 12 months. HALO will also conduct periodical monitoring of your progress and offer additional / alternate guidance as required based on each client's progress. In some cases, HALO clients will be required to sign-up with a licensed credit repair professional and remain actively enrolled for the duration of their program.`],
  },
  {
    question: 'What if I qualify for a VA Loan? Do I still need to make an option payment?',
    answer: ['We love our Vets and are very proud to have helped many on their journey to homeownership. Even though VA loans do not require a down payment, HALO still requires that all clients pay a Purchase Option to ensure they are committed to purchasing the home. Since this is credited back to you when you purchase the home, the Option fee can be used to pay closing costs and / or reduce the amount of the mortgage. Unlike conventional or FHA clients, VA clients will never pay more than 3.5% for their Option Fee.'],
  },
  {
    question: 'Who maintains the home during the life of the lease?',
    answer: ['Once we purchase a home and lease it to you, HALO considers it “your home”. Just as if you owned it already, you are responsible for maintaining the home during the life of the lease. However, maintenance should be low because we order a professional inspection prior to purchasing your home so that you (and HALO) know what you are getting into. Most repairs are made by the seller prior to our purchase of the house. Additionally, we purchase a Home Warranty, covering appliances, plumbing, heat and air conditioning repairs during the term of the lease.'],
  },
  {
    question: 'Can I make improvements to the home during the lease?',
    answer: ['Absolutely! HALO clients are free to upgrade the landscaping, paint the walls, install new carpet, etc. Everything you want to do to make the home yours. Alterations must be approved by HALO in writing, and must be conducted by licensed and insured contractors in compliance with local building codes. Major alterations (involving structural changes) are not permitted. For homes located in an HOA (Home Owners Association) any updates must also comply with HOA guidelines.'],
  },
  {
    question: 'Are pets allowed?',
    answer: ['Yes, subject to certain HALO restrictions and conditions imposed by our insurance carriers.'],
  },
  {
    question: 'HALO sounds great! But I don’t have the required cash available today. What can I do?',
    answer: ['You have taken the first step in deciding you want to embark on the home ownership journey. But in order to be a homeowner, you will need funds available for a down payment and closing costs, even if you don’t work with HALO. If you don’t have the funds yourself, the FHA allows them to be gifted to you. You may also be able to get these funds from your 401k at work. If that’s not an option, then you should set a monthly savings goal and save for your down payment while you continue to carefully manage your payments and improve your credit. Then check back with HALO when you have reached your goal. We are here to help!'],
  },
  {
    question: 'What if I have more questions?',
    answer: ['Please email us at info@haloprogram.com'],
  },
  {
    question: 'How do I Apply?',
    answer: ['Click here to start the application process.'],
  },
]


function About() {
  const classes = useStyles();

  const [displayFaqNav, setDisplayFaqNav] = useState();
  const sections = [createRef(), createRef(), createRef(), createRef()];
  const faqSections = Array.from({ length: FAQS.length }, () => createRef(null));

  const scrollToSection = (ind) => () => {
    sections[ind].current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToFaq = (ind) => () => {
    faqSections[ind].current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Appbar selected={0} />
        <div className={classes.content}>
          <div className={classes.sectionNavContainer}>
            <div className={classes.sectionNavLink} onClick={scrollToSection(0)}>
              <div className={classes.sectionNavLinkText}>
                Summary
              </div>
            </div>
            <div className={classes.sectionNavLink} onClick={scrollToSection(1)}>
              <div className={classes.sectionNavLinkText}>
                Do I Qualify?
              </div>
            </div>
            <div className={classes.sectionNavLink} onClick={scrollToSection(2)}>
              <div className={classes.sectionNavLinkText}>
                Fixing My Credit
              </div>
            </div>
            <div className={classes.sectionNavLink} onClick={scrollToSection(3)}>
              <div className={classes.sectionNavLinkText}>
                FAQs
              </div>
            </div>
          </div>
          <Fade in={true} timeout={600}>
            <div className={classes.page}>
              <div className={classes.header}>
                About Halo
              </div>
              <div className={classes.section} ref={sections[0]}>
                <div className={classes.sectionHeader}>
                  Summary
                </div>
                <div className={classes.sectionText}>
                  HALO is a new type of residential lease program designed for people who want to buy a house today, but don't currently qualify for mortgage financing. For aspiring buyers who are committed to repairing their credit, HALO provides the opportunity to lock-in a price on your dream home, rent it for up to 12 months, then purchase it from HALO when you are approved for a mortgage. HALO partners with licensed real estate agents and mortgage lenders in each state we serve to help you achieve your home ownership dream.
                </div>
              </div>
              <div className={classes.section} ref={sections[1]}>
                <div className={classes.sectionHeader}>
                  Do I Qualify?
                </div>
                <div className={classes.sectionText}>
                  Our clients have been through all sorts of financial difficulties, including bankruptcies, foreclosures, short-sales, medical issues and divorce. As long as you have a demonstrated commitment to repairing past credit issues and a pathway to mortgage qualification within 12 months, we can work with you. While every client's situation is different, applicants should meet the following minimum standards: Minimum 12 months from Bankruptcy discharge; 24 months from a Foreclosure or Short-Sale. Minimum Credit Score of 480, with a clear path to reaching 620 within 12 months (don't worry, we partner with industry credit repair veterans that can help you get there); Minimum gross household income before taxes of $4500/month, and applicants must be able to show 2 years tax returns by the time they apply for a mortgage. Based on standard FHA down payment guidelines, we require that you have cash equal to 3.5% - 5% of the purchase price available in order to enter the HALO program.
                </div>
              </div>
              <div className={classes.section} ref={sections[2]}>
                <div className={classes.sectionHeader}>
                  Fixing My Credit
                </div>
                <div className={classes.sectionText}>
                  Most HALO clients have credit scores below 600 and need help to qualify for a mortgage. This often includes disputing erroneous items on your credit report as well as settling outstanding collection items. HALO recognizes that many clients will need customized guidance and assistance to bring their scores up. For these clients, specialized HALO staff will provide a detailed roadmap that, if properly followed, will lead to mortgage-qualifying scores within 12 months. HALO is unique in our 100% commitment to helping you fix your credit problems.
                </div>
              </div>
              <TrackVisibility partialVisibility once>
                {({ isVisible }) => {
                  setDisplayFaqNav(isVisible);
                  return (
                    <div className={classes.section} ref={sections[3]}>
                      <div className={classes.sectionHeader}>
                        FAQs
                      </div>
                      {FAQS.map((faq, ind) => (
                        <div key={ind} className={classes.faqSection} ref={faqSections[ind]}>
                          <div className={classes.sectionSubHeader}>
                            {faq.question}
                          </div>
                          {faq.answer.map((answer, ind) => (
                            <div key={ind} className={classes.sectionText}>
                              {answer}
                            </div>))}
                        </div>))}
                    </div>)}}
              </TrackVisibility>
            </div>
          </Fade>
          <Slide in={displayFaqNav} timeout={300} direction='left'>
            <div className={classes.faqNavContainer}>
            {FAQS.map((faq, ind) => (
              <div key={ind} className={classes.faqNavLink} onClick={scrollToFaq(ind)}>{faq.question}</div>))}
            </div>
          </Slide>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
