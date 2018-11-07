import React from 'react';
import PropTypes from 'prop-types';

import Counter from './components/Counter';
import RenderLocation from './components/RenderLocation';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import './App.css';

const App = ({ appLocation }) => (
  <React.Fragment>
    <Navbar />
    <RenderLocation here={appLocation} />
    <Counter />
    <Routes />
  </React.Fragment>
);

App.propTypes = {
  appLocation: PropTypes.string
};

export default App;
