import React , { Component } from 'react';

const styles = require('./StyledInput.css');

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
    return (
      <div className={styles.profileEachCategory}>
        <input
          key={this.props.keyString}
          type={this.props.type}
          className={styles.profInput}
          style={
            this.state.inputDone
              ? {
                borderBottom: '2px solid rgb(227, 227, 227)',
              }
              : {
                borderBottom: '2px solid rgb(0, 0, 0)',
              }
          }
          id={this.props.keyString}
          placeholder={this.props.placeholder}
          onChange={(e) => this.inputValueHandler(e)}
        />
        <label
          className={styles.profCategoryTxt}
          style={
            this.state.inputDone
              ? { color: 'rgb(74, 74, 74)' }
              : {
                color: '#000',
                fontWeight: 'bold',
              }
          }
        >{this.props.labelTxt}
        </label>
      </div>
    );
  }
}

export default StyledInput;
