import axios from '@/http/index.js'

export const Lucky = () => { // 幸运活动简介
  return axios.request({
    url: '/user/userActivity/lucky',
    params:{},
    method: 'get'
  })
}

export const LuckyDetails = (params) => { // 幸运活动详情
  return axios.request({
    url: '/user/userActivityLucky/detail',
    params:params,
    method: 'get'
  })
}

export const Participation = (data) => { // 参与抽奖
  return axios.request({
    url: '/user/userActivityLucky/participation',
    data:data,
    method: 'post'
  })
}

export const RrontPage = (data) => { // 获取我的中奖记录
  return axios.request({
    url: '/user/userActivityLog/front/page',
    params:data,
    method: 'get'
  })
}

export const GetParticipation = (data) => { // 获取我的抽奖次数
  return axios.request({
    url: '/user/userActivityLucky/getParticipation',
    params:data,
    method: 'get'
  })
}