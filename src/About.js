import React, { useLayoutEffect, useRef, createRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faHome, faCalendarCheck, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import Appbar from './Appbar';
import Footer from './Footer';

import agents from './assets/Agents.png';
import home from './assets/home.png';
import skyrise from './assets/skyrise.jpg';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  content: {
    // marginTop: 120,
    padding: '72px 64px',
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: '42px',
    // marginTop: 120,
    WebkitTextStroke: '3px',
  },
  root: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    position: 'relative',
    top: 72,
  },
  sectionNavContainer: {
    textAlign: 'right',
    marginTop: 152,
    minWidth: 200,
    position: 'sticky',
    top: 220,
    alignSelf: 'flex-start',
    // margin
  },
  sectionNavLink: {
    color: '#6400ff',
    fontSize: '20px',
    fontFamily: 'Avenir',
    WebkitTextStroke: '2px',
    margin: '12px 0',
    cursor: 'pointer',
  },
  sectionHeader: {
    fontSize: '24px',
    fontFamily: 'Avenir',
    WebkitTextStroke: '2px',
    margin: '32px 0 4px',
  },
  sectionText: {
    // fontSize: '14px',
    lineHeight: '36px',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  sectionSubHeader: {
    fontSize: '18px',
    fontFamily: 'Avenir',
    WebkitTextStroke: '1px',
    margin: '24px 0 4px',
  },
  section: {
    // transform: 'translateY(-120px)'
    // paddingTop: 200,
    // marginTop: -200,
    paddingTop: 72,
    marginTop: -72,
  }
});

function About() {
  const classes = useStyles();

  // const sections = useRef(null);
  const sections = useRef([createRef(), createRef(), createRef(), createRef()]);

  useLayoutEffect(() => {
    console.log(sections.current);
    // sections.current.scrollIntoView({behavior: 'smooth'});
  }, []);

  const scrollToSection = (ind) => () => {
    sections.current[ind].current.scrollIntoView({behavior: 'smooth'});

    // const scrolledY = window.scrollY;
    // console.log(scrolledY);
    // if (scrolledY) {
    //   window.scroll(0, scrolledY - 72);
    // }
    // window.scroll(0, 1000);
    // sections.current[ind].current.scrollTo({
    //   top: 100,
    //   // left: 100,
    //   behavior: 'smooth'
    // });
    // sections.current[ind].current.scrollTop = 0;
    // console.log(sections.current[ind].current.offsetTop);
  }

  return (
    <div>
    <div className={classes.root}>
      <Appbar selected={0} />
      <div className={classes.container}>
        <div className={classes.sectionNavContainer}>
          <div className={classes.sectionNavLink} onClick={scrollToSection(0)}>
            Summary
          </div>
          <div className={classes.sectionNavLink} onClick={scrollToSection(1)}>
            Do I Qualify?
          </div>
          <div className={classes.sectionNavLink} onClick={scrollToSection(2)}>
            Fixing My Credit
          </div>
          <div className={classes.sectionNavLink} onClick={scrollToSection(3)}>
            FAQs
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.header}>
            About Halo
          </div>
          <div className={classes.section} ref={sections.current[0]}>
            <div className={classes.sectionHeader}>
              Summary
            </div>
            <div className={classes.sectionText}>
              HALO is a new type of residential lease program designed for people who want to buy a house today, but don't currently qualify for mortgage financing. For aspiring buyers who are committed to repairing their credit, HALO provides the opportunity to lock-in a price on your dream home, rent it for up to 12 months, then purchase it from HALO when you are approved for a mortgage. HALO partners with licensed real estate agents and mortgage lenders in each state we serve to help you achieve your home ownership dream.
            </div>
          </div>
          <div className={classes.section} ref={sections.current[1]}>
            <div className={classes.sectionHeader}>
              Do I Qualify?
            </div>
            <div className={classes.sectionText}>
              Our clients have been through all sorts of financial difficulties, including bankruptcies, foreclosures, short-sales, medical issues and divorce. As long as you have a demonstrated commitment to repairing past credit issues and a pathway to mortgage qualification within 12 months, we can work with you. While every client's situation is different, applicants should meet the following minimum standards: Minimum 12 months from Bankruptcy discharge; 24 months from a Foreclosure or Short-Sale. Minimum Credit Score of 480, with a clear path to reaching 620 within 12 months (don't worry, we partner with industry credit repair veterans that can help you get there); Minimum gross household income before taxes of $4500/month, and applicants must be able to show 2 years tax returns by the time they apply for a mortgage. Based on standard FHA down payment guidelines, we require that you have cash equal to 3.5% - 5% of the purchase price available in order to enter the HALO program.
            </div>
          </div>
          <div className={classes.section} ref={sections.current[2]}>
            <div className={classes.sectionHeader}>
              Fixing My Credit
            </div>
            <div className={classes.sectionText}>
              Most HALO clients have credit scores below 600 and need help to qualify for a mortgage. This often includes disputing erroneous items on your credit report as well as settling outstanding collection items. HALO recognizes that many clients will need customized guidance and assistance to bring their scores up. For these clients, specialized HALO staff will provide a detailed roadmap that, if properly followed, will lead to mortgage-qualifying scores within 12 months. HALO is unique in our 100% commitment to helping you fix your credit problems.
            </div>
          </div>
          <div className={classes.section} ref={sections.current[3]}>
            <div className={classes.sectionHeader}>
              FAQs
            </div>
            <div className={classes.sectionSubHeader}>
              Thank you for your interest in the HALO program.
            </div>
            <div className={classes.sectionText}>
              HALO, the Home Access Lease Opportunity, was developed for people who are committed to repairing their credit in order to buy a home, but are currently unable to obtain a mortgage due to issues on their credit report. These issues typically include past foreclosures, bankruptcies, or missed bill payments, but are not limited to these problems.
            </div>
            <div className={classes.sectionSubHeader}>
              How does it work?
            </div>
            <div className={classes.sectionText}>
              The first step is to qualify for the program (see “How do I Apply” at the end of this FAQ sheet). Once you qualify, HALO will introduce you to a local, licensed real estate agent who will help you find the right home for you. HALO is not involved in selecting your home - that’s up to you!
            </div>
            <div className={classes.sectionSubHeader}>
              Where do you have houses available?
            </div>
            <div className={classes.sectionText}>
              HALO is currently available in major metro areas of AZ, GA, SC and TN. We don’t maintain an inventory of houses. Qualified HALO clients get to pick their own house from any available for sale.
            </div>
            <div className={classes.sectionSubHeader}>
              Are all homes eligible for HALO?
            </div>
            <div className={classes.sectionText}>
              HALO is available on houses and townhouses for sale at $150,000 or more. Condos, manufactured homes and land are not eligible. We do not require new homes, but we will order an inspection on the home you select and reserve the right to decline the home if there are issues that can’t, or won’t, be remedied by the seller.
            </div>
            <div className={classes.sectionSubHeader}>
              How much is the monthly rent?
            </div>
            <div className={classes.sectionText}>
              No two customers and no two homes are identical, so lease terms are determined on an individual basis and factor in the cost of the home, property taxes, HOA fees (if any) and insurance costs.  Rents start at $1,300/month.
            </div>
            <div className={classes.sectionSubHeader}>
              Does part of my rent go toward the purchase price of the home?
            </div>
            <div className={classes.sectionText}>
              Until you qualify for a mortgage, you are a tenant paying rent. Thus no part of your rent is credited when you purchase the home.
            </div>
            <div className={classes.sectionSubHeader}>
              How much house can I afford?
            </div>
            <div className={classes.sectionText}>
              As part of the approval process, a licensed mortgage lender will review your application and determine how much house you can afford. A general rule of thumb is 2.5 to 3 times your gross household annual income, but any other debts you have will also need to be considered (auto, credit cards, student loans, etc). Of course, you can always pick a house for less than the maximum! Once you select a home, you will be presented with a commitment letter detailing the lease terms and the price you will pay to buy the home from HALO when you get your mortgage.  This is when you will be required to make the Option payment, which will be refunded later if you buy the home from HALO.
            </div>
            <div className={classes.sectionSubHeader}>
              Once I find my house, what happens next?
            </div>
            <div className={classes.sectionText}>
              After you sign a commitment letter and make required payments, HALO will purchase the home and lease it to you for up to 12 months. In addition to the lease, you will sign a Purchase Option agreement, which guarantees your right to buy the home at a fixed price from HALO at any time during the life of the lease.  A typical Purchase Option agreement will provide two Option Purchase Prices at different dates (for example, 6 months and 12 months).  The Option Purchase Prices are fixed upfront and are based on HALO’s acquisition cost and how long you wait to buy the home.
            </div>
            <div className={classes.sectionSubHeader}>
              How much does the Purchase Option cost?
            </div>
            <div className={classes.sectionText}>
              The payment for the Purchase Option agreement is 3.5% - 5% of your final option Purchase Price (example: $7,000 - $10,000 on a $200,000 home). The amount of the option payment is determined by HALO based upon our financial review of your application and the property you select.  This option payment will be credited back to you if you purchase your home from HALO. This is designed to ensure that you are committed to buying the home, and that when you obtain a mortgage, your down payment funds are available.
            </div>
            <div className={classes.sectionSubHeader}>
              When do I need to pay HALO the option payment?
            </div>
            <div className={classes.sectionText}>
              The Purchase Option agreement is due as soon as HALO’s offer is accepted by the seller. This is also when you sign the commitment letter (see Once I find my house, what happens next? above).
            </div>
            <div className={classes.sectionSubHeader}>
              What happens if I still can’t qualify for a mortgage at the end of the lease?
            </div>
            <div className={classes.sectionText}>
              The #1 goal of the HALO program is to help our tenants become homeowners. As part of being accepted into the program, a licensed mortgage originator reviews your finances and believes that you will qualify for a mortgage by the time your lease ends. This means that in most cases, as long as you continue to make your payments on time, don’t make poor credit decisions, and follow the guidelines set out by the credit repair specialists, you should qualify for a mortgage by the end of your lease.
            </div>
            <div className={classes.sectionText}>
              In the event that you change your mind or do not stay on course to get a mortgage, the option payment is non-refundable. In this situation, HALO will use these funds to help offset part of the cost of re-selling your home. Your loss is HALO's loss, so we are true partners in this effort.
            </div>
            <div className={classes.sectionText}>
              However, HALO reserves the right to extend your lease if you still wish to purchase the home but need a little more time to qualify for a mortgage. In this case, a new review of your finances will be conducted to assess if you have been making your payments on time and otherwise complying with the steps necessary to repair your credit. Depending on the outcome of this review, HALO (at its sole discretion) may extend the contract on a month-to-month basis. If an extension is granted, the Purchase Price and Rent may increase accordingly.
            </div>
            <div className={classes.sectionSubHeader}>
              What if the house value goes up? Or goes down?
            </div>
            <div className={classes.sectionText}>
              Your future Purchase Price is fixed at the time HALO buys the home. This means that regardless of how much your home may go up in value during the life of the lease, your price is locked-in; HALO cannot sell your home to anyone else or change the price as long as you comply with the terms of your lease. Conversely, if the home value declines, your Purchase Price is still fixed as it is locked in at the time HALO purchases the home.
            </div>
            <div className={classes.sectionSubHeader}>
              What upfront fees will I pay?
            </div>
            <div className={classes.sectionText}>
              As soon as you are accepted into the HALO program, you are required to pay $500 to confirm your acceptance.  This $500 will be credited towards your first rent payment (if you drop out of the program, you will forfeit this payment).   After you find a home and HALO contracts to purchase it, HALO charges a processing fee equal to one-month's rent (example: $1750 rent = $1750 Processing Fee). This fee is used to help cover our expenses in bidding, appraising, inspecting and purchasing the home you have chosen, and is paid when you sign the Letter of Commitment.
            </div>
            <div className={classes.sectionSubHeader}>
              Is there an application fee?
            </div>
            <div className={classes.sectionText}>
              No. You can apply on our website after you have finished reading the FAQs (see How do I Apply? below).
            </div>
            <div className={classes.sectionSubHeader}>
              Are there any closing costs?
            </div>
            <div className={classes.sectionText}>
              HALO pays all closing costs at the time we purchase the home. You will pay all closing costs when you purchase the home from HALO at the end of the lease. The closing costs are usually driven by lender requirements and include appraisal, credit check, inspection, title & escrow fees and local transfer fees.
            </div>
            <div className={classes.sectionSubHeader}>
              What do I need to qualify?
            </div>
            <div className={classes.sectionText}>
              From our side, we are looking for clients who are committed to getting, and keeping, their finances in order so that they can qualify for a mortgage at the end of the lease. We look for clients who have a clear path to achieving these mutual goals. At a minimum, prospects should meet the following criteria in order to initiate an application:
            </div>
            <div className={classes.sectionText}>
              Minimum current credit score of 480
            </div>
            <div className={classes.sectionText}>
              Minimum household income of $4,500 per month (i.e. total pre-tax income from applicant + co-applicant)
            </div>
            <div className={classes.sectionText}>
              Available funds for option payment and fees
            </div>
            <div className={classes.sectionText}>
              Commitment to credit repair during the life of the lease which starts with paying all your bills on time
            </div>
            <div className={classes.sectionSubHeader}>
              Please note: while HALO works with licensed mortgage lenders as part of the approval process, HALO does not provide mortgage financing and does not guarantee that clients will obtain a mortgage at the end of their lease.
            </div>
            <div className={classes.sectionSubHeader}>
              Does HALO provide credit repair counseling as part of the program?
            </div>
            <div className={classes.sectionText}>
              HALO, along with our mortgage partners, will provide guidance on how to repair and improve your credit score. When you are accepted into the program, HALO specialists will deliver a detailed, customized credit repair roadmap that should, if properly followed, lead to a mortgage qualification within 12 months. HALO will also conduct periodical monitoring of your progress and offer additional / alternate guidance as required based on each client's progress. In some cases, HALO clients will be required to sign-up with a licensed credit repair professional and remain actively enrolled for the duration of their program.
            </div>
            <div className={classes.sectionSubHeader}>
              What if I qualify for a VA Loan? Do I still need to make an option payment?
            </div>
            <div className={classes.sectionText}>
              We love our Vets and are very proud to have helped many on their journey to homeownership. Even though VA loans do not require a down payment, HALO still requires that all clients pay a Purchase Option to ensure they are committed to purchasing the home.  Since this is credited back to you when you purchase the home, the Option fee can be used to pay closing costs and / or reduce the amount of the mortgage. Unlike conventional or FHA clients, VA clients will never pay more than 3.5% for their Option Fee.
            </div>
            <div className={classes.sectionSubHeader}>
              Who maintains the home during the life of the lease?
            </div>
            <div className={classes.sectionText}>
              Once we purchase a home and lease it to you, HALO considers it “your home”. Just as if you owned it already, you are responsible for maintaining the home during the life of the lease. However, maintenance should be low because we order a professional inspection prior to purchasing your home so that you (and HALO) know what you are getting into. Most repairs are made by the seller prior to our purchase of the house. Additionally, we purchase a Home Warranty, covering appliances, plumbing, heat and air conditioning repairs during the term of the lease.
            </div>
            <div className={classes.sectionSubHeader}>
              Can I make improvements to the home during the lease?
            </div>
            <div className={classes.sectionText}>
              Absolutely! HALO clients are free to upgrade the landscaping, paint the walls, install new carpet, etc. Everything you want to do to make the home yours. Alterations must be approved by HALO in writing, and must be conducted by licensed and insured contractors in compliance with local building codes. Major alterations (involving structural changes) are not permitted. For homes located in an HOA (Home Owners Association) any updates must also comply with HOA guidelines.
            </div>
            <div className={classes.sectionSubHeader}>
              Are pets allowed?
            </div>
            <div className={classes.sectionText}>
              Yes, subject to certain HALO restrictions and conditions imposed by our insurance carriers.
            </div>
            <div className={classes.sectionSubHeader}>
              HALO sounds great! But I don’t have the required cash available today. What can I do?
            </div>
            <div className={classes.sectionText}>
              You have taken the first step in deciding you want to embark on the home ownership journey. But in order to be a homeowner, you will need funds available for a down payment and closing costs, even if you don’t work with HALO. If you don’t have the funds yourself, the FHA allows them to be gifted to you. You may also be able to get these funds from your 401k at work. If that’s not an option, then you should set a monthly savings goal and save for your down payment while you continue to carefully manage your payments and improve your credit. Then check back with HALO when you have reached your goal. We are here to help!
            </div>
            <div className={classes.sectionSubHeader}>
              What if I have more questions?
            </div>
            <div className={classes.sectionText}>
              Please email us at info@haloprogram.com
            </div>
            <div className={classes.sectionSubHeader}>
              How do I Apply?
            </div>
            <div className={classes.sectionText}>
              Click here to start the application process.
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </div>
  );
}

export default About;
