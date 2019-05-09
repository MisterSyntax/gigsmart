// import { createSelector } from 'reselect';
import deep from 'deep-get-set';
// import { getViewStates } from '../viewStates'; // TODO: Update this path!
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';

// Helpers

// Reducers
export default function quizReducer(state = { shouldShowQuiz: false }, action = {}) {
    switch (action.type) {
    case QUESTIONS_LOAD_SUCCESS:
        return {
            ...state,
            currentQuestionIndex: 0,
            shouldShowQuiz: true,
        };

    default:
        return state;
    }
}


// Selectors
export const getShouldShowQuiz = state => deep(state, 'viewStates.Quiz.shouldShowQuiz') || false;

export const getCurrentQuestionIndex = state => deep(state, 'viewStates.Quiz.currentQuestionIndex') || 0;
