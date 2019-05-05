// import { createSelector } from 'reselect';
import deep from 'deep-get-set';
// import { getApiData } from '../selectors'; // Update this path!
import {
    QUESTIONS_LOAD,
    QUESTIONS_LOAD_FAILURE,
    QUESTIONS_LOAD_SUCCESS,
} from './actions';

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
