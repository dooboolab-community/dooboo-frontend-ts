import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Login extends Component<any> {
  public render() {
    console.log(this.props.store);
    return(
      <div>
        {
            this.props.store.loggedIn
            ? <Redirect to='/tab' />
            : <div onClick={this.props.store.logIn}>Log In</div>
        }
      </div>
    );
  }
}

export default Login;
