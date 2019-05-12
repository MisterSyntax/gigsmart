import React from 'react';
import { shallow } from 'enzyme';
import { TrueButton } from './TrueButton';

describe('TrueButton', () => {
    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<TrueButton />);
        expect(wrapper.find('.true-button').length).toEqual(1);
    });
});
