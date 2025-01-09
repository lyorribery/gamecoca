import axios from '@/http/index.js'

export const SetCPF = (data) => { // 获取玩家等级分级
    return axios.request({
        url: 'user/user/set/id',
        data: data,
        method: 'post'
    })
}

export const SetPhone = (data) => { // 设置手机号码
    return axios.request({
        url: 'user/user/set/phone',
        data: data,
        method: 'post'
    })
}

export const SetBirthday = (data) => { // 设置生日
    return axios.request({
        url: 'user/user/set/birthday',
        data: data,
        method: 'post'
    })
}

export const SetEmail = (data) => { // 设置邮箱
    return axios.request({
        url: 'user/user/set/email',
        data: data,
        method: 'post'
    })
}