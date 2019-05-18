import { call, put, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";

import { Creators as BusinessmanActions } from "../ducks/businessman";

export function* listGames(action) {
  try {
    // debugger;
    const data = yield call(api.get, "/game/list", action.payload.user);

    if (data.error) {
      yield put(BusinessmanActions.listGamesFailure(data.error));
    } else {
      debugger;
      console.tron.log("console.tron.log(data);");
      console.tron.log(data);
      yield put(BusinessmanActions.listGamesSuccess(data.data));
    }
  } catch (err) {
    yield put(BusinessmanActions.listGamesFailure("Erro ao listar os games."));
  }
}

export function* listRankGame(action) {
  try {
    // debugger;
    const { data } = yield call(
      api.get,
      `/gamer/listall?game=${action.payload.game}`
    );

    if (data.error) {
      yield put(BusinessmanActions.listRankGameFailure(data.error));
    } else {
      debugger;
      console.tron.log(data);
      yield put(BusinessmanActions.listRankGameSuccess(data));
    }
  } catch (err) {
    yield put(
      BusinessmanActions.listRankGameFailure("Erro ao listar os games.")
    );
  }
}
