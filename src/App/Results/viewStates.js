import { createSelector } from 'reselect';
// import deep from 'deep-get-set';
import {
    getQuizAnswers,
    getQuizAnswerForIndex,
} from '../Quiz/viewStates';
import {
    getQuestionAnswer,
} from '../../store/apiData/questions/apiData';

// Selectors

export const getDidAnswerCorrectlyForIndex = createSelector(
    (state, index) => getQuestionAnswer(state, index),
    (state, index) => getQuizAnswerForIndex(state, index),
    (correctAnswer, userAnswer) => (userAnswer && correctAnswer === userAnswer) || false,
);

export const getScore = createSelector(
    state => state,
    state => getQuizAnswers(state),
    (state, quizAnswers) => quizAnswers.reduce((totalCorrect, curr, i) => (
        (getDidAnswerCorrectlyForIndex(state, i))
            ? totalCorrect + 1
            : totalCorrect
    ), 0),
);

export default getScore;
