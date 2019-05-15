/**
 * Types
 */

export const Types = {
  LIST_GAMES_REQUEST: "gamer/LIST_GAMES_REQUEST",
  LIST_GAMES_SUCCESS: "gamer/LIST_GAMES_SUCCESS",
  LIST_GAMES_FAILURE: "gamer/LIST_GAMES_FAILURE"
};

/**
 * Reducer
 *
 */
const INITIAL_STATE = {
  loading: false,
  data: []
};


export default function gamer(state = INITIAL_STATE, action) {


  switch (action.type) {
    case Types.LIST_GAMES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LIST_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
          error: null,
          data: action.payload.data.games
      };
    case Types.LIST_GAMES_FAILURE:
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
  listGamerRequest: () => ({
    type: Types.LIST_GAMES_REQUEST,
    payload: {

    }
  }),

  listGamerSuccess: data => ({
    type: Types.LIST_GAMES_SUCCESS,
    payload: {
      data
    }
  }),

  listGamerFailure: error => ({
    type: Types.LIST_GAMES_FAILURE,
    payload: {
      error
    }
  })
};
