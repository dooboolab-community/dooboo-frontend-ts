import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Routes from './Routes/Routes';
import Store from './stores/appStore';

const store = new Store();
store.checkLoginStatus();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
