import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './About';
import Apply from './Apply';
import Clients from './Clients';
import Contact from './Contact';
import Partners from './Partners';
import Landing from './Landing';

function App() {
  // const classes = useStyles();

  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
        <Route path='/partners'>
          <Partners />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/apply'>
          <Apply />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
