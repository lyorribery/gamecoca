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
	return /^[a-zA-Z0-9]{5,12}$/.test(val)
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

export const formatDate = (date, cut) => {
	var date = new Date(date);
	var YY = date.getFullYear() + cut;
	var MM =
		(date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + cut;
	var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var hh = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
	var mm = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
	var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return YY + MM + DD + " " + hh + mm + ss;
};

export const preloadImage = (url) => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => {
			resolve(getBase64Image(image));
		}
		image.onerror = () => reject(new Error('Could not load image at ' + url));
		image.src = url;
	});
}

const getBase64Image = (img, width, height) => {
	const canvas = document.createElement('canvas')
	canvas.width = width || img.width
	canvas.height = height || img.height
	const ctx = canvas.getContext('2d')
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
	const dataURL = canvas.toDataURL()
	return dataURL
}







