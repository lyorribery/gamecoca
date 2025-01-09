import axios from '@/http/index.js'

export const GetLevel = () => { // 获取玩家等级分级
    return axios.request({
        url: 'user/userLevel/getLevel',
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}
