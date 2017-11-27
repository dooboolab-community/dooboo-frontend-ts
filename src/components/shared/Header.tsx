import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import Prefixer from 'inline-style-prefixer';

const headerStyle: any = {
  container: {
    marginTop: '-8px',
    marginLeft: '-8px',
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
    fontSize: '20px',
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

const prefixer = new Prefixer();
const styles = prefixer.prefix(headerStyle);

@Radium
class Header extends Component<any> {
  public render() {
    return (
      <div style={styles.container}>
          <NavLink
            exact={true}
            to='/root'
            key={0}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            Main
          </NavLink>
          <NavLink
            to='/root/readme'
            key={1}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            Read Me
          </NavLink>
          <NavLink
            to='/root/test'
            key={2}
            style={styles.tab}
            activeStyle={styles.tab.active}
          >
            Test Page
          </NavLink>
      </div>
    );
  }
}

export default Header;
