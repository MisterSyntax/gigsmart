import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home', () => {
    it('renders null when shoukdShowHome is false', () => {
        const wrapper = shallow(<Home shouldShowHome={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when should render there is a section with home className', () => {
        const wrapper = shallow(<Home shouldShowHome />);
        expect(wrapper.find('.home').length).toEqual(1);
    });
});
