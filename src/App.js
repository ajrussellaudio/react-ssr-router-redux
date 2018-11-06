import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import './App.css';

const App = ({ appLocation }) => (
  <React.Fragment>
    <pre>
      Static Navbar {'<ul>'} with React Router {'<Link />'} components:
    </pre>
    <Navbar />
    <pre>
      Shows whether we are looking at client or server side rendered code:
      {'\n'}
      Causes mismatch error in console because {'"Server"'} text on server is
      {'\n'}
      replaced with {'"Client"'} text in client.
    </pre>
    <h3>Rendered on {appLocation}</h3>
    <pre>Redux-controlled counter component:</pre>
    <Counter />
    <pre>Content loaded from Routes:</pre>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </React.Fragment>
);

App.propTypes = {
  appLocation: PropTypes.string
};

export default App;
