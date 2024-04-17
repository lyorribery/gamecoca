import { createStore } from 'vuex'
import { getUserInfo, getGameList, getMsgList, getDepositConfig, getInviteConfig, getFirstDepositConfig, getSpinConfig, getGlobalConfig } from '@/apis/apis'
import { useRouter } from 'vue-router'
import apiconfig from '@/utils/apiConfig'
export default createStore({
  state: () => ({
    promotion_list: [
      {
        type: 1,
        btn: "Get Coins",
        img: apiconfig.fileURL + 'promotion/check.png'
      },
      {
        type: 2,
        btn: "Go Spin",
        img: apiconfig.fileURL + 'promotion/spin.png'
      },
      {
        type: 3,
        btn: "Get Cash",
        img: apiconfig.fileURL + 'promotion/invite.png'
      },
      {
        type: 4,
        btn: "Get Bonus",
        img: apiconfig.fileURL + 'promotion/deposit.png'
      },
      {
        type: 5,
        btn: "Get Bonus",
        img: apiconfig.fileURL + 'promotion/f_d.png'
      },
    ],
    loading_visible: false,
    daily_visible: false,
    fisrt_deposit_visilbe: false,
    user_info: {},
    game_list: [],
    tip_visible: false,
    tip_info: 'You have not logged in yet,please login.',
    global_config: [],
    msg_list: [],
    deposit_config: [],
    invite_config: {},
    f_d_config: [],
    spin_config: []
  }),
  mutations: {
    set_loading_modal(state, val) {
      state.loading_visible = val
    },
    set_daily_visible(state, val) {
      state.daily_visible = val
    },
    set_fisrt_deposit_visilbe(state, val) {
      state.fisrt_deposit_visilbe = val
    },
    set_tip_modal(state, val) {
      state.tip_visible = val
    },
    set_tip_info(state, val) {
      state.tip_info = val
    },
    set_user_info(state, val) {
      state.user_info = val
    },
    set_game_list(state, val) {
      state.game_list = val
    },
    set_msg_list(state, val) {
      state.msg_list = val
    },
    set_deposit_config(state, val) {
      state.deposit_config = val
    },
    set_invite_config(state, val) {
      state.invite_config = val
    },
    set_f_d_config(state, val) {
      state.f_d_config = val
    },
    set_spin_config(state, val) {
      state.spin_config = val
    },
    set_global_config(state, val) {
      state.global_config = val
    }
  },
  actions: {
    GET_USER_INFO(ctx) {
      getUserInfo.get("", {})
        .then(res => {
          if (res.code == 200) {
            ctx.commit('set_user_info', res.data)
          } else if (res.code == 2002) {
            ctx.commit('set_user_info', {})
            localStorage.removeItem('token')
            ctx.commit('set_tip_info', 'You have not logged in yet,please login.')
            ctx.commit('set_tip_modal', true)
            useRouter().push({ path: '/' })
          }
        })
    },
    GET_CONFIG(ctx) {
      getGlobalConfig.get("", {})
        .then(res => {
          if (res.code == 200) {
            ctx.commit("set_global_config", res.data)
          }
        })
      getMsgList.get("", {})
        .then(res => {
          if (res.code == 200) {
            ctx.commit('set_msg_list', res.data.list)
          }
        })
      getDepositConfig.get("", {})
        .then(res => {
          res.list.map((item, index) => {
            item.amount = (item.amount / 100).toString()
            item.gift = (item.gift / 100).toString()
            if (index == 0) {
              item.checked = true
            } else {
              item.checked = false
            }
          })
          ctx.commit('set_deposit_config', res.list)
        })
      getInviteConfig.get("", {})
        .then(res => {
          if (res.code == 200) {
            for (let i in res.data) {
              res.data[i] = res.data[i] / 100
            }
            ctx.commit('set_invite_config', res.data)
          }
        })
      getFirstDepositConfig.get("", {})
        .then(res => {
          if (res.code == 200) {
            res.data.list.map((item, index) => {
              item.amount = (item.amount / 100).toString()
              item.reward = (item.reward / 100).toString()
              if (index == 1) {
                item.active = true
              } else {
                item.active = false
              }
            })
            ctx.commit('set_f_d_config', res.data.list)
          }
        })
      getSpinConfig.get("", {})
        .then(res => {
          if (res.code == 200) {
            const data = []
            for (let i in res.data.list) {
              res.data.list[i].reward = res.data.list[i].reward / 100
              res.data.list[i].pic = res.data.list[i].reward == 0 ? apiconfig.fileURL + "spin/img_xiaolian.png" : res.data.list[i].reward == 1 ? apiconfig.fileURL + "spin/img_coins_1.png" : res.data.list[i].reward == 10 ? apiconfig.fileURL + "spin/img_coins_2.png" : res.data.list[i].reward == 100 ? apiconfig.fileURL + "spin/img_coins_3.png" : res.data.list[i].reward == 500 ? apiconfig.fileURL + "spin/img_coins_4.png" : res.data.list[i].reward == 1000 ? apiconfig.fileURL + "spin/img_coins_5.png" : ""
              if (i < 12) {
                data.unshift(res.data.list[i])
              }
            }
            ctx.commit("set_spin_config", data)
          }
        })
    },
    async GET_GAME_LIST(ctx) {
      if (ctx.state.game_list.length != 0) return
      ctx.commit("set_loading_modal", true);
      const res = await getGameList.get("", { page: 1, pageSize: 30 })
      res.data.list.map(item => {
        item.count = Math.floor(Math.random() * (800 - 500 + 1)) + 500;
      })
      const res_hot = res.data.list.filter(item => {
        return item.isHot
      })
      const res_slot = res.data.list.filter(item => {
        return item.gameType === 1
      })
      const res_live = res.data.list.filter(item => {
        return item.gameType === 2
      })
      const res_poker = res.data.list.filter(item => {
        return item.gameType === 3
      })
      const res_fish = res.data.list.filter(item => {
        return item.gameType === 4
      })

      const result = [
        {
          title: "All",
          paneKey: "c1",
          content: res.data.list,
        },
        {
          title: "Popular",
          paneKey: "c2",
          content: res_hot,
        },
        {
          title: "Slot",
          paneKey: "c3",
          content: res_slot,
        },
        {
          title: "Live",
          paneKey: "c4",
          content: res_live,
        },
        {
          title: "Poker",
          paneKey: "c5",
          content: res_poker,
        },
        {
          title: "Fish",
          paneKey: "c6",
          content: res_fish,
        },
      ]
      ctx.commit('set_game_list', result)
      ctx.commit("set_loading_modal", false);
    }
  }
})


