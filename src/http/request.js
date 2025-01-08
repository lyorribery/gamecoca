import axios from 'axios';
import store from "@/store/index.js";
import router from '@/router';

class HttpRequest {

  static vue = null

  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      timeout: 20000,
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 是否需要设置 token
      const isToken = (config.headers || {}).isToken === false
      // 是否需要防止数据重复提交
      const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
      if (localStorage.getItem('token') && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      if (res.data.code === 401 || res.data.code === 1002) {
        store.dispatch('LogOut').then(() => {
          router.push("login");
        })
      }
      this.destroy(url)
      const { data, status, headers } = res
      return data;
    }, error => {
      this.destroy(url)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    options.headers = Object.assign({}, this.getInsideConfig().headers, options.headers);

    this.interceptors(instance, options.url)
    return instance(options)
  }
  requestFull(baseUrl, data) { // 调用外部网络资源
    const instance = axios.create()
    let options = {
      baseURL: baseUrl,
      ...data
    }
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
