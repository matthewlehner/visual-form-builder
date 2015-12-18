import { compose, createStore, applyMiddleware } from "redux";
import reducer from "../reducers";


const finalCreateStore = compose(
  // Middleware for development
  applyMiddleware()
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
