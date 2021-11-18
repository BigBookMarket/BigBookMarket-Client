import * as ActionTypes from "../rootActionTypes";
import * as Services from "../rootServices";

export const getItemList = async (dispatch) => {
  try {
    const data = await Services.getItemList();
    dispatch({ type: ActionTypes.GET_ITEM_LIST, itemList: data.data });
  } catch (error) {
    console.log(error);
  }
};
