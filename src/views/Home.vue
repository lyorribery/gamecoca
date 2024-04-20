<template>
  <div class="main-header">
    <img src="@/assets/images/logo.svg" width="130" />
    <div class="btn-box" v-if="JSON.stringify(user_info) == '{}'">
      <div class="log-btn" @click="goPermission('/login')">LOGIN</div>
      <div class="re-btn" @click="goPermission('/register')">REGISTER</div>
    </div>
    <div class="btn-box" v-else>
      <span>₵{{ (user_info.bindGold / 100).toFixed(2) }}</span>
      <div class="re-btn" @click="goPath('/deposit')">DEPOSIT</div>
    </div>
  </div>
  <div class="home">
    <nut-swiper
      :auto-play="2500"
      pagination-visible
      pagination-color="#fff"
      pagination-unselected-color="#808080"
      style="height: 113.33px"
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

    <div class="active-box">
      <div class="active-item" @click="showDailyCheck()">
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

    <nut-noticebar background="#382B63" color="#fff" :text="msg_list">
      <template #left-icon>
        <img src="../assets/images/laba.svg" style="width: 12px; height: 12px" />
      </template>
    </nut-noticebar>

    <div class="custom-tab" id="gameName">
      <div
        @click="changeTab(index)"
        v-for="(item, index) in game_list"
        :key="index"
        class="custom-title"
        :class="active_type === index ? 'active' : ''"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="game-content" v-for="(item, index) in game_list" :key="index">
      <div class="title" :id="'game' + index">
        <div class="name">
          <span>{{ item.name }}</span
          >GAME
        </div>
        <div
          class="more"
          v-if="item.list.length < item.total"
          @click="getMore(index, item.param, item.total)"
        >
          <span>View All</span>
          <div class="more-count">{{ item.total }}</div>
        </div>
      </div>
      <div class="game-container">
        <imgCard v-for="(items, indexs) in item.list" :key="indexs" :cardInfo="items" />
      </div>
    </div>

    <pageFooter />

    <div
      class="first-deposit-tip"
      @click="showFisrtDeposit()"
      v-if="JSON.stringify(user_info) == '{}' || !user_info.rechargeTimes"
    >
      <div class="label-box">
        <div class="label">First Deposit Gifts</div>
        <div class="label" style="font-weight: bold">Up To ₵ <span>550 Gifts</span></div>
      </div>
      <div class="first-btn">
        <span>GO</span>
        <RectRight color="#fff" width="12" height="12" />
      </div>
    </div>
    <img
      v-if="JSON.stringify(user_info) == '{}' || !user_info.rechargeTimes"
      :src="img_url + 'invite/img_lihe.png'"
      class="gift-img"
    />
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

  <nut-backtop :distance="200" :bottom="90" @click="toTop">
    <svg
      t="1713510475738"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4415"
      id="mx_n_1713510475739"
      width="22"
      height="22"
    >
      <path
        d="M825.568 555.328l-287.392-289.28c-6.368-6.4-14.688-9.472-22.976-9.408-1.12-0.096-2.08-0.64-3.2-0.64-4.672 0-9.024 1.088-13.024 2.88-4.032 1.536-7.872 3.872-11.136 7.136l-259.328 258.88c-12.512 12.48-12.544 32.736-0.032 45.248 6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.624-9.344L480 364.288V928c0 17.696 14.336 32 32 32s32-14.304 32-32V362.72l236.192 237.728c6.24 6.272 14.496 9.44 22.688 9.44s16.32-3.104 22.56-9.312c12.576-12.448 12.608-32.736 0.128-45.248zM864 192H160c-17.664 0-32-14.336-32-32s14.336-32 32-32h704c17.696 0 32 14.336 32 32s-14.304 32-32 32z"
        fill="#5297ff"
        p-id="4416"
      ></path>
    </svg>
  </nut-backtop>
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
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { getGameList } from "@/apis/apis";
import apiconfig from "@/utils/apiConfig";
const img_url = apiconfig.fileURL;
let { state, commit } = useStore();
const promotion_list = computed(() => {
  return state.promotion_list;
});
const user_info = computed(() => {
  return state.user_info;
});
const route = useRoute();
const router = useRouter();
const showFisrtDeposit = () => {
  commit("set_fisrt_deposit_visilbe", true);
};
const showDailyCheck = () => {
  commit("set_daily_visible", true);
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
const game_list = computed(() => {
  return state.game_list;
});
const game_loading = ref(false);
const getMore = async (index, param, total) => {
  if (game_loading.value) return;
  game_loading.value = true;
  const res = await getGameList.get("", { ...param, page: 1, pageSize: total });
  if (res.code == 200) {
    const arr = [];
    res.data.list.map((items, indexs) => {
      if (indexs > 5) {
        arr.push({
          ...items,
          count: Math.floor(Math.random() * (150 - 80 + 1)) + 80,
        });
      }
    });
    const cur_game_list = state.game_list;
    cur_game_list[index].list = [...cur_game_list[index].list, ...arr];
    commit("set_game_list", cur_game_list);
  }
  game_loading.value = false;
};
const active_type = ref(0);
const toTop = () => {
  document.getElementById("gameName").scrollLeft = 0;
  active_type.value = 0;
};
const changeTab = (index) => {
  document.getElementById("gameName").scrollLeft = 30 * (index + 1);
  active_type.value = index;
  let selector = "game" + index;
  document.getElementById(selector).scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const down_visible = ref(false);
const changeDown = (type) => {
  type == 1 ? (down_visible.value = true) : (down_visible.value = false);
};
const divice = ref(false);
const msg_list = computed(() => {
  let text = "";
  state.msg_list.map((item) => {
    text += `${item.content}.`;
  });
  return text;
});
onMounted(() => {
  if (route.query.i_code) localStorage.setItem("i_code", route.query.i_code);
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
  .game-content {
    width: 100%;
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 0 10px 0;

      .more {
        display: flex;
        align-items: center;
        font-size: 10px;
        span {
          color: #cccccc;
        }
        .more-count {
          margin-left: 5px;
          background: #cccccc;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: #161326;
          box-sizing: border-box;
          padding: 2px 8px;
        }
      }

      .name {
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        span {
          color: #5297ff;
          padding-right: 5px;
        }
      }
    }
    .game-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  .custom-tab {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    box-sizing: border-box;
    padding: 15px 0 10px 0;
  }
  .custom-tab::-webkit-scrollbar {
    width: 0;
  }
  .custom-tab::-webkit-scrollbar {
    height: 0;
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
    margin-right: 5px;
  }

  .active {
    background: linear-gradient(-90deg, #9343c4, #614ae6);
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
