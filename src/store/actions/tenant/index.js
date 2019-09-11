import { createAction } from 'redux-starter-kit';
import { apiAction } from 'store/actions';

export const setTenant = createAction('setTenant');
export const setTenants = createAction('setTenants');

export function fetchTenantInfo() {
  return apiAction({
    url: '/tenants/info',
    onSuccess: setTenant,
    label: 'tenants',
  });
}

export function fetchTenants() {
  return apiAction({
    url: '/tenants',
    onSuccess: setTenants,
    label: 'tenants',
  });
}
