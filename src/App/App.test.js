import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
    it('when should render there is a main with App className', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.app-container').length).toEqual(1);
    });
});
