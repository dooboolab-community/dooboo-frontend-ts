import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '@pages/Login';
import TabNavigator from '@navigations/TabNavigator';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import HelloWorld from '@pages/HelloWorld';
import NotFound from '@pages/NotFound';
import Splash from '@pages/Splash';

const RootStackNavigator: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div style={{textAlign: 'center'}}>
        <Switch>
          <Route exact={true} path='/' component={Login} />
          <Route path='/tab' component={TabNavigator} />
          <Route path='/helloworld' component={HelloWorld} />
          <Route path='/splash' component={Splash} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootStackNavigator;
