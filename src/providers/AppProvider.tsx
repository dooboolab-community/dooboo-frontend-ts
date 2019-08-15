import { Locale, User } from '../types';
import React, { useReducer } from 'react';

import { AppContext } from '../contexts';
import STRINGS from '../../STRINGS';
import { ThemeType } from '../theme';

const AppConsumer = AppContext.Consumer;

interface Action {
  type: 'reset-user' | 'set-user' | 'change-theme-mode';
  payload: any;
}

interface Props {
  children?: any;
}

export interface State {
  theme: ThemeType;
  user: User;
  locale?: Locale;
}

const initialState: State = {
  theme: ThemeType.LIGHT,
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

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

export { AppConsumer, AppProvider, AppContext };
