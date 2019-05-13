import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from './Quiz';

describe('Quiz', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<Quiz hasStartedQuiz={false} />);
        expect(wrapper.type()).toEqual(null);
    });
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<Quiz hasCompletedQuizs />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<Quiz hasStartedQuiz />);
        expect(wrapper.find('.quiz').length).toEqual(1);
    });
});
