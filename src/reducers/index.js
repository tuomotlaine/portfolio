import { combineReducers } from 'redux';
import ScrollReducer from './ScrollReducer';
import ShownContentReducer from './ShownContentReducer';

const rootReducer = combineReducers({
  autoScroll: ScrollReducer,
  shownContent: ShownContentReducer
});

export default rootReducer;
