import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    game_company: [
      {
        icon: 'https://vencer77.com/images/pg1.png',
        id: 27,
        name: "PG"
      },
    ],
    home_game_list: []
  }),
  mutations: {
    set_home_game_list(state, val) {
      state.home_game_list = val
    },
  },
  actions: {
    GET_HOME_GAME_LIST(ctx) {
      get_home_game_list.post("", {})
        .then(res => {
          if (res.code == "000000") {
            ctx.commit('set_home_game_list', res.data.gameList)
          }
        })
    }
  }
})


