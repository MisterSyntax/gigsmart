import React from 'react';
import { shallow } from 'enzyme';
import { QuestionCount } from './QuestionCount';

describe('QuestionCount', () => {
    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<QuestionCount />);
        expect(wrapper.find('.question-count').length).toEqual(1);
    });
});
