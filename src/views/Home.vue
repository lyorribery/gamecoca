<template>
  <div class="main-header" id="mainHeader">
    <img src="@/assets/images/logo.png" style="width: 3.9rem" />
    <div class="btn-box" v-if="JSON.stringify(user_info) == '{}'">
      <div class="log-btn" @click="goPermission('/login')">LOGIN</div>
      <div class="re-btn" @click="goPermission('/register')">REGISTER</div>
    </div>
    <div class="btn-box" v-else>
      <span>₵{{ (user_info.bindGold / 100).toFixed(2) }}</span>
      <!-- <div :class="refresh_loading ? 'rotate-animation' : ''" @click="refreshDetail()">
        <svg
          t="1716517710452"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2912"
          width=".41rem"
          height=".41rem"
        >
          <path
            d="M455.850667 796.785778h-46.762667a284.785778 284.785778 0 0 1-238.193778-280.689778c0-47.274667 12.117333-91.534222 32.654222-130.787556l34.872889 48.355556a51.768889 51.768889 0 0 0 91.818667-16.440889l66.104889-237.738667a51.768889 51.768889 0 0 0-49.891556-65.649777l-237.454222 0.341333A51.768889 51.768889 0 0 0 67.128889 196.266667l64.170667 88.974222a396.117333 396.117333 0 0 0-74.069334 230.912 398.222222 398.222222 0 0 0 336.668445 393.500444c5.176889 0.796444 10.24 0.568889 15.189333-0.056889v0.682667h46.762667A56.149333 56.149333 0 0 0 512 854.129778v-1.137778a56.149333 56.149333 0 0 0-56.149333-56.149333zM956.871111 827.790222l-64.227555-88.974222a395.719111 395.719111 0 0 0 74.069333-230.912 398.279111 398.279111 0 0 0-336.668445-393.557333 54.328889 54.328889 0 0 0-15.189333 0.056889v-0.739556h-46.762667A56.092444 56.092444 0 0 0 512 169.813333v1.137778c0 31.061333 25.144889 56.206222 56.092444 56.206222h46.762667a284.785778 284.785778 0 0 1 238.193778 280.689778c0 47.274667-12.117333 91.534222-32.597333 130.787556l-34.929778-48.355556a51.712 51.712 0 0 0-91.761778 16.440889l-66.161778 237.738667a51.768889 51.768889 0 0 0 49.948445 65.649777l237.454222-0.341333a51.768889 51.768889 0 0 0 41.870222-82.090667z"
            fill="#ffffff"
            p-id="2913"
          ></path>
        </svg>
      </div> -->
      <div class="re-btn" @click="goPath('/deposit')">DEPOSIT</div>
    </div>
  </div>
  <div class="home">
    <div class="home-top-back">
      <div class="back"></div>
    </div>
    <div class="active-box">
      <div class="active-item" @click="showDailyCheck()">
        <span>Get Coins</span>
      </div>
      <div class="active-item" @click="goPath('/spin')">
        <span>Coins Spin</span>
      </div>
      <div class="active-item" @click="goPath('/invite')">
        <span>Get Cash</span>
      </div>
      <div class="active-item" @click="changeDown(1)">
        <span>Download</span>
      </div>
    </div>

    <nut-swiper
      :auto-play="2500"
      pagination-visible
      pagination-color="#fff"
      pagination-unselected-color="#808080"
      style="margin-left: 0.555rem"
    >
      <nut-swiper-item
        v-for="(item, index) in promotion_list"
        :key="index"
        style="height: 3.148rem"
      >
        <img
          :src="item.img"
          alt=""
          style="height: 100%; width: calc(100% - 1.111rem)"
          draggable="false"
        />
      </nut-swiper-item>
    </nut-swiper>

    <div class="notice-bar-box" :style="{ marginBottom: page_num >= 205 ? '70px' : '0' }">
      <img src="../assets/images/trumpet.png" style="width: 0.333rem; height: 0.333rem" />
      <div class="notice-bar">
        <div class="notice-bar-content">
          <template v-for="(item, index) in msg_list" :key="index">
            Congratulations to <span style="color: #9cc86a">{{ item.tel }}</span> for
            winning <span style="color: #d3bf50">₵{{ item.num }}</span> cash in
            {{ item.game }}&nbsp;&nbsp;&nbsp;
          </template>
        </div>
      </div>
    </div>

    <div
      class="custom-content"
      :class="page_num >= 205 ? 'sticky-type' : ''"
      id="customContent"
    >
      <div class="custom-tab" id="gameName">
        <div
          @click="changeTab(index)"
          v-for="(item, index) in game_list"
          :key="index"
          class="custom-title"
        >
          <div
            class="img-box"
            :style="{ background: active_type === index ? '#a890ff' : '' }"
          >
            <img
              :src="
                active_type === index
                  ? require('../assets/images/' + item.name + '.png')
                  : require('../assets/images/' + item.name + '_wxz.png')
              "
            />
          </div>
          <span :style="{ color: active_type === index ? '#fff' : '#EBE3FF' }">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>

    <div class="game-content" v-for="(item, index) in game_list" :key="index">
      <div class="title" :id="'game' + index">
        <div class="name">
          <span class="game-name">{{ item.name }}</span>
          <span class="game-count" v-if="item.total > 0">{{
            "(" + item.total + ")"
          }}</span>
        </div>
        <div
          class="more"
          v-if="item.list.length < item.total"
          @click="getMore(index, item.param, item.total)"
        >
          <span>View All</span>
          <img style="margin-left: 8px" width="5" src="../assets/images/jiantou.png" />
        </div>
      </div>
      <div class="game-container">
        <imgCard v-for="(items, indexs) in item.list" :key="indexs" :cardInfo="items" />
      </div>
    </div>

    <pageFooter />

    <regModal />

    <!-- <div
      class="fd-box"
      @click="showFisrtDeposit()"
      v-if="JSON.stringify(user_info) == '{}' || !user_info.rechargeTimes"
    >
      <img class="fd-img" src="../assets/images/fd2.png" v-if="active_fd" height="22.6" />
      <img
        src="../assets/images/fd3.png"
        style="transition: transform 0.5s ease 0s"
        :style="{ transform: active_fd ? 'translateY(100%)' : 'translateY(.333rem)' }"
        height="33.6"
      />
      <div class="fd-text">
        <div
          class="rowup"
          style="transition: transform 0.5s ease 0s"
          :style="{ transform: active_fd ? 'translateY(0px)' : 'translateY(-100%)' }"
        >
          <div class="fd-label">
            <div>First Deposit</div>
            <div>Gifts</div>
          </div>
          <div class="fd-label" style="font-size: 11.6px">GHS 550</div>
        </div>
      </div>
    </div> -->
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
import regModal from "@/components/regModal.vue";
export default {
  components: {
    imgCard,
    pageFooter,
    regModal,
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
// import { getUserInfo } from "@/apis/apis";

const img_url = apiconfig.fileURL;
let { state, commit, dispatch } = useStore();

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
  const res = await getGameList.post("", { ...param, page: 1, pageSize: total });
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

const changeTab = (index) => {
  if (index > 2) {
    document.getElementById("gameName").scrollLeft = 80 * index;
  } else {
    document.getElementById("gameName").scrollLeft = 0;
  }
  active_type.value = index;
  let top_num = 0;
  if (index != 0) {
    let selector = "game" + index;
    if (page_num.value >= 205) {
      top_num = document.getElementById(selector).offsetTop - 125;
    } else {
      top_num = document.getElementById(selector).offsetTop - 125;
    }
  }
  window.scrollTo({
    top: top_num,
    behavior: "smooth",
  });
};

const down_visible = ref(false);
const changeDown = (type) => {
  type == 1 ? (down_visible.value = true) : (down_visible.value = false);
};
const divice = ref(false);
const msg_list = ref([]);
const randomMsg = () => {
  const arr = ["024", "054", "055", "059", "020", "050", "027", "057", "026", "056"];
  const arr_game = [
    "Jackpot Spin",
    "Lucky Wheel",
    "Crash",
    "Galaxy Roulette",
    "Ancient Egypt",
    "Eye Storm",
    "Fortune Dragon",
    "Fortune Tiger",
    "Ganesha Gold",
    "Santa’s Gift Rush",
    "Cheshire Dice",
    "Jogo Do Bicho",
  ];
  let msg = [];
  for (let i in arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomIndexGame = Math.floor(Math.random() * arr_game.length);
    msg.push({
      tel: arr[randomIndex] + "***" + Math.floor(1000 + Math.random() * 9000),
      num: 100 + Math.round(Math.random() * 2900) + Math.floor(Math.random() * 100) / 100,
      game: arr_game[randomIndexGame],
    });
  }
  msg_list.value = msg;
};
onMounted(() => {
  randomMsg();
  if (route.query.i_code) localStorage.setItem("i_code", route.query.i_code);
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(userAgent) && !/Windows Phone/.test(userAgent);
  if (isIOS) {
    divice.value = "ios";
  } else if (isAndroid) {
    divice.value = "android";
  }

  // setInterval(() => {
  //   active_fd.value = !active_fd.value;
  // }, 2500);
});

const page_num = ref(0);

window.addEventListener("scroll", () => {
  page_num.value = document.documentElement.scrollTop || document.body.scrollTop || 0;
});

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    commit("set_loading_modal", false);
    if (localStorage.getItem("token")) dispatch("GET_USER_INFO");
  }
});
// const active_fd = ref(true);

// const refresh_loading = ref(false);

// const refreshDetail = async () => {
//   if (refresh_loading.value) return;
//   refresh_loading.value = true;
//   const res = await getUserInfo.get("", {});
//   if (res.code == 200) {
//     commit("set_user_info", res.data);
//   } else if (res.code == 2002) {
//     commit("set_user_info", {});
//     localStorage.removeItem("token");
//     commit("set_tip_info", "You have not logged in yet,please login.");
//     commit("set_tip_type", 1);
//     commit("set_tip_modal", true);
//   }
//   setTimeout(() => {
//     refresh_loading.value = false;
//   }, 1500);
// };
</script>

<style lang="scss" scoped>
// .rotate-animation {
//   animation: rotate 1.5s infinite linear;
// }

// @keyframes rotate {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// .fd-box {
//   position: fixed;
//   bottom: calc(50% - 200px);
//   right: 5px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   .fd-img {
//     z-index: 5;
//     position: fixed;
//     bottom: calc(50% - 166.3px);
//     right: 8.3px;
//   }
//   .fd-text {
//     z-index: 3;
//     width: 59.3px;
//     height: 33.6px;
//     overflow: hidden;
//     background-image: url("../assets/images/fd1.png");
//     background-size: 100% 100%;
//     background-repeat: no-repeat;
//     position: relative;

//     .rowup {
//       width: 100%;
//       height: 100%;
//       .fd-label {
//         width: 100%;
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         font-weight: bold;
//         font-size: 8px;
//         color: #ffffff;
//         box-sizing: border-box;
//         padding: 0 3px;
//       }
//     }
//   }
// }
.sticky-type {
  position: fixed;
  top: calc(env(safe-area-inset-top) + 55px);
  left: 0;
  z-index: 2;
  background: #18171e !important;
}
.down-box {
  width: 100%;
  box-sizing: border-box;
  padding: 1.277rem 0.972rem 0.555rem 0.972rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #18171e;
  .close {
    position: absolute;
    right: 0.555rem;
    top: 0.416rem;
  }
  .title {
    width: 100%;
    text-align: left;
    font-size: 0.361rem;
    color: #ffffff;
    font-weight: 600;
  }
  img {
    margin: 0.416rem 0;
    width: 100%;
  }
}

.main-header {
  width: 100%;
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  z-index: 9;
  background: transparent;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.277rem;
  background: #4c2388;
  .btn-box {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .log-btn {
      font-size: 0.324rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      width: 2.185rem;
      height: 0.666rem;
      background: rgba(36, 31, 52, 0.3);
      border: 1px solid #5b2efa;
      border-radius: 0.277rem;
    }
    .re-btn {
      font-weight: 400;
      margin-left: 0.277rem;
      font-size: 0.324rem;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.185rem;
      height: 0.666rem;
      background: linear-gradient(-90deg, #9343c4, #614ae6);
      border-radius: 0.277rem;
    }
    span {
      color: #ffffff;
      font-size: 0.416rem;
      font-weight: bold;
    }
  }
}
.home {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 0 0.277rem 0;
  background: #18171e;
  position: relative;
  overflow-x: hidden;
  .notice-bar-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0.277rem 0.3rem 0.138rem 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      margin-right: 0.222rem;
    }
    .notice-bar {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      .notice-bar-content {
        display: inline-block;
        animation: scrollLeft 40s linear infinite;
        color: #cccccc;
        font-size: 0.198rem;
      }

      @keyframes scrollLeft {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-100%);
        }
      }
    }
  }
  .home-top-back {
    z-index: 1;
    position: absolute;
    width: 100%;
    left: 0;
    top: 55px;
    .back {
      position: relative;
      width: 100%;
      height: 3rem;
    }
    .back:after {
      width: 130%;
      height: 3rem;
      position: absolute;
      left: -13%;
      top: 0;
      z-index: -1;
      content: "";
      border-radius: 0 0 50% 50%;
      background: linear-gradient(180deg, #4c2388 8%, #8e81fa);
    }
  }
  .game-content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.277rem;
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.277rem 0.138rem 0.416rem 0.138rem;

      .more {
        display: flex;
        align-items: center;
        span {
          font-weight: 600;
          font-size: 0.333rem;
          color: #b3b3b3;
          text-decoration-line: underline;
        }
      }

      .name {
        display: flex;
        align-items: center;
        .game-name {
          font-size: 0.555rem;
          font-weight: bold;
          color: #fff;
        }
        .game-count {
          font-size: 0.296rem;
          font-weight: 600;
          color: #b3b3b3;
          padding-left: 0.138rem;
          padding-top: 0.083rem;
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
  .custom-content {
    box-sizing: border-box;
    padding: 0 0.416rem;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    background: transparent;
  }
  .custom-tab {
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .custom-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 0.768rem;
    &:last-child {
      margin-right: 0;
    }
    .img-box {
      width: 1.203rem;
      height: 0.935rem;
      background: #3a3745;
      border-radius: 0.277rem;
      margin-bottom: 0.138rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.66rem;
        height: 0.66rem;
      }
    }
    span {
      font-size: 0.37rem;
      color: #ebe3ff;
    }
  }

  .active-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.222rem 0.277rem 0.416rem 0.277rem;
    .active-item {
      z-index: 2;
      width: 25%;
      display: flex;
      justify-content: center;
      span {
        font-weight: bold;
        font-size: 0.37rem;
        color: #cbb6fe;
      }
    }
  }
}
</style>
