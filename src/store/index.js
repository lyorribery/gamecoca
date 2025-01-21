import { createStore } from 'vuex'
import { getClassList, getPromotionList, getStationImgList, GetPopUp } from '@/apis/home.js'
import { getConfig, GetAjuda, GetUserMessageUnReadCountApi } from '@/apis/base.js'
import { PayMethod } from '@/apis/deposit.js'
import { GetLevel } from '@/apis/vip.js'
import { LuckyDetails } from '@/apis/cashwheel.js'
import { getUserBalance, getUserInfo, getUserMessageApi, logout} from '@/apis/user.js'
import router from '@/router';
import { formatDate, checkOnline } from "@/utils/utils";

const store = createStore({
  state: () => ({
    loading_visible: false,
    is_cpf:false,
    user_info: {},
    user_balance: {
      balance: 0
    },
    station_base: {
      fullStationLogo:"",
      marquee: ""
    },
    activity_notice: {
      "orders": [],
      "records": []
    },
    home_active_type: 0,
    current_game_list: [],
    game_list: {
      game: [],
      category: []
    },
    station_img: [],
    pay_method: [],
    pop_up: [],
    ajuda: [],
    level: [],
    lucky: {},
    wheel_list: [],
    unread_count: 0,
    msg_list: { records: [] },
    is_show_app:true,
    show_tip:{
      type:1,
      msg:'',
    },
    tip_visible:false,
    is_refresh_banlance:false,
    home_icon:[],
    spin_show:false,
    login_tip_visible:false
  }),
  mutations: {
    set_login_tip_visible(state,val){
      state.login_tip_visible=val
    },
    set_spin_show(state,val){
      state.spin_show=val
    },
    set_home_icon(state,val){
      state.home_icon=val
    },
    set_is_refresh_banlance(state,val){
      state.is_refresh_banlance=val
    },
    set_tip_visible(state,val){
      state.tip_visible=val
    },
    set_show_tip(state,val){
      state.show_tip=val
      if(!state.tip_visible){
        state.tip_visible=true
        setTimeout(() => {
          state.tip_visible=false
        },2000);
      }
    },
    set_is_show_app(state,val){
      state.is_show_app=val
    },
    set_is_cpf(state,val){
      state.is_cpf=val
    },
    set_home_active_type(state, val) {
      state.home_active_type = val
      let temp = []
      const child_category = state.game_list.category[val].children
      child_category.map(item => {
        const games = state.game_list.game.filter(items => {
          return items.categoryId == item.categoryId
        })
        temp.push({
          fullCategoryImg: item.fullCategoryImg,
          categoryName: item.categoryName,
          categoryId: item.categoryId,
          verTudo: item.verTudo,
          games: games.slice(0, 6)
        })
      })
      state.current_game_list = temp
    },
    set_station_base(state, val) {
      state.station_base = val
    },
    set_activity_notice(state, val) {
      state.activity_notice = val
    },
    set_user_info(state, val) {
      state.user_info = val
    },
    set_game_list(state, val) {
      state.game_list = val
    },
    set_station_img(state, val) {
      state.station_img = val
    },
    set_pay_method(state, val) {
      state.pay_method = val
    },
    set_pop_up(state, val) {
      state.pop_up = val
    },
    set_ajuda(state, val) {
      state.ajuda = val
    },
    set_level(state, val) {
      state.level = val
    },
    set_lucky(state, val) {
      state.lucky = val
    },
    set_wheel_list(state, val) {
      state.wheel_list = val
    },

    set_unread_count(state, val) {
      state.unread_count = val
    },
    set_user_balance(state, val) {
      state.user_balance = val
    },
    set_msg_list(state, val) {
      state.msg_list = val
    },
    set_loading_modal(state, val) {
      state.loading_visible = val
    },
  },
  actions: {
    GET_CONFIG(ctx) {
      // ctx.commit('set_loading_modal', true)
      getConfig().then(res => {
        if (res.code == 200) {
          ctx.commit('set_station_base', res.data)
          ctx.commit('set_is_cpf',res.data.cpf)
        }
      })
      getClassList().then(res => {
        if (res.code == 200) {
          ctx.commit('set_game_list', res.data)
          ctx.commit('set_home_active_type', 0)
        }
        ctx.commit('set_loading_modal', false)
      })
      getPromotionList().then(res => {
        if (res.code == 200) ctx.commit('set_activity_notice', res.data)
      })
      getStationImgList().then(res => {
        if (res.code == 200){
          ctx.commit('set_station_img', res.data)
          let home_icon=[]
          res.data.map(item=>{
            if(item.imgType==6||item.imgType==7||item.imgType==8){
              home_icon.push(item)
            }
          })
          const mergeByCategory = home_icon.reduce((accumulator, currentItem) => {
            const existingCategoryIndex = accumulator.findIndex(item => item.imgType === currentItem.imgType);
            if (existingCategoryIndex >= 0) {
              accumulator[existingCategoryIndex].data.push(currentItem);
            } else {
              accumulator.push({
                imgType: currentItem.imgType,
                data: [currentItem],
                isShow:true
              });
            }
            return accumulator;
          }, []);
          ctx.commit('set_home_icon',mergeByCategory)
        }
      })
      PayMethod().then(res => {
        if (res.code == 200) ctx.commit('set_pay_method', res.data)
      })
      GetPopUp().then(res => {
        if (res.code == 200) ctx.commit('set_pop_up', res.data)
      })
      GetAjuda().then(res => {
        if (res.code == 200) ctx.commit('set_ajuda', res.data)
      })
      GetLevel().then(res => {
        if (res.code == 200) ctx.commit('set_level', res.data)
      })
      LuckyDetails({ activityId: 2 }).then(res => {
        if (res.code == 200) ctx.commit('set_wheel_list', res.data)
      })
    },
    GET_UNREAD_COUNT(ctx) {
      GetUserMessageUnReadCountApi().then(res => {
        if (res.code == 200)
          ctx.commit("set_unread_count", res.data)
      })
    },
    GET_USER_INFO(ctx) {
      getUserInfo().then(res => {
        if (res.code == 200) {
          res.data.avatar = '@/assets/images/avatar/' + Math.floor(Math.random() * 3 + 1) + '.png'
          ctx.commit("set_user_info", res.data)
        }
      })
    },
    GET_USER_BALANCE(ctx) {
      if(ctx.state.is_refresh_banlance) return
      ctx.commit('set_is_refresh_banlance',true)
      getUserBalance().then(res => {
        ctx.commit('set_is_refresh_banlance',false)
        if (res.code == 200)
          ctx.commit('set_user_balance', res.data)
      })
    },
    GET_MSG_LIST(ctx) {
      getUserMessageApi({ pageSize: 100, currentPage: 1 }).then(res => {
        if (res.code == 200) {
          res.data.records.map(item => {
            item.isShow = false
            item.createTime = formatDate(Number(item.createTime))
          })
          ctx.commit('set_msg_list', res.data)
        }
      })
    },
    LogOut(ctx) {
      checkOnline(2)
      logout().then(() => {
        localStorage.removeItem('accessToken')
        ctx.commit('set_user_info', {})
        ctx.commit("set_user_balance", { balance: 0 })
        router.push({
          path: '/home'
        })
        ctx.commit('set_show_tip',{type:1,msg:'logout success'})
      })
    },

  }
})

export default store


