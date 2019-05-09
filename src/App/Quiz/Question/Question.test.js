import React from 'react';
import { shallow } from 'enzyme';
import { Question } from './Question';

describe('Question', () => {
    it('it renders an element with className question-text', () => {
        const wrapper = shallow(<Question />);
        expect(wrapper.find('.question-text').length).toEqual(1);
    });
});
