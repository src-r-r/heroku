import * as types from '../constants';

const initialState = {
	title: '',
  flag: false
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RESERVE_FLAG:
      return {
      	...state,
      	title: action.payload.title,
        flag: action.payload.flag
      };
    case types.NO_DROP_DOWN:
      return {
        ...state,
        title: action.payload.title,
        flag: action.payload.flag
      }
    default:
      return state;
  }
}