import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '@navigations/RootStackNavigator';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import HelloWorld from '@pages/HelloWorld';
import ErrorPage from '@pages/ErrorPage';

const Routes: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navigation />
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/test' component={Test} />
              <Route path='/readme' component={Readme} />
              <Route path='/helloworld' component={HelloWorld} />
              {/* <Route path='signup' component='Signup' /> */}
              {/* <Route path='login' component='Login' /> */}
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
