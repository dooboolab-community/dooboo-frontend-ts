import React , { Component } from 'react';

const styles = require('./InputLabel.css');

interface IProps {
  containerStyle: object;
  type: string;
  placeholder: string;
  labelTxt: string;
  onTxtChanged: any;
}

interface IState {
  inputDone: boolean;
  isFocus: boolean;
}

export class InputLabel extends Component<IProps, IState> {
  private inputValue: HTMLInputElement;

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      inputDone: false,
    };
  }

  public onTxtChanged(e) {
    const v: string = e.target.value.toString();
    if (v.length > 0) {
      this.setState({ inputDone: true });
    } else {
      this.setState({ inputDone: false});
    }

    this.props.onTxtChanged(v);
  }

  public render() {
    return (
      <div
        className={styles.root}
        style={this.props.containerStyle}
      >
        <label
          className={
            this.state.inputDone
              ? styles.labelAfter
              : this.state.isFocus
                ? styles.label
                : styles.labelBefore
          }
        >{this.props.labelTxt}</label>
        <input
          ref={(v) => this.inputValue = v}
          className={styles.input}
          type={this.props.type}
          onFocus={ () => this.onFocus(true) }
          onBlur={ () => this.onFocus(false) }
          style={
            this.state.inputDone
              ? { borderBottom: '2px solid #4a4a4a' }
              : { borderBottom: '2px solid #9b9b9b' }
          }
          placeholder={this.props.placeholder}
          onChange={(e) => this.onTxtChanged(e)}
        />
      </div>
    );
  }

  private onFocus = (state: boolean) => {
    this.setState({ isFocus: state });
  }
}

export default InputLabel;
