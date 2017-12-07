import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Radium from 'radium';

import Tab1 from '@pages/Tab1';
import Tab2 from '@pages/Tab2';
import Tab3 from '@pages/Tab3';
import Tab4 from '@pages/Tab4';
import Tab5 from '@pages/Tab5';

@inject('store')
@observer
@Radium
class TabNavigator extends Component<any> {
  public render() {
    return (
      <div>
        {
          !this.props.store.loggedIn
          ? <Redirect to='/' />
          : <div style={styles.container}>
              <div style={{ marginTop: '20px' }}>
                <Switch>
                  <Route path='/tab/tab1' component={Tab1} />
                  <Route path='/tab/tab2' component={Tab2} />
                  <Route path='/tab/tab3' component={Tab3} />
                  <Route path='/tab/tab4' component={Tab4} />
                  <Route path='/tab/tab5' component={Tab5} />
                </Switch>
              </div>
              <div style={styles.tabContainer}>
                <NavLink
                  exact={true}
                  to='/tab/tab1'
                  key={0}
                  style={styles.tab}
                  activeStyle={styles.tab.active}
                >
                  Tab1
                </NavLink>
                <NavLink
                  to='/tab/tab2'
                  key={1}
                  style={styles.tab}
                  activeStyle={styles.tab.active}
                >
                  Tab2
                </NavLink>
                <NavLink
                  to='/tab/tab3'
                  key={2}
                  style={styles.tab}
                  activeStyle={styles.tab.active}
                >
                  Tab3
                </NavLink>
                <NavLink
                  exact={true}
                  to='/tab/tab4'
                  key={3}
                  style={styles.tab}
                  activeStyle={styles.tab.active}
                >
                  Tab4
                </NavLink>
                <NavLink
                  exact={true}
                  to='/tab/tab5'
                  key={4}
                  style={styles.tab}
                  activeStyle={styles.tab.active}
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

const styles: any = {
  container: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#d2d2d2',
    alignItems: 'stretch',
  },
  tab: {
    width: '33vw',
    textAlign: 'center',
    color: '#fff',
    fontSize: '15px',
    pointer: 'cursor',
    lineHeight: '50px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'rgb(13, 157, 197)',
    },
    active: {
      background: 'rgb(13, 157, 197)',
    },
  },
};

export default TabNavigator;
