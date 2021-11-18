import * as ActionTypes from "../../data/rootActionTypes";
import * as Services from "../../data/rootServices";
import history from "../../utils/history";

/*
action: 할일을 정의, 즉 상태에 어떠한 변화가 필요할 때
action 객체는 보통 {type: '', payload: ''} 형태로 이루어짐

export const signIn = () => ({
  type: ActionTypes.SET_USER
});
*/

export const logIn = (loginInfo) => async (dispatch) => {
  try {
    const data = await Services.logInUser(loginInfo);
    Services.setToken(data);

    dispatch({
      type: ActionTypes.SET_USER,
      nickname: data.nickname,
      userId: data.id,
      phone: data.phone
    });

    history.push("/");
  } catch (error) {
    alert("잘못된 계정입니다");
  }
};

export const logOut = () => async (dispatch) => {
  const userInfo = Services.getUserInfo();
  await Services.logOutUser(userInfo);
  dispatch({ type: ActionTypes.DELETE_USER });
  history.push("/");
};

export const signUp = async (signupInfo) => {
  try {
    await Services.signupUser(signupInfo);
    history("/login");
  } catch (error) {
    alert("이미 존재하는 계정입니다");
  }
};

export const showSellHistory = (userId) => async (dispatch) => {
  const sellHistory = await Services.getSellHistory(userId);
  dispatch({ type: ActionTypes.SHOW_SELL_HISTORY, sellHistory });
};

export const showBuyHistory = (userId) => async (dispatch) => {
  const buyHistory = await Services.getBuyHistory(userId);
  dispatch({ type: ActionTypes.SHOW_BUY_HISTORY, buyHistory });
};

export const showInboxHistory = (userId) => async (dispatch) => {
  const inboxHistory = await Services.getInboxHistory(userId);
  dispatch({ type: ActionTypes.SHOW_INBOX_HISTORY, inboxHistory });
};

export const showOutboxHistory = (userId) => async (dispatch) => {
  const outboxHistory = await Services.getOutboxHistory(userId);
  dispatch({ type: ActionTypes.SHOW_OUTBOX_HISTORY, outboxHistory });
};

export const showPostHistory = (userId) => async (dispatch) => {
  const postHistory = await Services.getPostHistory(userId);
  dispatch({ type: ActionTypes.SHOW_POST_HISTORY, postHistory });
};

export const showCommentHistory = (userId) => async (dispatch) => {
  const commentHistory = await Services.getCommentHistory(userId);
  dispatch({ type: ActionTypes.SHOW_COMMENT_HISTORY, commentHistory });
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.DELETE_SELL_HISTORY, itemId });
    alert("삭제되었습니다");
    await Services.deleteItem(itemId);
  } catch (error) {
    console.log("[FAIL] DELETE ITEM", error);
    alert("삭제가 불가능합니다");
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.DELETE_POST_HISTORY, postId });
    alert("삭제되었습니다");
    await Services.deletePost(postId);
  } catch (error) {
    console.log("[FAIL] DELETE POST", error);
    alert("삭제가 불가능합니다");
  }
};

export const deleteComment = (commentId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.DELETE_COMMENT_HISTORY, commentId });
    alert("삭제되었습니다");
    await Services.deleteComment(commentId);
  } catch (error) {
    console.log("[FAIL] DELETE COMMENT", error);
    alert("삭제가 불가능합니다");
  }
};
