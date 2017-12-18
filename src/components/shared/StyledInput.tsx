import React , { Component } from 'react';
import Radium from 'radium';

import { colors, effects } from '@utils/styles';

export class StyledInput extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inputDone: false,
    };
  }

  public inputValueHandler(event) {
    const v = event.target.value;
    v.length > 0 ? this.setState({inputDone: true}) : this.setState({inputDone: false});
  }

  public render() {
    const styles = this.props.test ? {} : staticStyle;

    return (
      <div style={styles.profileEachCategory}>
        <input
          key={this.props.keyString}
          type={this.props.type}
          style={[
            styles.profInput,
            this.state.inputDone ? styles.borderDone : styles.borderInit,
          ]}
          id={this.props.keyString}
          placeholder={this.props.placeholder}
          onChange={(e) => this.inputValueHandler(e)}
        />
        <label
          htmlFor={this.props.keyString}
          style={[
            styles.profCategoryTxt,
            this.state.inputDone ? styles.labelDone : styles.labelInit,
          ]}
        >{this.props.labelTxt}
        </label>
      </div>
    );
  }
}

const staticStyle: any = {
  profileEachCategory: {
    paddingTop: '28px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  labelInit: {
      color: 'rgb(74, 74, 74)',
  },

  labelDone: {
    color: '#000',
    fontWeight: 'bold',
  },

  borderInit: {
    borderBottom: '2px solid rgb(227, 227, 227)',
  },

  borderDone: {
    borderBottom: '2px solid rgb(0, 0, 0)',
  },

  profCategoryTxt: {
      fontSize: '14px',
      lineHeight: '20px',
      textAlign: 'left',
  },

  profInput: {
    paddingRight: '12px',
    height: '44px',
    fontSize: '18px',
    lineHeight: '27px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '2px',
    borderColor: colors.cooniGrey,
    ':focus': {
      outline: 'none',
      borderImageSource: colors.cooniGradientHorizontal,
      borderImageSlice: 1,
    },
  },
  labelColored: {
    color: colors.cooniTxtColor,
  },
};

export default Radium(StyledInput);
