import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
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
  greyColor: {
    color: '#d2d2d2',
  },
};

const prefixer = new Prefixer();
const prefixedStyle = prefixer.prefix(modularStyle);

@inject('store')
@observer
@Radium
class Test extends Component {
  public render() {
    console.log(prefixedStyle);
    return (
      <div style={prefixedStyle.container}>
        <span style={this.props.store.grey ? prefixedStyle.greyColor : prefixedStyle.modularColor}>modularColor</span>
      </div>
    );
  }
}

export default Test;
