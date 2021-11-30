import * as ActionTypes from "../rootActionTypes";

const initialState = {
  categoryList: [],
  currentBookList: []
};

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORY_LIST:
      return {
        categoryList: action.categories
      };

    case ActionTypes.SHOW_BOOKS:
      return {
        currentBookList: action.books
      };

    default:
      return state;
  }
};

export default categories;
