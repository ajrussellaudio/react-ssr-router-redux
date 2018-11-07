import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
    <pre>
      Static Navbar {'<ul>'} with React Router {'<Link />'} components:
    </pre>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);

export default Navbar;
