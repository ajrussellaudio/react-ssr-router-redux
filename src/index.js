import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './App';

const routedApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App appLocation="Client" />
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(routedApp, document.getElementById('app'));
