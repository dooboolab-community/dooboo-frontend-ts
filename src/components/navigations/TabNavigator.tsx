import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from '@shared/Header';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';

@inject('store')
@observer
class TabNavigator extends Component<any> {
  public render() {
    return (
      <div>
        {
          this.props.store.loggedIn
          ? <div>
              <Header />
              <div style={{ marginTop: '20px' }}>
                <Route exact={true} path='/tab' component={Main} />
                <Route path='/tab/test' component={Test} />
                <Route path='/tab/readme' component={Readme} />
              </div>
            </div>
          : <Redirect to='/' />
        }
      </div>
    );
  }
}

export default TabNavigator;
