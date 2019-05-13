import React from 'react';
import { shallow } from 'enzyme';
import { Score } from './Score';

describe('Score', () => {
    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<Score />);
        expect(wrapper.find('.score').length).toEqual(1);
    });
});
