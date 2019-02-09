import React from 'react';
import renderer, { ReactTestRendererJSON, ReactTestRenderer, ReactTestInstance} from 'react-test-renderer';

import Temp from '../Temp';
import Button from '../../shared/Button';

const props = {
  history: {
    goBack: jest.fn(),
  },
};

// test for the container page in dom
describe('Temp page DOM rendering test', () => {
  let json: ReactTestRendererJSON;
  const component = <Temp {...props} />;

  it('component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Interaction', () => {
  let rendered: ReactTestRenderer;
  let root: ReactTestInstance | any;
  const component = <Temp {...props} />;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
    const button = root.findByType(Button);
    button.props.onPress();
    expect(props.history.goBack).toBeCalled();
  });
});
