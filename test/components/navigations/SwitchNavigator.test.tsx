import {expect, it, test} from 'vitest';

import React from 'react';
import RootProvider from '../../../src/providers';
import SwitchNavigator from '../../../src/components/navigations/SwitchNavigator';
import {render} from '@testing-library/react';

const props = {};

const component = (
  <RootProvider initialThemeType="light">
    <SwitchNavigator {...props} />
  </RootProvider>
);

test('[SwitchNavigator] rendering', () => {
  it('should renders without crashing', () => {
    const testingLib = render(component);

    const {baseElement} = testingLib;

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();

    testingLib.unmount();
  });
});
