import { call, put, select } from "redux-saga/effects";
import apiLaunch from "../../services/apiLaunch";

import { Creators as GamerActions } from "../ducks/gamer";

export function* listGames(action) {
  try {
    debugger;

    const { data } = yield call(apiLaunch.get, `/gamer/getgamer`);
    debugger;

    //yield put(GameActions.addFavoriteSuccess(data));
  } catch (err) {
    debugger;
    /*yield put(
      FavoriteActions.addFavoriteFailure("erro ao adicionar repositório.")
    );*/
  }
}
