import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from 'redux-starter-kit';
import apiMiddleware from './middleware/api';

// reducers
import { authReducer } from './reducers/auth';

const appReducer = combineReducers({
  authReducer,
});

// for more info - https://redux-starter-kit.js.org/api/configurestore
export default function configureAppStore() {
  const store = configureStore({
    reducer: appReducer,
    middleware: [...getDefaultMiddleware(), apiMiddleware],
  });
  return store;
}
