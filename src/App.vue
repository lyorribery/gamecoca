<template>
  <div id="app">
    <router-view />
    <tipModal @callBack="modalFunc" />
    <loading />
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import tipModal from "@/components/tipModal.vue";
import loading from "@/components/loading.vue";
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
      console.log(obj)
    };
    onMounted(() => {
      dispatch("GET_CONFIG");
      if (localStorage.getItem("accessToken")) {
        dispatch("GET_USER_INFO");
        dispatch("GET_USER_BALANCE");
        dispatch("GET_MSG_LIST");
        dispatch("GET_UNREAD_COUNT");
      }

      localStorage.setItem("d_id", uuid.v1());
    });
    return {
      modalFunc,
    };
  },
};
</script>
