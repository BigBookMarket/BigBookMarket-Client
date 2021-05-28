import axios from "axios";
const instance = axios.create({
  baseURL: "https://bigbookmarket.kro.kr",
});
instance.defaults.headers.common = {
  jwt: `${localStorage.getItem("token")}`,
};

export default instance;
