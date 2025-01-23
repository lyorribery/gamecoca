<template>
  <nut-overlay
    v-model:visible="loading_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="loading-modal">
      <div class="pulse">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </nut-overlay>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "loadingModal",
  setup(props, ctx) {
    const { state } = useStore();
    const loading_visible = computed(() => {
      return state.loading_visible;
    });
    return {
      loading_visible,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $bg-color;
  .pulse {
    display: flex;
    justify-content: center;
    align-items: center;
    .dot {
      width: 22px;
      height: 22px;
      background-color: #06a950;
      border-radius: 50%;
      margin: 0 5px;
      animation: pulse 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }

    .dot:nth-child(2) {
      animation-delay: -0.4s;
    }

    .dot:nth-child(3) {
      animation-delay: -0.2s;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.5);
      }

      50% {
        opacity: 0.1;
        transform: scale(1);
      }

      100% {
        opacity: 1;
        transform: scale(0.5);
      }
    }
  }
}
</style>
