import axios from "@/http/index"

export const getClassList = () => { // 获取分类列表
    return axios.request({
        url: '/game/gameCategory/all',
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

export const getStationImgList = () => {
    return axios.request({
        url: '/station/stationImg/list',
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

export const getNoticeList = () => {
    return axios.request({
        url: '/sysNotice/list',
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

export const getPromotionList = () => {
    return axios.request({
        url: '/getActivityNotice',
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

export const getNoticeById = (id) => {
    return axios.request({
        url: '/getNotice/' + id,
        params: {},
        headers: {
            isToken: false
        },
        method: 'get'
    })
}

export const getActivityList = () => {
    return axios.request({
        url: '/user/userActivity/current',
        params: {},
        method: 'get'
    })
}

export const GetPopUp = () => {
    return axios.request({
        url: '/getPopUp',
        params: {},
        method: 'get'
    })
}