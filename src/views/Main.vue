<template>
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

  <div class="tab-box" v-if="route.meta.tab">

    <div
      class="tab-item"
      v-for="(item, index) in tabs"
      :key="index"
      @click="tabSwitch(item.path)"
    >
      <div class="tab-icon" v-html="item.icon"></div>
      <span :style="{ color: active_tab === 0 ? '#C98FFF' : '' }">{{ item.name }}</span>
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
    const tabs = computed(() => {
      const bottom=state.station_base.bottomTabBar
      bottom.map(item=>{
        item.icon=item.icon.replace("width=\"200\"", "width=\"0.666rem\"")
        item.icon=item.icon.replace("height=\"200\"", "height=\"0.666rem\"")
      })
      return bottom;
    });
    const transitionName = ref("slide-right");
    const route = useRoute();
    const router = useRouter();
    const active_tab = ref(0);
    // watch(
    //   () => router.currentRoute.value,
    //   (newValue) => {
    //     switch (newValue.name) {
    //       case "home":
    //         active_tab.value = 0;
    //         break;
    //       case "deposit":
    //         active_tab.value = 1;
    //         break;
    //       case "promotion":
    //         active_tab.value = 2;
    //         break;
    //       case "profile":
    //         active_tab.value = 3;
    //         break;
    //     }
    //   },
    //   { immediate: true }
    // );

    watch(
      () => route.meta,
      (newVal, oldVal) => {
        transitionName.value = newVal.transition;
      }
    );

    const tabSwitch = (path) => {
      router.push({
        path:path
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
