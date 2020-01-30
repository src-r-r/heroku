import * as types from '../constants';

const initialState = {
	flag: true
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FALSE_FLAG:
      return {
      	...state,
      	flag: action.payload
      };
    default:
      return state;
  }
}