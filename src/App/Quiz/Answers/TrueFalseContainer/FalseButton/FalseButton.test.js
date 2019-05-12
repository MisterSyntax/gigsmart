import React from 'react';
import { shallow } from 'enzyme';
import { FalseButton } from './FalseButton';

describe('FalseButton', () => {
    it('renders a button with class false-button', () => {
        const wrapper = shallow(<FalseButton />);
        expect(wrapper.find('.false-button').length).toEqual(1);
    });
});
