import { combineReducers } from 'redux';
import config from './config/config';
import viewStates from './viewStates/viewStates';

export default combineReducers({
    config,
    viewStates,
});
