import React from 'react';
import { shallow, render } from 'enzyme';

import appStore from '../../../stores/appStore';
import Intro from '../Intro';

// test for the container page in dom
describe('Intro page DOM rendering test', () => {
  const page = shallow(
    <Intro store={appStore} />,
  );

  it('Tab1 page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
