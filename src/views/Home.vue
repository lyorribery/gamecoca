<template>
  <div class="main-header">
    <img src="@/assets/images/logo.png" width="105" />
    <div class="btn-box">
      <div class="log-btn" @click="goPermission('/login')">SIGN IN</div>
      <div class="re-btn" @click="goPermission('/register')">REGISTER</div>
    </div>
  </div>
  <div class="home">
    <nut-swiper :auto-play="3000">
      <nut-swiper-item style="height: 76.7px">
        <img
          src="@/assets/images/img_banner.png"
          style="height: 100%; width: 100%"
          draggable="false"
        />
      </nut-swiper-item>
      <nut-swiper-item style="height: 76.7px">
        <img
          src="@/assets/images/img_banner.png"
          style="height: 100%; width: 100%"
          draggable="false"
        />
      </nut-swiper-item>
    </nut-swiper>

    <div class="active-box">
      <div class="active-item" @click="showDailyCheck(1)">
        <img src="@/assets/images/icon_coins.png" width="47" />
        <span>Get Coins</span>
      </div>
      <div class="active-item" @click="goPath('/spin')">
        <img src="@/assets/images/icon_spin.png" width="47" />
        <span>Coins Spin</span>
      </div>
      <div class="active-item" @click="goPath('/invite')">
        <img src="@/assets/images/icon_cash.png" width="47" />
        <span>Get Cash</span>
      </div>
      <div class="active-item">
        <img src="@/assets/images/icon_download.png" width="47" />
        <span>Download</span>
      </div>
    </div>

    <nut-noticebar
      background="#382B63"
      color="#fff"
      text="Conggratuiations 012*****2311 for winning 999999 coins!"
    >
      <template #left-icon>
        <img src="../assets/images/trumpet.png" style="width: 12px; height: 12px" />
      </template>
    </nut-noticebar>

    <nut-tabs v-model="type" auto-height title-scroll title-gutter="0">
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
        <img src="@/assets/images/daily_top.png" style="width: 100%" />
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
  </div>
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
import { ref } from "vue";
import { Close } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const daily_visible = ref(false);
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
const type_list = ref([
  {
    title: "Popular",
    paneKey: "c1",
    content: [
      {
        img: "@/assets/images/img_game_entrance.png",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
    ],
  },
  {
    title: "For You",
    paneKey: "c2",
    content: [
      {
        img: "@/assets/images/img_game_entrance.png",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
    ],
  },
  {
    title: "Spin",
    paneKey: "c3",
    content: [
      {
        img: "@/assets/images/img_game_entrance.png",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
    ],
  },
  {
    title: "Slots",
    paneKey: "c4",
    content: [
      {
        img: "@/assets/images/img_game_entrance.png",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
      {
        img: "",
        name: "Medusa2",
        count: 888,
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
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
      width: 78px;
      height: 24px;
      font-size: 12px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      background-color: rgba(36, 31, 52, 0.3);
      border: 1px solid #382b63;
      font-weight: bold;
    }
    .re-btn {
      font-weight: bold;
      width: 78px;
      height: 24px;
      background: linear-gradient(-90deg, #bf35fd, #5b2efa);
      border-radius: 12px;
      border: 1px solid transparent;
      margin-left: 10px;
      font-size: 12px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
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
            color: #c1c1c1;
          }
          .day {
            color: #9a87c8;
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
    justify-content: space-between;
  }
  .custom-tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 8px 8px 0;
  }
  .custom-title {
    background: #382b63;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 11px;
    box-sizing: border-box;
    padding: 5px 15px;
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
        font-size: 11px;
        font-weight: bold;
      }
    }
  }
}
</style>
