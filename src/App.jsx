/** App component **/
'use strict';

//imports
import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import configureStore from './store';

//sagas
import rootSaga from './sagas';

//containers
import Layout from './containers/Layout';

//global styles
import './assets/css/app.global.css';
import './assets/css/common.global.css';

const store = configureStore();

//run the saga
store.runSaga(rootSaga);

class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Layout/>
    </Provider>);
  }
}

export default App
