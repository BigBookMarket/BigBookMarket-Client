import { combineReducers } from "redux";
import * as ActionTypes from "../rootActionTypes";

const initialState = {
  currentItemList: []
};

const items = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_ITEMS:
      return {
        currentItemList: action.items
      };

    default:
      return state;
  }
};

const initialItemState = {
  book: {},
  createdDate: "",
  detail: "",
  method: "",
  price: 0,
  status: "",
  sellerNickname: "",
  sellerId: ""
};

const itemDetail = (state = initialItemState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_ITEM_DETAIL:
      const { item } = action;
      return {
        book: item.book,
        createdDate: item.createdDate,
        detail: item.detail,
        method: item.method,
        price: item.price,
        status: item.status,
        sellerNickname: item.sellerNickname,
        sellerId: item.sellerId
      };

    default:
      return state;
  }
};

export default combineReducers({
  items,
  itemDetail
});
