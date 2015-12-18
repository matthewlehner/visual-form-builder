import { compose, createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import DevTools from "../containers/dev-tools";


const finalCreateStore = compose(
  // Middleware for development
  applyMiddleware(),

  // Enable Redux DevTools with monitors you choose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducers(require("../reducers"));
    });
  }

  return store;
}
