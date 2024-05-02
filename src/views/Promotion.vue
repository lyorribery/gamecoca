<template>
  <div class="promotion-header">
    <span class="title">Promotion</span>
  </div>
  <div class="promotion">
    <div class="item" v-for="(item, index) in list" :key="index" @click="goPath(item)">
      <img :src="item.img" style="width: 100%" />
      <div class="item-content">
        <div class="btn">
          {{ item.btn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
let { state, commit } = useStore();
const router = useRouter();
const list = computed(() => {
  return state.promotion_list;
});
const goPath = (data) => {
  switch (data.type) {
    case 1:
      commit("set_daily_visible", true);
      break;
    case 2:
      router.push({
        path: "/spin",
      });
      break;
    case 3:
      router.push({
        path: "/invite",
      });
      break;
    case 4:
      router.push({
        path: "/deposit",
      });
      break
    case 5:
    commit("set_fisrt_deposit_visilbe", true);
      break;
  }
};
</script>

<style lang="scss" scoped>
.promotion-header {
  z-index: 9;
  background: #161326;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #29213d;
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
}
.promotion {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 15px 10px 15px;
  .item {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 15px;
    position: relative;
    .item-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 10px;

      .btn {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        box-sizing: border-box;
        padding: 5px 15px;
        background: linear-gradient(-90deg, #9343C4, #614AE6);
        border-radius: 16px;
      }
    }
  }
}
</style>
