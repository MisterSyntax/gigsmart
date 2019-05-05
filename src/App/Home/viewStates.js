// import { createSelector } from 'reselect';
import deep from 'deep-get-set';
// import { getViewStates } from '../viewStates'; // TODO: Update this path!
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';

// Helpers

// Reducers
export default function homeReducer(state = { shouldShowHome: true }, action = {}) {
    switch (action.type) {
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
