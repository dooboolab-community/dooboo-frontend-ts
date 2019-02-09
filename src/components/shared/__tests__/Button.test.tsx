import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';

import { Button } from '../Button';
import { IC_FACEBOOK_W } from '../../../utils/Icons';

// test for the pure component
describe('Button shared component test', () => {
  let tree: any;
  const component: any = <Button white={true} txt='Button 2nd test' />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Transparent Interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered: ReactTestRenderer;
  let root: ReactTestRenderer['root'];
  let component: any;

  beforeAll(() => {
    component = <Button onPress={onClick}/>;
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    const button = root.find(
      (el: any) => el.type === 'button',
    );
    button.props.onPress();
    expect(count).toBe(2);
  });
});

describe('WhiteButton Interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered: ReactTestRenderer;
  let root: ReactTestRenderer['root'];
  let component: any;

  it('Simulate onClick', () => {
    component = <Button white={true} onPress={onClick}/>;
    rendered = renderer.create(component);
    root = rendered.root;

    const button = root.find(
      (el: any) => el.type === 'button',
    );
    button.props.onPress();
    expect(count).toBe(2);
  });

  it('Render isLoading status', () => {
    component = <Button white={true} isLoading={true}/>;
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Render img status', () => {
    component = <Button white={true} imgSrc={IC_FACEBOOK_W}/>;
    rendered = renderer.create(component);
    root = rendered.root;
  });
});
