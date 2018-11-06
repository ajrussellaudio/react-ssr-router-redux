import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const history = process.env.BROWSER ? createHistory() : createMemoryHistory();

const initialState = { counter: 10 };

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export { history, store };
