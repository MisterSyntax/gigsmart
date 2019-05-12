import { combineReducers } from 'redux';
import homeReducer from '../../App/Home/viewStates';
import quizReducer from '../../App/Quiz/viewStates';

export default combineReducers({
    Home: homeReducer,
    Quiz: quizReducer,
});
