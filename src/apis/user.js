import axios from '@/http/index.js'
import {
    encryptBase64,
    encryptWithAes,
    generateAesKey,
    decryptWithAes,
    decryptBase64
} from "@/utils/crypto"
import {encrypt} from "@/utils/jsencrypt";

export const login = (account, password,type) => {
    let loginParams;
    if(type == 0){ // 用户名
        loginParams = {
            username: account,
            password: password,
            loginType: "front"
        };
    }else if(type == 1){ // 手机号
        loginParams = {
            phone: account,
            password: password,
            loginType: "front"
        };
    }else if(type == 2){ // 邮箱
        loginParams = {
            email: account,
            password: password,
            loginType: "front"
        };
    }
    const aesKey = generateAesKey();
    const data = encryptWithAes(JSON.stringify(loginParams), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));
    return axios.request({
        url: '/auth/user/login',
        data: data,
        headers: {
            isToken: false,
            "encrypt-key": encryptKey
        },
        method: 'post'
    })
}
export const getUserInfo = () => {
    return axios.request({
        url: '/user/getUserInfo',
        method: 'get'
    })
}
export const logout = () => {
    return axios.request({
        url: '/auth/logout',
        method: 'post'
    })
}

export const heartbeat=()=>{
    return axios.request({
        url:'/user/user/online',
        method:'post'
    })
}

export const getUserBalance = () => {
    return axios.request({
        url: '/user/getUserBalance',
        method: 'get'
    })
}

export const updatePassword = (data) => {
    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: '/user/user/update/password',
        method: 'post',
        headers: {
            "encrypt-key": encryptKey
        },
        data: data,
    })
}
export const register = (obj) => {
    let registerParams;

    if(obj.type == 0){ // 用户名
        registerParams = {
            username: obj.account,
            password: obj.password,
            birthday: obj.birthday,
            idcard: obj.idcard,
            sex: obj.sex,
            realName: obj.realName
        };
    }else if(obj.type == 1){ // 手机号
        registerParams = {
            phone: obj.account,
            password: obj.password,
            birthday: obj.birthday,
            idcard: obj.idcard,
            sex: obj.sex,
            realName: obj.realName
        };
    }else if(obj.type == 2){ // 邮箱
        registerParams = {
            email: obj.account,
            password: obj.password,
            birthday: obj.birthday,
            idcard: obj.idcard,
            sex: obj.sex,
            realName: obj.realName
        };
    }

    // if(agentid > 0){
    //     registerParams.agentid = agentid
    // }

    if(localStorage.getItem('agentId'))
        registerParams.agentid = localStorage.getItem('agentId')
    
    
    const aesKey = generateAesKey();
    const data = encryptWithAes(JSON.stringify(registerParams), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));
    return axios.request({
        url: '/auth/user/register',
        data: data,
        headers: {
            isToken: false,
            "encrypt-key": encryptKey
        },
        method: 'post'
    })
}

export const play = (data) => {
    return axios.request({
        url: '/user/userGame/play',
        method: 'get',
        params: data
    })
}

export const withdrawalPage = (data) => {
    const queryString = new URLSearchParams(data).toString();
    return axios.request({
        url: `/user/userWithdrawal/page?${queryString}`,
        method: 'get',
        headers: {
            "utcto":-3
        }
    })
}

export const orderPage = (data) => {
    const queryString = new URLSearchParams(data).toString();
    return axios.request({
        url: `/user/userOrder/page?${queryString}`,
        method: 'get',
        headers: {
            "utcto":-3
        }
    })
}

/**
 * 获取支付配置
 * @param data
 * @returns {*}
 */
export const getPayConfigListApi = (data) => {
    return axios.request({
        url: '/system/sysPayConfig/getPayConfigList',
        method: 'get',
        params: data
    })
}

/**
 * 玩家支付创建订单
 * @param data
 * @returns {*}
 */
export const createPayOrderApi = (data) => {
    return axios.request({
        url: '/user/userOrder/create',
        method: 'post',
        data: data
    })
}
/**
 * 获取站内信
 * @param data
 * @returns {*}
 */
export const getUserMessageApi = (data) => {
    return axios.request({
        url: '/user/userMsg/page',
        method: 'get',
        params: data
    })
}
export const deleteUserMessageApi = (data) => {
    return axios.request({
        url: '/user/userMsg/delete',
        method: 'post',
        data: data
    })
}
export const readUserMessageApi = (data) => {
    return axios.request({
        url: '/user/userMsg/readMsg',
        method: 'post',
        data: data
    })
}
export const readUserMessageByIdApi = (data) => {
    return axios.request({
        url: '/user/userMsg/readMsgById',
        method: 'post',
        params: data
    })
}

export const addUserWithdrawalApi = (data) => {
    return axios.request({
        url: '/user/userWithdrawal/add',
        method: 'post',
        data: data
    })
}
