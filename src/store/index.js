import { createStore } from 'vuex'
import { getUserInfo, getGameList, getMsgList, getDepositConfig, getInviteConfig, getFirstDepositConfig, getSpinConfig, getGlobalConfig } from '@/apis/apis'
import apiconfig from '@/utils/apiConfig'
const store = createStore({
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
        type: 4,
        btn: "Get Bonus",
        img: apiconfig.fileURL + 'promotion/deposit.png'
      },
      {
        type: 5,
        btn: "Get Bonus",
        img: apiconfig.fileURL + 'promotion/f_d.png'
      },
      {
        type: 3,
        btn: "Get Cash",
        img: apiconfig.fileURL + 'promotion/invite.png'
      },
    ],
    loading_visible: false,
    daily_visible: false,
    fisrt_deposit_visilbe: false,
    user_info: {},
    game_list: [],
    tip_visible: false,
    tip_type: 1,
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
    set_tip_type(state, val) {
      state.tip_type = val
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
            ctx.commit("set_tip_type", 1);
            ctx.commit('set_tip_modal', true)
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
            item.checked = false
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
      // getSignConfig.get("",{})
      //   .then(res=>{
      //     if(res.code==200){
      //       console.log(res.data)
      //     }
      //   })
    },
    async GET_GAME_LIST(ctx) {
      if (ctx.state.game_list.length != 0) return
      ctx.commit("set_loading_modal", true);

      const res_hot = await getGameList.get("", { page: 1, pageSize: 6, searchType: 2 })
      res_hot.data.list.map(item => {
        item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      })
      const hot_obj = {
        ...res_hot.data,
        name: "Popular",
        param: {
          searchType: 2
        }
      }

      // const res_recommend = await getGameList.get("", { page: 1, pageSize: 6, searchType: 1 })
      // res_recommend.data.list.map(item => {
      //   item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      // })
      // const recommend_obj = {
      //   ...res_recommend.data,
      //   name: "Top",
      //   param: {
      //     searchType: 1
      //   }
      // }

      const res_slot = await getGameList.get("", { page: 1, pageSize: 6, gameType: 1 })
      res_slot.data.list.map(item => {
        item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      })
      const slot_obj = {
        ...res_slot.data,
        name: "Slot",
        param: {
          gameType: 1
        }
      }

      const res_spin = await getGameList.get("", { page: 1, pageSize: 6, gameType: 5 })
      res_spin.data.list.map(item => {
        item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      })
      const spin_obj = {
        ...res_spin.data,
        name: "Spin",
        param: {
          gameType: 5
        }
      }

      const res_live = await getGameList.get("", { page: 1, pageSize: 6, gameType: 2 })
      res_live.data.list.map(item => {
        item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      })
      const live_obj = {
        ...res_live.data,
        name: "Live",
        param: {
          gameType: 2
        }
      }
      const res_poker = await getGameList.get("", { page: 1, pageSize: 6, gameType: 3 })
      res_poker.data.list.map(item => {
        item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      })
      const poker_obj = {
        ...res_poker.data,
        name: "Poker",
        param: {
          gameType: 3
        }
      }
      const res_fish = await getGameList.get("", { page: 1, pageSize: 6, gameType: 4 })
      res_fish.data.list.map(item => {
        item.count = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      })
      const fish_obj = {
        ...res_fish.data,
        name: "Mini",
        param: {
          gameType: 4
        }
      }
      const result = [
        {
          ...hot_obj,
          key: 'hot'
        },
        // {
        //   ...recommend_obj,
        //   key: 'recommend'
        // },
        {
          ...live_obj,
          key: 'live'
        },
        {
          ...slot_obj,
          key: 'slot'
        },
        {
          ...spin_obj,
          key: 'spin'
        },

        {
          ...poker_obj,
          key: 'poker'
        },
        {
          ...fish_obj,
          key: 'mini'
        }
      ]
      ctx.commit('set_game_list', result)
      ctx.commit("set_loading_modal", false);
    }
  }
})

export default store


