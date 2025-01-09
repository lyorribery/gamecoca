<template>
  <div>
    <div class="promotion-header">
      <span class="title">Inbox</span>
    </div>
    <div class="promotion">
        <div class="item" v-for="(item, index) in msg" :key="index">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const { state } = useStore();
const msg = computed(() => {
  return state.msg_list.records;
});
</script>

<style lang="scss" scoped>
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
    color:#fff;
    font-size: 0.416rem;
  }
}
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
</style>
