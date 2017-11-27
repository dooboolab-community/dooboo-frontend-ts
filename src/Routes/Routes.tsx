import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '@pages/Login';
import Navigation from '@navigations/RootStackNavigator';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import HelloWorld from '@pages/HelloWorld';
import ErrorPage from '@pages/ErrorPage';
import Splash from '@pages/Splash';

const Routes: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div style={{textAlign: 'center'}}>
        <Switch>
          <Route exact={true} path='/' component={Login} />
          <Route path='/root' component={Navigation} />
          <Route path='/helloworld' component={HelloWorld} />
          <Route path='/splash' component={Splash} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
