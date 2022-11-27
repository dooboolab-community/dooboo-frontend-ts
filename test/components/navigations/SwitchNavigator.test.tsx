import React from 'react';
import type {RenderResult} from '@testing-library/react';
import RootProvider from '../../../src/providers';
import SwitchNavigator from '../../../src/components/navigations/SwitchNavigator';
import {render} from '@testing-library/react';

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

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
