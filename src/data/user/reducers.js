import * as ActionTypes from "../rootActionTypes";
// reducer: 이전 상태와 동작을 받아서 새로운 상태를 리턴함
// 리듀서는 항상 현재 상태를 '읽기 전용'으로 다룬다.
// 기존 상태를 변경하지는 않지만, 새로운 상태를 리턴할 수 있다

const initialState = {
  nickname: "",
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

export default user;
