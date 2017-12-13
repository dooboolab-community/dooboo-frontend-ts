import React from 'react';
import { shallow, render } from 'enzyme';
import { StyleRoot } from 'radium';

import Store from '@stores/appStore';
import { Tab1 } from '../pages/Tab1';

// test for the container page in dom
describe('Tab1 page DOM rendering test', () => {
  const testStore = new Store();
  const page = shallow(
    <Tab1 test={true} store={testStore} />,
  );

  it('Tab1 page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
