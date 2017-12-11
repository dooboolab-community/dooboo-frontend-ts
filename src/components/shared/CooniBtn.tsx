import React, { Component } from 'react';
import Radium from 'radium';

import { effects } from '@utils/styles';

export class CooniBtn extends Component<any> {
  public render() {
    return (
      <div
        className='hi'
        style={[
          styles.authBtn,
          this.props.white
            ? {borderColor: '#fff', color: '#fff'}
            : {borderColor: '#000', color: '#000'},
        ]}
        onClick={() => this.props.onClick()}
      >
        {
          this.props.imgSrc
            ? <img
                src={this.props.imgSrc}
                srcSet={this.props.srcset}
                style={styles.logoImg}
              />
            : null
        }
        <span style={styles.authTxt}>{this.props.btnTxt}</span>
      </div>
    );
  }
}

const styles: any = {
  authBtn: {
    width: '320px',
    height: '28px',
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: '2px',
    margin: '8px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    ...effects.btnEffect,

    ':hover': {
      ...effects.btnEffectHover,
    },
    ':active': {
      opacity: 0.5,
    },

    '@media (max-width: 740px)': {
      width: '85vw',
      height: '8vh',
    },
  },

  logoImg: {
    position: 'absolute',
    left: '16px',
    height: '20px',
    width: '20px',
    objectFit: 'cover',
  },
};

export default Radium(CooniBtn);
