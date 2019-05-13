import {
    getDidAnswerCorrectlyForIndex,
    getScore,
} from './viewStates';

// Reducer Tests
// describe('MyComponent ViewStates', () => {
//     it('MY_EVENT_NAME sets thing to true', () => {
//         const action = {
//             type: MY_EVENT_NAME
//         };
//
//         expect(myComponentReducer({}, action))
//             .toMatchObject({
//                 thing: true
//         });
//     });
// });

// Selector Tests
describe('MyComponent selectors', () => {
    it('getScore gets the score of the test', () => {
        const state = {
            apiData: {
                questions: {
                    data: [
                        { correct_answer: 'True' },
                        { correct_answer: 'True' },
                        { correct_answer: 'True' },
                    ],
                },
            },
            viewStates: {
                Quiz: {
                    answers: ['True', 'False', 'True'],
                    currentQuestionIndex: 1,
                    hasStartedQuiz: true,
                },
            },
        };

        expect(getScore(state)).toEqual(2);
    });
});

describe('getDidAnswerCorrectlyForIndex', () => {
    it('returns true/false depending if the user answered that question correctly', () => {
        const state = {
            apiData: {
                questions: {
                    data: [
                        { correct_answer: 'True' },
                        { correct_answer: 'True' },
                        { correct_answer: 'True' },
                    ],
                },
            },
            viewStates: {
                Quiz: {
                    answers: ['True', 'False', 'True'],
                    currentQuestionIndex: 1,
                    hasStartedQuiz: true,
                },
            },
        };
        expect(getDidAnswerCorrectlyForIndex(state, 0)).toEqual(true);
        expect(getDidAnswerCorrectlyForIndex(state, 1)).toEqual(false);
        expect(getDidAnswerCorrectlyForIndex({}, 0)).toEqual(false);
    });
});
