import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '@pages/Main';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Test from '@pages/Test';

const Routes: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/test' component={Test} />
        {/* <Route path='signup' component='Signup' /> */}
        {/* <Route path='login' component='Login' /> */}
      </div>
    </BrowserRouter>
  );
};

export default Routes;
