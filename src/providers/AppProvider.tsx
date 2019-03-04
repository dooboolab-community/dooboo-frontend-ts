import React, { useReducer } from 'react';
import { AppContext } from '../contexts';
import { IUser, ILocale } from '../types';
import STRINGS from '../../STRINGS';

const AppConsumer = AppContext.Consumer;

interface IAction {
  type: 'reset-user' | 'set-user';
  payload: any;
}

interface IProps {
  children?: any;
}

export interface IState {
  user: IUser;
  locale?: ILocale;
}

const initialState: IState = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      return { ...state, user: action.payload };
    default:
      return null;
  }
};

const AppProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const ContextProvider = AppContext.Provider;

  return (
    <ContextProvider value={value}>
      {props.children}
    </ContextProvider>
  );
};

export { AppConsumer, AppProvider, AppContext };
