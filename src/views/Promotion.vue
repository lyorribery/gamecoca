<template>
  <div>
    <div class="promotion-header">
      <span class="title">Promotion</span>
    </div>
    <div class="promotion">
      <div class="item" v-for="(item, index) in list" :key="index" @click="goPath(item)">
        <img :src="item.fullNoticeImg" />
        <div class="item-content">
          <div class="item-top">
            <div class="title">{{ item.noticeTitle }}</div>
            <div class="des">{{ item.noticeIntroduction }}</div>
          </div>

          <div class="btn">Clique para mais</div>
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
  return state.activity_notice.records;
});
const goPath = (data) => {
  commit("set_activity_detail", data);
  router.push({
    path: "/activity",
  });
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
    margin-top: 0.416rem;
    background: #222222;
    box-sizing: border-box;
    padding: 0.277rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 50%;
    }
    .item-content {
      width: calc(50% - 0.277rem);
      // height: 3.086rem;
      height: 111.13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item-top {
        display: flex;
        flex-direction: column;

        .title {
          color: #e556ff;
          font-size: 0.361rem;
          font-weight: 600;
          box-sizing: border-box;
          padding-bottom: 0.136rem;
        }
        .des {
          color: #fff;
          font-size: 0.277rem;
        }
      }
      .btn {
        color: #cbb6fe;
        font-size: 0.277rem;
        font-weight: 600;
        width: 100%;
        text-align: right;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // box-sizing: border-box;
        // padding: 0.138rem;
        // background: linear-gradient(-90deg, #9343c4, #614ae6);
        // border-radius: 0.444rem;
      }
    }
  }
}
</style>
