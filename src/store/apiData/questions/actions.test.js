import {
    failToReceiveQuestions,
    fetchQuestions,
    requestQuestions,
    receiveQuestions,
    QUESTIONS_LOAD,
    QUESTIONS_LOAD_FAILURE,
    QUESTIONS_LOAD_SUCCESS,
} from './actions';

describe('requestQuestions', () => {
    it('dispatches QUESTIONS_LOAD', () => {
        expect(requestQuestions()).toEqual({
            type: QUESTIONS_LOAD,
        });
    });
});

describe('receiveQuestions', () => {
    it('dispatches QUESTIONS_LOAD', () => {
        expect(receiveQuestions({ results: 'I am a data' })).toEqual({
            type: QUESTIONS_LOAD_SUCCESS,
            data: 'I am a data',
        });
    });
});

describe('requestQuestions', () => {
    it('dispatches QUESTIONS_LOAD_FAILURE', () => {
        expect(failToReceiveQuestions('too sad to question')).toEqual({
            type: QUESTIONS_LOAD_FAILURE,
            error: 'too sad to question',
        });
    });
});

describe('fetchQuestions', () => {
    global.fetch = jest.fn(x => x);
    global.dispatch = jest.fn(x => x);
    it('fetchQuestions', () => {
        expect(fetchQuestions('hi')(global.dispatch));
        expect(global.dispatch.mock.calls.length).toEqual(1);
        // really should mockup the endpoint too
    });
    test.todo('should mock up the endpoint and verify the correct actions are getting dispatched with data');
});
