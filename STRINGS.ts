const STRINGS = {
  en: { // English
    BUTTON: 'Button',
    SIGNUP: 'Sign Up',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    GOOGLE_LOGIN: 'Login with Google',
    FACEBOOK_LOGIN: 'Login with Facebook',
    EMAIL: 'Email',
    EMAIL_HINT: 'Write email address.',
    PASSWORD: 'Password',
    PASSWORD_HINT: 'Write password.',
    COMPLETE: 'Done',
    GOTO_Temp: 'No Page',
    BACK: 'Back',
    NAVIGATE: 'Navigate',
  },
  ko: { // Korean
    BUTTON: '버튼',
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
    GOOGLE_LOGIN: '구글 로그인',
    FACEBOOK_LOGIN: '페이스북 로그인',
    EMAIL: '이메일',
    EMAIL_HINT: '이메일 주소를 입력해주세요.',
    PASSWORD: '비밀번호',
    PASSWORD_HINT: '비밀번호를 입력해주세요.',
    COMPLETE: '완료',
    GOTO_Temp: '없는 페이지',
    BACK: '뒤로',
    NAVIGATE: '이동하기',
  },
  // ja: { // Japanese
  // },
  // zh: { // Chinese
  // },
  // es: { // Spanish
  // },
  // fr: { // French
  // },
  // id: { // Indonesian
  // },
};

const DEFAULT_LANG = 'en';
let lang = DEFAULT_LANG;

if (navigator) {
  lang = navigator.language.substr(0, 2);
}

export const getString = (str: string) => {
  str = STRINGS[lang]
    ? STRINGS[lang][str]
    : STRINGS[DEFAULT_LANG][str];

  if (!str) {
    str = '...';
  }
  return str;
};

export default STRINGS;
