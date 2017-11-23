import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/Routes';

import { getSessionStorage } from '@utils/Functions';
import { statusCode } from '@constants/Data';

// IndexRoute는 처음으로 보여지는 페이지다
ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  document.getElementById('app'),
);
