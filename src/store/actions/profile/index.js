import { createAction } from 'redux-starter-kit';
import { apiAction } from 'store/actions';

export const setProfileInfo = createAction('setProfileInfo');

export function fetchProfileInfo() {
  return apiAction({
    url: '/profiles',
    onSuccess: setProfileInfo,
    // showLoading: true,
  });
}
