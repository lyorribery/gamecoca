import store from '../store'

let loopTimer = null
export const loopNotice = (flag) => {
	if (flag) {
		if (loopTimer != null) return
		loopTimer = setInterval(() => {
			store.dispatch('permission/GET_WALLET_INFO')
		}, 5000)
	} else {
		if (loopTimer != null) {
			clearInterval(loopTimer)
			loopTimer = null
		}
	}
}

export const _validname = (val) => {
	if (!val) return false
	return /^[a-zA-Z0-9]{6,12}$/.test(val)
}

export const _validemail = (val) => {
	if (!val) return false
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(val)
}

export const _validphone = (val) => {
	if (!val) {
		return false
	} else if (val.length != 10 && val.length != 11) {
		return false
	}
	return true
}

export const _validpassword = (pass) => {
	if (!pass) return false
	return /^\w{6,16}$/.test(pass)
}







