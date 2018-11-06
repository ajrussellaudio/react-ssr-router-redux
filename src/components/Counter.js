import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.1/node_modules/redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter = ({ counter, incrementCounter, decrementCounter }) => {
  return (
    <React.Fragment>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>+1</button>
      <button onClick={decrementCounter}>-1</button>
    </React.Fragment>
  );
};

Counter.propTypes = {
  counter: PropTypes.number,
  incrementCounter: PropTypes.func,
  decrementCounter: PropTypes.func
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCounter, decrementCounter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
