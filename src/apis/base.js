import axios from '@/http/index.js'
// import { getToken } from '@/utils/utils.js'

export const getConfig = () => { // 获取网站标题
    return axios.request({
        url: '/station/stationBase/getStationBase',
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

export const AllColor = () => { // AllColor
    return axios.request({
      url: '/station/allColor',
      params:{},
      method: 'get'
    })
}
  
export const test = (params) => { // 检查ip
  return axios.request({
    url: '/test',
    params:params,
    method: 'get'
  })
}

export const GetUserMessageUnReadCountApi = () => { // 获取用户的未读消息数
  return axios.request({
      url: '/user/userMsg/getUnReadCount',
      method: 'get'
  })
}

export const GetAjuda = () => { // 获取底部信息
  return axios.request({
      url: '/getAjuda',
      method: 'get'
  })
}