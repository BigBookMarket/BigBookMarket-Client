import * as ActionTypes from "../rootActionTypes";

const modal = (state = false, action = {}) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        open: true
      };

    case ActionTypes.CLOSE_MODAL:
      return {
        open: false
      };

    default:
      return state;
  }
};

export default modal;
