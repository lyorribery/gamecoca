import axios from '@/http/index.js'

export const GetServiceRule = () => { // 获取客服规则
    return axios.request({
        url: 'sysConfig/customer/rule',
        params: {},
        method: 'get'
    })
}

