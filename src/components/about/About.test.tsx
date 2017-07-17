import * as React from 'react';
import { shallow } from 'enzyme';
import About from './About';

test('About component renders correctly', () => {
  const component = shallow(<About/>);
  expect(component).toMatchSnapshot();
});
