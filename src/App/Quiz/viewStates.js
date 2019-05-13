import { createSelector } from 'reselect';
import deep from 'deep-get-set';
import {
    getTotalQuestions,
} from '../../store/apiData/questions/apiData';
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';
import {
    QUIZ_SUBMIT_ANSWER,
    QUIZ_UPDATE_CURRENT_QUESTION_INDEX,
} from './actions';

// Helpers

// Reducers
const defaultState = {
    answers: [],
    currentQuestionIndex: 0,
    hasStartedQuiz: false,
};

export default function quizReducer(state = defaultState, action = {}) {
    switch (action.type) {
    case QUESTIONS_LOAD_SUCCESS:
        return {
            ...state,
            currentQuestionIndex: 0,
            hasStartedQuiz: true,
        };
    case QUIZ_SUBMIT_ANSWER:
        return {
            ...state,
            answers: [...state.answers, action.answer],
        };
    case QUIZ_UPDATE_CURRENT_QUESTION_INDEX:
        return {
            ...state,
            currentQuestionIndex: action.questionIndex,
        };

    default:
        return state;
    }
}


// Selectors
export const getHasStartedQuiz = state => deep(state, 'viewStates.Quiz.hasStartedQuiz') || false;
export const getCurrentQuestionIndex = state => deep(state, 'viewStates.Quiz.currentQuestionIndex') || 0;
export const getQuizAnswers = state => deep(state, 'viewStates.Quiz.answers') || [];

export const getHasCompletedQuiz = createSelector(
    state => getCurrentQuestionIndex(state),
    state => getTotalQuestions(state),
    (currentQuestionIndex, totalQuestions) => (currentQuestionIndex >= totalQuestions),
);
