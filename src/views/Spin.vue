<template>
  <div class="spin-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width="15px" height="15px" />
    </div>
    <span>Coins Spin</span>
  </div>
  <div class="spin">
    <div class="spin-container" :style="{ width: s_w + 'px', height: s_w + 'px' }">
      <img :src="img_url + 'spin/zp_zhizhen.png'" width="70" style="z-index: 2" />
      <div class="spin-box" ref="prizeBack">
        <img :src="img_url + 'spin/zp_di.png'" style="width: 100%" />
      </div>
      <div class="spin-back"></div>

      <div class="prize-list" ref="prizeWrap">
        <div
          class="prize-item"
          v-for="(item, index) in prizeObj.prizeList"
          :key="index"
          :style="prizeStyle(index)"
        >
          <img :src="item.pic" />
          <div class="prize-txt">
            <div class="amount">{{ item.reward != 0 ? item.reward : "Try" }}</div>
            <div class="unit">{{ item.reward != 0 ? "GHS" : "Again" }}</div>
          </div>
        </div>
      </div>
    </div>

    <img :src="img_url + 'spin/zp_dizuo.png'" width="253.7" style="margin-top: -30px" />

    <div class="data-box">
      <div class="item b-r">
        My coins：<span>{{ user_info.point ? user_info.point : "0" }}</span>
      </div>
      <div class="item">
        <span>{{ spin_count }}</span
        >Remaining draws
      </div>
    </div>
    <div class="btn" @click="start">PLAY<span class="tip">(20COINS)</span></div>
    <div class="des">It takes 20 coins per spin;</div>
    <div class="des">
      If you hit cash,the amount will be credited to your game account immediately;
    </div>
    <div class="des">The final interpretation belongs to GameCoca Casino.</div>
    <!-- <div class="divide">
      <div class="line"></div>
      <span>Grand Prize Winners</span>
      <div class="line"></div>
    </div>
    <div class="winner-container">
      <div class="winner-box">
        <div class="item" v-for="(item, index) in winner_list" :key="index">
          {{ item.name }} win <span>₵{{ item.amount }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RectLeft } from "@nutui/icons-vue";
import { useStore } from "vuex";
import apiConfig from "@/utils/apiConfig";
import { spinAct } from "@/apis/apis";

const img_url = apiConfig.fileURL;

let { state, commit, dispatch } = useStore();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const s_w = ref(0);

const spin_count = computed(() => {
  return state.user_info.point ? Math.floor(state.user_info.point / 20) : "0";
});

const user_info = computed(() => {
  return state.user_info;
});
// const winner_list = [
//   {
//     name: "057***4308",
//     amount: 10,
//   },
//   {
//     name: "059***8607",
//     amount: 1,
//   },
//   {
//     name: "024***4281",
//     amount: 1,
//   },
//   {
//     name: "024***7696",
//     amount: 100,
//   },
//   {
//     name: "055***5850",
//     amount: 10,
//   },
//   {
//     name: "024***5372",
//     amount: 500,
//   },
//   {
//     name: "057***4308",
//     amount: 10,
//   },
//   {
//     name: "059***8607",
//     amount: 1,
//   },
//   {
//     name: "024***4281",
//     amount: 1,
//   },
//   {
//     name: "024***7696",
//     amount: 100,
//   },
//   {
//     name: "055***5850",
//     amount: 10,
//   },
//   {
//     name: "024***5372",
//     amount: 500,
//   },
//   {
//     name: "057***4308",
//     amount: 10,
//   },
//   {
//     name: "059***8607",
//     amount: 1,
//   },
//   {
//     name: "024***4281",
//     amount: 1,
//   },
//   {
//     name: "024***7696",
//     amount: 100,
//   },
//   {
//     name: "055***5850",
//     amount: 10,
//   },
//   {
//     name: "024***5372",
//     amount: 500,
//   },
//   {
//     name: "057***4308",
//     amount: 10,
//   },
//   {
//     name: "059***8607",
//     amount: 1,
//   },
//   {
//     name: "024***4281",
//     amount: 1,
//   },
//   {
//     name: "024***7696",
//     amount: 100,
//   },
//   {
//     name: "055***5850",
//     amount: 10,
//   },
//   {
//     name: "024***5372",
//     amount: 500,
//   },
//   {
//     name: "057***4308",
//     amount: 10,
//   },
//   {
//     name: "059***8607",
//     amount: 1,
//   },
//   {
//     name: "024***4281",
//     amount: 1,
//   },
//   {
//     name: "024***7696",
//     amount: 100,
//   },
//   {
//     name: "055***5850",
//     amount: 10,
//   },
//   {
//     name: "024***5372",
//     amount: 500,
//   },
//   {
//     name: "057***4308",
//     amount: 10,
//   },
//   {
//     name: "059***8607",
//     amount: 1,
//   },
//   {
//     name: "024***4281",
//     amount: 1,
//   },
//   {
//     name: "024***7696",
//     amount: 100,
//   },
//   {
//     name: "055***5850",
//     amount: 10,
//   },
//   {
//     name: "024***5372",
//     amount: 500,
//   },
// ];

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
              width: ${s_w.value * Math.sin(((_degree / 2) * Math.PI) / 180)}px;
              height: ${s_w.value / 2}px;
              transform: rotate(${_degree * i + _degree / 2 - 15}deg);
              transform-origin: 50% 100%;
              margin-top:10px;
            `;
  };
});
onMounted(() => {
  s_w.value = window.innerWidth - 30;
  prizeObj.prizeList = state.spin_config;
});

// 获取随机数
const getRandomNum = () => {
  const num = Math.floor(Math.random() * prizeObj.prizeList.length);
  return num;
};
const start = async () => {
  if (!localStorage.getItem("token")) {
    commit("set_tip_info", "You have not logged in yet,please login.");
    commit("set_tip_type", 1);
    commit("set_tip_modal", true);
    return;
  }
  if (state.user_info.point < 20) {
    commit("set_tip_info", "Current coins are less than 20.");
    commit("set_tip_type", 7);
    commit("set_tip_modal", true);
    return;
  }
  if (!prizeObj.isRunning) {
    prizeObj.isRunning = true;
    // 请求返回的奖品编号
    let prizeId = "";
    const res = await spinAct.post("", {});
    if (res.code == 200) {
      for (let i in state.spin_config) {
        if (state.spin_config[i].id == res.data.rewardId) {
          prizeId = i;
          break;
        }
      }
      console.log("中奖ID>>>", prizeId, prizeObj.prizeList[prizeId]);
      prizeObj.prizeId = prizeId;
      startRun();
      dispatch("GET_USER_INFO");
    } else if (res.code == 2002) {
      ctx.commit("set_user_info", {});
      localStorage.removeItem("token");
      commit("set_tip_info", "You have not logged in yet,please login.");
      commit("set_tip_type", 1);
      commit("set_tip_modal", true);
    } else {
      commit("set_tip_info", res.msg);
      commit("set_tip_type", 8);
      commit("set_tip_modal", true);
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
  commit(
    "set_tip_info",
    `You hit ₵ ${prizeObj.prizeList[prizeObj.prizeId].reward} cash rewards.`
  );
  commit("set_tip_type", 9);
  commit("set_tip_modal", true);
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
  background: linear-gradient(-31deg, #5c41c0, #370f70);
  box-sizing: border-box;
  padding: calc(60px + env(safe-area-inset-top)) 15px 15px 15px;

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
      /*border: 2px solid red;*/
      position: absolute;
      left: 0;
      right: 0;
      top: -10px;
      margin: auto;
      &:nth-child(even) {
        color: #ffe48f;
      }
      &:nth-child(odd) {
        color: #af6f00;
      }
    }
    .prize-item img {
      width: 40%;
      margin: 40px auto 10px;
      display: block;
    }
    .prize-item .prize-txt {
      font-size: 9.33px;
      font-weight: bold;
      text-align: center;
      line-height: 12px;
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
  // .winner-container {
  //   width: 100%;
  //   max-height: 150px;
  //   overflow: hidden;
  //   border-radius: 16px;
  //   background: rgba(255, 255, 255, 0.1);
  //   box-sizing: border-box;
  //   padding: 0 15px;
  //   .winner-box {
  //     animation: scroll 18s linear infinite;
  //     @keyframes scroll {
  //       0% {
  //         transform: translateY(0); /* 初始位置 */
  //       }
  //       100% {
  //         transform: translateY(-100%); /* 向上滚动 100% 的高度 */
  //       }
  //     }
  //     .item {
  //       width: 100%;
  //       height: calc(150px / 5);
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       box-sizing: border-box;
  //       border-bottom: 0.6px solid rgba(255, 255, 255, 0.1);
  //       font-size: 12px;
  //       color: #fff;
  //       span {
  //         color: #fefd46;
  //         padding-left: 5px;
  //       }
  //     }
  //   }
  // }

  .divide {
    margin: 20px 0;
    width: calc(100% - 30px);
    display: flex;
    justify-items: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 11px;
      color: #49bf6a;
      padding: 0 8px;
    }
    .line {
      flex: 1;
      height: 0.7px;
      background: #ccc3e2;
    }
  }
  .des {
    line-height: 16px;
    width: 100%;
    font-size: 12px;
    color: #ffffff;
  }
  .data-box {
    margin: 20px;
    width: 100%;
    height: 46.7px;
    border-radius: 23.3px;
    border: 1px solid #bd35fc;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    .b-r {
      border-right: 0.6px solid #ccc3e2;
    }
    .item {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;
      font-size: 14px;
      color: #ffffff;
      span {
        font-weight: bold;
        font-size: 20px;
        color: #e556ff;
      }
    }
  }
  .btn {
    margin-bottom: 20px;
    width: calc(100% - 30px);
    height: 45.7px;
    background: linear-gradient(-90deg, #9343C4, #614AE6);
    border-radius: 22.7px;
    font-weight: bold;
    font-size: 17.3px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .tip {
      position: absolute;
      right: 50px;
      bottom: 16.2px;
      font-size: 13.3px;
      color: #ffffff;
      font-style: italic;
    }
  }
}
.spin-header {
  z-index: 9;
  background: #391c7c;
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
    left: 15px;
    top: 20px;
  }
  span {
    font-weight: bold;
    font-size: 16.7px;
    color: #ffffff;
  }
}
</style>
