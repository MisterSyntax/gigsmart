import { createSelector } from 'reselect';
// import deep from 'deep-get-set';
import { getQuizAnswers } from '../Quiz/viewStates';
import { getQuestionAnswer } from '../../store/apiData/questions/apiData';
// import { getViewStates } from '../viewStates'; // TODO: Update this path!
// import {
//     MY_EVENT_NAME
// } from './actions';

// Helpers

// Reducers
// export default function myComponentReducer(state = {}, action = {}) {
//     switch (action.type) {
//         case MY_EVENT_NAME:
//             return {
//                 ...state,
//                 thing: true,
//             };
//
//         default:
//             return state;
//     }
// }


// Selectors

export const getScore = createSelector(
    state => state,
    state => getQuizAnswers(state),
    (state, quizAnswers) => quizAnswers.reduce((totalCorrect, curr, i) => (
        (curr === getQuestionAnswer(state, i))
            ? totalCorrect + 1
            : totalCorrect
    ), 0),
);

export default getScore;
