import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, RouteHandler, Link } from 'react-router';
import { isLoggedIn } from '@actions/index';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { destroySessionStorage } from '@utils/Functions';

class Navigation extends React.Component<any, any> {
  private navMenu: any;

  public goToLogin(e) {
    e.preventDefault();
    const props = this.props;
    props.dispatch(isLoggedIn(false));
    destroySessionStorage('user');
    browserHistory.replace('/');
  }

  public handleMenuDropDown(e) {
    e.preventDefault();
    const nav: any = this.navMenu;
    const className: any = nav.getAttribute('class');
    if (className === 'nav-right nav-menu') {
      nav.className = 'nav-right nav-menu is-active';
    } else {
      nav.className = 'nav-right nav-menu';
    }
  }
  public render() {
    const loggedIn = this.props.isLoggedIn;
    if (!loggedIn) {
      styles.memberLink.visibility = 'hidden';
    } else {
      styles.memberLink.visibility = 'visible';
    }
    return (
      <nav className='nav'>
        <div className='nav-left'>
          <Link className='nav-item is-brand' to={loggedIn ? '/' : '/login'}>React Express Webpack2</Link>
        </div>
        <span className='nav-toggle' onClick={(e) => this.handleMenuDropDown(e)}>
        <span/><span/><span/></span>

        <div className='nav-right nav-menu' ref={(v) => this.navMenu = v}>
          <Link to={loggedIn ? '/' : '/login'} className='nav-item' style={styles.memberLink}>Members</Link>
          <span className='nav-item'>
            <Link to='/logout' className='nav-item button' onClick={(e) => this.goToLogin(e)}/>
          </span>
        </div>
      </nav>
    );
  }
}

const styles: any = {
  memberLink: {},
};

const mapState = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapState)(Navigation);
