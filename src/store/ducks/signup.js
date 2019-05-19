/**
 * Types
 */

export const Types = {
  ADD_USER_REQUEST: 'signup/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'signup/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'signup/ADD_USER_FAILURE',
};

/**
 * Reducer
 *
 */
const INITIAL_STATE = {
  loading: false,
  data: {},
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      debugger;
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_USER_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      };
    case Types.ADD_USER_FAILURE:
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
  addSignupRequest: data => ({
    type: Types.ADD_USER_REQUEST,
    payload: {
      data,
    },
  }),

  addSignupSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: {
      data,
    },
  }),

  addSignupFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: {
      error,
    },
  }),
};
