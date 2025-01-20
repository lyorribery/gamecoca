<template>
  <div>
    <div class="activity">
      <img :src="activity_detail.fullNoticeImg" style="width: 100%" />
      <div class="activity-content" v-html="activity_detail.noticeContent"></div>
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getNoticeById } from "@/apis/home";

const route = useRoute();
const activity_detail = ref({
  fullNoticeImg: "",
  noticeContent: "",
  noticeTitle: "",
});
onMounted(() => {
  console.log(route.query);
  getNoticeById(route.query.id).then((res) => {
    if (res.code == 200) activity_detail.value = res.data;
  });
});
</script>

<style lang="scss" scoped>
.activity {
  width: 100%;
  box-sizing: border-box;
  padding: 0.416rem 0.416rem calc(env(safe-area-inset-bottom) + 0.416rem) 0.416rem;
  .activity-content {
    width: 100%;
    font-size: 0.416rem;
  }
}
</style>
