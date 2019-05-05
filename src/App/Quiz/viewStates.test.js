import quizReducer, {
    getShouldShowQuiz,
} from './viewStates';
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';

// Reducer Tests
describe('MyComponent ViewStates', () => {
    it('Initializes to shouldShowQuizowHome: false', () => {
        expect(quizReducer(undefined, {}))
            .toMatchObject({
                shouldShowQuiz: false,
            });
        expect(quizReducer({ shouldShowQuiz: true }, {}))
            .toMatchObject({
                shouldShowQuiz: true,
            });
    });
    it('QUESTIONS_LOAD_SUCCESS sets shouldShowQuiz to true', () => {
        const action = {
            type: QUESTIONS_LOAD_SUCCESS,
        };

        expect(quizReducer({}, action))
            .toMatchObject({
                shouldShowQuiz: true,
            });
    });
});

// Selector Tests
describe('Home selectors', () => {
    it('getShouldShowQuiz gets the viewState for Quiz', () => {
        const state = {
            viewStates: {
                Quiz: {
                    shouldShowQuiz: true,
                },
            },
        };

        expect(getShouldShowQuiz(state)).toEqual(true);
    });
});
