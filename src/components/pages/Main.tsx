import React from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Main extends React.Component<any> {
  public render() {
    return (
      <div>
        <div>
          id: {this.props.store.userId}<br/>
          password: {this.props.store.userPwd}<br/>
        </div>
        <br/>
        <div onClick={this.props.store.logOut}>
          [log out]
        </div><br/>
        <Link to='/helloworld' style={{textDecoration: 'none', color: 'rgb(13, 157, 197)'}}>
          Hello World!
        </Link>
      </div>
    );
  }
}

export default Main;
