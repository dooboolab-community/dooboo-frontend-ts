import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from '@pages/Intro';
import TabNavigator from '@navigations/TabNavigator';
import HelloWorld from '@pages/HelloWorld';
import NotFound from '@pages/NotFound';
import Splash from '@pages/Splash';
import SignUp from '@pages/SignUp';

const RootStackNavigator: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div style={{textAlign: 'center', margin: '-8px -8px'}}>
        <Switch>
          <Route exact={true} path='/' component={Intro} />
          <Route path='/tab' component={TabNavigator} />
          <Route path='/helloworld' component={HelloWorld} />
          <Route path='/splash' component={Splash} />
          <Route path='/signup' component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootStackNavigator;
