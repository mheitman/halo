import React, { useRef, createRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Appbar';


const useStyles = makeStyles({
  container: {
    display: 'none',
    paddingBottom: 120,
  },
  content: {
    padding: '72px 64px',
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: '42px',
    WebkitTextStroke: '3px',
  },
  root: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    position: 'relative',
    top: 72,
  },
  section: {
    marginTop: -72,
    paddingTop: 72,
  },
  sectionHeader: {
    fontFamily: 'Avenir',
    fontSize: '24px',
    margin: '32px 0 4px',
    WebkitTextStroke: '2px',
  },
  sectionNavContainer: {
    alignSelf: 'flex-start',
    marginTop: 152,
    minWidth: 200,
    position: 'sticky',
    textAlign: 'right',
    top: 220,
  },
  sectionNavLink: {
    color: '#000a4a',
    cursor: 'pointer',
    fontSize: '20px',
    fontFamily: 'Avenir',
    margin: '12px 0',
    WebkitTextStroke: '2px',
  },
  sectionSubHeader: {
    fontFamily: 'Avenir',
    fontSize: '18px',
    margin: '24px 0 4px',
    WebkitTextStroke: '1px',
  },
  sectionText: {
    color: 'rgba(0, 0, 0, 0.7)',
    lineHeight: '36px',
  },
});


function Partners() {
  const classes = useStyles();
  const sections = useRef([createRef(), createRef(), createRef()]);

  const scrollToSection = (ind) => () => {
    sections.current[ind].current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={classes.root}>
      <Appbar selected={2} />
      <div className={classes.container}>
        <div className={classes.sectionNavContainer}>
          <div className={classes.sectionNavLink} onClick={scrollToSection(0)}>
            Mortgage Lenders
          </div>
          <div className={classes.sectionNavLink} onClick={scrollToSection(1)}>
            Real Estate Agents
          </div>
          <div className={classes.sectionNavLink} onClick={scrollToSection(2)}>
            Credit Repair Specialists
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.header}>
            Partners
          </div>
          <div className={classes.section} ref={sections.current[0]}>
            <div className={classes.sectionHeader}>
              Mortgage Lenders
            </div>
            <div className={classes.sectionText}>
              The HALO program allows mortgage lenders to maintain their relationship with an otherwise non-qualified borrower, giving them time to repair their credit and secure a mortgage. Brokers and lenders tell us all the time of their frustrations knowing that a prospective borrower is only months from qualifying for a mortgage. Yet there are no options but to wait, and hope that their client comes back when their credit is repaired. By referring prospects to HALO, lenders are able to build their mortgage pipeline and assist in providing their clients with a valuable path to homeownership.
            </div>
          </div>
          <div className={classes.section} ref={sections.current[1]}>
            <div className={classes.sectionHeader}>
              Real Estate Agents
            </div>
            <div className={classes.sectionText}>
              Real Estate Agents understand better than anyone the difficulties of today's rigid lending standards: Your clients have the income, the stability and the desire to become homeowners, yet blemishes remain on their FICO score that preclude them from qualifying for a mortgage. HALO provides agents with a unique and valuable program to get their clients into their desired home today, rather than hoping they will come back when their credit is repaired.
            </div>
          </div>
          <div className={classes.section} ref={sections.current[2]}>
            <div className={classes.sectionHeader}>
              Credit Repair Specialists
            </div>
            <div className={classes.sectionText}>
              Good, honest credit advice is key to helping hard working families regain control of their FICO scores. HALO was born out of the belief that good people are being left out of the rebound in U.S. housing, as mortgages remain out of reach to all but the most qualified buyers. Credit repair counselors play a crucial role in helping their clients get, and keep, their financial house in order. If you believe you have clients that can’t currently qualify for a mortgage but are on a path to reaching their goals, we want to work with you to put your clients into a house today while they continue working with you on repairing their credit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
