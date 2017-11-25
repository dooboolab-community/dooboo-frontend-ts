import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';

const styles: any = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#d2d2d2',
  },
  tab: {
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
    pointer: 'cursor',


    ':hover': {
      backgroundColor: 'rgb(13, 157, 197)'
    },

    ':active': {
      background: 'rgb(13, 157, 197)'
    }
  }
}

@Radium
class Header extends Component<any> {
  render() {
    return (
      <div style={styles.container}>
        <NavLink to='/readme' style={styles.tab}>Read Me</NavLink>
        <NavLink to='test' style={styles.tab}>Test Page</NavLink>
      </div>
    );
  }
}

export default Header;