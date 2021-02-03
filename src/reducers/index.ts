
import { combineReducers } from 'redux';
import comicsReducer from './reducer_comics';

const rootReducer = combineReducers({
    comics: comicsReducer
});

export default rootReducer;
