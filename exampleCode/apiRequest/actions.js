/**
* @desc - How to create a new request
* 1. Create events for load, failure, success
* 2. Create actions for request, receive, and failure
* 3. Create a thunk that will fetch the data and update the store as it completes or fails
*/

import fetch from 'cross-fetch';
// 1. Create events for load, failure, success
export const MY_ENDPOINT_LOAD = 'MY_ENDPOINT_LOAD';
export const MY_ENDPOINT_LOAD_FAILURE = 'MY_ENDPOINT_LOAD_FAILURE';
export const MY_ENDPOINT_LOAD_SUCCESS = 'MY_ENDPOINT_LOAD_SUCCESS';

// 2. Create actions for request, receive, and failure
export const requestMyData = () => ({
    type: MY_ENDPOINT_LOAD,
});

export const receivemyData = data => ({
    type: MY_ENDPOINT_LOAD_SUCCESS,
    data: data.response,
});

export const failToReceivemyData = error => ({
    type: MY_ENDPOINT_LOAD_FAILURE,
    error,
});

// 3. Create a thunk that will fetch the data and update the store as it complets or fails
export const fetchmyData = api => (
    function fetchRequest(dispatch) {
    // First dispatch: the app state is updated to infor that the API call is starting.
        dispatch(requestMyData());

        return fetch(api)
            .then(response => response.json())
            .then(data => dispatch(receivemyData(data)))
            .catch(error => dispatch(failToReceivemyData(error)));
    }
);
