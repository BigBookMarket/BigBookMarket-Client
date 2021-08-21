import { createStore } from "redux";
import rootReducer from "../data/rootReducer";

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
