import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from '@reducers/index';

import Main from '@pages/Main';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

import { getSessionStorage } from '@utils/Functions';
import { resCode } from '@constants/Data';

const scss = require('@css/app.scss');
const store: any = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

// Create an enhanced history that syncs navigation events with the store
const history: any = syncHistoryWithStore(browserHistory, store);

console.log("state : " + JSON.stringify(store.getState()));

// IndexRoute는 처음으로 보여지는 페이지다
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Login }/>
      <Route path="signup" component={ Signup }/>
    </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
