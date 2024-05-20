<template>
  <div id="app">
    <router-view />
    <tipModal @callBack="modalFunc" />
    <loading />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import tipModal from "@/components/tipModal.vue";
import loading from "@/components/loading.vue";
import { exit } from "@/apis/apis";
const uuid = require("uuid");

const setFont = () => {
  document.documentElement.style.fontSize =
    document.documentElement.offsetWidth / 10 + "px";
};
setFont();
window.onresize = () => {
  setFont();
};
export default {
  name: "App",
  components: {
    tipModal,
    loading,
  },
  setup() {
    const router = useRouter();
    let { commit, dispatch } = useStore();

    const modalFunc = (obj) => {
      switch (obj) {
        case 1:
          router.push({
            path: "/login",
          });
          break;
        case 11:
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
      dispatch("GET_CONFIG");
      dispatch("GET_GAME_LIST");
      if (localStorage.getItem("token")) {
        dispatch("GET_USER_INFO");
      } else {
        commit("set_reg_visible", true);
      }
      localStorage.setItem("d_id", uuid.v1());
    });
    return {
      modalFunc,
    };
  },
};
</script>
