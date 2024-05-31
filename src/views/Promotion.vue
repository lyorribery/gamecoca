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
const list = [
  {
    type: 1,
    btn: "Get Coins",
    img: require("../assets/images/client/promotion/check.png"),
  },
  {
    type: 2,
    btn: "Go Spin",
    img: require("../assets/images/client/promotion/spin.png"),
  },
  {
    type: 4,
    btn: "Get Bonus",
    img: require("../assets/images/client/promotion/deposit.png"),
  },
  {
    type: 5,
    btn: "Get Bonus",
    img: require("../assets/images/client/promotion/f_d.png"),
  },
  {
    type: 3,
    btn: "Get Cash",
    img: require("../assets/images/client/promotion/invite.png"),
  },
];
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
      break;
    case 5:
      if (state.user_info && state.user_info.rechargeTimes > 0) {
        commit(
          "set_tip_info",
          `The current account does not meet the conditions for participating in the first recharge activity.`
        );
        commit("set_tip_type", 9);
        commit("set_tip_modal", true);
      } else {
        router.push({
          path: "/deposit",
        });
      }
      break;
  }
};
</script>

<style lang="scss" scoped>
.promotion-header {
  z-index: 9;
  background: #18171e;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.0138rem solid #29213d;
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 0.472rem;
  }
}
.promotion {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 0.416rem 0.277rem 0.416rem;
  .item {
    width: 100%;
    border-radius: 0.222rem;
    overflow: hidden;
    margin-top: 0.416rem;
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
      padding: 0.138rem 0.277rem;

      .btn {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.361rem;
        font-weight: 600;
        box-sizing: border-box;
        padding: 0.138rem 0.416rem;
        background: linear-gradient(-90deg, #9343c4, #614ae6);
        border-radius: 0.444rem;
      }
    }
  }
}
</style>
