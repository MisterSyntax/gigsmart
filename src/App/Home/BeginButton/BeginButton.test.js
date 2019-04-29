import React from 'react';
import { shallow } from 'enzyme';
import { BeginButton } from './BeginButton';

describe('BeginButton', () => {
    it('it should render the begin button and handle clicks to call the beginQuiz button', () => {
        const beginQuiz = jest.fn(x => x);
        const wrapper = shallow(<BeginButton beginQuiz={beginQuiz} />);
        expect(wrapper.find('.begin-button').length).toEqual(1);
        wrapper.find('.begin-button').simulate('click');
        expect(beginQuiz.mock.calls.length).toEqual(1);
    });
});
