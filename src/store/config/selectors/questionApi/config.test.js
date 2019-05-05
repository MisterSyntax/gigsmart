import getQuestionsApi, {
    getQuestionsApiUrl,
    getQuestionsApiSettings,
    getQuestionsApiSettingsAmount,
    getQuestionsApiSettingsDifficulty,
    getQuestionsApiSettingsType,
    getQuestionsApirUrlWithParams,
} from './config';

const state = {
    config: {
        apis: {
            quizApi: {
                url: 'https://opentdb.com/api.php?',
                settings: {
                    amount: '10',
                    difficulty: 'hard',
                    type: 'boolean',
                },
            },
        },
    },
};

describe('question Api Selectors', () => {
    it('getQuestionsApi - returns the object for question API', () => {
        const store = {
            config: {
                apis: {
                    quizApi: 'an object',
                },
            },
        };
        expect(getQuestionsApi(store)).toEqual('an object');
    });
    it('getQuestionsApiUrl - returns the questionsApiUrl from the store', () => {
        expect(getQuestionsApiUrl(state)).toEqual('https://opentdb.com/api.php?');
    });
    it('getQuestionsApiSettings - returns the questionsApiUrl from the store', () => {
        const store = {
            config: {
                apis: {
                    quizApi: {
                        settings: 'settings',
                    },
                },
            },
        };
        expect(getQuestionsApiSettings(store)).toEqual('settings');
    });
    it('getQuestionsApiSettingsAmount - returns the questionsApiUrl from the store', () => {
        expect(getQuestionsApiSettingsAmount(state)).toEqual('10');
    });
    it('getQuestionsApiSettingsDifficulty - returns the questionsApiUrl from the store', () => {
        expect(getQuestionsApiSettingsDifficulty(state)).toEqual('hard');
    });
    it('getQuestionsApiSettingsType - returns the questionsApiUrl from the store', () => {
        expect(getQuestionsApiSettingsType(state)).toEqual('boolean');
    });
    it('getQuestionsApirUrlWithParams combines the values to one url', () => {
        expect(getQuestionsApirUrlWithParams(state).toEqual('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'));
    });
});
