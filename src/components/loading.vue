<template>
  <nut-overlay
    v-model:visible="loading_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="loading-modal">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px"
        viewBox="0 0 50 50" style="enable-background: new 0 0 50 50;" xml:space="preserve">
        <path fill="#FFFFFF"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          transform="rotate(275.098 25 25)">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25"
            dur="0.6s" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
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
  background: $bg-color;;
}
</style>
