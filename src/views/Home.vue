<template>
  <div class="main-header">
    <img src="@/assets/images/logo.svg" width="130" />
    <div class="btn-box" v-if="JSON.stringify(user_info) == '{}'">
      <div class="log-btn" @click="goPermission('/login')">SIGN IN</div>
      <div class="re-btn" @click="goPermission('/register')">REGISTER</div>
    </div>
    <div class="btn-box" v-else>
      <span>₵{{ (user_info.bindGold / 100).toFixed(2) }}</span>
      <div class="re-btn" @click="goPath('/deposit')">DEPOSIT</div>
    </div>
  </div>
  <div class="home">
    <div class="active-box">
      <div class="active-item" @click="showDailyCheck(1)">
        <img src="@/assets/images/act_coin.svg" width="47" />
        <span>Get Coins</span>
      </div>
      <div class="active-item" @click="goPath('/spin')">
        <img src="@/assets/images/act_spin.svg" width="47" />
        <span>Coins Spin</span>
      </div>
      <div class="active-item" @click="goPath('/invite')">
        <img src="@/assets/images/act_cash.svg" width="47" />
        <span>Get Cash</span>
      </div>
      <div class="active-item" @click="changeDown(1)">
        <img src="@/assets/images/act_down.svg" width="47" />
        <span>Download</span>
      </div>
    </div>

    <nut-swiper
      :auto-play="2500"
      pagination-visible
      pagination-color="#fff"
      pagination-unselected-color="#808080"
      style="margin-bottom: 15px; height: 113.33px"
      direction="vertical"
    >
      <nut-swiper-item
        style="height: 113.33px"
        v-for="(item, index) in promotion_list"
        :key="index"
      >
        <img :src="item.img" style="height: 100%; width: 100%" draggable="false" />
      </nut-swiper-item>
    </nut-swiper>

    <nut-noticebar
      background="#382B63"
      color="#fff"
      text="The first recharge will give you game experience money. Invite friends to place bets and get up to 500 bonuses."
    >
      <template #left-icon>
        <img src="../assets/images/laba.svg" style="width: 12px; height: 12px" />
      </template>
    </nut-noticebar>

    <nut-tabs v-model="type" auto-height title-scroll>
      <template #titles>
        <div
          v-for="item in type_list"
          :key="item.paneKey"
          class="custom-tab-item"
          @click="type = item.paneKey"
        >
          <div
            class="custom-title"
            :class="{
              active: type === item.paneKey,
            }"
          >
            {{ item.title }}
          </div>
        </div>
      </template>
      <nut-tab-pane
        v-for="item in type_list"
        :key="item.paneKey"
        :pane-key="item.paneKey"
      >
        <div class="game-container">
          <imgCard
            v-for="(items, indexs) in item.content"
            :key="indexs"
            :cardInfo="items"
          />
        </div>
      </nut-tab-pane>
    </nut-tabs>
    <pageFooter />

    <nut-overlay
      v-model:visible="daily_visible"
      :lock-scroll="true"
      :close-on-click-overlay="false"
      :duration="0.8"
    >
      <div class="daily-close">
        <Close color="#fff" width="16px" height="16px" @click="showDailyCheck(2)" />
      </div>
      <div class="daily-box">
        <img :src="img_url + 'other/daily_top.png'" style="width: 100%" />
        <div class="daily-container">
          <div class="daily-line-box">
            <div class="item">
              <div class="coin">+20</div>
              <div class="step">
                <div class="step-line" style="background: transparent"></div>
                <div class="step-container check-step">1</div>
                <div class="step-line"></div>
              </div>
              <div class="day">Day 1</div>
            </div>
            <div class="item">
              <div class="coin">+20</div>
              <div class="step">
                <div class="step-line"></div>
                <div class="step-container">2</div>
                <div class="step-line"></div>
              </div>
              <div class="day">Day 2</div>
            </div>
            <div class="item">
              <div class="coin">+40</div>
              <div class="step">
                <div class="step-line"></div>
                <div class="step-container">3</div>
                <div class="step-line"></div>
              </div>
              <div class="day">Day 3</div>
            </div>
            <div class="item">
              <div class="coin">+40</div>
              <div class="step">
                <div class="step-line"></div>
                <div class="step-container">4</div>
                <div class="step-line" style="background: transparent"></div>
              </div>
              <div class="day">Day 4</div>
            </div>
          </div>
          <div class="daily-line-box" style="margin-top: 10px">
            <div class="item">
              <div class="coin" style="color: #ffc23e">+60</div>
              <div class="step">
                <div class="step-line" style="background: transparent"></div>
                <div class="step-container">5</div>
                <div class="step-line"></div>
              </div>
              <div class="day">Day 5</div>
            </div>
            <div class="item">
              <div class="coin" style="color: #ffc23e">+60</div>
              <div class="step">
                <div class="step-line"></div>
                <div class="step-container">6</div>
                <div class="step-line"></div>
              </div>
              <div class="day">Day 6</div>
            </div>
            <div class="item">
              <div class="coin" style="color: #ffc23e">+100</div>
              <div class="step">
                <div class="step-line"></div>
                <div class="step-container">7</div>
                <div class="step-line" style="background: transparent"></div>
              </div>
              <div class="day">Day 7</div>
            </div>
          </div>
          <div class="check-btn">Check in</div>
          <div class="line-box">
            <div class="line"></div>
            <span>Instructions</span>
            <div class="line"></div>
          </div>
          <ul>
            <li>Check-in daily to claim up to 100 coins</li>
            <li>Check-in 7 days continuously to claim 340 coins</li>
            <li>Coins can only be used to win Cash Gift by playing Coins Spin</li>
          </ul>
        </div>
      </div>
    </nut-overlay>

    <div class="first-deposit-tip" @click="showFisrtDeposit(1)">
      <div class="label-box">
        <div class="label">First Deposit Gifts</div>
        <div class="label" style="font-weight: bold">Up To ₵ <span>550 Gifts</span></div>
      </div>
      <div class="first-btn">
        <span>GO</span>
        <RectRight color="#fff" width="12" height="12" />
      </div>
    </div>
    <img :src="img_url + 'invite/img_lihe.png'" class="gift-img" />

    <nut-overlay
      v-model:visible="fisrt_deposit_visilbe"
      :lock-scroll="true"
      :close-on-click-overlay="false"
      :duration="0.8"
    >
      <div
        style="display: flex; height: 100%; align-items: center; justify-content: center"
      >
        <div class="f-d-box">
          <div class="f-d-icon">
            <img :src="img_url + 'invite/img_lihe.png'" width="66" />
          </div>
          <div class="f-d-close">
            <Close color="#fff" width="16px" height="16px" @click="showFisrtDeposit(2)" />
          </div>
          <div class="f-d-title">
            <img :src="img_url + 'other/img_dian.png'" />
            <span>GAMECOCA</span>
            <img :src="img_url + 'other/img_dian.png'" />
          </div>
          <div class="line-back"></div>
          <div class="d-option-box">
            <template v-for="(item, index) in f_d_list" :key="index">
              <div :class="item.active ? 'item-active' : 'item'" @click="changeFD(index)">
                <div class="top">
                  <div class="l-1">Deposit</div>
                  <div class="l-2">₵{{ item.amount }}</div>
                </div>
                <div class="bottom">
                  <div class="b-content">
                    <div class="l-1">Get GHS</div>
                    <div class="l-2">{{ item.total }}</div>
                    <div class="l-3">Cash Gifts</div>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="f-d-bottom">
            <div class="btn">Deposit {{ f_d_val }} Now</div>
            <div class="tip">
              After you do this,the funds and cash gifts will appear in your account
              immediately
            </div>
            <div class="des-t">Terms and conditions</div>
            <div class="des">
              1.Make a first deposit of ₵ 48/95/477,and you get Cash Gifts of ₵
              80/150/550.
            </div>
            <div class="des">2.Each account can get these Cash Gifts only once.</div>
            <div class="des">
              3.You will receive the Gift once you make the first deposit.
            </div>
            <div class="des">4.Cash Gift can only be used in the game.</div>
            <div class="des">
              5.GameCoca reserves the final rights of these Cash Gifts.
            </div>
          </div>
        </div>
      </div>
    </nut-overlay>
  </div>

  <nut-popup v-model:visible="down_visible" position="bottom" round>
    <div class="down-box" v-if="divice == 'android'">
      <div class="close">
        <Close color="#fff" width="16px" height="16px" @click="changeDown(2)" />
      </div>
      <div class="title">1. Click the "More" icon, then click Install application</div>
      <img :src="img_url + 'down/down/and_1.png'" />
      <div class="title">2. Click Add and select "Add"</div>
      <img :src="img_url + 'down/down/and_2.png'" />
    </div>
    <div class="down-box" v-if="divice == 'ios'">
      <div class="close">
        <Close color="#fff" width="16px" height="16px" @click="changeDown(2)" />
      </div>
      <div class="title">1.Click the share button at the bottom</div>
      <img :src="img_url + 'down/down/ios_1.png'" />
      <div class="title">2.Tap the More icon, then tap Add to Home Screen</div>
      <img :src="img_url + 'down/down/ios_2.png'" />
      <div class="title">3. Click Add and select "Add"</div>
      <img :src="img_url + 'down/down/ios_3.png'" />
    </div>
  </nut-popup>
</template>

<script>
import imgCard from "@/components/imgCard.vue";
import pageFooter from "@/components/pageFooter.vue";
export default {
  components: {
    imgCard,
    pageFooter,
  },
};
</script>

<script setup>
import { computed, ref, onMounted } from "vue";
import { Close, RectRight } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import apiconfig from "@/utils/apiConfig";
const img_url = apiconfig.fileURL;
let { state } = useStore();
const promotion_list = computed(() => {
  return state.promotion_list;
});
const user_info = computed(() => {
  return state.user_info;
});
const router = useRouter();
const daily_visible = ref(false);
const fisrt_deposit_visilbe = ref(false);
const showFisrtDeposit = (type) => {
  if (type == 1) {
    fisrt_deposit_visilbe.value = true;
  } else {
    fisrt_deposit_visilbe.value = false;
  }
};
const f_d_val = ref(95);
const f_d_list = ref([
  {
    active: false,
    amount: 48,
    total: 80,
  },
  {
    active: true,
    amount: 95,
    total: 150,
  },
  {
    active: false,
    amount: 477,
    total: 550,
  },
]);
const changeFD = (index) => {
  for (let i in f_d_list.value) {
    if (i == index) {
      f_d_list.value[i].active = true;
      f_d_val.value = f_d_list.value[i].amount;
    } else {
      f_d_list.value[i].active = false;
    }
  }
};
const showDailyCheck = (type) => {
  if (type == 1) {
    daily_visible.value = true;
  } else {
    daily_visible.value = false;
  }
};
const goPath = (path) => {
  router.push({
    path,
  });
};
const goPermission = (type) => {
  router.push({
    path: type,
  });
};
const type = ref("c1");
const type_list = computed(() => {
  return state.game_list;
});
const down_visible = ref(false);
const changeDown = (type) => {
  type == 1 ? (down_visible.value = true) : (down_visible.value = false);
};
const divice = ref(false);
onMounted(() => {
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(userAgent) && !/Windows Phone/.test(userAgent);
  if (isIOS) {
    divice.value = "ios";
  } else if (isAndroid) {
    divice.value = "android";
  }
});
</script>

<style lang="scss" scoped>
.down-box {
  width: 100%;
  box-sizing: border-box;
  padding: 46px 35px 20px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgba(25, 20, 43, 0.9);
  .close {
    position: absolute;
    right: 20px;
    top: 15px;
  }
  .title {
    width: 100%;
    text-align: left;
    font-size: 12px;
    color: #ffffff;
    font-weight: 600;
  }
  img {
    margin: 15px 0;
    width: 100%;
  }
}
.f-d-box {
  position: relative;
  width: calc(100% - 20px);
  // background: linear-gradient(-90deg, #741cb1, #6b4ee1);
  background: #741cb1;
  border-radius: 16.7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .d-option-box {
    margin-top: -12px;
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .item {
      width: 97.9px;
      height: 159px;
      background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/other/hd_fl_di_2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bottom {
        width: 100%;
        height: calc(65% - 2px);
        box-sizing: border-box;
        padding: 6px;
        .b-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(-20deg, #fff6cb, #fffcf0);
          border-radius: 6.7px;
          font-weight: bold;
          color: #dd9478;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-1 {
            font-size: 14px;
          }
          .l-2 {
            font-size: 31.3px;
          }
          .l-3 {
            font-size: 12.7px;
          }
        }
      }
      .top {
        width: 100%;
        height: calc(35% + 2px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #d5884f;
        .l-1 {
          font-size: 15px;
          margin-bottom: 5px;
        }
        .l-2 {
          font-weight: bold;
          font-size: 16.7px;
        }
      }
    }

    .item-active {
      width: 107.7px;
      height: 175px;
      background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/other/hd_fl_di_1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bottom {
        width: 100%;
        height: calc(65% - 2px);
        box-sizing: border-box;
        padding: 6px;
        .b-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(-20deg, #ffdd78, #fff1d2);
          border-radius: 6.7px;
          font-weight: bold;
          color: #de531d;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-1 {
            font-size: 15.3px;
          }
          .l-2 {
            font-size: 34.3px;
          }
          .l-3 {
            font-size: 14px;
          }
        }
      }
      .top {
        width: 100%;
        height: calc(35% + 2px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #c16744;
        .l-1 {
          font-size: 16.7px;
          margin-bottom: 5px;
        }
        .l-2 {
          font-weight: bold;
          font-size: 18.3px;
        }
      }
    }
  }
  .f-d-icon {
    position: absolute;
    top: -33px;
    left: 0;
  }
  .f-d-bottom {
    background: #ffffff;
    box-shadow: 0px 0.3px 1px 0px #ffffff;
    border-radius: 16.7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    margin-top: 10px;
    .des {
      width: 100%;
      text-align: left;
      font-size: 11px;
      font-weight: 600;
      color: #583188;
      line-height: 18px;
    }
    .des-t {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 15.3px;
      color: #9932fc;
      font-weight: 600;
    }
    .tip {
      margin: 15px 0;
      width: calc(100% - 50px);
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      color: #583188;
    }
    .btn {
      width: calc(100% - 50px);
      height: 40px;
      background: linear-gradient(-90deg, #9932fc, #5b2efa);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 18.6px;
    }
  }
  .line-back {
    width: calc(100% - 20px);
    height: 9.6px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    border: 3.3px solid rgba(25, 12, 12, 0.3);
  }
  .f-d-title {
    width: 100%;
    box-sizing: border-box;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-weight: bold;
      font-size: 20.6px;
      color: #ffffff;
      padding: 0 20px;
    }
    img {
      width: 9.3px;
    }
  }
  .f-d-close {
    position: absolute;
    top: -25px;
    right: 10px;
  }
}
.gift-img {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom) + 85px);
  left: calc((100% - 55px) / 2);
  width: 55px;
  z-index: 7;
  animation-name: scaleDraw;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  @keyframes scaleDraw {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.05);
    }
  }
}
.first-deposit-tip {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom) + 50px);
  left: calc((100% - 193px) / 2);
  width: 193px;
  height: 40px;
  background: linear-gradient(270deg, #f9c170, #f9e170);
  box-shadow: 0px 0.3px 1px 0px #fab876;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px 0 15px;
  z-index: 8;
  .first-btn {
    width: 48.3px;
    height: 26.6px;
    background: linear-gradient(270deg, #ff7352, #ff692e);
    border-radius: 13.3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
    box-sizing: border-box;
    padding: 0 5px;
  }
  .label-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .label {
      color: #a84e06;
      font-size: 12.6px;
      line-height: 15px;
      span {
        color: #ff6a31;
      }
    }
  }
}
.main-header {
  width: 100%;
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  z-index: 9;
  background-color: #161327;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  .btn-box {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .log-btn {
      font-size: 13px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background-color: rgba(36, 31, 52, 0.3);
      border: 1px solid #382b63;
      font-weight: bold;
      box-sizing: border-box;
      padding: 8px 15px;
    }
    .re-btn {
      font-weight: bold;
      background: linear-gradient(-90deg, #bf35fd, #5b2efa);
      border-radius: 16px;
      margin-left: 10px;
      font-size: 13px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 8px 15px;
    }
    span {
      color: #ffffff;
      font-size: 15px;
      font-weight: bold;
    }
  }
}
.home {
  width: 100%;
  box-sizing: border-box;
  padding: 55px 10px 0 10px;

  .daily-close {
    position: fixed;
    right: 20px;
    top: calc(20% - 30px);
  }
  .daily-box {
    position: fixed;
    left: 20px;
    top: 20%;
    width: calc(100% - 40px);

    .daily-container {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-left: 5px solid #ac8fff;
      border-bottom: 5px solid #ac8fff;
      border-right: 5px solid #ac8fff;
      background: linear-gradient(-24deg, rgba(204, 186, 255), #f7fdfd);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 15px;
      .daily-line-box {
        width: calc(100% - 20px);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .item {
          width: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .coin {
            font-size: 12px;
            font-weight: 600;
            color: #c1c1c1;
          }
          .day {
            color: #ccc3e2;
            font-weight: 600;
            font-size: 13px;
          }
          .step {
            margin: 3px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .step-line {
              flex: 1;
              background: #e4d8fe;
              height: 5px;
            }
            .step-container {
              width: 28px;
              height: 28px;
              border-radius: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #e4d8fe;
              font-size: 14px;
              color: #af62ff;
            }
            .check-step {
              background: #af62ff;
              color: #fff;
            }
          }
        }
      }
      .check-btn {
        width: calc(100% - 20px);
        height: 42px;
        background: linear-gradient(-90deg, #9932fc, #5b2efa);
        border-radius: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 17px;
        font-weight: bold;
        margin: 15px 0;
      }
      .line-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .line {
          flex: 1;
          height: 0.5px;
          background: #666666;
        }
        span {
          font-size: 12px;
          font-weight: 600;
          color: #666666;
          padding: 0 5px;
        }
      }
    }
  }
  .game-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .custom-tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 8px 10px 0;
  }
  .custom-title {
    background: #382b63;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    box-sizing: border-box;
    padding: 5px 15px;
    min-width: 75px;
  }
  .custom-title.active {
    background: linear-gradient(-90deg, #9932fc, #5b2efa);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
  }
  .active-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 12px 0;
    .active-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        color: #fefefe;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
