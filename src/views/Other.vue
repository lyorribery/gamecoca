<template>
  <div class="other">
    <div class="tool">
      <div class="item" @click="back()">
        <img src="../assets/images/back.svg" />
      </div>
      <div class="item" @click="back()">
        <img src="../assets/images/box.svg" />
      </div>
    </div>
    <iframe
      :src="req_url"
      width="100%"
      :style="{ height: iframeHeight + 'px' }"
      frameborder="0"
      loading="lazy"
    ></iframe>
    <nut-overlay
      v-model:visible="modal"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="text">{{ $t("gameTip") }}</div>
          <div class="btn-row">
            <div class="cancel" @click="modal = false">{{ $t("button.cancel") }}</div>
            <div class="confirm" @click="goBack()">{{ $t("button.confirm") }}</div>
          </div>
        </div>
      </div>
    </nut-overlay>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { play } from "@/apis/user";

const { dispatch, commit } = useStore();
const route = useRoute();
const router = useRouter();
const modal = ref(false);
const back = () => {
  modal.value = true;
};
const goBack = () => {
  modal.value = false;
  router.go(-1);
  dispatch("GET_USER_BALANCE");
};
const iframeHeight = ref(0);
const req_url = ref("");
onBeforeMount(() => {
  iframeHeight.value = window.innerHeight;
  play({ ...route.query, lang: "" }).then((res) => {
    if (res.code == 200) req_url.value = res.data.url;
    commit("set_loading_modal", false);
  });
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .overlay-content {
    width: calc(100% - 0.833rem);
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;
    box-sizing: border-box;
    padding: 0.555rem 0;
    .text {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.555rem;
      color: $color-white;
      font-size: 0.361rem;
      font-weight: 600;
    }
    .btn-row {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.555rem;
      .confirm {
        margin-left: 0.666rem;
        width: 2.111rem;
        height: 0.666rem;
        background: $primary-color2;
        border-radius: 0.444rem;
        color: $color-white;
        font-size: 0.305rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cancel {
        width: 2.111rem;
        height: 0.666rem;
        background: $primary-color;
        border-radius: 0.444rem;
        color: $color-black;
        font-size: 0.305rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.tool {
  z-index: 999;
  position: fixed;
  top: calc(env(safe-area-inset-top) + 0.416rem);
  left: 0.277rem;
  .item {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    padding: 0.138rem;
    margin-bottom: 0.222rem;
    img {
      width: 0.5rem;
    }
  }
}
</style>
