import { NAME_CHANGE } from '../store/actions';

const INITIAL_STATE = {
  name : 'sajjad'
}

// Reducer
export function nameReducer (state = INITIAL_STATE , action) {
  switch (action.type) {
  case NAME_CHANGE :
    return { ...state , name : action.payload.name }
  default:
    return state
  }
}