import * as ActionTypes from "../rootActionTypes";
import * as Services from "../rootServices";

export const showItems = (categoryName) => async (dispatch) => {
  const items = await Services.fetchItems(categoryName);
  dispatch({ type: ActionTypes.SHOW_ITEMS, items });
};

export const filterItems = (searchInput) => async (dispatch) => {
  const items = await Services.getAllItems();
  dispatch({ type: ActionTypes.SHOW_FILTERED_ITEMS, items, searchInput });
};

export const showItemDetail = (itemId) => async (dispatch) => {
  const item = await Services.getItemDetail(itemId);
  dispatch({ type: ActionTypes.SHOW_ITEM_DETAIL, item });
};

export const dealItem = (itemId, buyerId) => async (dispatch) => {
  await Services.dealItem(itemId, buyerId);
  alert("구매신청이 완료되었습니다");
  dispatch({ type: ActionTypes.DEAL_ITEM });
};

export const cancelItem = (itemId, userId) => async (dispatch) => {
  await Services.cancelItem(itemId, userId);
  alert("구매신청이 취소되었습니다");
  dispatch({ type: ActionTypes.DELETE_BUY_HISTORY, itemId });
  dispatch({ type: ActionTypes.CANCEL_ITEM });
};

export const buyItem = (itemId) => async (dispatch) => {
  await Services.buyItem(itemId);
  alert("거래가 완료되었습니다");
  dispatch({ type: ActionTypes.DELETE_BUY_HISTORY, itemId });
  dispatch({ type: ActionTypes.BUY_ITEM });
};
