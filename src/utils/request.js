import axios from "axios"
import apiConfig from "@/utils/apiConfig"
import store from "../store/index"

const request = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 30000,
})

request.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = `${localStorage.getItem('token')}` || '' //code 2002 token过期

    // let dataParam = ''
    // let res = {}
    // res = Object.assign({
    //   sign: changeMd5(config.data)
    // }, config.data)
    // dataParam = JSON.stringify({
    //   reqObj: encrypt(JSON.stringify(res), CryptoJS.enc.Utf8.parse('U2FsdGVkX19QeUbF'))
    // })
    // config.data = dataParam
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      // return JSON.parse(decrypt(res.data.data, CryptoJS.enc.Utf8.parse('U2FsdGVkX19QeUbF')))
      return res.data
    } else {
      Promise.reject(res)
    }
  },
  (err) => {
    store.commit("set_loading_modal", false);
    store.commit("set_user_info", {});
    localStorage.removeItem("token");
    store.commit("set_tip_info", "You have not logged in yet,please login.");
    store.commit("set_tip_type", 1);
    store.commit("set_tip_modal", true);

    return Promise.reject(err)
  }
);

export default request
