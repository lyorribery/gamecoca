<template>
  <div class="card-item" :style="{ width: (cardWidth - 30) / 2 + 'px' }" @click="goDetail(cardInfo)">
    <div class="card-image-box">
      <nut-image
        :src="cardInfo.img"
        :width="((cardWidth - 30) / 2).toString()"
        :height="((cardWidth - 30) / 2 / 1.79).toString()"
        show-loading
        show-error
        round
        :radius="8"
        lazy-load
      >
        <template #loading>
          <img
            class="img-loading"
            src="../assets/images/img-loading.jpg"
            :style="{
              width: (cardWidth - 30) / 2 + 'px',
              height: (cardWidth - 30) / 2 / 1.79 + 'px',
            }"
          />
        </template>
        <template #error>
          <img
            class="img-loading"
            src="../assets/images/img-loading.jpg"
            :style="{
              width: (cardWidth - 30) / 2 + 'px',
              height: (cardWidth - 30) / 2 / 1.79 + 'px',
            }"
          />
        </template>
      </nut-image>
      <div class="card-count">
        <img src="@/assets/images/img_people.png" width="8" />
        <span>{{ cardInfo.count }}</span>
      </div>
      <div class="card-name line-text-overflow">{{ cardInfo.name }}</div>
    </div>
    <!-- <div class="game-btn-box">
      <div class="btn play" @click="goDetail(cardInfo, 'real')">PLAY NOW</div>
      <div class="btn demo" @click="goDetail(cardInfo), 'demo'">DEMO</div>
    </div> -->
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
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
    const router = useRouter();
    const { state, commit } = useStore();
    const cardWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const goDetail = (data, type) => {
      console.log(data);
      
    };
    return {
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
  margin-bottom: 10px;
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
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    .card-count {
      position: absolute;
      top: 8px;
      left: 8px;
      background: rgba(0, 0, 0, 0.3);
      box-shadow: 0px 0px 3px 0px #000000;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-content: center;
      box-sizing: border-box;
      padding: 1px 5px;
      span {
        padding-left: 5px;
        font-size: 9px;
        color: #fff;
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
