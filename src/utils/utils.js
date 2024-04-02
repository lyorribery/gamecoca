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
	return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(val)
}

export const _validpassword = (pass) => {
	if (!pass) return false
	return /^\w{6,16}$/.test(pass)
	// return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pass)
}

export const formatDate = (objDate, fmt) => {
	var o = {
		"M+": objDate.getMonth() + 1, //月份
		"d+": objDate.getDate(), //日
		"h+": objDate.getHours() % 12 == 0 ? 12 : objDate.getHours() % 12, //小时
		"H+": objDate.getHours(), //小时
		"m+": objDate.getMinutes(), //分
		"s+": objDate.getSeconds(), //秒
		"q+": Math.floor((objDate.getMonth() + 3) / 3), //季度
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (objDate.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
	return fmt;
}

export const titleCase = (str) => {
	const newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
	return newStr;
}

export const uniqueFunc = (arr, uniId) => {
	const res = new Map();
	return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}





