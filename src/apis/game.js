import axios from '@/http/index.js'

export const getGameType = () => { 
    return axios.request({
        url: '/game/type',
        params:{},
        method: 'get'
    })
}

