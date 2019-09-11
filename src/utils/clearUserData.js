import { cookies } from 'utils/cookies';

export const clearUserData = ({ reload = true }) => {
  cookies.remove('_TKN_');
  cookies.remove('__TNT__');
  cookies.remove('email');
  // cookies.remove('dvc');
  cookies.remove('slug');

  if (reload) {
    setTimeout(() => {
      window.location.reload();
    });
  }
};
