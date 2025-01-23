<template>
  <div>
    <div class="activity">
      <div class="loading" v-if="is_loading"></div>
      <div class="loading" style="height: 7rem" v-if="is_loading"></div>
      <img v-if="!is_loading" :src="activity_detail.fullNoticeImg" style="width: 100%" />
      <div
        v-if="!is_loading"
        class="activity-content"
        v-html="activity_detail.noticeContent"
      ></div>
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
import { ref, onActivated, watch } from "vue";
import { useRoute } from "vue-router";
import { getNoticeById } from "@/apis/home";

const route = useRoute();
const activity_detail = ref({
  fullNoticeImg: "",
  noticeContent: "",
  noticeTitle: "",
});
watch(
  () => route,
  (newValue, oldValue) => {
    is_loading.value = true;
    getNoticeById(route.query.id).then((res) => {
      if (res.code == 200) {
        is_loading.value = false;
        activity_detail.value = res.data;
      }
    });
  },
  { deep: true }
);
const is_loading = ref(true);
onActivated(() => {
  is_loading.value = true;
  getNoticeById(route.query.id).then((res) => {
    if (res.code == 200) {
      is_loading.value = false;
      activity_detail.value = res.data;
    }
  });
});
</script>

<style lang="scss" scoped>
.activity {
  width: 100%;
  box-sizing: border-box;
  padding: 0.416rem 0.416rem calc(env(safe-area-inset-bottom) + 0.416rem) 0.416rem;
  .loading {
    width: 100%;
    height: 5rem;
    border-radius: 0.416rem;
    background-size: 200% 200%;
    // background-image: linear-gradient(
    //   135deg,
    //   rgba(188, 54, 204, 0.8),
    //   rgba(188, 54, 204, 0.6),
    //   rgba(56, 28, 164, 0.8),
    //   rgba(56, 28, 164, 0.6)
    // );
    background-image: linear-gradient(
      135deg,
      rgba(6, 169, 80, 1),
      rgba(6, 169, 80, 0.8),
      rgba(255, 197, 54, 1),
      rgba(255, 197, 54, 0.8)
    );
    animation: flowbg 2s ease infinite;
    @keyframes flowbg {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    margin-bottom: 0.416rem;
  }

  .activity-content {
    width: 100%;
    font-size: 0.416rem;
  }
}
</style>
