import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';

describe('Results', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<Results hasCompletedQuiz={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<Results hasCompletedQuiz />);
        expect(wrapper.find('.results-container').length).toEqual(1);
    });
});
