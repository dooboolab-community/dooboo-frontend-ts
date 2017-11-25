import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Radium from 'radium';
import Prefixer from 'inline-style-prefixer';

const modularStyle: any = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center'
  },
  storeShowingDiv: {
    fontSize: '20px',
    marginBottom: '20px'
  },
  spanStyle: {
    height: '30px',
    fontSize: '20px',
    lineHeight: '30px',
    border: '2px solid #b2b2b2'
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
      <div style={prefixedStyle.container}>
        <div style={prefixedStyle.storeShowingDiv}>appStore grey property: {this.props.store.grey? 'true' : 'false'}</div>
        <span 
          style={
            [ prefixedStyle.spanStyle, this.props.store.grey ? prefixedStyle.greyColor : prefixedStyle.modularColor]
          }
          onClick={this.props.store.appColorChange}
        >
          click here
        </span>
      </div>
    );
  }
}

export default Test;
