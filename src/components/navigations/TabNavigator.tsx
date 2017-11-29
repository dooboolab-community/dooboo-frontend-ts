import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from '@shared/Header';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import FourthTab from '@pages/FourthTab';
import FifthTab from '@pages/FifthTab';

@inject('store')
@observer
class TabNavigator extends Component<any> {
  public render() {
    return (
      <div>
        {
          !this.props.store.loggedIn
          ? <Redirect to='/' />
          : !this.props.store.userNickname
          ? <Redirect to='/profile_start' />
          : <div>
              <div style={{ marginTop: '20px' }}>
                <Route exact={true} path='/tab' component={Main} />
                <Route path='/tab/test' component={Test} />
                <Route path='/tab/readme' component={Readme} />
                <Route path='/tab/fourth' component={FourthTab} />
                <Route path='/tab/fifth' component={FifthTab} />
              </div>
              <Header />
            </div>
        }
      </div>
    );
  }
}

export default TabNavigator;
