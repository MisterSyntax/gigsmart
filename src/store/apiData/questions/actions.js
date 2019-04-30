import fetch from 'cross-fetch';

export const QUESTIONS_LOAD = 'QUESTIONS_LOAD';
export const QUESTIONS_LOAD_FAILURE = 'QUESTIONS_LOAD_FAILURE';
export const QUESTIONS_LOAD_SUCCESS = 'QUESTIONS_LOAD_SUCCESS';

export const requestQuestions = () => ({
    type: QUESTIONS_LOAD,
});

export const receiveQuestions = data => ({
    type: QUESTIONS_LOAD_SUCCESS,
    data: data.response,
});

export const failToReceiveQuestions = error => ({
    type: QUESTIONS_LOAD_FAILURE,
    error,
});


export const fetchQuestions = api => (
    function fetchRequest(dispatch) {
    // First dispatch: the app state is updated to infor that the API call is starting.
        dispatch(requestQuestions());

        return fetch(api)
            .then(response => response.json())
            .then(data => dispatch(receiveQuestions(data)))
            .catch(error => dispatch(failToReceiveQuestions(error)));
    }
);
