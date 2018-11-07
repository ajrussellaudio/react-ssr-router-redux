import React from 'react';
import PropTypes from 'prop-types';

const RenderLocation = ({ here }) => (
  <React.Fragment>
    <pre>
      Shows whether we are looking at client or server side rendered code:
      {'\n'}
      Causes mismatch error in console because {'"Server"'} text on server is
      {'\n'}
      replaced with {'"Client"'} text in client.
    </pre>
    <h3>Rendered on {here}</h3>
  </React.Fragment>
);

RenderLocation.propTypes = {
  here: PropTypes.string
};

export default RenderLocation;
