<template>
  <div class="vip">
    <div class="top-box">
      <i class="iconfont icon-arrow-left back" @click="goBack()"></i>
      <img src="../assets/images/vip/jingyantiao.png" />
      <div
        class="point"
        v-for="(item, index) in top_box_data"
        :key="index"
        :class="'p-' + (index + 1)"
      >
        <span
          :style="{ color: index + 1 > cur_info.level - 2 ? '#999999' : '#FFCB78' }"
          >{{ item.levelName }}</span
        >
        <div
          class="circle"
          :style="{ background: index + 1 > cur_info.level - 2 ? '#999999' : '#FFCB78' }"
        ></div>
      </div>
    </div>

    <div style="width: 100%; box-sizing: border-box; padding: 0 0.416rem">
      <div
        class="vip-bg"
        :style="{ backgroundImage: 'url(' + change_info.levelBg + ')' }"
      >
        <div class="row">
          <div class="name">{{ change_info.levelName }}</div>
          <img :src="change_info.levelIcon" />
        </div>
        <div class="progress-row">
          <div class="des">
            {{ $t("vip.title1") }}<span>0 / {{ change_info.payment }}</span>
          </div>
          <div class="progress-box" style="width: 55%">
            <nut-progress
              :percentage="(0 / change_info.payment) * 100 || 0"
              :show-text="false"
              size="small"
              stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
            />
          </div>
        </div>
        <div class="progress-row" style="margin-top: 0.277rem">
          <div class="des">
            {{ $t("vip.betamount") }}<span>0 / {{ change_info.gameStatement }}</span>
          </div>
          <div class="progress-box">
            <nut-progress
              :percentage="(0 / change_info.gameStatement) * 100 || 0"
              :show-text="false"
              size="small"
              stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="vip-info-box">
      <div class="left-arrow" @click="scrollVip(1)">
        <div class="icon-box">
          <i class="iconfont icon-xiangzuo"></i>
        </div>
      </div>
      <div class="right-arrow" @click="scrollVip(2)">
        <div class="icon-box">
          <i class="iconfont icon-xiangyou"></i>
        </div>
      </div>

      <div class="vip-icon" ref="scrollContainer">
        <div
          class="item"
          @click="changeInfo(item)"
          :class="item.level == change_info.level ? 'active-item' : ''"
          v-for="(item, index) in list"
          :key="index"
        >
          <img
            :src="item.levelIcon"
            :style="{ filter: item.level <= cur_info.level ? '' : 'grayscale(100%)' }"
          />
          <span :style="{ color: item.level == cur_info.level ? '#FFC02E' : '' }">{{
            item.levelName
          }}</span>
        </div>
      </div>
    </div>

    <div class="bottom-box">
      <div class="title">
        {{ $t("vip.title2") }}
        <div class="line"></div>
      </div>
      <div class="bottom-info">
        <div class="item">
          <img src="../assets/images/vip/vip_1.png" />
          <div class="des-box">
            <span>{{ $t("vip.title3") }}</span>
            <span class="data">5</span>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/vip/vip_2.png" />
          <div class="des-box">
            <span>{{ $t("vip.title4") }}</span>
            <span class="data">2000</span>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/vip/vip_1.png" />
          <div class="des-box">
            <span>{{ $t("vip.title5") }}</span>
            <span class="data">2000</span>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/vip/vip_3.png" />
          <div class="des-box">
            <span>{{ $t("vip.title6") }}</span>
            <span class="data">1%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Left, Right } from "@nutui/icons-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const { state } = useStore();

const router = useRouter();

const list = ref([]);
const user_info = ref({});
const cur_info = ref({});
// const vipSwiperRef=ref(null)
// const handlePrev = () => {
//   vipSwiperRef.value.prev();
// };
// const handleNext = () => {
//   vipSwiperRef.value.next();
// };
const change_info = ref({});
const changeInfo = (data) => {
  change_info.value = data;
};
const goBack = () => {
  router.go(-1);
};
const scrollContainer = ref(null);
const scrollVip = (type) => {
  if (type == 2) {
    scrollContainer.value.scrollTo({
      left: 500,
      top: 0,
      behavior: "smooth",
    });
  } else {
    scrollContainer.value.scrollTo({
      left: -500,
      top: 0,
      behavior: "smooth",
    });
  }
};
const top_box_data = ref([]);
onMounted(() => {
  user_info.value = state.user_info;
  list.value = state.level;

  list.value.map((item, index) => {
    if (item.level == user_info.value.level) {
      cur_info.value = item;
      change_info.value = item;
      if (index <= 2) {
        top_box_data.value = [
          list.value[0],
          list.value[1],
          list.value[2],
          list.value[3],
          list.value[4],
        ];
      } else if (index == 3) {
        top_box_data.value = [
          list.value[1],
          list.value[2],
          list.value[3],
          list.value[4],
          list.value[5],
        ];
      } else if (index == 4) {
        top_box_data.value = [
          list.value[2],
          list.value[3],
          list.value[4],
          list.value[5],
          list.value[6],
        ];
      } else if (index == 5) {
        top_box_data.value = [
          list.value[3],
          list.value[4],
          list.value[5],
          list.value[6],
          list.value[7],
        ];
      } else if (index == 6) {
        top_box_data.value = [
          list.value[4],
          list.value[5],
          list.value[6],
          list.value[7],
          list.value[8],
        ];
      } else if (index == 7) {
        top_box_data.value = [
          list.value[5],
          list.value[6],
          list.value[7],
          list.value[8],
          list.value[9],
        ];
      } else if (index > 7) {
        top_box_data.value = [
          list.value[6],
          list.value[7],
          list.value[8],
          list.value[9],
          list.value[10],
        ];
      }
    }
  });
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.vip {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0.416rem 0;
  .vip-swiper {
    margin-bottom: 0.416rem;
    width: 100%;
    height: 189px;
    // .swiper-btns {
    //   width: 100%;
    //   position: absolute;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   z-index: 1;
    //   display: flex;
    //   justify-content: space-between;
    // }
  }
  .top-box {
    width: 100%;
    height: 3.944rem;
    background-image: url("../assets/images/vip/top_img.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .p-1 {
      bottom: 1.34rem;
      left: 10%;
    }
    .p-2 {
      bottom: 1.85rem;
      left: 28%;
    }
    .p-3 {
      bottom: 1.98rem;
      left: 48%;
    }
    .p-4 {
      bottom: 1.85rem;
      right: 28%;
    }
    .p-5 {
      bottom: 1.34rem;
      right: 10%;
    }
    .point {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-weight: 400;
        font-size: 0.305rem;
        color: #ffcb78;
      }
      .circle {
        margin-top: 0.183rem;
        width: 0.194rem;
        height: 0.194rem;
        background: #ffcb78;
        border-radius: 50%;
      }
      .circle-big {
        margin-top: 0.183rem;
        width: 0.25rem;
        height: 0.25rem;
        background: #ffe2b4;
        border-radius: 50%;
        border: 0.027rem solid #ffffff;
      }
    }
    img {
      width: 50%;
      position: absolute;
      left: 0;
      bottom: 0.788rem;
    }
    .back {
      position: fixed;
      z-index: 2;
      top: calc(0.416rem + env(safe-area-inset-top));
      left: 0.416rem;
      font-size: 0.5rem;
      color: #ffffff;
    }
  }
  .bottom-box {
    margin-top: 0.416rem;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 0.277rem;
    .bottom-info {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.555rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      .item {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        margin-top: 0.277rem;
        img {
          width: 1.305rem;
        }
        .des-box {
          margin-left: 0.277rem;
          font-weight: 400;
          font-size: 0.305rem;
          color: #e6e6e6;
          display: flex;
          justify-content: center;
          flex-direction: column;
          .data {
            font-weight: bold;
            font-size: 0.361rem;
            padding-top: 0.138rem;
          }
        }
      }
    }
    .title {
      width: 100%;
      height: 0.972rem;
      border-bottom: 0.027rem solid #383838;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
      color: $primary-color;
      .line {
        position: absolute;
        bottom: 0;
        left: calc((100% - 1.138rem) / 2);
        width: 1.138rem;
        height: 0.054rem;
        background: $primary-color;
        border-radius: 0.027rem;
      }
    }
  }
  .vip-info-box {
    position: relative;
    width: 100%;
    height: 3.083rem;
    background: #1f1e1e;
    box-sizing: border-box;
    padding: 0.416rem 0;
    .left-arrow {
      z-index: 2;
      position: absolute;
      width: 0.416rem;
      height: 3.083rem;
      background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(6, 169, 80, 0.5) 55%,
        rgba(6, 169, 80, 0.8) 100%
      );
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0.277rem 0.277rem 0;
      .icon-box {
        box-sizing: border-box;
        padding: 0.054rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
        i {
          font-size: 0.277rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
    .right-arrow {
      z-index: 2;
      position: absolute;
      width: 0.416rem;
      height: 3.083rem;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(6, 169, 80, 0.5) 55%,
        rgba(6, 169, 80, 0.8) 100%
      );
      right: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.277rem 0 0 0.277rem;
      .icon-box {
        box-sizing: border-box;
        padding: 0.054rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
        i {
          font-size: 0.277rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }

    .vip-icon {
      width: 100%;
      overflow-x: auto;
      display: flex;
      flex-wrap: nowrap;
      .active-item {
        border: 0.027rem solid $primary-color !important;
      }
      .item {
        margin-right: 0.138rem;
        height: 2.027rem;
        box-sizing: border-box;
        padding: 0 0.277rem;
        background: #121212;
        border-radius: 0.361rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 0.027rem solid #2b2b2b;
        img {
          width: 1.055rem;
          margin-bottom: 0.138rem;
        }
        span {
          font-weight: 400;
          font-size: 0.305rem;
          color: #e6e6e6;
        }
      }
    }
  }
  .vip-bg {
    margin-bottom: 0.416rem;
    width: 100%;
    height: 5.132rem;
    position: relative;
    box-sizing: border-box;
    padding: 0.555rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .progress-row {
      width: 100%;
      .des {
        font-size: 0.333rem;
        color: $color-white;
        font-weight: 500;
        margin-bottom: 0.138rem;
        span {
          padding-left: 0.222rem;
        }
      }
    }
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        color: $color-white;
        font-weight: 600;
        font-size: 0.777rem;
      }
      img {
        width: 1.8rem;
      }
    }
  }
}
</style>
