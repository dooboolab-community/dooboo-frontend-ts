import {createRoot, hydrateRoot} from 'react-dom/client';

import type {ReactElement} from 'react';
import RootProvider from './providers';
import SwitchNavigator from './components/navigations/SwitchNavigator';
import {initFbt} from './utils/fbt';
import {useEffect} from 'react';
import {useThemeContext} from './providers/ThemeProvider';

initFbt();

const rootElement = document.getElementById('app') as HTMLElement;
const root = createRoot(rootElement);

function App(): ReactElement {
  const {changeThemeType} = useThemeContext();

  useEffect(() => {
    (() => {
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === '.') {
          changeThemeType();
        }
      });
    })();

    return () => {
      document.removeEventListener('keydown', () => {});
    };
  }, [changeThemeType]);

  return <SwitchNavigator />;
}

function Root(): ReactElement {
  return (
    <RootProvider
      initialThemeType={
        window?.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
    >
      <App />
    </RootProvider>
  );
}

const renderApp = (): void => {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, <Root />);
  } else {
    root.render(<Root />);
  }
};

renderApp();
