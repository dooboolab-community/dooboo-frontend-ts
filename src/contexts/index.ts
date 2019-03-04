import * as React from 'react';
import { IUser, ILocale } from '../types';

interface IAppContext {
  user?: IUser;
  locale?: ILocale;
  state?: any;
  dispatch?: any;
}

export const AppContext = React.createContext<IAppContext | null>(null);
