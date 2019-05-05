import { combineReducers } from 'redux';
import questionsReducer from './questions/apiData';

export default combineReducers({
    questions: questionsReducer,
});
