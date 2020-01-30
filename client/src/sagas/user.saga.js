import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
import * as api from '../connectivily/api.user';
// import validateName from '../validation/validateName';
import * as userAction from "../actions";


export function* doSignUpUser(action) {
	try {
		const signUpData = action.payload;
		console.log(action.payload);
		// singup backend
		//const responsebody = yield call(api.signup, signUpData);
		let url = "https://reactflask.herokuapp.com/register";
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
	      //sss
	      localStorage.setItem('username', 'username');

	      // if (localStorage.getItem("access_token") !== null && localStorage.getItem("access_token")!=="undefined") {
	      //   window.location.replace("/")
	      // }else{
	      //     alert(data.error)
	      // }
	    }).catch(err => console.log(err));

		// if (responsebody.data == "Add success!") {
		// 	action.payload.history.push('/checkTrelloPage')
		// }

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