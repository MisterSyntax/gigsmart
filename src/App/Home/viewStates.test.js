import homeReducer, { getShouldShowHome } from './viewStates';
import {
    QUESTIONS_LOAD_SUCCESS,
} from '../../store/apiData/questions/actions';

// Reducer Tests
describe('MyComponent ViewStates', () => {
    it('Initializes to shouldSHowHome: true', () => {
        expect(homeReducer(undefined, {}))
            .toMatchObject({
                shouldShowHome: true,
            });
        expect(homeReducer({ shouldShowHome: false }, {}))
            .toMatchObject({
                shouldShowHome: false,
            });
    });
    it('QUESTIONS_LOAD_SUCCESS sets shouldShowHome to false', () => {
        const action = {
            type: QUESTIONS_LOAD_SUCCESS,
        };

        expect(homeReducer({}, action))
            .toMatchObject({
                shouldShowHome: false,
            });
    });
});

// Selector Tests
describe('Home selectors', () => {
    it('getShouldShowHome gets the viewState for Home', () => {
        const state = {
            viewStates: {
                Home: {
                    shouldShowHome: true,
                },
            },
        };

        expect(getShouldShowHome(state)).toEqual(true);
    });
});
