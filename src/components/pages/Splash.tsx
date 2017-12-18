import React, { Component } from 'react';
import Radium from 'radium';

const styles: any = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

@Radium
class Splash extends Component<any> {
  public render() {
    return(
      <div className='gradientContainer' style={styles.container}>
        <span style={{color: '#fff'}}>SPLASH</span>
      </div>
    );
  }
}

export default Splash;
