import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { readFile } from 'fs';
import App from '../src/App';
import { store } from '../src/redux/store';

const app = express();
const port = process.env.PORT || 3030;

const respondWithHtml = (app, res) => {
  const pathToHtmlFile = './src/index.html';
  readFile(pathToHtmlFile, 'utf8', (err, html) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Nae luck pal');
    }

    const htmlWithApp = html.replace(
      '<div id="app"></div>',
      `<div id="app">${app}</div>
        <script src="/assets/bundle.js"></script>`
    );

    return res.send(htmlWithApp);
  });
};

app.use('/assets', express.static('./dist'));

app.get('/*', (req, res) => {
  const context = {};

  const clientApp = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App appLocation="Server" />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
  } else {
    respondWithHtml(clientApp, res);
  }
});

app.listen(port, () => console.log('Server is listening on port', port));
