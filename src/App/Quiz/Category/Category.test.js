import React from 'react';
import { shallow } from 'enzyme';
import { Category } from './Category';

describe('Category', () => {
    it('renders a h1 with className question-category', () => {
        const wrapper = shallow(<Category />);
        expect(wrapper.find('.question-category').length).toEqual(1);
    });
});
