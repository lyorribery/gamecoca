import baseApiServer from '@/utils/apiServer'

export const getVerifyCode = new baseApiServer('/account/v1/auth_code')

export const register = new baseApiServer('/account/v1/register')

export const login = new baseApiServer('/account/v1/login')

export const exit = new baseApiServer('/account/v1/logout')

export const changePass = new baseApiServer('/account/v1/reset_password')

// export const getUserInfo = new baseApiServer(`/account/v1/detail?t=${new Date().getTime()}`)
export const getUserInfo = new baseApiServer(`/account/v1/detail`)

export const getGameList = new baseApiServer('/account/v1/game_list')

export const startGame = new baseApiServer('/account/v1/enter_game')

export const getMsgList = new baseApiServer('/account/v1/notice/list')

export const getDepositConfig = new baseApiServer('/account/v1/recharge/config')

export const getInviteConfig = new baseApiServer('/activity/v1/invite')

export const getFirstDepositConfig = new baseApiServer('/activity/v1/first_recharge')

export const getSpinConfig = new baseApiServer('/activity/v1/spin')

export const getGlobalConfig = new baseApiServer("/account/v1/global")

export const getSignConfig = new baseApiServer("/activity/v1/sign")

export const signCheck = new baseApiServer("/activity/v1/sign")

export const spinAct = new baseApiServer("/activity/v1/spin")

export const deposit = new baseApiServer("/account/v1/recharge")

export const depositRecord = new baseApiServer("/account/v1/recharge/record")

export const withdraw = new baseApiServer("/account/v1/withdraw")

export const withdrawRecord = new baseApiServer("/account/v1/withdraw/record")

export const getInviteInfo = new baseApiServer("/account/v1/promoter_info")

export const test = new baseApiServer("/sign/demo")




