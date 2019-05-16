import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';

import { Creators as GamerActions } from '../ducks/gamer';

export function* listGamerGames(action) {
  try {
    debugger;
    const { data } = yield call(api.get, '/gamer/getgamer', action.payload.user);

    if (data.error) {
      yield put(GamerActions.listGamerGamesFailure(data.error));
    } else {
      debugger;
      console.tron.log('console.tron.log(data);');
      console.tron.log(data);
      yield put(GamerActions.listGamerGamesSuccess(data));
    }
  } catch (err) {
    yield put(GamerActions.listGamerGamesFailure('Erro ao logar.'));
  }
}
