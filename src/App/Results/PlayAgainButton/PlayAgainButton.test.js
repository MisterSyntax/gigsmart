import React from 'react';
import { shallow } from 'enzyme';
import { PlayAgainButton } from './PlayAgainButton';

describe('PlayAgainButton', () => {
    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<PlayAgainButton />);
        expect(wrapper.find('.play-again-button').length).toEqual(1);
    });
});
