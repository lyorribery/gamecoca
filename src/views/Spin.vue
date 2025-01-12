<template>
  <div>
    <div class="spin-header">
      <div @click="goBack" class="arrow">
        <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
      </div>
      <span>Coins Spin</span>
    </div>
    <div class="spin">
      <div
        class="spin-container"
        :style="{ width: s_w / 36 + 'rem', height: s_w / 36 + 'rem' }"
      >
        <!-- <img
          src="../assets/images/client/spin/zp_zhizhen.png"
          style="z-index: 2; width: 1.944rem"
        /> -->
        <div class="spin-box" ref="prizeBack">
          <!-- <img src="../assets/images/client/spin/zp_di.png" style="width: 100%" /> -->
        </div>
        <div class="spin-back"></div>

        <div class="prize-list" ref="prizeWrap">
          <div
            class="prize-item"
            v-for="(item, index) in prizeObj.prizeList"
            :key="index"
            :style="prizeStyle(index)"
          >
            <img :src="item.fullPrizeImage" />
            <div class="prize-txt">
              <div class="unit">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- <img
        src="../assets/images/client/spin/zp_dizuo.png"
        width="253.7"
        style="margin-top: -30px"
      /> -->

      <div class="btn" @click="start">PLAY</div>
      <div class="des">
        If you hit cash,the amount will be credited to your game account immediately;
      </div>
      <div class="des">The final interpretation belongs to GameCoca Casino.</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RectLeft } from "@nutui/icons-vue";
import { useStore } from "vuex";
import { Participation } from "@/apis/cashwheel.js";

let { state, commit, dispatch } = useStore();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const s_w = ref(0);

const spin_count = computed(() => {
  return state.user_info.point ? Math.floor(state.user_info.point / 100) : "0";
});

const user_info = computed(() => {
  return state.user_info;
});

const global_config = computed(() => {
  return state.global_config;
});

const prizeObj = reactive({
  prizeList: [], // 后台配置的奖品数据
  isRunning: false, // 是否正在抽奖
  baseRunAngle: 360 * 5, // 总共转动角度 至少5圈
  prizeId: 0, // 中奖id
});
const prizeWrap = ref(null);
const prizeBack = ref(null);
// 平均每个奖品角度
const rotateAngle = computed(() => {
  const _degree = 360 / prizeObj.prizeList.length;
  return _degree;
});
// 要执行总角度数
const totalRunAngle = computed(() => {
  return (
    prizeObj.baseRunAngle +
    360 -
    prizeObj.prizeId * rotateAngle.value -
    rotateAngle.value / 2
  );
});

// 每个奖品布局
const prizeStyle = computed(() => {
  const _degree = rotateAngle.value;
  return (i) => {
    return `
              width: ${(s_w.value * Math.sin(((_degree / 2) * Math.PI) / 180)) / 36}rem;
              height: ${s_w.value / 2 / 36}rem;
              transform: rotate(${_degree * i + _degree / 2 - 45}deg);
              transform-origin: 50% 100%;
              margin-top:.277rem;
            `;
  };
});
onMounted(() => {
  s_w.value = window.innerWidth - 100;
  prizeObj.prizeList = state.wheel_list;
});

// 获取随机数
const getRandomNum = () => {
  const num = Math.floor(Math.random() * prizeObj.prizeList.length);
  return num;
};
const start = async () => {
  if (!localStorage.getItem("accessToken")) {
    return;
  }

  if (!prizeObj.isRunning) {
    prizeObj.isRunning = true;
    // 请求返回的奖品编号
    let prizeId = "";
    const res = await Participation({ activityId: 2 });
    if (res.code == 200) {
      console.log(res.data);
      for (let i in state.wheel_list) {
        if (state.wheel_list[i].id == res.data.id) {
          prizeId = i;
          break;
        }
      }
      prizeObj.prizeId = prizeId;
      startRun();
    }
  }
};
const startRun = () => {
  // 设置动效
  prizeWrap.value.style = `
            transform: rotate(${totalRunAngle.value + 15}deg);
            transition: all 4s ease;
          `;
  prizeBack.value.style = `
            transform: rotate(${totalRunAngle.value + 15}deg);
            transition: all 4s ease;
          `;
  // 监听transition动效停止事件
  prizeWrap.value.addEventListener("transitionend", stopRun);
  prizeBack.value.addEventListener("transitionend", stopRun);
};
const stopRun = (e) => {
  prizeObj.isRunning = false;
  prizeWrap.value.style = `
            transform: rotate(${totalRunAngle.value - prizeObj.baseRunAngle - 15}deg);
          `;
  prizeBack.value.style = `
            transform: rotate(${totalRunAngle.value - prizeObj.baseRunAngle - 15}deg);
          `;
};
</script>

<style lang="scss" scoped>
.spin {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #221a46, #3c2670);
  box-sizing: border-box;
  padding: calc(1.666rem + env(safe-area-inset-top)) 0.416rem 0.416rem 0.416rem;

  .spin-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .prize-list {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
    .prize-item {
      position: absolute;
      left: 0;
      right: 0;
      top: -0.277rem;
      margin: auto;
      &:nth-child(even) {
        color: #af6f00;
      }
      &:nth-child(odd) {
        color: #ffe48f;
      }
    }
    .prize-item img {
      width: 38%;
      margin: 0.911rem auto 0.277rem;
      display: block;
    }
    .prize-item .prize-txt {
      font-size: 0.277rem;
      font-weight: bold;
      text-align: center;
      line-height: 0.333rem;
      img {
        width: 0.694rem;
      }
    }

    .spin-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: changeBg 1s infinite;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    @keyframes changeBg {
      0% {
        background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/spin/zp_deng_1.png");
      }

      100% {
        background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/spin/zp_deng_2.png");
      }
    }
    .spin-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .des {
    line-height: 0.444rem;
    width: 100%;
    font-size: 0.333rem;
    color: #ffffff;
  }

  .btn {
    margin-bottom: 0.555rem;
    width: calc(100% - 0.833rem);
    height: 1.269rem;
    background: linear-gradient(-90deg, #9343c4, #614ae6);
    border-radius: 0.63rem;
    font-weight: bold;
    font-size: 0.472rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .tip {
      position: absolute;
      right: 1.388rem;
      bottom: 0.45rem;
      font-size: 0.361rem;
      color: #ffffff;
      font-style: italic;
    }
  }
}
.spin-header {
  z-index: 9;
  background: #3c2670;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .arrow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    left: 0.416rem;
    top: 0.555rem;
    span {
      font-weight: bold;
      font-size: 0.361rem;
      color: #ffffff;
      padding-left: 0.138rem;
    }
  }
  span {
    font-weight: bold;
    font-size: 0.472rem;
    color: #ffffff;
  }
}
</style>
