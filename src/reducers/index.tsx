
import { combineReducers } from 'redux';
import comicsReducer from './reducer_comics';

const rootReducer = combineReducers({
    images: comicsReducer
});

export default rootReducer;
