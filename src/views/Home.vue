<template>
  <div>
    <div class="home" ref="container">
      <div class="swiper-box">
        <nut-swiper
          :auto-play="2500"
          :is-prevent-default="false"
          :is-stop-propagation="false"
          :width="330"
          :loop="true"
          :pagination-visible="true"
        >
          <nut-swiper-item
            v-for="(item, index) in promotion_list"
            :key="index"
            style="height: 198px; margin-right: 0.138rem"
          >
            <div @click="goActive(item)">
              <img
                :src="item.fullNoticeImg"
                style="height: 100%; width: 100%"
                draggable="false"
              />
            </div>
          </nut-swiper-item>
        </nut-swiper>
      </div>
      <div class="maquee">
        <!-- <nut-noticebar :scrollable="true">
          <template #left-icon>
            <i class="iconfont icon-laba"></i>
          </template>
          <span>abssdfasdfasdfdadsfasdfasdfsadfasdfasdfasdfasdfasdfasdfasdfasdfasdf</span>
        </nut-noticebar> -->
        <nut-noticebar :text="maquee_text" background="transparent" color="#E6E6E6">
          <template #left-icon>
            <i class="iconfont icon-laba" style="font-size: 20px"></i>
          </template>
        </nut-noticebar>
      </div>
      <div class="activity-scroll">
        <div
          @click="goPath(item.routerUrl)"
          class="activity-item"
          v-for="(item, index) in activity_list"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.fullImgUrl + ')' }"
        >
          <div class="name">{{ item.imgTitle }}</div>
        </div>
      </div>
      <div class="game-container">
        <div class="game-tab" :class="page_num >= 293.5 ? 'sticky-type' : ''">
          <div
            class="category"
            v-for="(item, index) in category_list"
            :key="index"
            @click="changeTab(index)"
          >
            <div class="active-line" v-if="active_type == index"></div>
            <img :src="item.fullCategoryImg" />
            <span :class="active_type == index ? 'active-tab' : ''">{{
              item.categoryName
            }}</span>
          </div>
        </div>
        <div
          class="game-list-box"
          :style="{ marginLeft: page_num >= 293.5 ? '1.305rem' : '' }"
        >
          <div class="game-list" v-for="(item, index) in game_list" :key="index">
            <div class="game-title">
              <div class="title-icon">
                <img :src="item.fullCategoryImg" />
                <span>{{ item.categoryName }}</span>
              </div>
              <div class="more-btn" @click="getMore(item.categoryId, item.categoryName)">
                {{ $t("button.more") }}
              </div>
            </div>
            <div class="img-box">
              <imgCard
                :cardInfo="items"
                :imgType="img_type"
                v-for="(items, indexs) in item.games"
                :key="indexs"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <pageFooter/>
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
import { Lucky } from "@/apis/cashwheel";

let { state, commit, dispatch } = useStore();

const img_type = ref("small");
const maquee_text = computed(() => {
  return state.station_base.marquee;
});

const activity_list = computed(() => {
  const list = state.station_img.filter((item) => {
    return item.imgType == 2;
  });
  return list;
});

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
  if (!path) return;

  if (path.indexOf("activity") > -1) {
    const promotion = state.activity_notice.records.filter((item) => {
      return item.id == path.split("=")[1];
    });
    commit("set_activity_detail", promotion[0]);
    router.push({
      path,
    });
  } else if (path.indexOf("home") > -1) {
  } else {
    router.push({
      path,
    });
  }
};

const getMore = (id, name) => {
  router.push({
    path: "/classification",
    query: {
      id,
      name,
    },
  });
};
const active_type = computed(() => {
  return state.home_active_type;
});

const changeTab = (index) => {
  commit("set_home_active_type", index);
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
  top: calc(env(safe-area-inset-top) + 1.361rem);
  left: 0.277rem;
  z-index: 2;
  background: linear-gradient(0deg, #181717, #0d0d0d) !important;
}

.game-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0.277rem 0.277rem 1.388rem 0.277rem;
  display: flex;
  .game-list-box {
    flex: 1;
    box-sizing: border-box;
    padding-left: 0.277rem;
    .game-list {
      width: 100%;
      .img-box {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
      .game-title {
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 0.277rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-icon {
          display: flex;
          align-items: center;
          img {
            width: 0.416rem;
            margin-right: 0.138rem;
          }
          span {
            color: $color-white;
            font-size: 0.361rem;
            font-weight: 900;
          }
        }
        .more-btn {
          width: 1.555rem;
          height: 0.638rem;
          border-radius: 0.138rem;
          border: 1px solid $boder-color;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.277rem;
          font-weight: bold;
          color: $color-white;
        }
      }
    }
  }
  .game-tab {
    width: 1.305rem;
    background: linear-gradient(0deg, #181717, #0d0d0d);
    .category {
      width: 1.305rem;
      height: 1.305rem;
      margin-bottom: 0.138rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $color-unactive;
      font-size: 0.277rem;
      position: relative;
      .active-line {
        position: absolute;
        top: 0.236rem;
        left: 0;
        width: 0.083rem;
        height: 0.833rem;
        background: linear-gradient(0deg, #f36655, #ffc02e);
        border-radius: 0px 0.083rem 0.0833px 0px;
      }
      .active-tab {
        color: $primary-color;
      }
      img {
        width: 0.694rem;
        margin-bottom: 0.083rem;
      }
    }
  }
}

.activity-scroll {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0 0.277rem;
  overflow-x: scroll;
  white-space: nowrap;
  .activity-item {
    width: 4.388rem;
    height: 1.277rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: inline-block;
    font-size: 0.388rem;
    font-weight: bold;
    color: $color-white;
    line-height: 1.277rem;
    text-align: center;
  }
}

.maquee {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.277rem;
  i {
    font-size: 0.361rem;
    color: $icon-color;
  }
}

.swiper-box {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 0 0.277rem;
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
</style>
