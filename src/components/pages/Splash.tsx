import React, { Component } from 'react';
import Radium from 'radium';

import { colors } from '@utils/styles';

const styles: any = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.cooniGradient,
  },
};

@Radium
class Splash extends Component<any> {
  public render() {
    return(
      <div style={styles.container}>
        <span style={{color: '#fff'}}>SPLASH</span>
      </div>
    );
  }
}

export default Splash;
