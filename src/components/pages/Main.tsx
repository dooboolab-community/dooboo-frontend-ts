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
          username: {this.props.store.userNickname}<br/>
          job: {this.props.store.userJob}<br/>
          introduction: {this.props.store.userIntroduction}<br/>
        </div>
        <div onClick={this.props.store.logOut}>
          log out
        </div>
        <Link to='/helloworld' style={{textDecoration: 'none', color: 'rgb(13, 157, 197)'}}>
          Hello World!
        </Link>
      </div>
    );
  }
}

export default Main;
