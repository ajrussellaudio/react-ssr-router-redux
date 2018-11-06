import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Navbar from './components/Navbar';

const App = () => (
  <React.Fragment>
    <Navbar />
    <Counter />
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </React.Fragment>
);

export default App;
