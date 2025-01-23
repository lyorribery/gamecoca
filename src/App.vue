<template>
  <div id="app">
    <router-view />
    <tip />
    <loading />
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import loading from "@/components/loading.vue";
import {loadStaticImg} from '@/utils/utils'

import tip from "@/components/tip.vue";
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
    loading,
    tip,
  },
  setup() {
    const router = useRouter();
    let { commit, dispatch } = useStore();
    const modalFunc = (obj) => {
      console.log(obj);
    };
    const getQueryParam = (name) => {
      const regex = new RegExp("[?&]" + name + "=([^&#]*)", "i");
      const results = regex.exec(window.location.href);
      return results ? decodeURIComponent(results[1]) : null;
    };

    onMounted(() => {
      loadStaticImg()
      const id = getQueryParam("agentid");
      if (id) window.localStorage.setItem("agentId", id);
      let userAgentInfo = window.navigator.userAgent;
      let Agents = new Array(
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      );
      //pc
      if (
        !Agents.some((item) =>
          userAgentInfo.toLowerCase().includes(item.toLowerCase())
        ) &&
        !(self.frameElement && self.frameElement.tagName == "IFRAME")
      ) {
        document.body.style.background='#222222'
        let ifrTag = document.getElementsByTagName("iframe")[0];
        if (ifrTag) {
          ifrTag.remove();
        } else {
          let ifrTag = document.createElement("iframe");
          document.body.innerHTML = "";
          ifrTag.setAttribute("src", window.location.href);
          ifrTag.setAttribute("frameborder", 0);
          let styleObj = {
            width: "440px",
            height: "100vh",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow:"0 0 20px #151515" 
          };
          Object.entries(styleObj).forEach(([key, value]) => {
            ifrTag.style[key] = value;
          });
          document.body.append(ifrTag);
        }
      }
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
