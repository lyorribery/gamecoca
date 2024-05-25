<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive"
          :key="route.name"
        ></component>
      </keep-alive>
      <component
        :is="Component"
        v-if="!route.meta.keepAlive"
        :key="route.name"
      ></component>
    </router-view>
  </div>

  <div class="tab-box">
    <div class="tab-item" @click="tabSwitch(0)">
      <img v-if="active_tab === 0" :src="img1" />
      <img v-else :src="img1_un" />
      <span :style="{ color: active_tab === 0 ? '#C98FFF' : '' }">Home</span>
      <div class="back" v-if="active_tab === 0">
        <img src="@/assets/images/tab_act.svg" />
      </div>
    </div>
    <div class="tab-item" @click="tabSwitch(1)">
      <img v-if="active_tab === 1" :src="img2" />
      <img v-else :src="img2_un" />
      <span :style="{ color: active_tab === 1 ? '#C98FFF' : '' }">Deposit</span>
      <div class="back" v-if="active_tab === 1">
        <img src="@/assets/images/tab_act.svg" />
      </div>
    </div>
    <div class="tab-item" @click="tabSwitch(2)">
      <img v-if="active_tab === 2" :src="img3" />
      <img v-else :src="img3_un" />
      <span :style="{ color: active_tab === 2 ? '#C98FFF' : '' }">Promotion</span>
      <div class="back" v-if="active_tab === 2">
        <img src="@/assets/images/tab_act.svg" />
      </div>
    </div>
    <div class="tab-item" @click="tabSwitch(3)">
      <img v-if="active_tab === 3" :src="img4" />
      <img v-else :src="img4_un" />
      <span :style="{ color: active_tab === 3 ? '#C98FFF' : '' }">Profile</span>
      <div class="back" v-if="active_tab === 3">
        <img src="@/assets/images/tab_act.svg" />
      </div>
    </div>
  </div>
  <dailyCheck />
  <firstDeposit />
</template>

<script>
import { watch } from "vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import dailyCheck from "@/components/dailyCheck.vue";
import firstDeposit from "@/components/firstDeposit.vue";
import { preloadImage } from "@/utils/utils";

export default {
  components: {
    dailyCheck,
    firstDeposit,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const active_tab = ref(0);
    watch(
      () => router.currentRoute.value,
      (newValue) => {
        switch (newValue.name) {
          case "home":
            active_tab.value = 0;
            break;
          case "deposit":
            active_tab.value = 1;
            break;
          case "promotion":
            active_tab.value = 2;
            break;
          case "profile":
            active_tab.value = 3;
            break;
        }
      },
      { immediate: true }
    );

    const tabSwitch = (index) => {
      switch (index) {
        case 0:
          router.push({
            path: "/home",
          });
          break;
        case 1:
          router.push({
            path: "/deposit",
          });
          break;
        case 2:
          router.push({
            path: "/promotion",
          });
          break;
        case 3:
          router.push({
            path: "/profile",
          });
          break;
      }
    };

    const img1 = ref("");
    const img2 = ref("");
    const img3 = ref("");
    const img4 = ref("");
    const img1_un = ref("");
    const img2_un = ref("");
    const img3_un = ref("");
    const img4_un = ref("");
    onMounted(() => {
      switch (route.name) {
        case "home":
          active_tab.value = 0;
          break;
        case "deposit":
          active_tab.value = 1;
          break;
        case "promotion":
          active_tab.value = 2;
          break;
        case "profile":
          active_tab.value = 3;
          break;
      }
      preloadImage(require("../assets/images/tab_home_act.png"))
        .then((image) => {
          img1.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });

      preloadImage(require("../assets/images/tab_dep.png"))
        .then((image) => {
          img2_un.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });
      preloadImage(require("../assets/images/tab_promotion.png"))
        .then((image) => {
          img3_un.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });
      preloadImage(require("../assets/images/tab_profile.png"))
        .then((image) => {
          img4_un.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });

      preloadImage(require("../assets/images/tab_home.png"))
        .then((image) => {
          img1_un.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });

      preloadImage(require("../assets/images/tab_dep_act.png"))
        .then((image) => {
          img2.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });
      preloadImage(require("../assets/images/tab_promotion_act.png"))
        .then((image) => {
          img3.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });
      preloadImage(require("../assets/images/tab_profile_act.png"))
        .then((image) => {
          img4.value = image;
        })
        .catch((error) => {
          console.error("Image loading error:", error);
        });
    });
    return {
      route,
      active_tab,
      tabSwitch,
      img1,
      img2,
      img3,
      img4,
      img1_un,
      img2_un,
      img3_un,
      img4_un,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-box {
  z-index: 3;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(1.527rem + env(safe-area-inset-bottom));
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: env(safe-area-inset-bottom);
  background: #1b1c23;
  box-shadow: inset 0px 0px 0.035rem 0px #393c52;
  border-radius: 0.462rem 0.462rem 0px 0px;
  overflow: hidden;
  .tab-item {
    width: calc((100% - 1.25rem) / 4);
    height: 1.527rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 0.777rem;
    }
    span {
      font-size: 0.361rem;
      color: #77777d;
      padding-top: 0.027rem;
    }
    .back {
      position: absolute;
      left: 0;
      bottom: 0;
      img {
        width: 100%;
      }
    }
  }
}
.content {
  width: 100%;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top);
  padding-bottom: calc(env(safe-area-inset-bottom) + 1.944rem);
  overflow-y: auto;
}
</style>
