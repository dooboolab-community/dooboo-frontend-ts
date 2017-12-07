import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import Radium from 'radium';

import { colors, effects } from '@utils/styles';
import CooniBtn from '@shared/CooniBtn';

import Intro from '@pages/Intro';
import TabNavigator from '@navigations/TabNavigator';
import HelloWorld from '@pages/HelloWorld';
import NotFound from '@pages/NotFound';
import Splash from '@pages/Splash';
import SignUp from '@pages/SignUp';

@autobind
@inject('store')
class RootStackNavigator extends Component<any> {
  public componentDidMount() {
    console.log(`userLang: ${this.props.store.getLocale()}`);
  }

  public render() {
    return (
      <BrowserRouter>
        <div style={{textAlign: 'center'}}>
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
  }
}

export default RootStackNavigator;
