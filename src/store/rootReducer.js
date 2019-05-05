import { combineReducers } from 'redux';
import apiData from './apiData/apiData';
import config from './config/config';
import viewStates from './viewStates/viewStates';

export default combineReducers({
    apiData,
    config,
    viewStates,
});
