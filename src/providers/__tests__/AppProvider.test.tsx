import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { AppProvider, useAppContext } from '../AppProvider';

const FakeChild = (): React.ReactElement => {
  const { state, resetUser } = useAppContext();

  return (
    <div>
      <div data-testid="TEXT">{JSON.stringify(state, null, 2)}</div>
      <button
        data-testid="BUTTON"
        onClick={(): void => {
          resetUser();
        }}
      />
    </div>
  );
};

describe('[AppProvider] rendering test', () => {
  let json: renderer.ReactTestRendererJSON;
  const component = (
    <AppProvider>
      <FakeChild />
    </AppProvider>
  );

  it('component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });
});

// todo: add interaction test