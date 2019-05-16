/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'login/ADD_REQUEST',
  ADD_SUCCESS: 'login/ADD_SUCCESS',
  ADD_FAILURE: 'login/ADD_FAILURE',
};

/**
 * Reducer
 *
 */
const INITIAL_STATE = {
  loading: false,
  data: {},
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      };
    case Types.ADD_FAILURE:
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
  addLoginRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: {
      user,
    },
  }),

  addLoginSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      data,
    },
  }),

  addLoginFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
