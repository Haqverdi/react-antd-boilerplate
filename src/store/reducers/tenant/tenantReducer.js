import { createReducer } from 'redux-starter-kit';
import { setTenant, setTenants } from 'store/actions/tenant';
import { apiStart, apiEnd } from 'store/actions/api';

export const tenantReducer = createReducer(
  {
    tenant: {},
    tenants: [],
    isLoading: false,
  },
  {
    [apiStart]: (state, action) => {
      if (action.payload === 'tenants') {
        return {
          ...state,
          isLoading: true,
        };
      }
    },
    [apiEnd]: (state, action) => {
      if (action.payload === 'tenants') {
        return {
          ...state,
          isLoading: false,
        };
      }
    },
    [setTenant]: (state, action) => ({
      ...state,
      tenant: action.payload.data,
    }),
    [setTenants]: (state, action) => ({
      ...state,
      tenants: action.payload.data,
    }),
  }
);
