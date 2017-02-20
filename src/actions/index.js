import { AUTOSCROLL_TOGGLE, ADD_CONTENT_AS_SHOWN } from './types';

export const toggleAutoScroll = (bool) => {
  return {
    type: AUTOSCROLL_TOGGLE,
    payload: bool
  };
};

export const addContentToState = (name) => {
  return {
    type: ADD_CONTENT_AS_SHOWN,
    payload: name
  }
}
