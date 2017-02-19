import { combineReducers } from 'redux';
import ScrollReducer from './ScrollReducer';

const rootReducer = combineReducers({
  autoScroll: ScrollReducer
});

export default rootReducer;
