import {RenderResult, render} from '@testing-library/react';

import React from 'react';
import RootProvider from '../../../providers/index';
import SwitchNavigator from '../SwitchNavigator';

const props = {};

const component = (
  <RootProvider initialThemeType="light">
    <SwitchNavigator {...props} />
  </RootProvider>
);

describe('[SwitchNavigator] rendering', () => {
  let testingLib: RenderResult;

  beforeEach(() => {
    testingLib = render(component);
  });

  it('should renders without crashing', () => {
    const {baseElement} = testingLib;

    expect(baseElement).toBeTruthy();
  });
});
