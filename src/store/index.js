import { createStore } from 'vuex'
import { getUserInfo, getGameList } from '@/apis/apis'
import '../router'
export default createStore({
  state: () => ({
    user_info: {},
    game_list: [],
    tip_visible: false,
    tip_info: 'You have not logged in yet,please login.'
  }),
  mutations: {
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
            localStorage.removeItem('token')
            router.push({ path: '/' })
          }
        })
    },
    async GET_GAME_LIST(ctx) {
      if (ctx.state.game_list.length != 0) return
      const res_hot = await getGameList.get("", { page: 1, pageSize: 30, searchType: 2 })
      res_hot.data.list.map(item => {
        item.count = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      })
      const res_recommend = await getGameList.get("", { page: 1, pageSize: 30, searchType: 1 })
      res_recommend.data.list.map(item => {
        item.count = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      })
      const res_slot = await getGameList.get("", { page: 1, pageSize: 15, gameType: 1 })
      res_slot.data.list.map(item => {
        item.count = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      })
      const res_spin = await getGameList.get("", { page: 1, pageSize: 15, gameType: 2 })
      res_spin.data.list.map(item => {
        item.count = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      })
      const result = [
        {
          title: "For you",
          paneKey: "c1",
          content: res_recommend.data.list,
        },
        {
          title: "Popular",
          paneKey: "c2",
          content: res_hot.data.list,
        },
        {
          title: "Slots",
          paneKey: "c3",
          content: res_slot.data.list,
        },
        {
          title: "Spin",
          paneKey: "c4",
          content: res_spin.data.list,
        },
      ]
      ctx.commit('set_game_list', result)
    }
  }
})


