import { mount } from 'enzyme';
import React from 'react';
import { FilmsList } from '../FilmsList';
// @ts-ignore
import dummyData from './dummyData.json';

describe('<FilmList />', () => {
   test('Renders correctly', () => {
      const component = mount(<FilmsList films={dummyData} />);
      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });

   test('Sorting works', () => {
      const component = mount(<FilmsList films={dummyData} />);
      component.find('button').at(0).simulate('click');
      expect(component.html()).toMatchSnapshot();
      component.find('button').at(1).simulate('click');
      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });
});
