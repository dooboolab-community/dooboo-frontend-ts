import React from 'react';
import renderer from 'react-test-renderer';

import Intro from '../Intro';
import Store from '../../../stores/appStore';

const props = {
  store: new Store(),
};

// test for the container page in dom
describe('Intro page DOM rendering test', () => {
  let tree;
  const component = <Intro { ...props } />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Interaction', () => {
  let rendered;
  let instance;
  const component = <Intro { ...props } />;

  beforeAll(() => {
    rendered = renderer.create(component);
    instance = rendered.root;

    Object.defineProperty(window.alert, 'window.alert', {
      configurable: true,
    });
    window.alert = jest.fn();
  });

  it('Simulate onClick', () => {
    // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
    const button = instance.find(
      (el: any) => el.props.id === 'btn',
    );
    button.props.onClick();
    expect(window.alert).toBeCalled();
  });
});
