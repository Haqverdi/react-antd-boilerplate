import { createReducer } from 'redux-starter-kit';
import { setProfileInfo } from 'store/actions/profile';
import { apiStart, apiEnd } from 'store/actions/api';

export const profileReducer = createReducer(
  { profile: {}, isloading: false },
  {
    [apiStart]: (state, action) => {
      if (action.payload === 'profile') {
        return {
          ...state,
          isLoading: true,
        };
      }
    },
    [apiEnd]: (state, action) => {
      if (action.payload === 'profile') {
        return {
          ...state,
          isLoading: false,
        };
      }
    },
    [setProfileInfo]: (state, action) => ({
      profile: action.payload.data,
    }),
  }
);
