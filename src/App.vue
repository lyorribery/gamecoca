<template>
  <div id="app">
    <router-view />
    <tipModal/>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import tipModal from "@/components/tipModal.vue";
const uuid = require("uuid");
export default {
  name: "App",
  components: {
    tipModal
  },
  setup() {
    let { dispatch } = useStore();
    onMounted(() => {
      dispatch("GET_GAME_LIST");
      if (localStorage.getItem("token")) dispatch("GET_USER_INFO");
      localStorage.setItem("d_id", uuid.v1());
    });
  },
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
