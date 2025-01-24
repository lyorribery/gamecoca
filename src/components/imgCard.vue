<template>
  <div class="card-item" :style="{ width: img_width }" @click="goDetail(img_info)">
    <nut-animate type="ripple" action="click">
      <div class="card-image-box">
        <nut-image
          :src="img_info.fullGameImg"
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
        <div class="colect-box" @click.stop="changeColection(img_info)">
          <i
            class="iconfont icon-shoucangxuanzhong"
            :style="{ color: img_info.isColect ? '#FFC536' : '#d2cccb' }"
          ></i>
        </div>
        <!-- <div class="img-mask"></div> -->
      </div>
    </nut-animate>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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
    const router = useRouter();
    const img_info = ref({});
    img_info.value = props.cardInfo;
    const img_width = ref("2.964rem");
    const img_height = ref("4.0755rem");

    if (props.imgType == "small") {
      img_width.value = "2.435rem";
      img_height.value = "3.3231rem";
    } else {
      img_width.value = "2.964rem";
      img_height.value = "4.0755rem";
    }

    const { state, commit } = useStore();

    const goDetail = (data) => {
      if (!localStorage.getItem("accessToken")) {
        router.push({
          path: "/login",
          query: {
            mode: "login",
          },
        });
        return;
      }
      if (state.user_balance.balance == 0) {
        commit("set_show_tip", { type: 1, msg: "Saldo de conta insuficiente" });
        return;
      }
      commit("set_loading_modal", true);
      router.push({
        path: "/other",
        query: {
          channel: data.channelBean,
          gameCode: data.gameCode,
          gameId: data.gameId,
        },
      });
    };

    const changeColection = (data) => {
      img_info.value.isColect = !img_info.value.isColect;
    };
    return {
      img_info,
      goDetail,
      img_width,
      img_height,
      changeColection,
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
    border-radius: 0.194rem;
    position: relative;
    overflow: hidden;
    .colect-box {
      position: absolute;
      right: 0.099rem;
      top: 0.099rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      padding: 0.054rem;
      i {
        font-size: 0.361rem;
      }
    }
    // .img-mask {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
    // }

    .img-loading {
      background-size: 200% 200%;
      background-image: linear-gradient(
        135deg,
        rgba(6, 169, 80, 1),
        rgba(6, 169, 80, 0.8),
        rgba(255, 197, 54, 1),
        rgba(255, 197, 54, 0.8)
      );
      // background-image: linear-gradient(
      //   135deg,
      //   rgba(188, 54, 204, 0.8),
      //   rgba(188, 54, 204, 0.6),
      //   rgba(56, 28, 164, 0.8),
      //   rgba(56, 28, 164, 0.6)
      // );
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
