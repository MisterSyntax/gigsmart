import questionsReducer, {
    getAllQuestionsData,
    getCurrentQuestionAnswer,
    getCurrentQuestionCategory,
    getCurrentQuestionData,
    getCurrentQuestionText,
    getQuestionAnswer,
    getQuestionCategory,
    getQuestionData,
    getQuestionTextForIndex,
    getTotalQuestions,
} from './apiData';
import {
    QUESTIONS_LOAD,
    QUESTIONS_LOAD_FAILURE,
    QUESTIONS_LOAD_SUCCESS,
} from './actions';

describe('Api Data', () => {
    it('handles default with no params state', () => {
        expect(questionsReducer()).toEqual({});
    });
    it('questionsReducer handles QUESTIONS_LOAD', () => {
        expect(questionsReducer({}, {
            type: QUESTIONS_LOAD,
        })).toEqual({
            loading: true,
            loaded: false,
        });
    });
    it('questionsReducer handles QUESTIONS_LOAD_FAILURE', () => {
        expect(questionsReducer({}, {
            type: QUESTIONS_LOAD_FAILURE,
        })).toEqual({
            loading: false,
            loaded: false,
            error: true,
        });
    });
    it('questionsReducer handles QUESTIONS_LOAD_SUCCESS', () => {
        expect(questionsReducer({}, {
            type: QUESTIONS_LOAD_SUCCESS,
            data: 'test',
        })).toEqual({
            loading: true,
            loaded: false,
            data: 'test',
        });
    });
});

/*

export const getQuestionData = (state, index) => getAllQuestionsData(state)[index] || {};
export const getQuestionCategory = (state, index) => getQuestionData(state, index).category;
export const getQuestionTextForIndex = (state, index) => getQuestionTextForIndex(state, index).question;
export const getQuestionAnswer = (state, index) => getQuestionAnswer(state, index).correct_answer;

*/
describe('question api data selectors', () => {
    it('getAllQuestionsData - gets the data for all questions', () => {
        const rootState = {
            apiData: {
                questions: {
                    data: 'dataArr',
                },
            },
        };
        expect(getAllQuestionsData(rootState)).toEqual('dataArr');
        expect(getAllQuestionsData({})).toEqual([]);
    });
    it('getQuestionData - gets the data at index X', () => {
        const state = {
            viewStates: {
                Quiz: {
                    currentQuestionIndex: 2,
                },
            },
            apiData: {
                questions: {
                    data: [
                        {},
                        {},
                        'dataFor3',
                    ],
                },
            },
        };
        expect(getTotalQuestions(state)).toEqual(3);
        expect(getTotalQuestions({})).toEqual(0);
        expect(getQuestionData(state, 2)).toEqual('dataFor3');
        expect(getQuestionData({}, 2)).toEqual({});
        expect(getCurrentQuestionData(state)).toEqual('dataFor3');
        expect(getCurrentQuestionData({})).toEqual({});
    });

    const state = {
        apiData: {
            questions: {
                data: [
                    {},
                    {},
                    {
                        category: 'cat',
                        correct_answer: 'ans',
                        question: 'quex',
                    },
                ],
            },
        },
    };
    it('getQuestionAnswer gets the answer for the question at index i', () => {
        expect(getQuestionAnswer(state, 2)).toEqual('ans');
        expect(getQuestionAnswer({})).toEqual('');
    });
    it('getQuestionCategory gets the category for the question at index i', () => {
        expect(getQuestionCategory(state, 2)).toEqual('cat');
        expect(getQuestionCategory({})).toEqual('');
    });
    it('getQuestionTextForIndex gets the text for the question at index i', () => {
        expect(getQuestionTextForIndex(state, 2)).toEqual('quex');
        expect(getQuestionTextForIndex({}, 2)).toEqual('');
    });
});

describe('current question selectors', () => {
    const state = {
        apiData: {
            questions: {
                data: [
                    {},
                    {},
                    {
                        category: 'cat',
                        correct_answer: 'ans',
                        question: 'quex',
                    },
                ],
            },
        },
        viewStates: {
            Quiz: {
                currentQuestionIndex: 2,
            },
        },
    };
    it('getCurrentQuestionAnswer gets the answer for the current Question', () => {
        expect(getCurrentQuestionAnswer(state)).toEqual('ans');
        expect(getCurrentQuestionAnswer({})).toEqual('');
    });
    it('getCurrentQuestionAnswer gets the answer for the current Question', () => {
        expect(getCurrentQuestionCategory(state)).toEqual('cat');
        expect(getCurrentQuestionCategory({})).toEqual('');
    });
    it('getCurrentQuestionAnswer gets the answer for the current Question', () => {
        expect(getCurrentQuestionText(state)).toEqual('quex');
        expect(getCurrentQuestionText({})).toEqual('');
    });
});
