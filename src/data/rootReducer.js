import { combineReducers } from "redux";
import userReducer from "./user/reducers";
import marketReducer from "./market/reducers";
import bookReducer from "./book/reducers";
import itemsReducer from "./items/reducers";

export default combineReducers({
  user: userReducer,
  market: marketReducer,
  book: bookReducer,
  items: itemsReducer
});
