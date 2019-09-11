import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
// apps
import App from './App';
import UnAuthorizedApp from './UnAuthorizedApp';

// config
import configureAppStore from './store';
import { httpService } from './store/apiConfig';
import { hasToken, history } from './utils';

// main styles
import './theme/reset.scss';

import './i18n';

const store = configureAppStore();

httpService(store);

const isLogged = hasToken();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      {isLogged ? (
        <ConfigProvider>
          <App />
        </ConfigProvider>
      ) : (
        <UnAuthorizedApp />
      )}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
