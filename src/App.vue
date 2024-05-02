<template>
  <div id="app">
    <router-view />
    <tipModal @callBack="modalFunc" />
    <loading />
  </div>
</template>

<script>
import { onMounted, onActivated } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import tipModal from "@/components/tipModal.vue";
import loading from "@/components/loading.vue";
import { exit } from "@/apis/apis";
const uuid = require("uuid");
export default {
  name: "App",
  components: {
    tipModal,
    loading,
  },
  setup() {
    const router = useRouter();
    let { commit, dispatch } = useStore();
    // const isMobile = () => {
    //   const flag = navigator.userAgent.match(
    //     /(phone|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
    //   );
    //   return flag;
    // };
    const modalFunc = (obj) => {
      switch (obj) {
        case 1:
          router.push({
            path: "/login",
          });
          break;
        case 2:
          exit.post("", {}).then((res) => {
            if (res.code == 200) {
              localStorage.removeItem("token");
              commit("set_user_info", {});
              router.push({
                path: "/",
              });
              commit("set_tip_info", "You have not logged in yet,please login.");
              commit("set_tip_type", 1);
              commit("set_tip_modal", true);
            }
          });
          break;
        case 6:
          router.push({
            path: "/spin",
          });
          break;
      }
    };
    onMounted(() => {
      dispatch("GET_GAME_LIST");
      dispatch("GET_CONFIG");
      if (localStorage.getItem("token")) dispatch("GET_USER_INFO");
      localStorage.setItem("d_id", uuid.v1());
    });
    return {
      modalFunc,
    };
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
