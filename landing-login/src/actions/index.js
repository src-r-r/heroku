import * as types from '../constants';

export function reserveFlag(title) {
	return {
		type: types.RESERVE_FLAG,
		payload: title
	}
}

export function falseFlag(flag) {
	return {
		type: types.FALSE_FLAG,
		payload: flag
	}
}

export function noDropDownFlag(data) {
	return {
		type: types.NO_DROP_DOWN,
		payload: data
	}
}

export function signUpRequest(data) {
	return {
		type: types.SIGN_UP_REQUEST,
		payload: data
	}
}

export function errors(data) {
	return {
		type: types.GET_ERRORS,
		data: data
	}
}