import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { AppProvider } from '../AppProvider';

describe('[AppProvider] rendering test', () => {
  let json: renderer.ReactTestRendererJSON;
  const component = <AppProvider />;

  it('component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[AppProvider] interactions', () => {
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  const component = <AppProvider />;

  const user = {
    displayName: 'dooboolab',
    age: 30,
    job: '',
  };

  beforeEach(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });
  // it('should check [resetUser] actions', () => {
  //   let instance = root.instance;
  //   instance.actions.resetUser();
  // });

  // it('should check trigger actions when method called', () => {
  //   let instance = root.instance;
  //   instance.actions.setUser({
  //     displayName: '',
  //     age: 0,
  //     job: '',
  //   });
  // });
});
