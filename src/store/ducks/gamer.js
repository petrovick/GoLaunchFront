/**
 * Types
 */

export const Types = {
  LIST_GAMER_GAMES_REQUEST: "gamer/LIST_GAMER_GAMES_REQUEST",
  LIST_GAMER_GAMES_SUCCESS: "gamer/LIST_GAMER_GAMES_SUCCESS",
  LIST_GAMER_GAMES_FAILURE: "gamer/LIST_GAMER_GAMES_FAILURE",

  ADD_GAME_POINT_REQUEST: "gamer/ADD_GAME_POINT_REQUEST",
  ADD_GAME_POINT_SUCCESS: "gamer/ADD_GAME_POINT_SUCCESS",
  ADD_GAME_POINT_FAILURE: "gamer/ADD_GAME_POINT_FAILURE"
};

/**
 * Reducer
 *
 */
const INITIAL_STATE = {
  loading: false,
  data: {}
};

export default function gamer(state = INITIAL_STATE, action) {
  // debugger;
  switch (action.type) {
    case Types.LIST_GAMER_GAMES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LIST_GAMER_GAMES_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.LIST_GAMER_GAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case Types.ADD_GAME_POINT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.ADD_GAME_POINT_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.ADD_GAME_POINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
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
    payload: {}
  }),

  listGamerGamesSuccess: data => ({
    type: Types.LIST_GAMER_GAMES_SUCCESS,
    payload: {
      data
    }
  }),

  listGamerGamesFailure: error => ({
    type: Types.LIST_GAMER_GAMES_FAILURE,
    payload: {
      error
    }
  }),

  addGamePointRequest: data => ({
    type: Types.ADD_GAME_POINT_REQUEST,
    payload: { data }
  }),

  addGamePointSuccess: data => ({
    type: Types.ADD_GAME_POINT_SUCCESS,
    payload: {
      data
    }
  }),

  addGamePointFailure: error => ({
    type: Types.ADD_GAME_POINT_FAILURE,
    payload: {
      error
    }
  })
};
