import {
  ADD_CONTENT_AS_SHOWN
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTENT_AS_SHOWN:
      return [...state, action.payload];
    default:
      return state;
  }
};
