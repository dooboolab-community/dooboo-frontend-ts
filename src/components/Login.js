import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { isLoggedIn } from '../actions';
import { doLogin } from '../apis/authAPi';
import { getSessionStorage, setSessionStorage } from '../global/functions';
import { resCode } from '../global/constants';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_signup : false,
      error_text : "",
      show_error : false
    };
  } 

  componentWillMount(){
    console.log("component will mount");
    console.log("user : " + getSessionStorage("user"));
  }

  handleLogin(){
    const user = {
      email: this.refs.email.value,
      pw: this.refs.pw.value
    };
    if(!user.email || !user.pw){
      this.setState({
        error_text : "오류가 있습니다 다시 시도해주세요.",
        show_error : true
      });
    }
    const that = this;
    doLogin(user).then(function(data) {
      // console.log("props : " + JSON.stringify(props));
      // console.log("data : " + JSON.stringify(data));
      if (data.resCode === resCode.NO_DATA) {
        // 로그인 안됨
        that.setState({
            error_text: "이메일 또는 비밀번호가 틀렸습니다.",
            show_error: true
        });
      } else if (data.resCode === resCode.SUCCESS) {
        // 로그인 됨
        setSessionStorage("user", data.token);
        that.props.dispatch(isLoggedIn(true));
        browserHistory.replace('/');
      } else if (data.resCode === resCode.NO_REQ_PARAM){
        that.setState({
          error_text : "아이디와 비밀번호를 입력해주세요.",
          show_error : true
        });
      } else {
        that.setState({
          error_text : "오류가 있습니다 다시 시도해주세요.",
          show_error : true
        });
      }
    });
  }

  onSignup(){
    browserHistory.replace('signup');
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
  }
  render () {
    return (
      <div className="login">
          <div className="login-page">
              <form className="login-form">
                  <h1 style={{marginBottom:"5px"}}>Login</h1>
                  <p className="control">
                      <input className="input is-primary" type="email" placeholder="이메일" ref="email"/>
                  </p>
                  <p className="control">
                      <input className="input is-primary" type="password" placeholder="비밀번호" ref="pw"/>
                  </p>
                  <p className="control">
                      <a href="">비밀번호 찾기</a>
                  </p>
                  <br/>
                  <div className="login-buttons">
                      <a className="button is-primary is-outlined" style={{marginRight:"10px"}} onClick={this.handleLogin.bind(this)}>로그인</a>
                      <a className="button is-info is-outlined" onClick={this.onSignup.bind(this)}>회원가입</a>
                  </div>
                  {this.handleErrorMsg(this.state.show_error)}
                  {this.handleSignupMsg(this.state.show_signup)}
              </form>
          </div>
      </div>
    );
  }
};
const mapState = (state) => ({
    isLoggedIn: state.isLoggedIn
});
export default connect(mapState)(Login);
