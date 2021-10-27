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
