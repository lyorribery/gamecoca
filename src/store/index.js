import { createStore } from 'vuex'
import { getUserInfo, getGameList } from '@/apis/apis'
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
    user_info: {},
    game_list: [],
    tip_visible: false,
    tip_info: 'You have not logged in yet,please login.',
    loading_visible: false
  }),
  mutations: {
    set_loading_modal(state, val) {
      state.loading_visible = val
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


