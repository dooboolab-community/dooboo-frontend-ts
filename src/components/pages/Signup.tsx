import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { isLoggedIn } from '@actions/index';
import { setSessionStorage } from '@utils/Functions';
import { resCode } from '@constants/Data';

class Signup extends React.Component<any, any> {

  private email: any;
  private pw: any;
  private pw_ok: any;

  constructor(props) {
    super(props);
    this.state = {
      show_signup : false,
      error_text : "",
      show_error : false
    };
  } 
  onSignup(){
    const user = {
      email: this.email.value,
      pw: this.pw.value,
      pw_ok: this.pw_ok.value
    };
  }
  onBack(){
    browserHistory.replace('/');
  }
  hideErrorMsg(){
    this.setState({
      error_text : "",
      show_error : false
    });
  }
  handleErrorMsg(show_error){
    if(show_error){
      return (
        <div className="notification is-danger" style={{marginTop:"30px"}}>
          <button className="delete" onClick={this.hideErrorMsg.bind(this)}></button>
          {this.state.error_text}
        </div>
      );  
    }
    return null;
  }
  showSignupMsg(){
      this.setState({
          show_signup : true
      });        
  }
  hideSignupMsg(){
      this.setState({
          show_signup : false
      });        
  }
  handleSignupMsg(){
    if(this.state.show_signup){
      return (
        <div className="notification is-info" style={{marginTop:"30px"}}>
          <button className="delete" onClick={this.hideSignupMsg.bind(this)}></button>
          회원가입은 관리자한테 문의해주세요.
        </div>
      );
    }
    return null;
  }
  render () {
    return (
      <div className="login">
        <div className="login-page">
          <form className="login-form">
            <h1 style={{marginBottom:"5px"}}>Sign Up</h1>
            <p className="control">
              <input className="input is-primary" type="email" placeholder="이메일" ref={(v) => this.email = v}/>
            </p>
            <p className="control">
              <input className="input is-primary" type="password" placeholder="비밀번호" ref={(v) => this.pw = v}/>
            </p>
            <p className="control">
              <input className="input is-primary" type="password" placeholder="비밀번호 확인" ref={(v) => this.pw_ok = v}/>
            </p>
            <br/>
            <div className="login-buttons">
              <a className="button is-primary is-outlined" style={{marginRight:"10px"}} onClick={this.onBack.bind(this)}>뒤로가기</a>
              <a className="button is-info is-outlined" onClick={this.onSignup.bind(this)}>회원가입</a>
            </div>
            {this.handleErrorMsg(this.state.show_error)}
            {this.handleSignupMsg()}
          </form>
        </div>
      </div>
    );
  }
};
const mapState = (state) => ({
  isLoggedIn: state.isLoggedIn
});
export default connect(mapState)(Signup);
