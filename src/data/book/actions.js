import * as ActionTypes from "../rootActionTypes";
import * as Services from "../rootServices";

export const getBookCategories = () => async (dispatch) => {
  const categories = await Services.fetchBookCategories();
  dispatch({ type: ActionTypes.GET_CATEGORY_LIST, categories });
};

export const showBooks = (categoryName) => async (dispatch) => {
  const books = await Services.fetchBooks(categoryName);
  dispatch({ type: ActionTypes.SHOW_BOOKS, books });
  console.log(books);
};
