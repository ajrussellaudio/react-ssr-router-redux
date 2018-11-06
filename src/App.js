import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Navbar from './components/Navbar';

const App = ({ appLocation }) => (
  <React.Fragment>
    <Navbar />
    <Counter />
    <h3>Rendered on {appLocation}</h3>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </React.Fragment>
);

App.propTypes = {
  appLocation: PropTypes.string
};

export default App;
