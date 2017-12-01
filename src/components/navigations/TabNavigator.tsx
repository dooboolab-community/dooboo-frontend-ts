import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from '@shared/Header';
import Main from '@pages/Main';
import Test from '@pages/Test';
import Readme from '@pages/Readme';
import Tab4 from '@pages/Tab4';
import Tab5 from '@pages/Tab5';

@inject('store')
@observer
class TabNavigator extends Component<any> {
  constructor(props) {
    super(props);
    console.log('tab navigator called');
  }
  public render() {
    return (
      <div>
        {
          !this.props.store.loggedIn
          ? <Redirect to='/' />
          : <div>
              <div style={{ marginTop: '20px' }}>
                <Switch>
                  <Route path='/tab/tab1' component={Main} />
                  <Route path='/tab/tab2' component={Test} />
                  <Route path='/tab/tab3' component={Readme} />
                  <Route path='/tab/tab4' component={Tab4} />
                  <Route path='/tab/tab5' component={Tab5} />
                </Switch>
              </div>
              <Header />
            </div>
        }
      </div>
    );
  }
}

export default TabNavigator;
