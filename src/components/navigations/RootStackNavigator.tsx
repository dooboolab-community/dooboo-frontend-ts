import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from '@pages/Intro';
import TabNavigator from '@navigations/TabNavigator';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import HelloWorld from '@pages/HelloWorld';
import NotFound from '@pages/NotFound';
import Splash from '@pages/Splash';
import ProfileStart from '@pages/ProfileStart';

const RootStackNavigator: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div style={{textAlign: 'center', margin: '-8px -8px'}}>
        <Switch>
          <Route exact={true} path='/' component={Intro} />
          <Route path='/tab' component={TabNavigator} />
          <Route path='/helloworld' component={HelloWorld} />
          <Route path='/splash' component={Splash} />
          <Route path='/profile_start' component={ProfileStart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootStackNavigator;
