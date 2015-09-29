import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers'

import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  applyMiddleware(),

  devTools(),

  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))

)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replace(nextReducer);
    });
  }

  return store;
}
