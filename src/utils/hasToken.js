import { cookies } from 'utils/cookies';

export function hasToken() {
  return cookies.get('_TKN_') || false;
}
