import React from 'react';
import { shallow } from 'enzyme';
import { QuestionCount } from './QuestionCount';

describe('QuestionCount', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<QuestionCount shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<QuestionCount shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});
