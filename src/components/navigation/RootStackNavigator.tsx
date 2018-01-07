import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import Intro from '@screen/Intro';
import TabNavigator from '@navigation/TabNavigator';
import NotFound from '@screen/NotFound';
import Splash from '@screen/Splash';
import SignUp from '@screen/SignUp';

@inject('store')
class RootStackNavigator extends Component<any> {
  public componentDidMount() {
    console.log(`userLang: ${this.props.store.locale.getLocale()}`);
  }

  public render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact={true} path='/' component={Intro} />
            <Route path='/tab' component={TabNavigator} />
            <Route path='/none_tab' component={NotFound} />
            <Route path='/splash' component={Splash} />
            <Route path='/signup' component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootStackNavigator;
