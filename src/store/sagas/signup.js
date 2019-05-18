import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';

import { Creators as SignupActions } from '../ducks/signup';

export function* addSignup(action) {
  try {
    debugger;
    const { data } = yield call(api.post, '/user/create', action.payload.data);

    if (data.error) {
      yield put(SignupActions.addSignupFailure(data.error));
    } else {
      debugger;
      console.log(data);
      debugger;
      if (data._id) {
        yield put(SignupActions.addSignupSuccess(data));
        yield put(push('/'));
      } else {
        yield put(SignupActions.addSignupFailure('Erro ao criar usuario.'));
      }
    }
  } catch (err) {
    yield put(SignupActions.addSignupFailure('Erro ao criar usuario.'));
  }
}
