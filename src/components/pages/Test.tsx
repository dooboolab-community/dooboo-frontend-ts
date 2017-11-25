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
        color: 'blue',
    },
  },
  greyColor: {
    color: '#d2d2d2',
    ':hover': {
      color: '#bbb',
    },
  },
};

const prefixer = new Prefixer();
const prefixedStyle = prefixer.prefix(modularStyle);

@inject('store')
@observer
@Radium
class Test extends Component<any> {
  public render() {
    return (
      <div style={prefixedStyle.container} onClick={this.props.store.appColorChange}>
        {<span style={this.props.store.grey ? prefixedStyle.greyColor : prefixedStyle.modularColor}>click here</span>}
      </div>
    );
  }
}

export default Test;
