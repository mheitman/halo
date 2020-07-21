import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";

import About from './About';
import Apply from './Apply';
import Clients from './Clients';
import Contact from './Contact';
import Landing from './Landing';
import Partners from './Partners';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <ScrollToTop />
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
