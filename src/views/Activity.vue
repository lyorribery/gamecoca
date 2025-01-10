<template>
  <div>
    <div class="activity">
      <img :src="activity_detail.fullNoticeImg" style="width: 100%" />
      <div class="activity-content" v-html="activity_detail.noticeContent"></div>
    </div>
    <pageFooter/>
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

const { state } = useStore();

const activity_detail = computed(() => {
  return state.activity_detail;
});
</script>

<style lang="scss" scoped>
.activity {
  width: 100%;
  box-sizing: border-box;
  padding: 0.416rem 0.416rem
    calc(env(safe-area-inset-bottom) + 0.416rem) 0.416rem;
  .activity-content{
    width: 100%;
    font-size: 0.416rem;
  }
}
</style>
