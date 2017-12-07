import React from 'react';
import { browserHistory } from 'react-router';
import { getSessionStorage } from '@utils/Functions';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_signup: false,
            error_text: '',
            show_error: false,
        };
    }
    componentWillMount() {
        console.log('component will mount');
        console.log('user : ' + getSessionStorage('user'));
    }
    handleLogin() {
        const user = {
            email: this.email.value,
            pw: this.pw.value,
        };
        if (!user.email || !user.pw) {
            this.setState({
                error_text: '오류가 있습니다 다시 시도해주세요.',
                show_error: true,
            });
        }
    }
    onSignup() {
        browserHistory.replace('signup');
    }
    hideErrorMsg() {
        this.setState({
            error_text: '',
            show_error: false,
        });
    }
    handleErrorMsg(show_error) {
        if (show_error) {
            return (<div className='notification is-danger' style={{ marginTop: '30px' }}>
          <button className='delete' onClick={() => this.hideErrorMsg()}/>
          {this.state.error_text}
        </div>);
        }
        return null;
    }
    showSignupMsg() {
        this.setState({
            show_signup: true,
        });
    }
    hideSignupMsg() {
        this.setState({
            show_signup: false,
        });
    }
    handleSignupMsg() {
        if (this.state.show_signup) {
            return (<div className='notification is-info' style={{ marginTop: '30px' }}>
          <button className='delete' onClick={() => this.hideSignupMsg()}/>
          회원가입은 관리자한테 문의해주세요.
        </div>);
        }
        return null;
    }
    render() {
        return (<div className='login'>
        <div className='login-page'>
          <form className='login-form'>
            <h1 style={{ marginBottom: '5px' }}>Login</h1>
            <p className='control'>
              <input className='input is-primary' type='email' placeholder='이메일' ref={(v) => this.email = v}/>
            </p>
            <p className='control'>
              <input className='input is-primary' type='password' placeholder='비밀번호' ref={(v) => this.pw = v}/>
            </p>
            <p className='control'>
              <a href=''>비밀번호 찾기</a>
            </p>
            <br />
            <div className='login-buttons'>
              <a className='button is-primary is-outlined' style={{ marginRight: '10px' }} onClick={() => this.handleLogin()}>로그인</a>
              <a className='button is-info is-outlined' onClick={() => this.onSignup()}>회원가입</a>
            </div>
            {this.handleErrorMsg(this.state.show_error)}
            {this.handleSignupMsg()}
          </form>
        </div>
      </div>);
    }
}
export default Login;
//# sourceMappingURL=Login.js.map