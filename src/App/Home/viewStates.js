// import { createSelector } from 'reselect';
import deep from 'deep-get-set';
// import { getViewStates } from '../viewStates'; // TODO: Update this path!
import {
    QUESTIONS_LOAD_SUCCESS
} from '../../store/apiData/questions/actions';

// Helpers

// Reducers
export default function myComponentReducer(state = { shouldShowHome: true }, action = {}) {
    switch (action.type) {
    case QUESTIONS_LOAD_SUCCESS:
        return {
            ...state,
            thing: true,
        };

    default:
        return state;
    }
}


// Selectors

// export const getMyComponentViewState = createSelector(
//     getViewStates,
//     viewStates => deep(viewStates, 'myComponent') || {}
// );
//
// export const getMyComponentThing = createSelector(
//     getMyComponentViewState,
//     myComponent => deep(myComponent, 'thing') || false,
// );
