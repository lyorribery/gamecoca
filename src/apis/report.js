import axios from '@/http/index.js'

export const GameRecordList = (data) => { // 游戏记录报表
    return axios.request({
        url: 'record/game',
        params: data,
        method: 'get'
    })
}

export const BalanceChangeList = (data) => { // 资金变动列表
    return axios.request({
        url: 'record/balanceChange',
        params: data,
        method: 'get'
    })
}


export const BonusRecord = (data) => { // 奖金记录
    return axios.request({
        url: 'record/bonus',
        params: data,
        method: 'get'
    })
}
