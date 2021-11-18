import { combineReducers } from "redux";
import * as ActionTypes from "../rootActionTypes";
// reducer: 이전 상태와 동작을 받아서 새로운 상태를 리턴함
// 리듀서는 항상 현재 상태를 '읽기 전용'으로 다룬다.
// 기존 상태를 변경하지는 않지만, 새로운 상태를 리턴할 수 있다

const initialState = {
  nickname: localStorage.getItem("nickname"),
  userId: null,
  phone: "",
  isLoggedIn: localStorage.getItem("refreshToken") != null
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        nickname: action.nickname,
        userId: action.userId,
        phone: action.phone,
        isLoggedIn: true
      };

    case ActionTypes.DELETE_USER:
      return {
        nickname: "",
        userId: null,
        phone: "",
        isLoggedIn: false
      };

    default:
      return state;
  }
};

const initialUserHistory = {
  myDeals: {
    mySells: [],
    myBuys: []
  },
  myPosts: [],
  myComments: [],
  myMessages: {
    myInbox: [],
    myOutbox: []
  }
};

const userHistory = (state = initialUserHistory, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_SELL_HISTORY:
      return {
        ...state,
        myDeals: {
          ...state.myDeals,
          mySells: action.sellHistory
        }
      };

    case ActionTypes.SHOW_BUY_HISTORY:
      return {
        ...state,
        myDeals: {
          ...state.myDeals,
          myBuys: action.buyHistory
        }
      };

    case ActionTypes.SHOW_POST_HISTORY:
      return {
        ...state,
        myPosts: action.postHistory
      };

    case ActionTypes.SHOW_COMMENT_HISTORY:
      return {
        ...state,
        myComments: action.commentHistory
      };

    case ActionTypes.SHOW_INBOX_HISTORY:
      return {
        ...state,
        myMessages: {
          ...state.myMessages,
          myInbox: action.inboxHistory
        }
      };

    case ActionTypes.SHOW_OUTBOX_HISTORY:
      return {
        ...state,
        myMessages: {
          ...state.myMessages,
          myOutbox: action.outboxHistory
        }
      };

    case ActionTypes.DELETE_BUY_HISTORY:
      return {
        ...state,
        myDeals: {
          ...state.myDeals,
          myBuys: state.myDeals.myBuys.filter(
            (item) => item.itemId !== action.itemId
          )
        }
      };

    case ActionTypes.DELETE_SELL_HISTORY:
      return {
        ...state,
        myDeals: {
          ...state.myDeals,
          mySells: state.myDeals.mySells.filter(
            (item) => item.itemId !== action.itemId
          )
        }
      };

    case ActionTypes.DELETE_POST_HISTORY:
      return {
        ...state,
        myPosts: state.myPosts.filter((post) => post.postId !== action.postId)
      };

    case ActionTypes.DELETE_COMMENT_HISTORY:
      return {
        ...state,
        myComments: state.myComments.filter(
          (comment) => comment.commentId !== action.commentId
        )
      };

    default:
      return state;
  }
};

export default combineReducers({
  user,
  userHistory
});
