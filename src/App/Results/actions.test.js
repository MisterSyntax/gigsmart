import {
    restartQuiz,
    RESTART_QUIZ,
} from './actions';

describe('restartQuiz', () => {
    it('dispatches restartQuiz event', () => {
        expect(restartQuiz()).toEqual({
            type: RESTART_QUIZ,
        });
    });
});
