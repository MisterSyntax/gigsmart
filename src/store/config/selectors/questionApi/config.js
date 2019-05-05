import deep from 'deep-get-set';

// Selectors
const getQuestionsApi = state => deep(state, 'config.apis.quizApi');
export const getQuestionsApiUrl = state => deep(state, 'config.apis.quizApi.url');
export const getQuestionsApiSettings = state => deep(state,
    'config.apis.quizApi.settings');
export const getQuestionsApiSettingsAmount = state => deep(state,
    'config.apis.quizApi.settings.amount');
export const getQuestionsApiSettingsDifficulty = state => deep(state,
    'config.apis.quizApi.settings.difficulty');
export const getQuestionsApiSettingsType = state => deep(state,
    'config.apis.quizApi.settings.type');
export const getQuestionsApirUrlWithParams = state => `${getQuestionsApiUrl(state)}amount=${getQuestionsApiSettingsAmount(state)}&difficulty=${getQuestionsApiSettingsDifficulty(state)}&type=${getQuestionsApiSettingsType(state)}`;

export default getQuestionsApi;
