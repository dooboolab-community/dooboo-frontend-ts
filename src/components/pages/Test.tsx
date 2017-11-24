import React, { Component } from 'react';
import Radium from 'radium';
import Prefixer from 'inline-style-prefixer';

const modularStyle: any = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  modularColor: {
    color: 'rgb(13, 157, 197)',
    ':hover': {
        color: 'red',
    },
  },
};

const prefixer = new Prefixer();
const prefixedStyle = prefixer.prefix(modularStyle);

@Radium
class Test extends Component {
  public render() {
    console.log(prefixedStyle);
    return (
      <div style={prefixedStyle.container}>
        <span>globalColor</span>
        <span>localColor</span>
        <span style={prefixedStyle.modularColor}>modularColor</span>
      </div>
    );
  }
}

export default Test;
