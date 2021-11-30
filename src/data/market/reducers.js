import * as ActionTypes from "../rootActionTypes";

const initialState = {
  itemList: []
};

const market = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_ITEM_LIST:
      return {
        itemList: action.itemList
      };
    default:
      return state;
  }
};

export default market;
