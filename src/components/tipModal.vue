<template>
  <nut-overlay
    v-model:visible="tip_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="tip-modal">
      <div class="close-box">
        <div class="close-icon" @click="close"></div>
      </div>
      <div class="tip-box">
        <div class="tip-header"></div>
        <div class="tip-content">
          <div class="tip-text">{{ tip_info }}</div>
          <div class="btn" @click="closeModal">OK</div>
        </div>
      </div>
    </div>
  </nut-overlay>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "tipModal",
  setup(props, ctx) {
    const router = useRouter();
    const { state, commit } = useStore();
    const tip_visible = computed(() => {
      return state.tip_visible;
    });
    const tip_info = computed(() => {
      return state.tip_info;
    });
    const closeModal = () => {
      ctx.emit("callBack", state.tip_type);
      commit("set_tip_modal", false);
    };
    const close = () => {
      if (state.tip_type == 11) {
        router.push({
          path: "/login",
        });
      }
      commit("set_tip_modal", false);
    };
    return {
      tip_visible,
      tip_info,
      closeModal,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.tip-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 .555rem;
  .close-box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: .277rem;
    .close-icon {
      position: relative;
      width: .444rem;
      height: .444rem;
    }

    .close-icon::before,
    .close-icon::after {
      content: "";
      position: absolute;
      width: .555rem;
      height: .055rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
    }

    .close-icon::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .close-icon::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  .tip-box {
    width: 100%;
    background: linear-gradient(-24deg, rgba(204, 186, 255), #f7fdfd);
    border-radius: .222rem;
    overflow: hidden;
    .tip-content {
      width: 100%;
      box-sizing: border-box;
      padding: .833rem .555rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .tip-text {
        font-size: .369rem;
        color: #583188;
        line-height: .416rem;
      }
      .btn {
        width: 3.091rem;
        height: .833rem;
        border-radius: .416rem;
        border: .055rem solid #583188;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: .369rem;
        color: #583188;
        margin-top: .833rem;
      }
    }
    .tip-header {
      width: 100%;
      height: .833rem;
      background: linear-gradient(-90deg, #9343c4, #614ae6);
    }
  }
}
</style>
