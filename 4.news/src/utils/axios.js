//External Lib Import
import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
});

instance.defaults.headers.common["X-API-KEY"] =
  "43eac893e6614712a7f7eb3b1987f0fc";

export default instance;
