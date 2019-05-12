import {
    updateCurrentQuestionIndex,
    submitQuizAnswer,
    QUIZ_SUBMIT_ANSWER,
    QUIZ_UPDATE_CURRENT_QUESTION_INDEX,
} from './actions';

describe('submitQuizAnswer', () => {
    it('creates the appropriate action', () => {
        expect(submitQuizAnswer(true)).toEqual({
            type: QUIZ_SUBMIT_ANSWER,
            answer: true,
        });
    });
});

describe('updateCurrentQuestionIndex', () => {
    it('creates the appropriate action', () => {
        expect(updateCurrentQuestionIndex(2)).toEqual({
            type: QUIZ_UPDATE_CURRENT_QUESTION_INDEX,
            questionIndex: 2,
        });
    });
});
