import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, RouteHandler, Link } from 'react-router';
import { checkLogin } from '../apis/authAPi';
import { isLoggedIn } from '../actions';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { destroySessionStorage } from '../global/functions';

class Navigation extends React.Component {
    goToLogin(e){
        e.preventDefault();
        var props = this.props;
        props.dispatch(isLoggedIn(false));
        destroySessionStorage('user');
        browserHistory.replace('/login');
    }
    handleMenuDropDown (e){
        e.preventDefault();
        var nav = this.refs.navMenu;
        var className = nav.getAttribute("class");
        if(className == "nav-right nav-menu") {
            nav.className = "nav-right nav-menu is-active";
        } else {
            nav.className = "nav-right nav-menu";
        }
    }
    render(){
      var loggedIn = this.props.isLoggedIn.value;  
      var style = {};
      if(!loggedIn){
        style = {
            visibility : 'hidden'
        }
      } else {
          style = {
              visibility : 'visible'
          }
      }
      return (
        <nav className="nav">
            <div className="nav-left">
                <Link className="nav-item is-brand" to={loggedIn ? '/' : '/login'}>React Express Webpack2</Link>
            </div>
            <span className="nav-toggle" onClick={this.handleMenuDropDown.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            </span>

            <div className="nav-right nav-menu" ref="navMenu">
                <Link to={loggedIn ? '/' : '/login'} className="nav-item" style={style}>Members</Link>
                <span className="nav-item">
                    <Link to='/logout' className="nav-item button" onClick={this.goToLogin.bind(this)}>
                    </Link>
                </span>
            </div>
        </nav>
      );
  }
};

const mapState = (state) => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapState)(Navigation);
