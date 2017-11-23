import React from 'react';
import { Route } from 'react-router-dom';

import Main from '@pages/Main';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

const Routes: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Route path='/' component={Main} />
      {/* <Route path='signup' component='Signup' /> */}
      {/* <Route path='login' component='Login' /> */}
    </div>
  );
};

export default Routes;
