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
          <svg v-if="cardInfo.isColect" t="1737883526711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14720" width="0.361rem" height="0.361rem"><path d="M509.606998 104.904235c-24.043602 0-45.922912 13.226233-56.177464 33.95637L356.189863 336.302419l-223.674269 32.54216c-22.983457 3.304256-42.100864 18.718317-49.481971 39.659255-7.381108 21.048385-1.812275 44.23241 14.431687 60.033281l163.916257 160.125931-38.011732 222.016513c-3.868097 22.408359 6.03239 44.819788 25.458835 57.94676 10.69662 7.116071 23.204491 10.784624 35.757388 10.784624 10.298554 0 20.663622-2.475378 30.055526-7.337105l194.987926-102.7205L704.662463 912.072815c9.369392 4.861728 19.712971 7.337105 29.990035 7.337105 12.57541 0 25.082258-3.668553 35.778878-10.784624 19.426445-13.126972 29.305443-35.538401 25.460882-57.94676l-38.012755-222.016513 163.937746-160.125931c16.22145-15.812127 21.810748-38.984896 14.408151-60.033281-7.402597-20.940938-26.51898-36.353976-49.503461-39.659255L663.04767 336.302419l-97.240695-197.441814C555.619962 118.131491 533.695626 104.904235 509.606998 104.904235L509.606998 104.904235z" fill="#FFC536" p-id="14721"></path></svg>
          <svg v-else t="1737883526711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14720" width="0.361rem" height="0.361rem"><path d="M509.606998 104.904235c-24.043602 0-45.922912 13.226233-56.177464 33.95637L356.189863 336.302419l-223.674269 32.54216c-22.983457 3.304256-42.100864 18.718317-49.481971 39.659255-7.381108 21.048385-1.812275 44.23241 14.431687 60.033281l163.916257 160.125931-38.011732 222.016513c-3.868097 22.408359 6.03239 44.819788 25.458835 57.94676 10.69662 7.116071 23.204491 10.784624 35.757388 10.784624 10.298554 0 20.663622-2.475378 30.055526-7.337105l194.987926-102.7205L704.662463 912.072815c9.369392 4.861728 19.712971 7.337105 29.990035 7.337105 12.57541 0 25.082258-3.668553 35.778878-10.784624 19.426445-13.126972 29.305443-35.538401 25.460882-57.94676l-38.012755-222.016513 163.937746-160.125931c16.22145-15.812127 21.810748-38.984896 14.408151-60.033281-7.402597-20.940938-26.51898-36.353976-49.503461-39.659255L663.04767 336.302419l-97.240695-197.441814C555.619962 118.131491 533.695626 104.904235 509.606998 104.904235L509.606998 104.904235z" fill="#c4c3c8" p-id="14721"></path></svg>
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
