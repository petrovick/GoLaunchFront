import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as FavoriteActions } from "../ducks/favorites";

export function* addFavorite(action) {
  try {
    debugger;
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    debugger;
    const isDuplicated = yield select(state =>
      state.favorites.data.find(favorite => favorite.id == data.id)
    );
    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure("Repositório duplicado"));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url
      };

      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    debugger;
    yield put(
      FavoriteActions.addFavoriteFailure("erro ao adicionar repositório.")
    );
  }
}
