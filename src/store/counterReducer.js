import { INCREMENT , DECREMENT } from '../store/actions';

const INITIAL_STATE = {
  value : 0
}

// Reducer
export function counterReducer (state = INITIAL_STATE , action) {
  switch (action.type) {
  case INCREMENT:
    return { ...state , value: state.value + 1 }
  case DECREMENT:
    return { ...state , value: state.value - 1 }
  default:
    return state
  }
}