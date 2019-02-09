import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

@inject('store')
class RootStackNavigator extends Component<any> {
  public componentDidMount() {
    console.log(`userLang: ${this.props.store.locale.LANG}`);
  }

  public render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact={true} path='/' component={Intro} />
            <Route component={Temp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootStackNavigator;
