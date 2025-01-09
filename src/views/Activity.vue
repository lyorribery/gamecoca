<template>
  <div>
    <div class="activity-header">
      <div @click="goBack" class="arrow">
        <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
      </div>
      <span>{{ activity_detail.noticeTitle }}</span>
    </div>
    <div class="activity">
      <img :src="activity_detail.fullNoticeImg" style="width: 100%" />
      <div class="activity-content" v-html="activity_detail.noticeContent"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RectLeft } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const { state } = useStore();
const goBack = () => {
  router.go(-1);
};
const activity_detail = computed(() => {
  return state.activity_detail;
});
</script>

<style lang="scss" scoped>
.activity {
  width: 100%;
  box-sizing: border-box;
  padding: calc(env(safe-area-inset-top) + 1.944rem) 0.416rem
    calc(env(safe-area-inset-bottom) + 0.416rem) 0.416rem;
  .activity-content{
    width: 100%;
    font-size: 0.416rem;
  }
}
.activity-header {
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
  span {
    font-weight: bold;
    font-size: 0.472rem;
    color: #ffffff;
  }
  .arrow {
    position: fixed;
    left: 0.416rem;
    top: calc(env(safe-area-inset-top + 0.583rem));
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 0.361rem;
      color: #ffffff;
      padding-left: 0.138rem;
    }
  }
}
</style>
