import * as renderer from 'react-test-renderer';

import React from 'react';
import UserCard from '../UserCard';
import {createTestElement} from '../../../../test/testUtils';

const props = {};
const component = createTestElement(<UserCard {...props} />);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });
});
