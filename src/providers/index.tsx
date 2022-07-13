import {AppProvider} from './AppProvider';
import {ReactElement} from 'react';
import {ThemeProvider} from './ThemeProvider';
import {ThemeType} from '../types';

interface Props {
  initialThemeType?: ThemeType;
  children?: ReactElement;
}

// Add providers here
const RootProvider = ({initialThemeType, children}: Props): ReactElement => {
  return (
    <AppProvider>
      <ThemeProvider initialThemeType={initialThemeType || 'light'}>
        {children}
      </ThemeProvider>
    </AppProvider>
  );
};

export default RootProvider;
