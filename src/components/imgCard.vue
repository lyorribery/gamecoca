<template>
  <div
    class="card-item"
    :style="{ width: (cardWidth - 36) / 3 + 'px' }"
    @click="goDetail(cardInfo)"
  >
    <div class="card-image-box">
      <nut-image
        :src="cardInfo.icon"
        :width="((cardWidth - 36) / 3).toString()"
        :height="((cardWidth - 36) / 3).toString()"
        show-loading
        show-error
        round
        :radius="12"
        lazy-load
      >
        <template #loading>
          <img
            class="img-loading"
            src="../assets/images/img_load.svg"
            :style="{
              width: (cardWidth - 36) / 3 + 'px',
              height: (cardWidth - 36) / 3 + 'px',
            }"
          />
        </template>
        <template #error>
          <img
            class="img-loading"
            src="../assets/images/img_load.svg"
            :style="{
              width: (cardWidth - 36) / 3 + 'px',
              height: (cardWidth - 36) / 3 + 'px',
            }"
          />
        </template>
      </nut-image>
      <div class="card-count">
        <img :src="img_url + 'other/img_people.png'" width="12.5" />
        <span>{{ cardInfo.count }}</span>
      </div>
      <!-- <div class="card-name line-text-overflow">{{ cardInfo.name }}</div> -->
    </div>
    <!-- <div class="game-btn-box">
      <div class="btn play" @click="goDetail(cardInfo, 'real')">PLAY NOW</div>
      <div class="btn demo" @click="goDetail(cardInfo), 'demo'">DEMO</div>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { startGame } from "@/apis/apis";
import apiconfig from "@/utils/apiConfig";
export default {
  name: "imgCard",
  props: {
    cardInfo: {
      type: Object,
      default: {
        name: "",
        img: "",
        count: 0,
      },
    },
  },
  setup(props, ctx) {
    const img_url = apiconfig.fileURL;
    const router = useRouter();
    const { state, commit } = useStore();
    const is_req = ref(false);
    const cardWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const goDetail = async (data) => {
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
      const res = await startGame.post("", {
        gameId: data.id,
        platform: "H5",
      });
      if (res.code == 2002) {
        is_req.value = false;
        commit("set_loading_modal", false);
        ctx.commit("set_user_info", {});
        localStorage.removeItem("token");
        commit("set_tip_info", "You have not logged in yet,please login.");
        commit("set_tip_type", 1);
        commit("set_tip_modal", true);
        return;
      }
      if (res.code == 200) {
        location.href = res.data.url;
        commit("set_loading_modal", false);
      } else {
        is_req.value = false;
        commit("set_loading_modal", false);
        commit("set_tip_info", res.msg);
        commit("set_tip_type", 10);
        commit("set_tip_modal", true);
      }
    };
    return {
      img_url,
      goDetail,
      cardWidth,
    };
  },
};
</script>

<style scoped lang="scss">
.card-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  margin-right: 8px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .game-btn-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
    .btn {
      display: flex;
      justify-content: center;
      align-content: center;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 5px 15px;
      font-size: 12px;
      color: #fff;
    }
    .play {
      background: linear-gradient(-90deg, rgba(191, 53, 253, 0.61), #5b2efa);
      font-weight: bold;
    }
    .demo {
      background: #382b63;
    }
  }
  .card-image-box {
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    .card-count {
      position: absolute;
      top: 5px;
      left: 5px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 3px 8px;
      background: rgba(0, 0, 0, 0.6);
      box-shadow: 0px 0px 1px 0px #000000;
      border-radius: 16px;
      span {
        padding-left: 3px;
        font-size: 11.7px;
        color: #fff;
        font-weight: 600;
      }
    }
    .card-name {
      position: absolute;
      bottom: 8px;
      left: 8px;
      z-index: 2;
      text-align: left;
      color: #fff;
      font-size: 11px;
      width: 100%;
    }

    .line-text-overflow {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .img-loading {
      // animation: lighter 2.5s linear infinite;

      @keyframes lighter {
        0% {
          opacity: 1;
        }

        25% {
          opacity: 0.9;
        }

        50% {
          opacity: 0.8;
        }

        75% {
          opacity: 0.9;
        }

        100% {
          opacity: 1;
        }
      }

      @-webkit-keyframes lighter {
        0% {
          opacity: 1;
        }

        25% {
          opacity: 0.9;
        }

        50% {
          opacity: 0.8;
        }

        75% {
          opacity: 0.9;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
}
</style>
