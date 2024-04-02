import baseApiServer from '@/utils/apiServer'

export const register = new baseApiServer('/custom/user/register')

export const getUserInfo = new baseApiServer(`/custom/user/getUserInfo?${new Date().getTime()}`)

export const getWallet = new baseApiServer(`/custom/wallet/getBalance?${new Date().getTime()}`)



