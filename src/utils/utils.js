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

export const loadStaticImg=async()=>{
	const static_img={
		footer:{
		  img_url_1:"",
		  img_url_2:"",
		  img_url_3:"",
		  img_url_4:'',
		  img_url_5:'',
		  img_url_6:''
		},
		avatar:{
			avatar1:'',
			avatar2:'',
			avatar3:'',
			avatar4:'',
			avatar5:'',
			avatar6:'',
			avatar7:'',
			avatar8:'',
			avatar9:'',
			avatar10:'',
			avatar11:'',
			avatar12:''
		},
		mine:{
			img_1:'',
			img_2:'',
			img_3:'',
			img_4:'',
			img_5:'',
			img_6:'',
			img_7:'',
			img_8:'',
			img_9:'',
			img_10:'',
			img_11:'',
			img_12:'',
			img_13:'',
			img_14:'',
			img_15:'',
		},
		inbox:{
			img_url_1:'',
			img_url_2:''
		},
		invite:{
			img_1:'',
			img_7:'',
			img_8:''
		},
		refer:{
			img_1:'',
			img_2:'',
			img_3:'',
			img_4:'',
			img_5:'',
		},
		main:{
			img_1:'',
			img_2:'',
			img_3:'',
			img_4:'',
			img_5:''
		},
		login:{
			img_1:'',
			img_2:'',
		},
		vip:{
			img_1:'',
			img_2:"",
			img_3:''
		}
	  }
	  static_img.login.img_2=await preloadImage(require("../assets/images/login/yanjingguan.png"))
	  static_img.login.img_1=await preloadImage(require("../assets/images/login/yanjingkai.png"))
	  static_img.main.img_1=await preloadImage(require("../assets/images/main/gerenxinxi.png"))
	  static_img.main.img_2=await preloadImage(require("../assets/images/main/zoujian.png"))
	  static_img.main.img_3=await preloadImage(require("../assets/images/main/kefu.png"))
	  static_img.main.img_4=await preloadImage(require("../assets/images/main/baobiao.png"))
	  static_img.main.img_5=await preloadImage(require("../assets/images/main/tuichu.png"))
	  static_img.refer.img_1=await preloadImage(require("../assets/images/refer/xz_di_jiaguang.png"))
	  static_img.refer.img_2=await preloadImage(require("../assets/images/refer/convidar.png"))
	  static_img.refer.img_3=await preloadImage(require("../assets/images/refer/Referencia.png"))
	  static_img.refer.img_4=await preloadImage(require("../assets/images/refer/Menbro.png"))
	  static_img.refer.img_5=await preloadImage(require("../assets/images/refer/Bonus.png"))
	  static_img.invite.img_1=await preloadImage(require("../assets/images/footer/tg.png"))
	  static_img.invite.img_7=await preloadImage(require("../assets/images/refer/fenxiao.png"))
	  static_img.invite.img_8=await preloadImage(require("../assets/images/refer/fenxiang_di.png"))
	  static_img.mine.img_1=await preloadImage(require("../assets/images/avatar/3.png"))
	  static_img.mine.img_2=await preloadImage(require("../assets/images/mine/qianbao.png"))
	  static_img.mine.img_3=await preloadImage(require("../assets/images/mine/tixian.png"))
	  static_img.mine.img_4=await preloadImage(require("../assets/images/mine/chongzhi.png"))
	  static_img.mine.img_5=await preloadImage(require("../assets/images/mine/zuojiantou.png"))
	  static_img.mine.img_6=await preloadImage(require("../assets/images/mine/bnt_account.png"))
	  static_img.mine.img_7=await preloadImage(require("../assets/images/mine/bnt_deposit.png"))
	  static_img.mine.img_8=await preloadImage(require("../assets/images/mine/bnt_tixian.png"))
	  static_img.mine.img_9=await preloadImage(require("../assets/images/mine/bnt_youxiji.png"))
	  static_img.mine.img_10=await preloadImage(require("../assets/images/mine/bnt_liwu.png"))
	  static_img.mine.img_11=await preloadImage(require("../assets/images/mine/fenxiang_icon.png"))
	  static_img.mine.img_12=await preloadImage(require("../assets/images/mine/xiugai_icon.png"))
	  static_img.mine.img_13=await preloadImage(require("../assets/images/mine/kefu_icon.png"))
	  static_img.mine.img_14=await preloadImage(require("../assets/images/mine/xiazai_icon.png"))
	  static_img.mine.img_15=await preloadImage(require("../assets/images/mine/tuichu_icon.png"))

	  static_img.avatar.avatar1=await preloadImage(require("../assets/images/avatar/1.png"))
	  static_img.avatar.avatar2=await preloadImage(require("../assets/images/avatar/2.png"))
	  static_img.avatar.avatar3=await preloadImage(require("../assets/images/avatar/3.png"))
	  static_img.avatar.avatar4=await preloadImage(require("../assets/images/avatar/4.png"))
	  static_img.avatar.avatar5=await preloadImage(require("../assets/images/avatar/5.png"))
	  static_img.avatar.avatar6=await preloadImage(require("../assets/images/avatar/6.png"))
	  static_img.avatar.avatar7=await preloadImage(require("../assets/images/avatar/7.png"))
	  static_img.avatar.avatar8=await preloadImage(require("../assets/images/avatar/8.png"))
	  static_img.avatar.avatar9=await preloadImage(require("../assets/images/avatar/9.png"))
	  static_img.avatar.avatar10=await preloadImage(require("../assets/images/avatar/10.png"))
	  static_img.avatar.avatar11=await preloadImage(require("../assets/images/avatar/11.png"))
	  static_img.avatar.avatar12=await  preloadImage(require("../assets/images/avatar/12.png"))
	
	  static_img.footer.img_url_1= await preloadImage(require("../assets/images/footer/18.png"))
	  static_img.footer.img_url_2= await preloadImage(require("../assets/images/footer/youtube.png"))
	  static_img.footer.img_url_3= await preloadImage(require("../assets/images/footer/ins.png"))
	  static_img.footer.img_url_4= await preloadImage(require("../assets/images/footer/whatsapp.png"))
	  static_img.footer.img_url_5= await preloadImage(require("../assets/images/footer/x.png"))
	  static_img.footer.img_url_6= await preloadImage(require("../assets/images/footer/douyin.png"))

	  static_img.inbox.img_url_1=await preloadImage(require("../assets/images/inbox/xinfeng.png"))
	  static_img.inbox.img_url_2= await preloadImage(require("../assets/images/inbox/xinfeng_yidu.png"))

	  static_img.vip.img_1=await preloadImage(require("../assets/images/vip/vip_1.png"))
	  static_img.vip.img_2=await preloadImage(require("../assets/images/vip/vip_2.png"))
	  static_img.vip.img_3=await preloadImage(require("../assets/images/vip/vip_3.png"))

	store.commit('set_static_img',static_img)
}







