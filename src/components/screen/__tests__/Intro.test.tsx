import React from 'react';
import { shallow, render } from 'enzyme';

import Store from '../../../stores/appStore';
import { Intro } from '../Intro';

// test for the container page in dom
describe('Intro page DOM rendering test', () => {
  const testStore = new Store();
  const page = shallow(
    <Intro store={testStore} />,
  );

  it('Tab1 page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
