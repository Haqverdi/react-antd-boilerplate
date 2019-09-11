import { API } from 'store/constants';

export function apiAction({
  url = '/',
  method = 'GET',
  data = null,
  onSuccess = data => console.log(data),
  onFailure = error => console.log(error),
  // sets loadingReducer isLoading state to true
  // can also be set to string to trigger on special reducer special loading state
  label = false,
  // general loading
  showLoading = false,
  showToast = false,
  showErrorToast = true,
  // function acttribute will set to onSuccess or onFailure func
  attribute = undefined,
  shouldCallApi = () => true,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      showLoading,
      showToast,
      attribute,
      shouldCallApi,
      showErrorToast,
    },
  };
}
