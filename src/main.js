/** app.js **/

'use strict';

//imports
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// build index.html
require('file-loader?name=[name].[ext]!../index.html');

//app container element
const rootEl = document.getElementById('app-content');

//render application -
ReactDom.render(<App/>, rootEl);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
