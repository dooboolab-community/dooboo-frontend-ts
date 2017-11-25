import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from '../shared/Header';
import Test from './Test';
import Readme from './Readme';

class Main extends React.Component {
  public render() {
    return (
      <Link to='/helloworld' style={{textDecoration: 'none', color: 'rgb(13, 157, 197)'}}>
        Hello World!
      </Link>
    );
  }
}

export default Main;
