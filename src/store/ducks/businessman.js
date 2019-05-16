/**
 * Types
 */

export const Types = {
  LIST_GAMES_REQUEST: "businessman/LIST_GAMES_REQUEST",
  LIST_GAMES_SUCCESS: "businessman/LIST_GAMES_SUCCESS",
  LIST_GAMES_FAILURE: "businessman/LIST_GAMES_FAILURE",

  LIST_RANKGAME_REQUEST: "businessman/LIST_RANKGAME_REQUEST",
  LIST_RANKGAME_SUCCESS: "businessman/LIST_RANKGAME_SUCCESS",
  LIST_RANKGAME_FAILURE: "businessman/LIST_RANKGAME_FAILURE"
};

/**
 * Reducer
 *
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  gamers: []
};

export default function businessman(state = INITIAL_STATE, action) {
  // debugger;
  switch (action.type) {
    case Types.LIST_GAMES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LIST_GAMES_SUCCESS:
      // debugger;
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case Types.LIST_GAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case Types.LIST_RANKGAME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LIST_RANKGAME_SUCCESS:
      // debugger;
      return {
        ...state,
        loading: false,
        error: null,
        gamers: action.payload.data
      };
    case Types.LIST_RANKGAME_FAILURE:
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
  listGamesRequest: () => ({
    type: Types.LIST_GAMES_REQUEST,
    payload: {}
  }),

  listGamesSuccess: data => ({
    type: Types.LIST_GAMES_SUCCESS,
    payload: {
      data
    }
  }),

  listGamesFailure: error => ({
    type: Types.LIST_GAMES_FAILURE,
    payload: {
      error
    }
  }),

  listRankGameRequest: game => ({
    type: Types.LIST_RANKGAME_REQUEST,
    payload: {
      game
    }
  }),

  listRankGameSuccess: data => ({
    type: Types.LIST_RANKGAME_SUCCESS,
    payload: {
      data
    }
  }),

  listRankGameFailure: error => ({
    type: Types.LIST_RANKGAME_FAILURE,
    payload: {
      error
    }
  })
};
