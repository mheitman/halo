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
    <Router>
      <Switch>
        <Route exact path='/halo'>
          <Landing />
        </Route>
        <Route path='/halo/about'>
          <About />
        </Route>
        <Route path='/halo/clients'>
          <Clients />
        </Route>
        <Route path='/halo/partners'>
          <Partners />
        </Route>
        <Route path='/halo/contact'>
          <Contact />
        </Route>
        <Route path='/halo/apply'>
          <Apply />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
