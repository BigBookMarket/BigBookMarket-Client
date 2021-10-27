import axios from "axios";
import { URLS } from "../const";

export default axios.create({
  baseURL: URLS.BASE_URL
});
