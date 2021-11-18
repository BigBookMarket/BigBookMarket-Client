import * as ActionTypes from "../rootActionTypes";
import * as Services from "../rootServices";

export const showItems = (categoryName) => async (dispatch) => {
  const items = await Services.fetchItems(categoryName);
  dispatch({ type: ActionTypes.SHOW_ITEMS, items });
  console.log(items);
};

export const showItemDetail = (itemId) => async (dispatch) => {
  const item = await Services.getItemDetail(itemId);
  dispatch({ type: ActionTypes.SHOW_ITEM_DETAIL, item });
  console.log(item);
};
