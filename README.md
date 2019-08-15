### ANNOUNCEMENT

DO NOT MODIFY OR CHANGE THE CODE BEFORE CONFIRMED BY `DOOBOOLAB`. THIS REPOSITORY IS USED IN `DOOBOO-CLI`.

# React Typescript Boilerplate

[![codecov](https://codecov.io/gh/dooboolab/dooboo-frontend-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/dooboo-frontend-ts)
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-frontend-ts.svg?style=svg)](https://circleci.com/gh/dooboolab/dooboo-frontend-ts) [![Greenkeeper badge](https://badges.greenkeeper.io/dooboolab/dooboo-frontend-ts.svg)](https://greenkeeper.io/)

> Specification

- [react](https://github.com/facebook/react)
- [react-router](https://github.com/ReactTraining/react-router)
- [typescript](https://github.com/Microsoft/TypeScript)
- [styled-components](https://github.com/styled-components/styled-components)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [react-hook](https://reactjs.org/docs/hooks-intro.html)
- [prettier](https://prettier.io)
- self localization

### Gain points

1. Sample of context-api with `react-hook` (`useContext`).
2. Know how to structure react web app with `typescript`.
3. Know how to navigate between screens with `react-router`.
4. Know how to write test code with `react-native-testing-library`.
5. Know how to `lint` your project with `eslint`.
6. [Know how to localize your project](https://github.com/dooboolab/dooboo-frontend-ts/blob/master/STRINGS.ts).

- [Example]()

7. [Know how to place your `retina image` into your project](https://github.com/dooboolab/dooboo-frontend-ts/blob/master/src/utils/Icons.ts).
8. Know how to use `styled-component`.
9. [Know how to implement theming with styled-component](https://github.com/dooboolab/dooboo-frontend-ts/blob/master/src/theme.ts).

- [Dark Mode]
  ![image](https://user-images.githubusercontent.com/27461460/58620208-815be500-8301-11e9-9a00-2ceaca7c93f5.png)
- [Light Mode]
  ![image](https://user-images.githubusercontent.com/27461460/58620232-8f116a80-8301-11e9-8b55-3bb2a743dff8.png)

### Structures

```text
app/
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ docs // explanation for dev stack we used. (Sorry for Korean)
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│  └─ contexts
│  └─ providers
│  └─ types
│  └─ utils
│  └─ App.tsx
│  └─ theme.ts
├─ test/
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ jest.config.js
├─ package.json
├─ postcss.config.js
├─ README.md
├─ STRINGS.js
├─ tsconfig.json
├─ typings.d.ts
└─ webpack.config.js
```

### Install and running the project

Installing and running the project is as simple as running

```sh
yarn && yarn start
```

- Note that we recommend using yarn.

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

### Testing the project

Testing is also just a command away:

```sh
yarn test
 PASS  src/components/shared/__tests__/Button.test.tsx
 PASS  src/components/screen/__tests__/Intro.test.tsx

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   2 passed, 2 total
Time:        2.145s, estimated 3s
```

### Writing tests with Jest

We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `yarn test` to test if it succeeds and look more closer opening the source.

### Vscode prettier and eslint setup

```
"eslint.enable": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
],
// prettier extension setting
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"prettier.arrowParens": "always",
"prettier.jsxSingleQuote": true
```

### Localization

We've defined localized strings in `STRING.ts`.

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

### Theming

We use `styled-component` to provide theming. We recommend to use color variables inside `theme.ts` and use it else where. We handle this with `context-api` with `react-hook` inside `AppProvider.tsx`.

```ts
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      return { ...state, user: action.payload };
    case 'change-theme-mode':
      return { ...state, theme: action.payload.theme };
    default:
      return null;
  }
};

const AppProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const ContextProvider = AppContext.Provider;

  return <ContextProvider value={value}>{props.children}</ContextProvider>;
};
```

### Creating components

> Copy sourcecode in /src/components/screen/Temp.tsx
> Copy sourcecode in /src/components/screen/**test**/Temp.test.tsx
> Create new tsx file with compnent name you will create

To do above more easily, you can simly install [dooboo-cli](https://www.npmjs.com/package/dooboo-cli). Then you can easily create [screen] or [shared] components along with `test file` by running below commands.

```sh
# screen component
dooboo screen [MyScreen]
# shared component
dooboo shared [MyShared]
```

### React version

16.9

### React-router-dom version

5

### Typescript

3
