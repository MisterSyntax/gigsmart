import React from 'react';
import { shallow } from 'enzyme';
import { Answer } from './Answer';

describe('Answer', () => {
    it('renders the incorrect answer experience', () => {
        const wrapper = shallow(<Answer didAnswerCorrectly={false} />);
        expect(wrapper.find('.incorrect-answer-container').length).toEqual(1);
    });

    it('renders the correctt answer experience', () => {
        const wrapper = shallow(<Answer didAnswerCorrectly />);
        expect(wrapper.find('.correct-answer-container').length).toEqual(1);
    });
});
