import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
import * as api from '../connectivily/api.user';
import * as userAction from "../actions";


export function* doSignUpUser(action) {
	try {
		const signUpData = action.payload;
		console.log(action.payload);
		let url = "https://srcrrherokuangular.herokuapp.com/register";
		let formData  = new FormData();
	    let data = signUpData;
	    for(let name in data) {
	      formData.append(name, data[name]);
	    }
		fetch(url, {
	      method: 'POST',
	      body: formData
	    }).then( res => res.json())
	    .then(data=>{
	      localStorage.setItem('username', 'username');
	    }).catch(err => console.log(err));


	} catch (err) {
		yield put(userAction.errors());
	}
}

export function* watchSignUpRequest() {
	yield takeLatest(types.SIGN_UP_REQUEST, doSignUpUser)
}

export default function* rootSaga() {
	yield all([
		watchSignUpRequest()
	]);
}
