import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: "https://api.trello.com/1/",
  headers: {
    Cookie:
      "token=6061e0f246374e875dd6595b%2FVNofC2K91gGBDmIDIpEynLuJEKUj9Iot6x6MGv2Cb8wM2cGrBsoDqEVz82XcRkKQ; loggedIn=1; dsc=914f6b816b08b37547f74488e0c69425957d09617c4eeb99cdbf15a1dd3cd50a; preAuthProps=s%3A6061e0f246374e875dd6595b%3AisEnterpriseAdmin%3Dfalse.9RXdeO89Z%2ByTspLE%2B8QhbmtfVy4bfd289mOOOLBkqO4",
  },
});
// “Access-Control-Allow-Headers:x-requested-with,content-type”,
//   headers: {
//     Cookie:
//       "token=6061e0f246374e875dd6595b%2FVNofC2K91gGBDmIDIpEynLuJEKUj9Iot6x6MGv2Cb8wM2cGrBsoDqEVz82XcRkKQ; loggedIn=1; dsc=914f6b816b08b37547f74488e0c69425957d09617c4eeb99cdbf15a1dd3cd50a; preAuthProps=s%3A6061e0f246374e875dd6595b%3AisEnterpriseAdmin%3Dfalse.9RXdeO89Z%2ByTspLE%2B8QhbmtfVy4bfd289mOOOLBkqO4",
//   },

// const axiosConfig = {
//   headers: {
//     "content-Type": "application/json",
//     Accept: "/",
//     "Cache-Control": "no-cache",
//     Cookie: document.cookie,
//   },
//   credentials: "same-origin",
// };
// axios.defaults.withCredentials = true;

export default request;
// export default axiosConfig;
