// import { createSelector } from 'reselect';
import deep from 'deep-get-set';
// import { getViewStates } from '../viewStates'; // TODO: Update this path!
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';
import {
    RESTART_QUIZ,
} from '../Results/actions';

// Helpers

// Reducers
const defaultState = { shouldShowHome: true };
export default function homeReducer(state = defaultState, action = {}) {
    switch (action.type) {
    case RESTART_QUIZ:
        return defaultState;
    case QUESTIONS_LOAD_SUCCESS:
        return {
            ...state,
            shouldShowHome: false,
        };

    default:
        return state;
    }
}


// Selectors
export const getShouldShowHome = state => deep(state, 'viewStates.Home.shouldShowHome');
