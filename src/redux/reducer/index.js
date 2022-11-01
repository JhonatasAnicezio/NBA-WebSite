import { combineReducers } from 'redux';
import scores from './scores';
import news from './news';

const rootReducer = combineReducers({ scores, news });

export default rootReducer;