import { combineReducers } from 'redux';
import content from './recipes/reducers';

const rootReducer = combineReducers({ content });

export default rootReducer;
