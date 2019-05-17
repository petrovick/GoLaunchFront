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

export function* addGamePoint(action) {
  try {
    debugger;
    const { data } = yield call(api.post, '/gamer/addpoint', action.payload.data);

    if (data.error) {
      yield put(GamerActions.addGamePointFailure(data.error));
    } else {
      debugger;
      console.tron.log('console.tron.log(data);');
      console.tron.log(data);
      yield put(GamerActions.addGamePointSuccess(data.gamer));
    }
  } catch (err) {
    yield put(GamerActions.addGamePointFailure('Erro ao adicionar pontos ao gamer.'));
  }
}

export function* addGame(action) {
  try {
    debugger;
    const { data } = yield call(api.post, '/game/add', action.payload.data);

    if (data.error) {
      yield put(GamerActions.addGamePointFailure(data.error));
    } else {
      debugger;
      action.payload.data = {
        game: data.game._id,
        points: 0,
      };

      yield put(addGamePoint(action));

      yield put(GamerActions.addGamePointSuccess(data.gamer));
    }
  } catch (err) {
    yield put(GamerActions.addGamePointFailure('Erro ao adicionar pontos ao gamer.'));
  }
}
