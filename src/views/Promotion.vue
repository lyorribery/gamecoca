<template>
  <div>
    <div class="promotion">
      <div class="item" v-for="(item, index) in list" :key="index" @click="goPath(item)">
        <img :src="item.fullNoticeImg" />
        <div class="promotion-content">
          <div class="title">{{ item.noticeTitle }}</div>
          <div class="des">{{ item.noticeIntroduction }}</div>
        </div>
      </div>
    </div>
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
@import "../assets/styles/variables.scss";
.promotion {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.277rem;
  .item {
    width: 100%;
    border-radius: 0.222rem;
    margin-top: 0.416rem;
    box-sizing: border-box;
    position: relative;
    img {
      width: 100%;
    }
    .promotion-content {
      border-bottom-right-radius: 0.222rem;
      border-bottom-left-radius: 0.222rem;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 0.277rem;
      .title {
        font-size: 0.361rem;
        font-weight: bold;
        color: $primary-color;
      }
      .des {
        flex: 1;
        box-sizing: border-box;
        padding-left: 0.555rem;
        color: $color-sub-text;
        font-size: 0.277rem;
      }
    }
  }
}
</style>
