import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';
import initialState from '../initialState';

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return state + 1;
    }
    case DECREMENT_COUNTER: {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}
