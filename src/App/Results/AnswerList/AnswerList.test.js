import React from 'react';
import { shallow } from 'enzyme';
import { AnswerList } from './AnswerList';

describe('AnswerList', () => {
    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<AnswerList />);
        expect(wrapper.find('.answer-list').length).toEqual(1);
    });
});
