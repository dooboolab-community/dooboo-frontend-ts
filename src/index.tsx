import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { StyleRoot } from 'radium';

import RootStackNavigator from '@navigations/RootStackNavigator';
import Store from './stores/appStore';

// tslint:disable-next-line:no-var-requires
require('@css/app.css');

const store = new Store();
store.checkLoginStatus();

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <RootStackNavigator />
    </StyleRoot>
  </Provider>,
  document.getElementById('app'),
);
