/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';
import FILTERS_REDUCER from './filters/reducer';
import JOB_REDUCER from './job/reducer';
import BLOGGER_REDUCER from './blogger/reducer';
import CUSTOMER_REDUCER from './customer/reducer';
import SHARED_DATA_REDUCER from './sharedData/reducer';
import LOCATION_SEARCH_REDUCER from './locationSearch/reducer';
import CreateLoaderReducer from '../loader/store/reducer';

const LOADER_REDUCER = CreateLoaderReducer({
  SUCCESS: '/fulfilled',
  PENDING: '/pending',
  REJECT: '/rejected',
});

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer({
      BLOGGER_REDUCER: BLOGGER_REDUCER.reducer,
      CUSTOMER_REDUCER: CUSTOMER_REDUCER.reducer,
      FILTERS_REDUCER: FILTERS_REDUCER.reducer,
      JOB_REDUCER: JOB_REDUCER.reducer,
      SHARED_DATA_REDUCER: SHARED_DATA_REDUCER.reducer,
      LOCATION_SEARCH_REDUCER: LOCATION_SEARCH_REDUCER.reducer,
      LOADER_REDUCER,
    }),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return store;
}
