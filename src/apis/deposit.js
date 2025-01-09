import axios from '@/http/index.js'
import {
    encryptBase64,
    encryptWithAes,
    generateAesKey,
    decryptWithAes,
    decryptBase64
} from "@/utils/crypto"
import {encrypt} from "@/utils/jsencrypt";

export const PayMethod = (params) => { // 获取支付方式
    return axios.request({
        url: '/user/userOrder/payMethod',
        params:params,
        method: 'get'
    })
}

export const PayMethodConfig = (params) => { // 支付方式配置
    return axios.request({
        url: '/user/userOrder/payMethod/config',
        params:params,
        method: 'get'
    })
}

export const PayOrderCreate = (data) => { // 创造订单
    return axios.request({
        url: '/user/userOrder/create',
        data:data,
        method: 'post'
    })
}

export const RechargeRule = () => { // 充值规则
    return axios.request({
        url: 'sysConfig/recharge/rule',
        data:{},
        method: 'get'
    })
}

export const PaymentStatus = (data) => { // 检查订单是否已经支付
    return axios.request({
        url: 'user/userOrder/paymentStatus',
        params:data,
        method: 'get'
    })
}

export const ChangeUserPassword = (data) => { // 修改用户密码
    return axios.request({
        url: 'user/user/update/password',
        data:data,
        method: 'post'
    })
}

export const GetTranscationInfo = () => { // 获取用户的交易信息
    return axios.request({
        url: 'user/user/get/transaction/info',
        params:{},
        method: 'get'
    })
}

export const GetRechargeActivity = () => { // 获取充值活动
    return axios.request({
        url: 'user/userActivity/recharge',
        params:{},
        method: 'get'
    })
}

export const GetRechargeActivityMoneyList = (data) => { // 获取充值活动金额列表
    return axios.request({
        url: 'user/userActivityRecharge/detail',
        params:data,
        method: 'get'
    })
}

export const RechargeActivityParticipation = (data) => { // 参与充值活动
    return axios.request({
        url: 'user/userActivityRecharge/participation',
        data:data,
        method: 'post'
    })
}

export const WithdrawAdd = (data) => { // 提现申请
    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: 'user/userWithdrawal/add',
        data:data,
        headers: {
            "encrypt-key": encryptKey
        },
        method: 'post'
    })
}

export const SetTranscationPassword = (data) => { // 更改用户的交易密码
    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: 'user/user/set/transaction/password',
        data:data,
        headers: {
            "encrypt-key": encryptKey
        },
        method: 'post'
    })
}

export const ChangeTranscationPassword = (data) => { // 更改用户的交易密码
    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: 'user/user/update/transaction/password',
        data:data,
        headers: {
            "encrypt-key": encryptKey
        },
        method: 'post'
    })
}

export const AddTranscationInfo = (data) => { // 新增交易信息

    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: 'user/user/add/transaction/account',
        data:data,
        headers: {
            "encrypt-key": encryptKey
        },
        method: 'POST'
    })
}

export const CheckTranscationPassword = (data) => { // 检测交易密码是否正确

    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: 'user/user/check/transaction/password',
        data:data,
        headers: {
            "encrypt-key": encryptKey
        },
        method: 'POST'
    })
}

export const DelTranscationAccount = (data) => { // 新增交易信息

    const aesKey = generateAesKey();
    data = encryptWithAes(JSON.stringify(data), aesKey);
    const encryptKey = encrypt(encryptBase64(aesKey));

    return axios.request({
        url: 'user/user/del/transaction/account',
        data:data,
        headers: {
            "encrypt-key": encryptKey
        },
        method: 'POST'
    })

}

export const WithdrawRule = () => { // 充值规则
    return axios.request({
        url: 'sysConfig/withdrawal/rule',
        data:{},
        method: 'get'
    })
}

export const UserTaskInfo = () => { // 用户任务信息
    return axios.request({
        url: 'user/userTask/page/user',
        params:{},
        method: 'get'
    })
}

export const WithdrawalInfo = () => { // 提现信息
    return axios.request({
        url: 'user/user/withdrawalInfo',
        params:{},
        method: 'get'
    })
}

export const GetAccountType = () => { // 获取账户类型
    return axios.request({
        url: 'user/userWithdrawal/getAccountType',
        params:{},
        method: 'get'
    })
}