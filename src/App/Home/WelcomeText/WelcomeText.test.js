import React from 'react';
import { shallow } from 'enzyme';
import { WelcomeText } from './WelcomeText';

describe('WelcomeText', () => {
    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<WelcomeText numberOfQuestions={10} />);
        expect(wrapper.find('.welcome-header').length).toEqual(1);
    });
});
