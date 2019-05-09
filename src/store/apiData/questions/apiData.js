import { createSelector } from 'reselect';
import deep from 'deep-get-set';
import {
    QUESTIONS_LOAD,
    QUESTIONS_LOAD_FAILURE,
    QUESTIONS_LOAD_SUCCESS,
} from './actions';
import {
    getCurrentQuestionIndex,
} from '../../../App/Quiz/viewStates';

// Helpers

// Reducers
export default function questionsReducer(state = {}, action = {}) {
    switch (action.type) {
    case QUESTIONS_LOAD: {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }

    case QUESTIONS_LOAD_FAILURE: {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: true,
        };
    }

    case QUESTIONS_LOAD_SUCCESS: {
        return {
            ...state,
            data: deep(action, 'data'),
            loading: true,
            loaded: false,
        };
    }

    default:
        return state;
    }
}


// Selectors
export const getAllQuestionsData = state => deep(state, 'apiData.questions.data') || [];
export const getTotalQuestions = state => getAllQuestionsData(state).length;

// Selector for questions at index
export const getQuestionData = (state, index) => getAllQuestionsData(state)[index] || {};
export const getQuestionCategory = (state, index) => getQuestionData(state, index).category || '';
export const getQuestionText = createSelector(
    (state, index) => getQuestionData(state, index).question || '',
    questionText => decodeURI(questionText),
);
export const getQuestionAnswer = (state, index) => getQuestionData(state, index).correct_answer || '';

// Selector for current Question
export const getCurrentQuestionData = state => (
    getAllQuestionsData(state)[getCurrentQuestionIndex(state)] || {}
);
export const getCurrentQuestionCategory = state => (
    getQuestionData(state, getCurrentQuestionIndex(state)).category || ''
);
export const getCurrentQuestionText = state => (
    getQuestionData(state, getCurrentQuestionIndex(state)).question || ''
);
export const getCurrentQuestionAnswer = state => (
    getQuestionData(state, getCurrentQuestionIndex(state)).correct_answer || ''
);
