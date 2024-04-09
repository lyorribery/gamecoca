import { createStore } from 'vuex'
import { getUserInfo, getGameList } from '@/apis/apis'
export default createStore({
  state: () => ({
    user_info: {},
    game_list: [],
    tip_visible: true,
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
          }
        })
    },
    GET_GAME_LIST(ctx) {
      getGameList.get("", {
        page: 1,
        pageSize: 10
      })
        .then(res => {
          if (res.code == 200) {
            console.log(res.data)
          }
        })
    }
  }
})


