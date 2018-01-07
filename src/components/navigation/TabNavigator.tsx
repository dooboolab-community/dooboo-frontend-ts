import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Tab1 from '@screen/Tab1';
import Tab2 from '@screen/Tab2';
import Tab3 from '@screen/Tab3';
import Tab4 from '@screen/Tab4';
import Tab5 from '@screen/Tab5';

const styles = require('./TabNavigator.css');

@inject('store')
@observer
class TabNavigator extends Component<any> {
  public render() {
    return (
      <div>
        {
          !this.props.store.user.loggedIn
          ? <Redirect to='/' />
          : <div className={styles.container}>
              <div className={styles.content}>
                <Switch>
                  <Route path='/tab/tab1' component={Tab1} />
                  <Route path='/tab/tab2' component={Tab2} />
                  <Route path='/tab/tab3' component={Tab3} />
                  <Route path='/tab/tab4' component={Tab4} />
                  <Route path='/tab/tab5' component={Tab5} />
                </Switch>
              </div>
              <div className={styles.tabContainer}>
                <NavLink
                  exact={true}
                  to='/tab/tab1'
                  key={0}
                  className={styles.tab}
                  activeclassname={styles.tabActive}
                >
                  Tab1
                </NavLink>
                <NavLink
                  to='/tab/tab2'
                  key={1}
                  className={styles.tab}
                  activeclassname={styles.tabActive}
                >
                  Tab2
                </NavLink>
                <NavLink
                  to='/tab/tab3'
                  key={2}
                  className={styles.tab}
                  activeclassname={styles.tabActive}
                >
                  Tab3
                </NavLink>
                <NavLink
                  exact={true}
                  to='/tab/tab4'
                  key={3}
                  className={styles.tab}
                  activeclassname={styles.tabActive}
                >
                  Tab4
                </NavLink>
                <NavLink
                  exact={true}
                  to='/tab/tab5'
                  key={4}
                  className={styles.tab}
                  activeclassname={styles.tabActive}
                >
                  Tab 5
                </NavLink>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default TabNavigator;
