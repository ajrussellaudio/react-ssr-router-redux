import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';

const Routes = () => (
  <React.Fragment>
    <pre>Content loaded from Routes:</pre>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </React.Fragment>
);

export default Routes;
