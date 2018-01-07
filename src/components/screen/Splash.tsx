import React, { Component } from 'react';

const styles = require('./Splash.css');

class Splash extends Component<any> {
  public render() {
    return(
      <div className={styles.container}>
        <span style={styles.txt}>SPLASH</span>
      </div>
    );
  }
}

export default Splash;
