import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import RootStackNavigator from '@navigations/RootStackNavigator';
import Store from './stores/appStore';

// tslint:disable-next-line:no-var-requires
require('@css/app.css');

const store = new Store();
store.checkLoginStatus();

ReactDOM.render(
  <Provider store={store}>
    <RootStackNavigator />
  </Provider>,
  document.getElementById('app'),
);
