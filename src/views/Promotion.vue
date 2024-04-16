<template>
  <div class="promotion-header">
    <span class="title">Promotion</span>
  </div>
  <div class="promotion">
    <div class="item" v-for="(item, index) in list" :key="index">
      <img src="../assets/images/banner.png" style="width: 100%" />
      <div class="item-content">
        <div class="btn">Get Cash</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const list = ref([
  {
    img: "",
    status: "",
    type: "",
  },
  {
    img: "",
    status: "",
    type: "",
  },
]);
</script>

<style lang="scss" scoped>
.promotion-header {
  z-index: 9;
  background: #19142b;
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
  padding: calc(55px + env(safe-area-inset-top)) 15px 0 15px;
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
        font-size: 13px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        background: linear-gradient(-90deg, #9932fc, #5b2efa);
        font-weight: bold;
        box-sizing: border-box;
        padding: 8px 15px;
      }
    }
  }
}
</style>
