import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Appbar from './Appbar.js';
import Button from './Button.js';
import Footer from './Footer.js';

import image0 from './assets/clients/0.jpeg';
import image1 from './assets/clients/1.jpeg';
import image2 from './assets/clients/2.jpeg';
import image3 from './assets/clients/3.jpeg';
import image4 from './assets/clients/4.jpeg';
import image5 from './assets/clients/5.jpeg';
import image6 from './assets/clients/6.jpeg';
import image7 from './assets/clients/7.jpeg';
import image8 from './assets/clients/8.jpeg';
import image9 from './assets/clients/9.jpeg';
import image10 from './assets/clients/10.jpeg';
import image11 from './assets/clients/11.png';
import image12 from './assets/clients/12.jpeg';
import image13 from './assets/clients/13.jpeg';

// import './index.css';

// import skyrise from './assets/skyrise.jpg'

const clients = [
	{
		image: image0,
		text: `THANK YOU Halo for making this possible...we couldn't have done it without you!!!!`,
		name: 'Kristine, GA',
	},
	{
		image: image1,
		text: `If there's anyone who can make a difference in your life its David, my wife and I have been renting for the past 6 years. Our credit scores shattered by medical bills. No hope of ever owning a home again. Everyone we talked to told us it was impossible. Until we spoke with David. He listened to our story and told us not to give up hope, he'll help us find a way. David came through and played Santa Claus this past Christmas and approved us for a beautiful home in AZ. David is a special man, he's honest, up front and personal. He makes dreams come through.`,
		name: 'Michael R., AZ',
	},
	{
		image: image2,
		text: `As a 16 year licensed real estate agent, I am a supporter of this program. We were able to close in 2 weeks! Chris was accessible and a pleasure to work with. I look forward to closing more transactions with HALO!`,
		name: 'Valencia W., GA',
	},
	{
		image: image3,
		text: `Working with David and Beth at Halo exceeded any and all of my expectations. They are very professional, organized and very accessible. The process was very fast and easy. In the last past TWO weeks I was able to put TWO clients in there dream home. My clients were very excited, thankful and grateful for the HALO Program. I would highly recommend any and all my clients looking to purchase a home to HALO. Again, David and Beth thank you for "Making the Impossible, Possible". I look forward to our next deal.`,
		name: 'Toya B., Realtor(r), AZ',
	},
	{
		image: image4,
		text: `Absolutely blessed to have these guys in our lives thank you David for making our dream come true! Highly recommend these guys honest and very helpful and make it possible!`,
		name: 'Tina K., GA',
	},
	{
		image: image5,
		text: `I had the pleasure working with HALO who have really been amazing in going out of their way to help us where we are. We found that HALO was the right program for us at the moment. They made this process so seamless for me. I would recommend this program to anyone and they will not stop until you have found the exact home that you are looking for. Thanks again the HALO Program team for helping families out there.`,
		name: 'Samuel K., GA',
	},
	{
		image: image6,
		text: `Thanks to David and his team a dream for my family and I came true. Owning a home is something I never thought would happen for me and this morning I got to see a smile on my children face because they are so happy with their new rooms. Thank you so much David and the Halo team. You guys really are making a difference in the world.`,
		name: 'Rickey E., AZ',
	},
	{
		image: image7,
		text: `HALO has been a complete blessing to my family. I knew right away that Halo was a caring company, when I received a call on a Sunday. They were very pleasant, knowing that we only had 10 days to find a house, and close on a house!!. HALO was very encouraging, and positive about the whole situation. The whole process with Halo was very none stressful, the communication was very good. Halo maid it possible we closed, and we were in our new home within 9 days!! Halo has been very informative, and very pleasant. We highly recommend HALO!!`,
		name: 'Nora R., TX',
	},
	{
		image: image8,
		text: `A remarkable company! HALO is providing me the opportunity to attain a goal I never dreamed I could on my own. Home ownership was not something I thought in the realm of possibility given my credit history and the fact that I am a single income household. Working with my realtor, my mortgage company, and HALO has provided that, and also a sense of accomplishment. They have cheered me on and repeatedly affirmed that my goal was possible. It was a seamless process. My stress level could have been unbearable but I was reassured over and over by all involved. These wonderful people take the time to help those who would likely otherwise never realize the dream of home ownership. What they do is a great thing. I am humbled and beyond grateful to have been afforded this chance to make my dream come true. HALO is a fitting name!!! THANKS TO ALL!!!!`,
		name: 'Pamela M., AZ',
	},
	{
		image: image9,
		text: `Just completed the purchase of our home from HALO! Very happy and so thankful to David and his team for making this dream come true! I highly recommend this company to anyone looking for some help buying a house.`,
		name: 'Milton V., NC',
	},
	{
		image: image10,
		text: `Great group of people to work with. They make the process very enjoyable and stress free.`,
		name: 'Robert D., TX',
	},
	{
		image: image11,
		text: `HALO is a great option for those with credit problems. They purchased a new build home for my client, and have been working with her to get her credit repaired so she can buy the house back from them. She is settling into her new home, following the path they helped her pave, and I look forward to working with David and his team again. They are very professional, and care about the clients. I recommend them to anyone without reservation.`,
		name: 'Rebecca A., Realtor(R), AZ',
	},
	{
		image: image12,
		text: `We love Halo and David of course. He was able to help us build the foundation for our future! Highly recommended.`,
		name: 'Gene K., AZ',
	},
	{
		image: image13,
		text: `We have been so BLESSED by this company... Halo has really been amazing in going out of his way to meet us where we are and has gone above and beyond. We have faced incredible trials this year with the health of our son and his cancer diagnosis and Halo was brought to Florida in perfect time... I just wept for the miracle it was- being displaced and divided as a family- having great credit then getting hit with medical bills that was to our detriment in purchasing a home. We were scooped up by Halo and since then we have just been in awe of the true compassion they have shown and efficiency in getting us into our dream home as soon as possible - To be together again as a family under one roof. Halo has been a blessing beyond words to our family and we are truly grateful for the opportunity that they have given us. Home sweet home. Thank you Halo. The Lord has truly used you to move a mountain.`,
		name: 'LesLea E., FL',
	},
]

const useStyles = makeStyles({
  button: {
    marginLeft: 32,
  },
  client: {
  	// width: 280,
  	margin: '16px 8px',
  	// margin: '16px 0',
  	display: 'inline-block',
    borderRadius: '12px',
  	boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
  },
  content: {
    // display: 'flex',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // flexWrap: 'wrap',
    marginTop: 48,

    columnCount: 3,
    // columnGap: '12px',
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: '42px',
    marginTop: 48,
    WebkitTextStroke: '3px',
  },
  image: {
  	width: '100%',
  },
  root: {
    margin: '0 calc(10% + 32px)',
    maxWidth: 1200,
    position: 'relative',
    top: 72,
  },
  text: {
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(0, 0, 0, 0.7)',
    padding: 24,
  },
  name: {
  	textAlign: 'right',
  	padding: '24px 16px',
  	fontFamily: 'Avenir',
    WebkitTextStroke: '1px',
  }
});

function Clients() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        Happy Clients
      </div>
      <Appbar selected={1} />
      <div className={classes.content}>
	      {clients.map((client) => (
	      	<div className={classes.client}>
	      		<img className={classes.image} src={client.image} />
	      		<div className={classes.text}>
	      			{client.text}
	      		</div>
	      		<div className={classes.name}>
	      			- {client.name}
	      		</div>
	      	</div>
	      ))}
	    </div>
    </div>
  );
}

export default Clients;
