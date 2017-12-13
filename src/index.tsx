import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { StyleRoot } from 'radium';

import RootStackNavigator from '@navigations/RootStackNavigator';
import Store from '@stores/appStore';
import Localization from '@models/Localization';

// tslint:disable-next-line:no-var-requires
require('@css/app.css');

const store = new Store();
store.user.checkLoginStatus();
console.log(store.user.loggedIn);

if (navigator) {
  const userLang: string = navigator.language;
  const localization = new Localization();
  localization.setLocale(userLang);
  store.setLocale(localization);
}

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <RootStackNavigator />
    </StyleRoot>
  </Provider>,
  document.getElementById('app'),
);
