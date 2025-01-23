<template>
  <div class="refer">
    <div
      class="refer-tab"
      :class="
        page_num >= 50 && is_show_app
          ? 'sticky-type-app'
          : page_num >= 50 && !is_show_app
          ? 'sticky-type'
          : ''
      "
    >
      <div
        class="item"
        v-for="(item, index) in tabs"
        :key="index"
        @click="changePath(item)"
      >
        <img v-if="tab_name == item.name" src="../assets/images/refer/xz_di_jiaguang.png" class="active-back" />
        <div
          class="name"
          :style="{ color: tab_name == item.name ? '#ffffff' : '#cccccc' }"
        >
          {{ item.title }}
        </div>
        <img v-if="item.name == 'invite'" class="icon" src="../assets/images/refer/convidar.png" />
        <img v-if="item.name == 'referc'" class="icon" src="../assets/images/refer/Referencia.png" />
        <img v-if="item.name == 'member'" class="icon" src="../assets/images/refer/Menbro.png" />
        <img v-if="item.name == 'bonus'" class="icon" src="../assets/images/refer/Bonus.png" />
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="route.name"></component>
    </router-view>
    <pageFooter />
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter.vue";
export default {
  components: {
    pageFooter,
  },
};
</script>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { preloadImage } from "@/utils/utils";

const { t } = useI18n();
const { state } = useStore();
const route = useRoute();
const router = useRouter();
const static_img = computed(() => {
  return state.static_img.refer;
});
const tab_name = computed(() => {
  return route.name;
});
const is_show_app = computed(() => {
  return state.is_show_app;
});

const tabs = [
  { name: "invite", title: t("refer.Toinvite") },
  { name: "referc", title: t("refer.Referencia") },
  { name: "member", title: t("refer.Menbro") },
  { name: "bonus", title: t("refer.Bonus") },
];
const changePath = (item) => {
  router.push({
    path: "/refer/" + item.name,
  });
};

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
.sticky-type-app {
  position: fixed;
  top: calc(env(safe-area-inset-top) + 2.638rem);
  left: 0;
  z-index: 2;
  background: linear-gradient(0deg, #181717, #0d0d0d) !important;
}
.sticky-type {
  position: fixed;
  top: calc(env(safe-area-inset-top) + 1.361rem);
  left: 0;
  z-index: 2;
  background: linear-gradient(0deg, #181717, #0d0d0d) !important;
}
.refer-tab {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.416rem 0.277rem;
  .item {
    width: 2.138rem;
    height: 1.555rem;
    background-image: url("../assets//images/refer/wxz_di.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .name {
      font-size: 0.277rem;
      box-sizing: border-box;
      padding: 0.138rem 0 0 0.138rem;
    }
    .icon {
      width: 2.138rem;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .active-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 2.138rem;
      height: 1.555rem;
    }
  }
}
</style>
