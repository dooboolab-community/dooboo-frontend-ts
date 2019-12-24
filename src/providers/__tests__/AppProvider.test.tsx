import * as React from 'react';

import { AppProvider, useAppContext } from '../AppProvider';
import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react';

const FakeChild = (): React.ReactElement => {
  const { state, resetUser, callDefault } = useAppContext();

  return (
    <div>
      <div data-testid="TEXT">{JSON.stringify(state, null, 2)}</div>
      <button
        data-testid="BUTTON"
        onClick={(): void => {
          resetUser();
        }}
      />
      <button
        data-testid="BUTTON_NOT_VALID"
        onClick={(): void => {
          callDefault();
        }}
      />
    </div>
  );
};

describe('[AppProvider] rendering test', () => {
  let testingLib: RenderResult;
  const component = (
    <AppProvider>
      <FakeChild />
    </AppProvider>
  );

  it('component and snapshot matches', () => {
    testingLib = render(component);
    const { baseElement } = testingLib;
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should call [resetUser] when button pressed', () => {
    testingLib = render(component);
    const btn = testingLib.queryByTestId('BUTTON');
    act(() => {
      fireEvent.click(btn);
    });
  });

  it('should call [default] when button pressed', () => {
    testingLib = render(component);
    const btn = testingLib.queryByTestId('BUTTON_NOT_VALID');
    act(() => {
      fireEvent.click(btn);
    });
  });
});

// todo: add interaction test
