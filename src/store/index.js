import { createStore } from 'vuex'
import { getClassList, getPromotionList, getStationImgList, GetPopUp } from '@/apis/home.js'
import { getConfig, GetAjuda, GetUserMessageUnReadCountApi } from '@/apis/base.js'
import { PayMethod } from '@/apis/deposit.js'
import { GetLevel } from '@/apis/vip.js'
import { LuckyDetails } from '@/apis/cashwheel.js'
import { getUserBalance, getUserInfo, getUserMessageApi, logout } from '@/apis/user.js'
import router from '@/router';
import { formatDate } from "@/utils/utils";

const store = createStore({
  state: () => ({
    loading_visible: false,
    user_info: {},
    user_balance: {
      balance: 0
    },
    station_base: {
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
    activity_detail: {
      fullNoticeImg: "",
      noticeContent: "",
      noticeTitle: ""
    },
    unread_count: 0,
    msg_list: { records: [] }
  }),
  mutations: {
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
    set_activity_detail(state, val) {
      state.activity_detail = val
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
      ctx.commit('set_loading_modal', true)
      getConfig().then(res => {
        if (res.code == 200) ctx.commit('set_station_base', res.data)
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
        if (res.code == 200) ctx.commit('set_station_img', res.data)
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
      getUserBalance().then(res => {
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
      logout().then(() => {
        localStorage.removeItem('accessToken')
        ctx.commit('set_user_info', {})
        ctx.commit("set_user_balance", { balance: 0 })
        router.push({
          path: '/home'
        })
      })
    }
  }
})

export default store


