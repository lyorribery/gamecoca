import axios from '@/http/index.js'

export const GetUserRule = () => {
    return axios.request({
        url: 'sysConfig/levelup/rule',
        params: {},
        method: 'get'
    })
}

export const GetCommissionByChild = (data) => {
    return axios.request({
        url: 'record/getCommissionByChild',
        params: data,
        method: 'get'
    })
}