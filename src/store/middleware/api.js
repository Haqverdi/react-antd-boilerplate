/* eslint-disable no-shadow */
import axios from 'axios';
import { API } from 'store/constants';
import { toast } from 'react-toastify';
import { apiStart, apiEnd, apiError, accessDenied } from 'store/actions/api';

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    // onFailure,
    label,
    showToast,
    attribute,
    shouldCallApi,
  } = action.payload;

  if (!shouldCallApi(getState())) return;

  if (label) {
    dispatch(apiStart(label));
  }

  const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

  axios
    .request({
      url,
      method,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      dispatch(onSuccess({ data: data.data, attribute }));

      if (showToast) {
        toast.success('messages.successText', {
          className: 'success-toast',
        });
      }
    })
    .catch(error => {
      // dispatch(onFailure(error));

      let errorMessage = 'messages.errorText';

      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.data.error.message
      ) {
        errorMessage = error.response.data.error.message;
      }

      dispatch(apiError(errorMessage));

      if (error.response && error.response.status > 499) {
        toast.error('Server Error');
      } else {
        toast.error(errorMessage);
      }

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
