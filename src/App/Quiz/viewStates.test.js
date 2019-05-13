import quizReducer, {
    getCurrentQuestionIndex,
    getQuizAnswers,
    getQuizAnswerForIndex,
    getHasCompletedQuiz,
    getHasStartedQuiz,
} from './viewStates';
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';
import {
    QUIZ_SUBMIT_ANSWER,
    QUIZ_UPDATE_CURRENT_QUESTION_INDEX,
} from './actions';

// Reducer Tests
describe('MyComponent ViewStates', () => {
    it('Initializes to hasStartedQuizowHome: false', () => {
        expect(quizReducer())
            .toMatchObject({
                hasStartedQuiz: false,
            });
        expect(quizReducer({ hasStartedQuiz: true }, {}))
            .toMatchObject({
                hasStartedQuiz: true,
            });
    });
    it('QUESTIONS_LOAD_SUCCESS sets hasStartedQuiz to true', () => {
        const action = {
            type: QUESTIONS_LOAD_SUCCESS,
        };

        expect(quizReducer({}, action))
            .toMatchObject({
                hasStartedQuiz: true,
                currentQuestionIndex: 0,
            });

        expect(quizReducer(undefined, undefined))
            .toMatchObject({});
    });
    it('QUIZ_SUBMIT_ANSWER adds the current', () => {
        const action = {
            type: QUIZ_SUBMIT_ANSWER,
            answer: false,
        };

        expect(quizReducer(undefined, action))
            .toMatchObject({
                answers: [false],
            });

        expect(quizReducer({ answers: [true, false] }, action))
            .toMatchObject({
                answers: [true, false, false],
            });

        expect(quizReducer({}, {}))
            .toMatchObject({});
    });
    it('QUIZ_UPDATE_CURRENT_QUESTION_INDEX adds the current', () => {
        const action = {
            type: QUIZ_UPDATE_CURRENT_QUESTION_INDEX,
            questionIndex: 2,
        };

        expect(quizReducer(undefined, action))
            .toMatchObject({
                currentQuestionIndex: 2,
            });

        expect(quizReducer({ currentQuestionIndex: 1 }, action))
            .toMatchObject({
                currentQuestionIndex: 2,
            });

        expect(quizReducer(undefined, {}))
            .toMatchObject({
                currentQuestionIndex: 0,
            });
    });
});

// Selector Tests
describe('Home selectors', () => {
    it('getHasStartedQuiz gets the viewState for Quiz', () => {
        const state = {
            apiData: {
                questions: {
                    data: [
                        {},
                        {},
                        {},
                    ],
                },
            },
            viewStates: {
                Quiz: {
                    answers: 'answers',
                    currentQuestionIndex: 1,
                    hasStartedQuiz: true,
                },
            },
        };

        expect(getHasStartedQuiz(state)).toEqual(true);
        expect(getHasStartedQuiz({})).toEqual(false);
        expect(getHasCompletedQuiz(state)).toEqual(false);
        expect(getHasCompletedQuiz({})).toEqual(true);
        expect(getCurrentQuestionIndex(state)).toEqual(1);
        expect(getCurrentQuestionIndex({})).toEqual(0);
        expect(getQuizAnswers(state)).toEqual('answers');
        expect(getQuizAnswers({})).toEqual([]);
    });
});

describe('getQuizAnswerForIndex', () => {
    it('gets the answer for index', () => {
        const state = {
            viewStates: {
                Quiz: {
                    answers: ['True0', 'True1', 'True2'],
                },
            },
        };
        expect(getQuizAnswerForIndex(state, 0)).toEqual('True0');
        expect(getQuizAnswerForIndex(state, 2)).toEqual('True2');
        expect(getQuizAnswerForIndex({}, 2)).toEqual('');
        expect(getQuizAnswerForIndex(state, 3)).toEqual('');
    });
});
