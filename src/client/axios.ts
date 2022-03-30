import axios from "axios";

const request = axios.create({
  baseURL: "https://api.trello.com/1/",
  headers: {
    Authorization: `OAuth oauth_consumer_key="${
      process.env.REACT_APP_API_KEY
    }", oauth_token="${sessionStorage.getItem("token")}"`,
  },
});

export default request;
