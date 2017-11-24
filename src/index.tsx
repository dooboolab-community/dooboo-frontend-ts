import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Routes from './Routes/Routes';
import Store from './Store/appStore';

import { getSessionStorage } from '@utils/Functions';
import { statusCode } from '@constants/Data';

const store = new Store();

// IndexRoute는 처음으로 보여지는 페이지다
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
