import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Radium from 'radium';
import Prefixer from 'inline-style-prefixer';

import Header from '@shared/Header';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';

@inject('store')
@observer
@Radium
class Navigation extends Component<any> {
  public render() {
    return (
      <div>
        {
          this.props.store.loggedIn
          ? <div>
              <Header />
              <div style={{ marginTop: '20px' }}>
                <Route exact={true} path='/root' component={Main} />
                <Route path='/root/test' component={Test} />
                <Route path='/root/readme' component={Readme} />
              </div>
            </div>
          : <Redirect to='/' />
        }
      </div>
    );
  }
}

export default Navigation;
