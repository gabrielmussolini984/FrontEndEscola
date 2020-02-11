import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  tokken: false,
  user: {},
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.tokken = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_REQUEST: {
      console.log('Reducer ', action);
      return state;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
}
