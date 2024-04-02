<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from "vuex"
const uuid = require('uuid')
export default {
  name: "App",
  setup() {
    let { commit, dispatch } = useStore()
    onMounted(() => {

      // if (localStorage.getItem('token')) dispatch('permission/GET_USER_INFO')

      localStorage.setItem('d_id', uuid.v1())

      // dispatch('common/GET_COMMON_INFO')

      // dispatch('game/GET_HOME_GAME_LIST')

    })
  }
};
</script>
<style>

::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: #717171;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
</style>
