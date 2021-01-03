import React, {ReactElement} from 'react';
import {hydrate, render} from 'react-dom';

import RootProvider from './providers';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import {initFbt} from './utils/fbt';

initFbt();

const rootElement = document.getElementById('app') as HTMLElement;

const Component = (): ReactElement => (
  <RootProvider>
    <SwitchNavigator />
  </RootProvider>
);

const renderApp = (): void => {
  if (rootElement.hasChildNodes()) hydrate(<Component />, rootElement);
  else render(<Component />, rootElement);
};

renderApp();
