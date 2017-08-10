import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { isLoggedIn } from '../actions';
import { doSignup } from '../apis/authAPi';
import { setSessionStorage } from '../global/functions';
import { resCode } from '../global/constants';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_signup : false,
            error_text : "",
            show_error : false
        };
    } 
    onSignup(){
        var user = {
            email: this.refs.email.value,
            pw: this.refs.pw.value,
            pw_ok: this.refs.pw_ok.value
        };
        var that = this;
        doSignup(user).then(function(data){
            // console.log("props : " + JSON.stringify(props));
            console.log("data : " + JSON.stringify(data));
            if(data.resCode == resCode.FAILED){
                // 회원가입 실패
                that.state.error_text = "회원가입에 실패했습니다. 관리자한테 문의하세요.";
                that.state.show_error = true;
                that.setState(that);
            } else if(data.resCode === resCode.ALREADY_INSERTED){
                that.state.error_text = "이미 가입된 이메일입니다. 다른 이메일로 시도해주시거나 비밀번호를 찾으세요.";
                that.state.show_error = true;
                that.setState(that);
            } else {
                that.state.hideErrorMsg = true;
                that.setState(that);
                // 회원가입 성공
                setSessionStorage("user", data.token);
                that.props.dispatch(isLoggedIn(true));
                browserHistory.replace('/');
            }
        });
    }
    onBack(){
        browserHistory.replace('/login');
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
                        <h1 style={{marginBottom:"5px"}}>Sign Up</h1>
                        <p className="control">
                            <input className="input is-primary" type="email" placeholder="이메일" ref="email"/>
                        </p>
                        <p className="control">
                            <input className="input is-primary" type="password" placeholder="비밀번호" ref="pw"/>
                        </p>
                        <p className="control">
                            <input className="input is-primary" type="password" placeholder="비밀번호 확인" ref="pw_ok"/>
                        </p>
                        <br/>
                        <div className="login-buttons">
                            <a className="button is-primary is-outlined" style={{marginRight:"10px"}} onClick={this.onBack.bind(this)}>뒤로가기</a>
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
export default connect(mapState)(Signup);
