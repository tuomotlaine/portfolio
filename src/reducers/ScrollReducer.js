import {
  AUTOSCROLL_TOGGLE
} from '../actions/types';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTOSCROLL_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};
