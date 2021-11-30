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

    case ActionTypes.SHOW_FILTERED_ITEMS:
      return {
        currentItemList: action.items.filter((item) =>
          item.book.title.includes(action.searchInput)
        )
      };

    default:
      return state;
  }
};

const initialItemState = {
  book: {},
  itemId: 0,
  createdDate: "",
  detail: "",
  method: "",
  price: 0,
  status: "",
  sellerNickname: "",
  sellerId: "",
  buyerId: "",
  buyerNickname: ""
};

const item = (state = initialItemState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_ITEM_DETAIL:
      const { item } = action;
      return {
        ...state,
        book: item.book,
        createdDate: item.createdDate,
        detail: item.detail,
        method: item.method,
        price: item.price,
        status: item.status,
        sellerNickname: item.sellerNickname,
        sellerId: item.sellerId
      };

    case ActionTypes.DEAL_ITEM:
      return {
        ...state,
        status: "DEAL"
      };

    case ActionTypes.CANCEL_ITEM:
      return {
        ...state,
        status: "SALE"
      };

    case ActionTypes.BUY_ITEM:
      return {
        ...state,
        status: "SOLD"
      };

    default:
      return state;
  }
};

export default combineReducers({
  items,
  item
});
