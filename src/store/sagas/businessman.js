import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';

import { Creators as BusinessmanActions } from '../ducks/businessman';

export function* listGames(action) {
  try {
    debugger;
    const data = yield call(api.get, '/game/list', action.payload.user);

    if (data.error) {
      yield put(BusinessmanActions.listGamesFailure(data.error));
    } else {
      debugger;
      console.tron.log(data);
      yield put(BusinessmanActions.listGamesSuccess(data.data));
    }
  } catch (err) {
    yield put(BusinessmanActions.listGamesFailure('Erro ao listar os games.'));
  }
}
