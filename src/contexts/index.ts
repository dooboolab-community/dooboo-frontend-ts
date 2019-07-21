import * as React from 'react';
import { User, Locale } from '../types';

interface AppContext {
  user?: User;
  locale?: Locale;
  state?: any;
  dispatch?: any;
}

export const AppContext = React.createContext<AppContext | null>(null);
