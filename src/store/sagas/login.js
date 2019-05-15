import { call, put, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";

import { Creators as LoginActions } from "../ducks/login";

export function* addLogin(action) {
  try {
    debugger;
    const { data } = yield call(
      api.post,
      "/session/login",
      action.payload.user
    );

    if (data.error) {
      yield put(LoginActions.addLoginFailure(data.error));
    } else {
      const repositoryData = data;
      debugger;
      //yield put(push("/home"));
      yield put(LoginActions.addLoginSuccess(repositoryData));
      yield put(push("/main"));
    }
  } catch (err) {
    yield put(LoginActions.addLoginFailure("Erro ao logar."));
  }
}
