import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';

const styles: any = {
  container: {
    position: 'absolute',
    bottom: 0,
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

@Radium
class Header extends Component<any> {
  public render() {
    return (
      <div style={styles.container}>
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
    );
  }
}

export default Header;
