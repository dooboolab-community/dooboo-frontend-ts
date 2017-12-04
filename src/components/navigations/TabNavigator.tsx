import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from '@shared/Header';
import Tab1 from '@pages/Tab1';
import Tab2 from '@pages/Tab2';
import Tab3 from '@pages/Tab3';
import Tab4 from '@pages/Tab4';
import Tab5 from '@pages/Tab5';

@inject('store')
@observer
class TabNavigator extends Component<any> {
  public render() {
    return (
      <div>
        {
          !this.props.store.loggedIn
          ? <Redirect to='/' />
          : <div>
              <div style={{ marginTop: '20px' }}>
                <Switch>
                  <Route path='/tab/tab1' component={Tab1} />
                  <Route path='/tab/tab2' component={Tab2} />
                  <Route path='/tab/tab3' component={Tab3} />
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
