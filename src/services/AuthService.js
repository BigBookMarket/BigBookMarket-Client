import axios from "axios";

const BASE_URL = "https://bigbookmarket.kro.kr/auth";

class AuthService {
  signUp(signUpInfo) {
    return axios.post(BASE_URL + "/signup", signUpInfo);
  }

  login(loginInfo) {
    return axios.post(BASE_URL + "/login", loginInfo);
  }

  logout(logoutInfo) {
    return axios.post(BASE_URL + "/logout", logoutInfo);
  }
}

export default new AuthService();
