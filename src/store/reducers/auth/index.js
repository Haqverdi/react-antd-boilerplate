import { createReducer } from 'redux-starter-kit';
import { apiStart, apiEnd, apiError } from 'store/actions/api';
import { setUserInfo } from 'store/actions/auth';

const initialState = {
  data: undefined,
  isLoading: false,
  apiError: undefined,
};

export const authReducer = createReducer(initialState, {
  [apiStart]: (state, action) => {
    if (action.payload === 'login') {
      return {
        ...state,
        isLoading: true,
      };
    }
  },
  [apiEnd]: (state, action) => {
    if (action.payload === 'login') {
      return {
        ...state,
        isLoading: false,
      };
    }
  },
  [apiError]: (state, action) => ({
    ...state,
    apiError: true,
  }),
  [setUserInfo]: (state, action) => ({
    ...initialState,
    data: action.payload,
  }),
});
