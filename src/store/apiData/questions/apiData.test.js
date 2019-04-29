import questionsReducer from './apiData';
import {
    QUESTIONS_LOAD,
    QUESTIONS_LOAD_FAILURE,
    QUESTIONS_LOAD_SUCCESS,
} from './actions';

describe('Api Data', () => {
    it('questionsReducer handles QUESTIONS_LOAD', () => {
        expect(questionsReducer({}, {
            type: QUESTIONS_LOAD,
        })).toEqual({
            loading: true,
            loaded: false,
        });
    });
    it('questionsReducer handles QUESTIONS_LOAD_FAILURE', () => {
        expect(questionsReducer({}, {
            type: QUESTIONS_LOAD_FAILURE,
        })).toEqual({
            loading: false,
            loaded: false,
            error: true,
        });
    });
    it('questionsReducer handles QUESTIONS_LOAD_SUCCESS', () => {
        expect(questionsReducer({}, {
            type: QUESTIONS_LOAD_SUCCESS,
            data: 'test',
        })).toEqual({
            loading: true,
            loaded: false,
            data: 'test',
        });
    });
});
