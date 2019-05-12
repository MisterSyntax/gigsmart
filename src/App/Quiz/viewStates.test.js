import quizReducer, {
    getCurrentQuestionIndex,
    getQuizAnswers,
    getShouldShowQuiz,
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
    it('Initializes to shouldShowQuizowHome: false', () => {
        expect(quizReducer())
            .toMatchObject({
                shouldShowQuiz: false,
            });
        expect(quizReducer({ shouldShowQuiz: true }, {}))
            .toMatchObject({
                shouldShowQuiz: true,
            });
    });
    it('QUESTIONS_LOAD_SUCCESS sets shouldShowQuiz to true', () => {
        const action = {
            type: QUESTIONS_LOAD_SUCCESS,
        };

        expect(quizReducer({}, action))
            .toMatchObject({
                shouldShowQuiz: true,
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
    it('getShouldShowQuiz gets the viewState for Quiz', () => {
        const state = {
            viewStates: {
                Quiz: {
                    answers: 'answers',
                    currentQuestionIndex: 1,
                    shouldShowQuiz: true,
                },
            },
        };

        expect(getShouldShowQuiz(state)).toEqual(true);
        expect(getShouldShowQuiz({})).toEqual(false);
        expect(getCurrentQuestionIndex(state)).toEqual(1);
        expect(getCurrentQuestionIndex({})).toEqual(0);
        expect(getQuizAnswers(state)).toEqual('answers');
        expect(getQuizAnswers({})).toEqual([]);
    });
});
