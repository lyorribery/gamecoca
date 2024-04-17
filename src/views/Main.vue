<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <!-- <transition name="router_animate">
        <div :key="route.path"> -->
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive"
          :key="route.name"
        ></component>
      </keep-alive>
      <!-- </div>
      </transition> -->

      <!-- <transition name="router_animate">
        <div :key="route.path"> -->
      <component
        :is="Component"
        v-if="!route.meta.keepAlive"
        :key="route.name"
      ></component>
      <!-- </div>
      </transition> -->
    </router-view>
  </div>

  <nut-tabbar
    bottom
    safe-area-inset-bottom
    placeholder
    v-model="active_tab"
    @tab-switch="tabSwitch"
    unactive-color="#726CA6"
    active-color="#B333FB"
  >
    <nut-tabbar-item tab-title="Home">
      <template #icon="props">
        <img v-if="props.active" src="@/assets/images/tab_home_act.svg" />
        <img v-else src="@/assets/images/tab_home.svg" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Deposit">
      <template #icon="props">
        <img v-if="props.active" src="@/assets/images/tab_dep_act.svg" />
        <img v-else src="@/assets/images/tab_dep.svg" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Pomotion">
      <template #icon="props">
        <img v-if="props.active" src="@/assets/images/tab_promotion_act.svg" />
        <img v-else src="@/assets/images/tab_promotion.svg" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Profile">
      <template #icon="props">
        <img v-if="props.active" src="@/assets/images/tab_profile_act.svg" />
        <img v-else src="@/assets/images/tab_profile.svg" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
  <dailyCheck />
  <firstDeposit />
</template>

<script>
import { watch } from "vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import dailyCheck from "@/components/dailyCheck.vue";
import firstDeposit from "@/components/firstDeposit.vue";

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
    const tabSwitch = (item, index) => {
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

    return {
      route,
      active_tab,
      tabSwitch,
    };
  },
};
</script>

<style lang="scss" scoped>
.router_animate-enter-active {
  animation: slideInLeft 0.3s;
}
.router_animate-leave-active {
  animation: slideOutRight 0.3s;
}
.content {
  width: 100%;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top);
  padding-bottom: calc(env(safe-area-inset-bottom) + 15px);
  overflow-y: auto;
}
</style>
