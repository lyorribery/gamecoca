<template>
  <div class="main-header">
    <img :src="fullStationLogo" style="height: 1.1rem" />
    <div class="btn-box" v-if="JSON.stringify(user_info) == '{}'">
      <div class="log-btn" @click="goPermission('/login')">
        {{ $t("button.login") }}
      </div>
      <div class="re-btn" @click="goPermission('/register')">
        {{ $t("button.register") }}
      </div>
    </div>
    <div class="btn-box" v-else>
      <span>R${{ state.user_balance.balance }}</span>
      <div class="re-btn" @click="goPath('/deposit')">DEPOSIT</div>
    </div>
  </div>
  <div class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition :name="transitionName" mode="out-in">
          <component
            :is="Component"
            v-if="route.meta.keepAlive"
            :key="route.name"
          ></component>
        </transition>
      </keep-alive>
      <transition :name="transitionName" mode="out-in">
        <component
          :is="Component"
          v-if="!route.meta.keepAlive"
          :key="route.name"
        ></component>
      </transition>
    </router-view>
  </div>

  <div class="tab-box">
    <div
      class="tab-item"
      v-for="(item, index) in tabs"
      :key="index"
      @click="tabSwitch(item.path)"
    >
      <div class="tab-icon" v-html="item.icon"></div>
      <span >{{ item.name }}</span>
    </div>
  </div>
  <!-- <dailyCheck /> -->
</template>

<script>
import { computed, watch } from "vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
// import dailyCheck from "@/components/dailyCheck.vue";
import { preloadImage } from "@/utils/utils";
import { useStore } from "vuex";

export default {
  // components: {
  //   dailyCheck,
  // },
  setup() {
    let { state } = useStore();
    const fullStationLogo = computed(() => {
      return state.station_base.fullStationLogo;
    });
    const user_info = computed(() => {
      return state.user_info;
    });
    const tabs = computed(() => {
      const bottom = state.station_base.bottomTabBar;
      bottom.map((item) => {
        item.icon = item.icon.replace('width="200"', 'width="0.666rem"');
        item.icon = item.icon.replace('height="200"', 'height="0.666rem"');
        item.icon = item.icon.replace('fill="#ffffff"', 'fill="#e556ff"');
        item.icon = item.icon.replace('fill="#3D3B4F"', 'fill="#e556ff"');
        item.icon = item.icon.replace('fill="#333333"', 'fill="#e556ff"');
        item.icon = item.icon.replace('fill="#333333"', 'fill="#e556ff"');
        item.icon=item.icon.replace('xmlns="http://www.w3.org/2000/svg"','xmlns="http://www.w3.org/2000/svg" fill="#e556ff"')
      });//#3D3B4F
      return bottom;
    });
    const transitionName = ref("slide-right");
    const route = useRoute();
    const router = useRouter();
    const active_tab = ref(0);

    watch(
      () => route.meta,
      (newVal, oldVal) => {
        transitionName.value = newVal.transition;
      }
    );

    const tabSwitch = (path) => {
      router.push({
        path: path,
      });
    };

    const goPermission = (type) => {
      router.push({
        path: type,
      });
    };

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
    });
    return {
      tabs,
      route,
      active_tab,
      tabSwitch,
      transitionName,
      fullStationLogo,
      state,
      goPermission,
      user_info,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
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
      color: $c-fff;
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

    span {
      font-size: 0.361rem;
      color: #e556ff;
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
  padding-top: calc(55px + env(safe-area-inset-top));
  padding-bottom: calc(env(safe-area-inset-bottom) + 1.944rem);
  overflow-y: auto;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s;
}
.slide-right-enter {
  opacity: 0.3;
  transform: translate(-100%);
}
.slide-right-leave-active {
  opacity: 0.3;
  transform: translateX(100%);
}
.slide-left-enter {
  opacity: 0.3;
  transform: translateX(100%);
}
.slide-left-leave-active {
  opacity: 0.3;
  transform: translateX(-100%);
}
</style>
