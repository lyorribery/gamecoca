<template>
  <nut-overlay
    v-model:visible="spin_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
  >
    <div class="over-body">
      <div class="spin-modal" ref="spinBox">
        <img src="../assets/images/spin/history.png" class="history" width="28" />
        <img
          src="../assets/images/spin/question.png"
          class="close"
          style="right: 1.111rem"
          width="25"
        />
        <img
          src="../assets/images/spin/spin_close.png"
          class="close"
          @click="closeModal()"
          width="22"
        />

        <div class="spin-container" :style="{ width: s_w + 'px', height: s_w + 'px' }">
          <div class="zhen">{{ spin_count }}</div>
          <div class="spin-box" ref="prizeBack">
            <!-- <img src="../assets/images/spin/wheelinnerbg.png" style="width: 100%" /> -->
          </div>

          <div class="prize-list" ref="prizeWrap">
            <div
              class="prize-item"
              v-for="(item, index) in prizeObj.prizeList"
              :key="index"
              :style="prizeStyle(index)"
            >
              <img :src="item.fullPrizeImage" />
              <div class="prize-txt">
                <div class="unit">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-box">
          <img src="../assets/images/spin/simplewheel.png" />

          <div class="btn" @click="start()">Spin</div>

          <div class="date">
            <span>{{ lucky.displayStartTime }}</span
            >-<span>{{ lucky.displayEndTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </nut-overlay>
</template>

<script setup>
import { ref, reactive, computed, watch, nextTick } from "vue";
import { useStore } from "vuex";
import { Participation,GetParticipation } from "@/apis/cashwheel.js";

const { state, commit } = useStore();
const spin_visible = computed(() => {
  return state.spin_show;
});
const lucky = computed(() => {
  return state.lucky;
});
const spinBox = ref(null);
const s_w = ref(0);
const spin_count=ref(0)
watch(
  () => state.spin_show,
  (val) => {
    if (val) {
      prizeObj.prizeList = state.wheel_list;
      getCount()
      nextTick(() => {
        s_w.value = spinBox.value.offsetWidth;
      });
    }
  }
);
const getCount=()=>{
    GetParticipation({activityId:2}).then(res=>{
        if(res.code==200) {
            spin_count.value=res.data.remainingParticipation
        }
    })
}


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
              width: ${((s_w.value-90) * Math.sin(((_degree / 2) * Math.PI) / 180)) / 36}rem;
              height: ${(s_w.value-90) / 2 / 36}rem;
              transform: rotate(${_degree * i + _degree / 2 - 45}deg);
              transform-origin: 50% 100%;
              margin-top:.277rem;
            `;
  };
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
const closeModal = () => {
  commit("set_spin_show", false);
};
</script>

<style lang="scss" scoped>
.over-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .spin-modal {
    position: relative;
    width: calc(100% - 0.832rem);
    height: 15rem;
    border-radius: 0.416rem;
    background: linear-gradient(180deg, #14195d 0%, #171186 50%, #1922a0 100%);
    .spin-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url("../assets/images/spin/wheelbg.png");
      .zhen {
        width: 1.944rem;
        height: 2.237rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("../assets/images/spin/wheelpointer.png");
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-top: 0.361rem;
        color: #ffffff;
        font-weight: bold;
        font-size: 0.555rem;
      }
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
        top: 0.588rem;
        margin: auto;
        color: #ffffff;
      
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
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .spin-box {
        position: absolute;
        top: 0;
        left: 0;
        // width: calc(100% - 1.25rem);
        // height: calc(100% - 1.25rem);
      }
    }
    .bottom-box {
      margin-top: -0.672rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
        margin-bottom: 0.416rem;
      }
      .date {
        margin-top: 0.277rem;
        font-size: 0.333rem;
        color: #9eb1f0;
        font-weight: 400;
      }
      .btn {
        width: 3.888rem;
        height: 1.111rem;
        border-radius: 0.416rem;
        background: linear-gradient(180deg, #8263e6 0%, #5939e4 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.361rem;
        font-weight: bold;
        color: #ffffff;
      }
    }

    .close {
      position: absolute;
      top: 0.277rem;
      right: 0.277rem;
      z-index:9999;
    }
    .history {
      position: absolute;
      top: 0.277rem;
      left: 0.277rem;
    }
  }
}
</style>
