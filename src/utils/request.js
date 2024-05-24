import axios from "axios"
import apiConfig from "@/utils/apiConfig"
import store from "../store/index"
import { Base64 as JSBase64 } from 'js-base64'
import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'
import CryptoJS from 'crypto-js'
import Base64 from 'crypto-js/enc-base64';

function RSAencrypt(pas) {
  let jse = new JSEncrypt();
  jse.setPublicKey("MEgCQQDma8beoM2DXKLKZnJypL3byVzsXj5nOblDdN5gFQT5UiDoROCfIXaXlf0HPOcbd3KpVmEIucQjBB03up6IqK7PAgMBAAE=");
  return jse.encrypt(pas);
}

// function RSAdecrypt(pas) {
//   let jse = new JSEncrypt();
//   jse.setPrivateKey('MIIBOwIBAAJBAOZrxt6gzYNcospmcnKkvdvJXOxePmc5uUN03mAVBPlSIOhE4J8hdpeV/Qc85xt3cqlWYQi5xCMEHTe6noiors8CAwEAAQJBAIoWLtD+VwsROfHH4XB479rGWuzAMe+UtUUKxbWZAykR/rcad0uaaqbu2Jdt+RGO8BRG+cMBSftOaEC4ssu9wIECIQD5gDbXmqETn6DSC+noNNwk+VNq1PPemOjzMLtMR0JZQQIhAOxsVF0F30hVS1I+xto4QmX8W7MPGgUVWcLAyMSCVHQPAiBgEvMLSsvD1rACsfu8Ir6yrh9k/+N4T8FEA/vbf4UZAQIhANKgSCB/pMZ6RppFFz8+M9lMFB3X7GRu+wLIYZTAT6D9AiBPMG5ZjPR0mT7cLst77hBTItFHf+aBNb1QhU1cEAPbVg==')
//   console.log('解密：' + jse.decrypt(pas))
//   return jse.decrypt(pas);
// }

const request = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 30000,
})

request.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = `${localStorage.getItem('token')}` || '' //code 2002 token过期
    const time_stamp = Date.parse(new Date(new Date().getTime())) / 1000
    const c_secret = RSAencrypt(`type=0;key=${JSBase64.encode("aabb")};time=${time_stamp}`)

    let sign_str = ''
    if (config.data) {
      sign_str = `${time_stamp}\n${config.method.toUpperCase()}\n${config.url}\n\n${CryptoJS.SHA256(JSON.stringify(config.data)).toString()}`
    } else {
      sign_str = `${time_stamp}\n${config.method.toUpperCase()}\n${config.url}\n\n${CryptoJS.SHA256('').toString()}`
    }
  
    const mac_str = CryptoJS.HmacSHA256(sign_str, 'aabb')
    const c_sign = Base64.stringify(mac_str)
    
    config.headers['X-Content-Security'] = `key=aabb;secret=${c_secret};signature=${c_sign}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    if (res.status == 200) {
      return res.data
    } else {
      Promise.reject(res)
    }
  },
  (err) => {
    if (err.response.status == 401) {
      store.commit("set_loading_modal", false);
      store.commit("set_user_info", {});
      localStorage.removeItem("token");
      store.commit("set_tip_info", "You have not logged in yet,please login.");
      store.commit("set_tip_type", 1);
      store.commit("set_tip_modal", true);
    } else if (err.response.status == 403) {
      store.commit("set_loading_modal", false);
      store.commit("set_user_info", {});
      localStorage.removeItem("token");
      store.commit("set_tip_info", "Signature error.");
      store.commit("set_tip_type", 3);
      store.commit("set_tip_modal", true);
    }
    return Promise.reject(err)
  }
);

export default request
