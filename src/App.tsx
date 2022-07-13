import {createRoot, hydrateRoot} from 'react-dom/client';

import {ReactElement} from 'react';
import RootProvider from './providers';
import SwitchNavigator from './components/navigations/SwitchNavigator';
import {initFbt} from './utils/fbt';

initFbt();

const rootElement = document.getElementById('app') as HTMLElement;
const root = createRoot(rootElement);

const Component = (): ReactElement => (
  <RootProvider>
    <SwitchNavigator />
  </RootProvider>
);

const renderApp = (): void => {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, <Component />);
  } else {
    root.render(<Component />);
  }
};

renderApp();
