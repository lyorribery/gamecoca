<template>
  <div class="card-item" style="width: 2.964rem" @click="goDetail(cardInfo)">
    <div class="card-image-box">
      <nut-image
        :src="cardInfo.fullGameImg"
        width="2.964rem"
        height="4.0755rem"
        show-loading
        show-error
        round
        :radius="15"
        lazy-load
      >
        <template #loading>
          <!-- <img
            class="img-loading"
            src="../assets/images/img_load.svg"
            style="width: 2.964rem; height: 4.0755rem"
          /> -->
          <div class="img-loading"></div>
        </template>
        <template #error>
          <!-- <img
            class="img-loading"
            src="../assets/images/img_load.svg"
            style="width: 2.964rem; height: 4.0755rem"
          /> -->
          <div class="img-loading"></div>
        </template>
      </nut-image>

      <div class="img-mask"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { startGame } from "@/apis/apis";
import apiconfig from "@/utils/apiConfig";

export default {
  name: "imgCard",
  props: {
    cardInfo: {
      type: Object,
      default: {},
    },
  },
  setup(props, ctx) {
    const img_url = apiconfig.fileURL;
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
      const res = await startGame.post("", {
        gameId: data.id,
        platform: "H5",
      });
      is_req.value = false;
      if (res.code == 2002) {
        commit("set_loading_modal", false);
        commit("set_user_info", {});
        localStorage.removeItem("token");
        commit("set_tip_info", "You have not logged in yet,please login.");
        commit("set_tip_type", 1);
        commit("set_tip_modal", true);
        return;
      }
      if (res.code == 200) {
        location.href = res.data.url;
      } else {
        commit("set_loading_modal", false);
        commit("set_tip_info", res.msg);
        commit("set_tip_type", 10);
        commit("set_tip_modal", true);
      }
    };
    return {
      img_url,
      goDetail,
    };
  },
};
</script>

<style scoped lang="scss">
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
      width: 2.964rem;
      height: 4.0755rem;
      // background: #222222;
      background: linear-gradient(-90deg, #9856c1, #6650e3);
      // @keyframes lighter {
      //   0% {
      //     opacity: 1;
      //   }

      //   25% {
      //     opacity: 0.9;
      //   }

      //   50% {
      //     opacity: 0.8;
      //   }

      //   75% {
      //     opacity: 0.9;
      //   }

      //   100% {
      //     opacity: 1;
      //   }
      // }

      // @-webkit-keyframes lighter {
      //   0% {
      //     opacity: 1;
      //   }

      //   25% {
      //     opacity: 0.9;
      //   }

      //   50% {
      //     opacity: 0.8;
      //   }

      //   75% {
      //     opacity: 0.9;
      //   }

      //   100% {
      //     opacity: 1;
      //   }
      // }
    }
  }
}
</style>
