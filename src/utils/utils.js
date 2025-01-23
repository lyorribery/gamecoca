import {heartbeat} from '@/apis/user'
import store from "@/store/index.js";

let onlineTimer = null
export const checkOnline=(type)=>{
	if(type==1){
		onlineTimer=setInterval(async() => {
			const res = await heartbeat()
			if(res.code!=200){
				clearInterval(onlineTimer)
				onlineTimer=null
				store.dispatch('LogOut')
			}
		},180000);
	}else{
		if(onlineTimer!=null){
			clearInterval(onlineTimer)
			onlineTimer=null
		}
	}

}

export const _validname = (val) => {
	if (!val) return false
	return true
	// return /^[a-zA-Z0-9]{5,12}$/.test(val)
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

export const _validbirth=(val)=>{
	if(!val) return false
	var parts = val.split('-');
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1; 
    var day = parseInt(parts[2], 10);
    var dateObject = new Date(year, month, day);
    var timestamp = dateObject.getTime()/1000;
	var currentTimestamp = Math.floor(Date.now() / 1000);
	var timestamp18YearsAgo = currentTimestamp - (365 * 18 * 24 * 60 * 60);
	if (timestamp <= timestamp18YearsAgo) {
		return true
	} else {
		return false
	}
	return true
}

export const formatDate = (timestamp ) => {
	var date = new Date(timestamp); 
    var year = date.getFullYear(); 
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2); 
    var hours = ("0" + date.getHours()).slice(-2); 
    var minutes = ("0" + date.getMinutes()).slice(-2); 
    var seconds = ("0" + date.getSeconds()).slice(-2); 
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`; 
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








