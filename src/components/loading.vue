<template>
  <nut-overlay
    v-model:visible="loading_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="loading-modal">
      <img src="@/assets/images/loading.gif" width="220" />
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
.loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #18171E;
}
</style>
