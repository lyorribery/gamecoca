import baseApiServer from '@/utils/apiServer'

export const getVerifyCode = new baseApiServer('/account/v1/auth_code')

export const register = new baseApiServer('/account/v1/register')

export const login = new baseApiServer('/account/v1/login')

export const changePass = new baseApiServer('/account/v1/reset_password')

export const getUserInfo = new baseApiServer(`/account/v1/detail?${new Date().getTime()}`)

export const getGameList = new baseApiServer('/account/v1/game_list')

export const startGame = new baseApiServer('/account/v1/enter_game')




