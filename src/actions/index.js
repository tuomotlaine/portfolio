import { AUTOSCROLL_TOGGLE } from './types';

export const toggleAutoScroll = (bool) => {
  return {
    type: AUTOSCROLL_TOGGLE,
    payload: bool
  };
};
