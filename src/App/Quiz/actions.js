export const QUIZ_SUBMIT_ANSWER = 'QUIZ_SUBMIT_ANSWER';
export const QUIZ_UPDATE_CURRENT_QUESTION_INDEX = 'QUIZ_UPDATE_CURRENT_QUESTION_INDEX';

export const submitQuizAnswer = answer => ({
    type: QUIZ_SUBMIT_ANSWER,
    answer,
});

export const updateCurrentQuestionIndex = questionIndex => ({
    type: QUIZ_UPDATE_CURRENT_QUESTION_INDEX,
    questionIndex,
});
