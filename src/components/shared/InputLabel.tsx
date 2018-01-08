import React , { Component } from 'react';

const styles = require('./InputLabel.css');

export class InputLabel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inputDone: false,
    };
  }

  public onTxtChanged(e) {
    const v = e.target.value;
    if (v.length > 0) {
      this.setState({ inputDone: true });
      return;
    }
    this.setState({ inputDone: false});
  }

  public render() {
    return (
      <div className={styles.root}>
        <input
          className={styles.input}
          key={this.props.keyString}
          type={this.props.type}
          style={
            this.state.inputDone
              ? { borderBottom: '2px solid #4a4a4a' }
              : { borderBottom: '2px solid #9b9b9b' }
          }
          id={this.props.keyString}
          placeholder={this.props.placeholder}
          onChange={(e) => this.onTxtChanged(e)}
        />
        <label
          className={
            this.state.inputDone
              ? styles.labelAfter
              : styles.labelBefore
          }
        >{this.props.labelTxt}</label>
      </div>
    );
  }
}

export default InputLabel;
