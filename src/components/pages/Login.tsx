import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Radium from 'radium';

@inject('store')
@observer
@Radium
class Login extends Component<any> {
  public render() {
    console.log(this.props.store);
    return(
      <div>
        {
            this.props.store.loggedIn
            ? <Redirect to='/root' />
            : <div onClick={this.props.store.logIn}>Log In</div>
        }
      </div>
    );
  }
}

export default Login;
