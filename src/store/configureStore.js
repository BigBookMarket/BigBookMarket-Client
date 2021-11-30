import { createStore, applyMiddleware } from "redux";
import rootReducer from "../data/rootReducer";
import thunk from "redux-thunk";

export default function configureStore() {
  //async actions를 store로 dispatch하기 위해 thunk middleware 적용
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
