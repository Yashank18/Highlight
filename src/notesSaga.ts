import {call, put, takeEvery} from 'redux-saga/effects';


function* workAddNote() {
    yield put({type: 'notes/addNoteSuccess'});
}

function* notesSaga() {
  yield takeEvery('notes/addNote', workAddNote);
}