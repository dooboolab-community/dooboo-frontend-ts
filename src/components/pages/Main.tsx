import React from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Main extends React.Component<any> {
  public render() {
    return (
      <div>
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
