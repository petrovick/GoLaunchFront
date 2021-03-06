import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Creators as LoginActions } from '../ducks/login';

export function* addLogin(action) {
  try {
    debugger;
    const dados = yield call(api.post, '/session/login', action.payload.user);

    const { data } = dados;
    if (data.error) {
      yield put(LoginActions.addLoginFailure(data.error));
    } else {
      debugger;
      login(data.token);
      debugger;
      // yield put(push("/home"));
      // yield put(LoginActions.addLoginSuccess(data));

      if (data.user.isGamer) {
        yield put(push('/gamer'));
      } else {
        yield put(push('/businessman'));
      }
    }
  } catch (err) {
    yield put(LoginActions.addLoginFailure('Erro ao logar.'));
  }
}
