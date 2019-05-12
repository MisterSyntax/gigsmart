import React from 'react';
import { shallow } from 'enzyme';
import { TrueFalseContainer } from './TrueFalseContainer';

describe('TrueFalseContainer', () => {
    it('when it successfully renders it renders a div with className of .true-false-container', () => {
        const wrapper = shallow(<TrueFalseContainer />);
        expect(wrapper.find('.true-false-container').length).toEqual(1);
    });
});
