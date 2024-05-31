<template>
  <nut-overlay
    v-model:visible="fd_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="fd-modal">
      <div class="fd-close">
        <Close color="#fff" width=".444rem" height=".444rem" @click="close('')" />
      </div>
      <div class="btn" @click="close('deposit')">Deposit ₵5.00</div>
    </div>
  </nut-overlay>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Close } from "@nutui/icons-vue";

const router = useRouter();
const { state, commit } = useStore();
const fd_visible = computed(() => {
  return state.fd_visible;
});
const close = (name) => {
  commit("set_fd_visible", false);
  if (name) {
    router.push({
      name,
    });
  }
};
</script>

<style lang="scss" scoped>
.fd-modal {
  position: fixed;
  left: 1.074rem;
  top: calc((100vh - 10.55rem) / 2);
  width: calc(100% - 2.148rem);
  height: 10.55rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/images/client/new_reg.png');
  .btn {
    position: fixed;
    left: calc((100% - 4.907rem) / 2);
    top: calc(100vh / 2 + 3.6rem);
    width: 4.907rem;
    height: 1.157rem;
    background: rgba(250, 215, 35, 0.99);
    box-shadow: 0px 0.037rem 0.138rem 0px rgba(248, 213, 35, 0.46);
    border-radius: 0.583rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.481rem;
    color: #5a3919;
  }
  .fd-close {
    position: fixed;
    right: 1.525rem;
    top: calc((100vh - 9.895rem) / 2);
  }
}
</style>
