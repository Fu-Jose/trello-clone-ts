import axios from "axios";

const request = axios.create({
  // withCredentials: true,
  baseURL: "https://api.trello.com/1/",
});

export default request;
