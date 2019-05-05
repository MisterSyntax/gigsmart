import { combineReducers } from 'redux';
import homeReducer from '../../App/Home/viewStates';

export default combineReducers({
    Home: homeReducer,
});
