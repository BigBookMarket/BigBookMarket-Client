import * as ActionTypes from "../rootActionTypes";
import * as Services from "../rootServices";

export const sendMessage = (message) => async (dispatch) => {
  try {
    await Services.sendMessage(message);
    dispatch({ type: ActionTypes.OPEN_MODAL });
  } catch (error) {
    console.log("[FAIL] SEND MESSAGE", error);
  }
};
