<template>
  <div>
    <div class="home">
      <div class="home-top-back">
        <div class="back"></div>
      </div>
      <div class="active-box">
        <div class="active-item" @click="goPath('vip')">
          <span>Clube VIP</span>
        </div>
        <div class="active-item" @click="goPath('/spin')">
          <span>Sorte</span>
        </div>
        <div class="active-item" @click="goPath('/invite')">
          <span>Bônus</span>
        </div>
        <div class="active-item" @click="changeDown(1)">
          <span>Download</span>
        </div>
      </div>

      <nut-swiper
        :auto-play="2500"
        :is-prevent-default="false"
        :is-stop-propagation="false"
        pagination-visible
        pagination-color="#fff"
        pagination-unselected-color="#808080"
        style="margin-left: 0.555rem; margin-bottom: 0.277rem"
      >
        <nut-swiper-item
          v-for="(item, index) in promotion_list"
          :key="index"
          style="height: 5.161rem"
        >
          <div @click="goActive(item)">
            <img
              :src="item.fullNoticeImg"
              style="height: 100%; width: calc(100% - 1.111rem)"
              alt=""
              draggable="false"
            />
          </div>
        </nut-swiper-item>
      </nut-swiper>

      <div
        class="custom-content"
        :class="page_num >= 255 ? 'sticky-type' : ''"
        id="customContent"
      >
        <div class="custom-tab" id="gameName">
          <div
            @click="changeTab(index)"
            v-for="(item, index) in category_list"
            :key="index"
            class="custom-title"
          >
            <div
              class="img-box"
              :style="{ background: active_type === index ? '#a890ff' : '' }"
            >
              <img :src="item.fullCategoryImg" />
            </div>
            <span :style="{ color: active_type === index ? '#fff' : '#EBE3FF' }">{{
              item.categoryName
            }}</span>
          </div>
        </div>
      </div>

      <div class="game-content" v-for="(item, index) in game_list" :key="index">
        <div class="title" :id="'game' + index">
          <div class="name">
            <img :src="item.fullCategoryImg" style="width: 0.55rem" />
            <span class="game-name">{{ item.categoryName }}</span>
          </div>
          <div class="more" @click="getMore(item.categoryId,item.categoryName)">
            <span>Ver Tudo</span>
            <img style="margin-left: 8px" width="5" src="../assets/images/jiantou.png" />
          </div>
        </div>
        <div class="game-container">
          <imgCard
            v-for="(items, indexs) in item.games"
            :key="indexs"
            :cardInfo="items"
          />
        </div>
      </div>

      <pageFooter />

      <regModal />
      <fdModal />
    </div>

    <nut-popup v-model:visible="down_visible" position="bottom" round>
      <div class="down-box" v-if="divice == 'android'">
        <div class="close">
          <Close color="#fff" width="16px" height="16px" @click="changeDown(2)" />
        </div>
        <div class="title">1. Click the "More" icon, then click Install application</div>
        <img src="../assets/images/client/down/down/and_1.png" />
        <div class="title">2. Click Add and select "Add"</div>
        <img src="../assets/images/client/down/down/and_2.png" />
      </div>
      <div class="down-box" v-if="divice == 'ios'">
        <div class="close">
          <Close color="#fff" width="16px" height="16px" @click="changeDown(2)" />
        </div>
        <div class="title">1.Click the share button at the bottom</div>
        <img src="../assets/images/client/down/down/ios_1.png" />
        <div class="title">2.Tap the More icon, then tap Add to Home Screen</div>
        <img src="../assets/images/client/down/down/ios_2.png" />
        <div class="title">3. Click Add and select "Add"</div>
        <img src="../assets/images/client/down/down/ios_3.png" />
      </div>
    </nut-popup>
  </div>
</template>

<script>
import imgCard from "@/components/imgCard.vue";
import pageFooter from "@/components/pageFooter.vue";
import regModal from "@/components/regModal.vue";
import fdModal from "@/components/fdModal.vue";
export default {
  components: {
    imgCard,
    pageFooter,
    regModal,
    fdModal,
  },
};
</script>

<script setup>
import { computed, ref, onMounted } from "vue";
import { Close, RectRight } from "@nutui/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { Lucky } from "@/apis/cashwheel";

let { state, commit, dispatch } = useStore();

const promotion_list = computed(() => {
  return state.activity_notice.records;
});
const category_list = computed(() => {
  return state.game_list.category;
});
const game_list = computed(() => {
  return state.current_game_list;
});
const route = useRoute();
const router = useRouter();
const goPath = (path) => {
  router.push({
    path,
  });
};

const getMore = (id,name) => {
  router.push({
    path: "/classification",
    query: {
      id,
      name
    },
  });
};
const active_type = computed(() => {
  return state.home_active_type;
});

const changeTab = (index) => {
  if (index > 2) {
    document.getElementById("gameName").scrollLeft = 80 * index;
  } else {
    document.getElementById("gameName").scrollLeft = 0;
  }
  commit("set_home_active_type", index);
  // let top_num = 0;
  // if (index != 0) {
  //   let selector = "game" + index;
  //   if (page_num.value >= 205) {
  //     top_num = document.getElementById(selector).offsetTop - 125;
  //   } else {
  //     top_num = document.getElementById(selector).offsetTop - 125;
  //   }
  // }
  // window.scrollTo({
  //   top: top_num,
  //   behavior: "smooth",
  // });
};

const down_visible = ref(false);
const changeDown = (type) => {
  type == 1 ? (down_visible.value = true) : (down_visible.value = false);
};
const divice = ref(false);

const goActive = (data) => {
  commit("set_activity_detail", data);
  router.push({
    path: "/activity",
  });
};
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
  Lucky().then((res) => {
    if (res.code == 200) commit("set_lucky", res.data);
  });
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
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
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

.home {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0.277rem 0;
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
    top: 0;
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
          font-size: 0.416rem;
          font-weight: bold;
          color: #fff;
          margin-left: 0.222rem;
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
    overflow-x: auto;
    background: transparent;
  }
  .custom-tab {
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
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
