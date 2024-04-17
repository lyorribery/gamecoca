<template>
  <div id="app">
    <router-view />
    <tipModal />
    <loading />
  </div>
</template>

<script>
import { onActivated, onMounted } from "vue";
import { useStore } from "vuex";
import tipModal from "@/components/tipModal.vue";
import loading from "@/components/loading.vue";
const uuid = require("uuid");
export default {
  name: "App",
  components: {
    tipModal,
    loading,
  },
  setup() {
    let { dispatch } = useStore();
    // const isMobile = () => {
    //   const flag = navigator.userAgent.match(
    //     /(phone|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
    //   );
    //   return flag;
    // };
    onMounted(() => {
      dispatch("GET_GAME_LIST");
      dispatch("GET_CONFIG")
      if (localStorage.getItem("token")) dispatch("GET_USER_INFO");
      localStorage.setItem("d_id", uuid.v1());
    });
    onActivated(() => {
      dispatch("GET_GAME_LIST");
      dispatch("GET_CONFIG")
      if (localStorage.getItem("token")) dispatch("GET_USER_INFO");
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
