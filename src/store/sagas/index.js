import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { Types as GamerTypes } from '../ducks/gamer';
import { Types as BusinessmanTypes } from '../ducks/businessman';

// all lida com vários sagas, como se fosse o combine reducer
import { addLogin } from './login';
import { listGamerGames } from './gamer';
import { listGames } from './businessman';
//* função generator do javascript, para lidar com async
export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.ADD_REQUEST, addLogin),
    takeLatest(GamerTypes.LIST_GAMER_GAMES_REQUEST, listGamerGames),
    takeLatest(BusinessmanTypes.LIST_GAMES_REQUEST, listGames),
  ]);
}
