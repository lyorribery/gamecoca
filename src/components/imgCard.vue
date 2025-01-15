<template>
  <div class="card-item" :style="{ width: img_width }" @click="goDetail(cardInfo)">
    <nut-animate type="ripple" action="click">
      <div class="card-image-box">
        <nut-image
          :src="cardInfo.fullGameImg"
          :width="img_width"
          :height="img_height"
          show-loading
          show-error
          round
          :radius="15"
          lazy-load
        >
          <template #loading>
            <div
              class="img-loading"
              :style="{ width: img_width, height: img_height }"
            ></div>
          </template>
          <template #error>
            <div
              class="img-loading"
              :style="{ width: img_width, height: img_height }"
            ></div>
          </template>
        </nut-image>
        <div class="img-mask"></div>
      </div>
    </nut-animate>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
// import apiconfig from "@/utils/apiConfig";

export default {
  name: "imgCard",
  props: {
    cardInfo: {
      type: Object,
      default: {},
    },
    imgType: {
      type: String,
      default: "small",
    },
  },
  setup(props, ctx) {
    const img_width = ref("2.964rem");
    const img_height = ref("4.0755rem");

    if (props.imgType == "small") {
      img_width.value = "2.437rem";
      img_height.value = "3.3231rem";
    } else {
      img_width.value = "2.964rem";
      img_height.value = "4.0755rem";
    }

    const { state, commit } = useStore();
    const is_req = ref(false);

    const goDetail = async (data) => {
      return;
      if (!data.id) return;
      if (!localStorage.getItem("token")) {
        commit("set_tip_info", "You have not logged in yet,please login.");
        commit("set_tip_type", 1);
        commit("set_tip_modal", true);
        return;
      }
      if (!state.user_info.bindGold) {
        commit("set_tip_info", "The current balance is insufficient, please deposit.");
        commit("set_tip_type", 3);
        commit("set_tip_modal", true);
        return;
      }
      if (is_req.value) return;
      is_req.value = true;
      commit("set_loading_modal", true);
      if (data.clientUrl) {
        is_req.value = false;
        location.href = `${data.clientUrl}?t_code=${localStorage.getItem("token")}`;
        return;
      }
    };
    return {
      goDetail,
      img_width,
      img_height,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";
.card-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.277rem;
  margin-right: 0.277rem;
  &:nth-child(3n) {
    margin-right: 0;
  }

  .card-image-box {
    border-radius: 0.333rem;
    position: relative;
    overflow: hidden;
    .img-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
    }

    .img-loading {
      background-size: 200% 200%; 
      background-image: linear-gradient(
        135deg,
        rgba(188, 54, 204, 0.8),
        rgba(188, 54, 204, 0.6),
        rgba(56, 28, 164, 0.8),
        rgba(56, 28, 164, 0.6)
      );
      animation: flow 2s ease infinite;
    }
    @keyframes flow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
}
</style>
