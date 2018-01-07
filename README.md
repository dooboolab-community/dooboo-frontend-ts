# React Typescript Starter
> Specification
* postcss
* typescript
* react-router-dom v4
* test jest with typescript
* import css as module
* localization
* mobx
* data models

# Gain points
```
1. Typescript support. No need to run tsc because webpack is doing it for you with ts-loader.
2. Sample of react-router-dom v4.
3. Able to learn how to structure react app with typescript and mobx with jest-ts.
4. Learn how to localize your project.
```

# INSTALL
```
1. npm install
2. npm start
```

# Structures
```text
app/
├─ assets
│  └─ icons
│  └─ images
├─ docs
├─ node_modules/
├─ public/
├─ src/
│  └─ apis
│  └─ components
│  └─ models
│  └─ stores
│  └─ utils
├─ test/
├─ .gitignore
├─ .babelrc
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tsconfig.json
├─ tslint.json
├─ typings.d.ts
└─ webpack.config.js
```

# Running the project
Running the project is as simple as running
```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

# Testing the project
Testing is also just a command away:
```sh
npm test
```
> Result
```
> jest -u

 PASS  src/components/screen/__tests__/SignUp.test.tsx
 PASS  src/components/shared/__tests__/StyledInput.test.tsx
 PASS  src/components/screen/__tests__/Tab1.test.tsx
 PASS  src/components/shared/__tests__/CooniBtn.test.tsx

Test Suites: 4 passed, 4 total
Tests:       6 passed, 6 total
Snapshots:   4 passed, 4 total
Time:        2.209s
Ran all test suites.
```

# Adding component
> Copy sourcecode in /src/components/screen/NotFound.tsx
> Create new tsx file with compnent name you will create
> If you want to add seperate css file, add it like below
```
const styles = require('./NotFound.css');
// then you can use above styles in className
<div className={styles.container}>
/*
  Set "no-var-requires" to false in tslint file if you have one.
  Otherwise you should declare each styles you defined in object to string.
*/
```
Related to [LINK](https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10).
> Above works by configuring webpack file
```
loader: 'css-loader',
options: { 
  importLoaders: 1,
  modules: true,
  ...
```

# Adding mobx store
> Include as many stores as you want in src/stores directory.
```
// class in src/stores/appStore.ts
class Store {
  @observable public user: User;
  @observable private locale: Localization;

  constructor() {
    this.user = new User();
    this.locale = new Localization();
  }

  public setLocale(param: Localization) {
    this.locale = param;
  }

  public getString = (param: string) => {
    return this.locale.getString(param);
  }
}
```

# Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

# Localization
We've defined Localization class in `src/models/Localization.ts`. This model class is used in mobx store which is `src/stores/appStore.ts`. Localization model imports `src/utils/STRINGS.ts` which handles localized strings.
```
const STRINGS = {
  en: { // English
    SIGNUP: 'SIGN UP',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    GOOGLE_LOGIN: 'LOGIN WITH GOOGLE',
    FACEBOOK_LOGIN: 'LOGIN WITH FACEBOOK',
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    COMPLETE: 'DONE',
  },
  ko: { // Korean
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
    GOOGLE_LOGIN: '구글 로그인',
    FACEBOOK_LOGIN: '페이스북 로그인',
    EMAIL: '이메일',
    PASSWORD: '패스워드',
    COMPLETE: '완료',
  },
  ...
```
In `index.tsx` when app starts it search for navigator's locale and set mobx state.
```
  const userLang: string = navigator.language;
  const localization = new Localization();
  localization.setLocale(userLang);
  store.setLocale(localization);
  ...
```

# React version
16.2.0

# react-router-dom version
4.2.2
