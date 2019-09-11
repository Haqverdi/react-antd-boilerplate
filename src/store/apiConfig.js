/**
 * axios config using axios.interceptors(doc. https://github.com/axios/axios#interceptors)
 */

import axios from 'axios';
import { cookies } from 'utils/cookies';

// add base url to all requests and token if this available,
// on response with status code 401 dispatch logout action to store
export const httpService = store => {
  // request config
  axios.interceptors.request.use(
    config => {
      config.baseURL =
        process.env.NODE_ENV === 'production'
          ? process.env.REACT_APP_API_URL
          : process.env.REACT_APP_DEV_API_URL;

      const requestUrl = config.url;

      const token = cookies.get('_TKN_');
      const tenantId = cookies.get('__TNT__');
      // const tenantId = localStorage.getItem('__TNT__') || '';
      if (
        requestUrl.includes('/login') ||
        requestUrl.includes('/register') ||
        requestUrl.includes('/recovery') ||
        requestUrl.includes('/password/recovery')
      ) {
        config.headers = {
          'Content-Type': 'application/json',
        };
      } else {
        config.headers = {
          'X-AUTH-PROTOKEN': token,
          'X-TENANT-ID': tenantId,
          'Content-Type': 'application/json',
        };
      }
      return config;
    },
    error => Promise.reject(error)
  );
  // response config
  axios.interceptors.response.use(
    response => response,
    error =>
      // if (error.response.status === 401) {
      // window.location.replace('https://app.prospectsmb.com/login);
      // return;
      // }
      Promise.reject(error)
  );
};
