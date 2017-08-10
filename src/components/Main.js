//var Footer = require('Footer');
import React from 'react';
import Navigation from 'Navigation';
import Footer from 'Footer';

class Main extends React.Component {
  render(){
    return (
      <div>
        <Navigation/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Main;
