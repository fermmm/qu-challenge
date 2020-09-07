import { mount } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../../themes/defaultTheme';
import { FilmsList } from '../FilmsList';
// @ts-ignore
import dummyData from './dummyData.json';

describe('<FilmList />', () => {
   test('Renders correctly', () => {
      const component = mount(
         <ThemeProvider theme={defaultTheme}>
            <FilmsList films={dummyData} />
         </ThemeProvider>
      );
      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });

   test('Sorting works', () => {
      const component = mount(
         <ThemeProvider theme={defaultTheme}>
            <FilmsList films={dummyData} />
         </ThemeProvider>
      );
      component.find('button').at(0).simulate('click');
      expect(component.html()).toMatchSnapshot();
      component.find('button').at(1).simulate('click');
      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });
});
