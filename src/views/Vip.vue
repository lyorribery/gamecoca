<template>
  <div class="vip">
    <div class="vip-bg" :style="{ backgroundImage: 'url(' + cur_info.levelBg + ')' }">
      <div class="row">
        <div class="name">{{ cur_info.levelName }}</div>
        <img :src="cur_info.levelIcon" />
      </div>
      <div class="progress-row">
        <div class="des">
          Recharge<span>0 / {{ cur_info.payment }}</span>
        </div>
        <div class="progress-box" style="width: 55%">
          <nut-progress
            :percentage="(0 / cur_info.payment) * 100 || 0"
            :show-text="false"
            size="small"
            stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
          />
        </div>
      </div>
      <div class="progress-row" style="margin-top: 0.277rem">
        <div class="des">
          Bet Amount<span>0 / {{ cur_info.gameStatement }}</span>
        </div>
        <div class="progress-box">
          <nut-progress
            :percentage="(0 / cur_info.gameStatement) * 100 || 0"
            :show-text="false"
            size="small"
            stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
          />
        </div>
      </div>
    </div>

    <div class="vip-info-box">
      <div class="left-arrow" @click="scrollVip(1)">
        <i class="iconfont icon-xiangzuo"></i>
      </div>
      <div class="right-arrow" @click="scrollVip(2)">
        <i class="iconfont icon-xiangyou"></i>
      </div>
      <div class="vip-icon" ref="scrollContainer">
        <div
          class="item"
          @click="changeInfo(item)"
          :class="item.level == cur_info.level ? 'active-item' : ''"
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
        Privilégio de membro
        <div class="line"></div>
      </div>
      <div class="bottom-info">
        <div class="item">
          <img src="../assets/images/vip_1.png" />
          <div class="des-box">
            <span>Saques diários</span>
            <span class="data">5</span>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/vip_2.png" />
          <div class="des-box">
            <span>Limite saque único</span>
            <span class="data">2000</span>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/vip_1.png" />
          <div class="des-box">
            <span>Limite saque diário</span>
            <span class="data">2000</span>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/vip_3.png" />
          <div class="des-box">
            <span>Aposta Bonus</span>
            <span class="data">1%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const { state } = useStore();
const list = ref([]);
const user_info = ref({});
const cur_info = ref({});
const changeInfo = (data) => {
  cur_info.value = data;
};
const scrollContainer = ref(null);
const scrollVip = (type) => {
  if (type == 2) {
    scrollContainer.value.scrollTo({
      left: 300,
      top: 0,
      behavior: "smooth",
    });
  } else {
    scrollContainer.value.scrollTo({
      left: -300,
      top: 0,
      behavior: "smooth",
    });
  }
};
onMounted(() => {
  user_info.value = state.user_info;
  list.value = state.level;
  list.value.map((item) => {
    if (item.level == user_info.value.level) cur_info.value = item;
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

  .bottom-box {
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
      width: 0.638rem;
      height: 3.083rem;
      background: rgba(0, 0, 0, 0.3);
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0.305rem 0.305rem 0;
      i {
        font-size: 0.416rem;
        font-weight: bold;
        color: $primary-color2;
      }
    }
    .right-arrow {
      z-index: 2;
      position: absolute;
      width: 0.638rem;
      height: 3.083rem;
      background: rgba(0, 0, 0, 0.3);
      right: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.305rem 0 0 0.305rem;
      i {
        font-size: 0.416rem;
        font-weight: bold;
        color: $primary-color2;
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
    width: calc(100% - 1.111rem);
    height: 199px;
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
