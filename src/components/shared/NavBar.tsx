import React, { Component } from 'react';
import Radium from 'radium';

import { globalColors, globalEffects, globalMediaQueries } from '@utils/styles';

@Radium
class NavBar extends Component<any> {
  public render() {
    return (
      <div style={styles.navbar}>
        <span style={styles.navbarTxt}>{ this.props.title }</span>
        {this.props.leftBtn
          ? <div>
              <div key={0} style={styles.leftBtn} onClick={this.props.leftBtn.handler}>
                {this.props.leftBtn.txt}
              </div>
            </div>
          : undefined
        }
        {this.props.rightBtn
          ? <div>
              <div key={1} style={styles.rightBtn} onClick={this.props.rightBtn.handler}>
                {this.props.rightBtn.txt}
              </div>
            </div>
          : undefined
        }
      </div>
    );
  }
}

const styles: any = {
    navbar: {
      position: 'fixed',
      left: 0,
      right: 0,
      height: '44px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    },

    navbarTxt: {
      position: 'fixed',
      left: 0,
      right: 0,
      fontSize: '14px',
      lineHeight: '20px',
      paddingTop: '11px',
    },

    leftBtn: {
      ...globalEffects.btnEffect,
      width: '23px',
      height: '18px',
      position: 'fixed',
      left: '19px',
      fontSize: '12px',
      lineHeight: '18px',
      paddingTop: '12px',
      color: globalColors.cooniBtnGrey,
      ':hover': {
        ...globalEffects.btnEffectHover,
      },
    },

    rightBtn: {
      ...globalEffects.btnEffect,
      width: '23px',
      height: '18px',
      position: 'fixed',
      right: '19px',
      fontSize: '12px',
      lineHeight: '18px',
      paddingTop: '12px',
      color: globalColors.cooniBtnGrey,
      ':hover': {
        ...globalEffects.btnEffectHover,
      },
    },
};

export default NavBar;
