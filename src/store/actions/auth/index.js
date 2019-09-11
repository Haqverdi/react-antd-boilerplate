import { createAction } from 'redux-starter-kit';
import { apiAction } from 'store/actions';
import { cookies } from 'utils/cookies';

export const setUserInfo = createAction('setUserInfo');

const onSuccess = data => dispatch =>
  // save user auth details
  // cookies.set('auth-token', data.data.deviceToken);

  // save other data
  dispatch(setUserInfo(data.data));

export function login({ email, password }) {
  return apiAction({
    url: '/login',
    method: 'POST',
    data: { email, password },
    onSuccess,
    label: 'login',
    showErrorToast: false,
  });
}
