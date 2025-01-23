<template>
  <div>
    <div class="home" ref="container">
      <div class="swiper-box">
        <nut-swiper
          :auto-play="2000"
          :is-prevent-default="false"
          :is-stop-propagation="false"
          :width="swiper_w"
          :loop="true"
          :pagination-visible="true"
          @change="changeSwiper"
        >
          <nut-swiper-item
            v-for="(item, index) in promotion_list"
            :key="index"
            style="height: 198px; margin-right: 0.138rem"
          >
            <div @click="goActive(item)" class="banner-img">
              <img
                class="mask"
                height="198"
                v-if="swiper_index != index"
                src="../assets/images/banne_mask.png"
              />
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
        <nut-noticebar :text="maquee_text" background="transparent" color="#E6E6E6">
          <template #left-icon>
            <i class="iconfont icon-laba" style="font-size: 20px"></i>
          </template>
        </nut-noticebar>
      </div>
      <div class="activity-box">
        <div class="left-arrow" @click="scrollActive(1)">
          <div class="icon-box">
            <i class="iconfont icon-xiangzuo"></i>
          </div>
        </div>
        <div class="right-arrow" @click="scrollActive(2)">
          <div class="icon-box">
            <i class="iconfont icon-xiangyou"></i>
          </div>
        </div>
        <div class="activity-scroll" ref="activeContainer">
          <div
            @click="goPath(item.routerUrl)"
            class="activity-item"
            v-for="(item, index) in activity_list"
            :key="index"
            :style="{backgroundImage:'url('+item.fullImgUrl+')'}"
          >

            <div class="name" >{{ item.imgTitle }}</div>
          </div>
        </div>
      </div>

      <div
        class="game-container"
        :style="{ alignItems: page_num > 1166 ? 'flex-end' : '' }"
      >
        <div
          class="game-tab"
          :class="
            page_num >= scroll_num && page_num <= 1166 && is_show_app
              ? 'sticky-type-app'
              : page_num >= scroll_num && page_num <= 1166 && !is_show_app
              ? 'sticky-type'
              : ''
          "
        >
          <div
            class="category"
            v-for="(item, index) in category_list"
            :key="index"
            @click="changeTab(index)"
          >
            <div class="active-line" v-if="active_type == index"></div>
            <!-- <img
              :src="item.fullCategoryImg"
              :style="{ filter: active_type == index ? '' : 'grayscale(100%)' }"
            /> -->
            <nut-image
              :src="item.fullCategoryImg"
              style="margin-bottom: 0.083rem"
              :style="{
                filter: active_type != index && item.isload ? 'grayscale(100%)' : '',
              }"
              :width="category_width"
              :height="category_width"
              @load="loadCategory(index)"
              round
              :radius="7"
              show-loading
              show-error
              lazy-load
            >
              <template #loading>
                <div
                  class="static-img-loading"
                  :style="{ width: category_width, height: category_width }"
                ></div>
              </template>
              <template #error>
                <div
                  class="static-img-loading"
                  :style="{ width: category_width, height: category_width }"
                ></div>
              </template>
            </nut-image>
            <span :class="active_type == index ? 'active-tab' : ''">{{
              item.categoryName
            }}</span>
          </div>
        </div>
        <div
          class="game-list-box"
          :style="{
            marginLeft: page_num >= scroll_num && page_num <= 1166 ? '1.305rem' : '',
          }"
        >
          <div class="game-list" v-for="(item, index) in game_list" :key="index">
            <div class="game-title">
              <div class="title-icon">
                <img :src="item.fullCategoryImg" />
                <span>{{ item.categoryName }}</span>
              </div>
              <div class="more-btn" @click="getMore(item.verTudo)">
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
    <div class="home-icon-box">
      <div class="icon-item" v-for="(item, index) in home_icon" :key="index">
        <div
          v-for="(items, indexs) in item.data"
          :key="indexs"
          class="swiper"
          :style="getStyle(item.data)"
        >
          <div class="img-box" v-if="item.isShow">
            <i @click="closeIcon(index)" class="iconfont icon-guanbi close"></i>
            <img
              @click="goIcon(items)"
              :src="items.fullImgUrl"
              style="height: 100%; width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
    <pageFooter />
    <!-- <spin /> -->

    <nut-overlay
      v-model:visible="login_tip_visible"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div
          class="overlay-content"
          :style="{ width: login_visible_w + 'px', height: login_visible_w + 'px' }"
        >
          <i class="iconfont icon-guanbi close" @click="changeLoginTip()"></i>
          <div class="title">Seja bem-vindo?</div>
          <div class="text">
            Bonus de <span>30%</span> para novos membros no primeiro deposito!
          </div>
          <div class="text">
            Convide amigos e ganhe <span>R$20</span> de bdnus por cada convite.
          </div>
          <div class="text">Bdnus diario de <span>8%</span> em recargas.</div>
          <div class="text">Depositos e saques em apenas <span>30 segundos!</span></div>
          <div class="text">
            Roda da Sorte, nfveis VIP e muitos premios esperando por voce!
          </div>
        </div>
      </div>
    </nut-overlay>
    <nut-overlay
      v-model:visible="login_tip_swiper_visible"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div
          class="overlay-swiper"
          :style="{ width: login_visible_w + 'px', height: 230 + 'px' }"
        >
          <i
            class="iconfont icon-guanbi close"
            @click="login_tip_swiper_visible = false"
          ></i>
          <nut-swiper
            ref="swiperRef"
            :is-prevent-default="false"
            :is-stop-propagation="false"
            :width="login_visible_w"
            :loop="true"
            :height="230"
          >
            <nut-swiper-item
              v-for="(item, index) in promotion_list"
              :key="index"
              style="height: 230px"
            >
              <img
                @click="goActive(item)"
                :src="item.fullNoticeImg"
                style="height: 100%; width: 100%"
                draggable="false"
              />
            </nut-swiper-item>
          </nut-swiper>
          <div class="swiper-btns">
            <div class="swiper-btn" @click="handlePrev">
              <Left></Left>
            </div>
            <div class="swiper-btn" @click="handleNext">
              <Right></Right>
            </div>
          </div>
        </div>
      </div>
    </nut-overlay>
  </div>
</template>

<script>
import imgCard from "@/components/imgCard.vue";
import pageFooter from "@/components/pageFooter.vue";
// import spin from "@/components/spin.vue";
export default {
  components: {
    imgCard,
    pageFooter,
    // spin,
  },
};
</script>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { Left, Right } from "@nutui/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { formatDate } from "@/utils/utils";
import { Lucky } from "@/apis/cashwheel";

let { state, commit, dispatch } = useStore();

const swiperRef = ref();
const handlePrev = () => {
  swiperRef.value.prev();
};
const handleNext = () => {
  swiperRef.value.next();
};
const login_tip_visible = computed(() => {
  return state.login_tip_visible;
});
const login_tip_swiper_visible = ref(false);
const login_visible_w = ref(0);
const changeLoginTip = () => {
  commit("set_login_tip_visible", false);
  login_tip_swiper_visible.value = true;
};
const getStyle = computed(() => {
  return function (data) {
    if (data.length > 1) {
      const style = `slide 6s infinite alternate`;
      return { animation: style };
    } else {
      return { animation: "" };
    }
  };
});

const closeIcon = (indexs) => {
  const data = state.home_icon;
  data.map((item, index) => {
    if (index == indexs) item.isShow = false;
  });
  commit("set_home_icon", data);
};
const goIcon = (item) => {
  if (item.routerUrl.indexOf("home") > -1) {
    if (JSON.stringify(state.lucky) != "{}") {
      return;
      commit("set_spin_show", true);
    }
  } else if (item.routerUrl.indexOf("activity") > -1) {
    router.push({
      path: item.routerUrl.split("?")[0],
      query: {
        id: item.routerUrl.split("=")[1],
      },
    });
  } else {
    router.push({
      path: item.routerUrl.split("?")[0],
    });
  }
};
const home_icon = computed(() => {
  return state.home_icon;
});

const is_show_app = computed(() => {
  return state.is_show_app;
});

const swiper_index = ref(0);
const changeSwiper = (index) => {
  swiper_index.value = index;
};

const img_type = ref("small");
const maquee_text = computed(() => {
  return state.station_base.marquee;
});

const activity_list = computed(() => {
  return state.activity_list;
});

const promotion_list = computed(() => {
  return state.activity_notice.records;
});
const category_list = computed(() => {
  return state.game_list.category;
});

const loadCategory = (index) => {
  state.game_list.category[index].isload = true;
};

const game_list = computed(() => {
  return state.current_game_list;
});
const route = useRoute();
const router = useRouter();
const goPath = (path) => {
  if (!path) return;

  if (path.indexOf("activity") > -1) {
    router.push({
      path,
      query: {
        id: path.split("=")[1],
      },
    });
  } else if (path.indexOf("home") > -1) {
    if (JSON.stringify(state.lucky) != "{}") {
      return;
      commit("set_spin_show", true);
    }
  } else {
    router.push({
      path,
    });
  }
};

const getMore = (verTudo) => {
  const str = verTudo.split("?")[1];
  const arr = str.split("&");
  let obj = {};
  arr.map((item) => {
    obj[item.split("=")[0]] = item.split("=")[1];
  });
  router.push({
    path: "/classification",
    query: obj,
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

const goActive = (data) => {
  login_tip_swiper_visible.value = false;
  router.push({
    path: "/activity",
    query: {
      id: data.id,
    },
  });
};
const activeContainer = ref(null);
const scrollActive = (type) => {
  if (type == 2) {
    activeContainer.value.scrollTo({
      left: 600,
      top: 0,
      behavior: "smooth",
    });
  } else {
    activeContainer.value.scrollTo({
      left: -600,
      top: 0,
      behavior: "smooth",
    });
  }
};
const swiper_w = ref(330);
onMounted(() => {
  swiper_w.value = window.innerWidth * (300 / 360);
  // if (route.query.i_code) localStorage.setItem("i_code", route.query.i_code);
  login_visible_w.value = window.innerWidth - 30;
  Lucky().then((res) => {
    if (res.code == 200) {
      res.data.displayStartTime = formatDate(Number(res.data.displayStartTime));
      res.data.displayEndTime = formatDate(Number(res.data.displayEndTime));
      commit("set_lucky", res.data);
    }
  });
});
const category_width = ref("0.694rem");
const page_num = ref(0);
const scroll_num = computed(() => {
  return state.is_show_app ? 339.5 : 293.5;
});
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

<style>
@keyframes slide {
  0% {
    transform: translateY(0);
  }

  45% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.611rem);
  }

  100% {
    transform: translateY(-1.611rem);
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.static-img-loading {
  border-radius: 7px;
  background-size: 200% 200%;
  background-image: linear-gradient(
    135deg,
    rgba(6, 169, 80, 0.9),
    rgba(6, 169, 80, 0.8),
    rgba(255, 197, 54, 0.9),
    rgba(255, 197, 54, 0.8)
  );
  animation: flow 2s ease infinite;
  @keyframes flow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .overlay-swiper {
    position: relative;
    width: 100%;
    .swiper-btns {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      display: flex;
      justify-content: space-between;
    }
    .close {
      position: absolute;
      bottom: -1rem;
      left: calc((100% - 0.666rem) / 2);
      font-size: 0.666rem;
      color: $color-white;
    }
  }
  .overlay-content {
    background-image: url("https://testfile.1k9.net/master/1013/9986bb41e002410da4a9a05e1097f971.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    position: relative;
    padding: 0.277rem;
    .title {
      box-sizing: border-box;
      padding-left: 0.277rem;
      font-size: 0.777rem;
      color: #ffffff;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .text {
      margin-top: 0.777rem;
      font-size: 0.361rem;
      font-weight: 600;
      color: #ffffff;
      span {
        color: #ed5b57;
      }
    }
    .close {
      position: absolute;
      bottom: -1rem;
      left: calc((100% - 0.666rem) / 2);
      font-size: 0.666rem;
      color: $color-white;
    }
  }
}
.home-icon-box {
  position: fixed;
  bottom: 2.2rem;
  right: 0.555rem;
  z-index: 9;

  .icon-item {
    width: 1.611rem;
    height: 1.611rem;
    margin-top: 0.555rem;
    overflow-x: hidden;
    .swiper {
      .img-box {
        display: inline-block;
        position: relative;
        width: 1.611rem;
        height: 1.611rem;

        .close {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 0.461rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: bold;
          // opacity: 0.9;
        }
      }
    }
  }
}
.sticky-type-app {
  position: fixed;
  top: calc(env(safe-area-inset-top) + 2.638rem);
  left: 0.277rem;
  z-index: 2;
  background: linear-gradient(0deg, #181717, #0d0d0d) !important;
}
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
  padding: 0.277rem 0.277rem 0.666rem 0.277rem;
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
            height: 0.6rem;
            margin-right: 0.222rem;
          }
          span {
            color: $color-white;
            font-size: 0.333rem;
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
    border-radius: 0.194rem;
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
      // .active-img {
      //   -webkit-filter: drop-shadow(#ffc02e 0.694rem 0);
      //   filter: drop-shadow(#ffc02e 0.694rem 0);
      //   overflow: hidden;
      // }
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
      // img {
      //   width: 0.694rem;
      //   margin-bottom: 0.083rem;
      // }
    }
  }
}

.activity-box {
  width: 100%;
  height: 1.277rem;
  position: relative;
  .left-arrow {
    z-index: 2;
    position: absolute;
    width: 0.416rem;
    height: 1.277rem;
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(6, 169, 80, 0.5) 55%,
      rgba(6, 169, 80, 0.8) 100%
    );
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0.277rem 0.277rem 0;
    .icon-box {
      box-sizing: border-box;
      padding: 0.054rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.3);
      i {
        font-size: 0.277rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .right-arrow {
    z-index: 2;
    position: absolute;
    width: 0.416rem;
    height: 1.277rem;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(6, 169, 80, 0.5) 55%,
      rgba(6, 169, 80, 0.8) 100%
    );
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.277rem 0 0 0.277rem;
    .icon-box {
      box-sizing: border-box;
      padding: 0.054rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.3);
      i {
        font-size: 0.277rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .activity-scroll {
    width: 100%;
    height: 1.277rem;
    box-sizing: border-box;
    padding: 0 0 0 0.277rem;
    overflow-x: scroll;
    white-space: nowrap;
    .activity-item {
      position: relative;
      width: 4.388rem;
      height: 1.277rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: inline-block;
      font-size: 0.388rem;
      font-weight: 600;
      color: $color-white;
      line-height: 1.277rem;
      text-align: center;
      box-sizing: border-box;
      padding-left: 0.277rem;
    }
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
  .banner-img {
    position: relative;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
