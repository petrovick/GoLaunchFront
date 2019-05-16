/**
 * Types
 */

export const Types = {
  LIST_GAMER_GAMES_REQUEST: 'gamer/LIST_GAMER_GAMES_REQUEST',
  LIST_GAMER_GAMES_SUCCESS: 'gamer/LIST_GAMER_GAMES_SUCCESS',
  LIST_GAMER_GAMES_FAILURE: 'gamer/LIST_GAMER_GAMES_FAILURE',
};

/**
 * Reducer
 *
 */
const INITIAL_STATE = {
  loading: false,
  data: {},
};

export default function gamer(state = INITIAL_STATE, action) {
  // debugger;
  switch (action.type) {
    case Types.LIST_GAMER_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LIST_GAMER_GAMES_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      };
    case Types.LIST_GAMER_GAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

/**
 *Actions
 */

export const Creators = {
  listGamerGamesRequest: () => ({
    type: Types.LIST_GAMER_GAMES_REQUEST,
    payload: {},
  }),

  listGamerGamesSuccess: data => ({
    type: Types.LIST_GAMER_GAMES_SUCCESS,
    payload: {
      data,
    },
  }),

  listGamerGamesFailure: error => ({
    type: Types.LIST_GAMER_GAMES_FAILURE,
    payload: {
      error,
    },
  }),
};
