<template>
  <div class="classfication">
    <div class="classfication-header">
      <div class="back" @click="goBack">
        <RectLeft color="#fff" width=".416rem" height=".416rem" />
      </div>
      <span>{{ name }}</span>
    </div>
    <div class="search-box">
      <div class="search-ipt">
        <svg
          t="1736528506232"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4324"
          width="16"
          height="16"
        >
          <path
            d="M951.941266 475.970633a475.970633 475.970633 0 1 0-475.970633 475.970633 475.970633 475.970633 0 0 0 475.970633-475.970633z m-832.434409 0a356.463776 356.463776 0 1 1 356.463776 356.463776 356.463776 356.463776 0 0 1-356.463776-356.463776z m609.945976 253.553124a57.732096 57.732096 0 0 0 0 81.491619L925.770328 1007.1201A57.590248 57.590248 0 0 0 1007.1201 925.62848l-196.175648-196.033799-42.55437 42.19975 196.104723 196.104724a2.127719 2.127719 0 0 1 0-3.04973 2.198642 2.198642 0 0 1 2.978806 0l-195.608256-196.0338a2.056795 2.056795 0 0 1 0 2.978806 2.198642 2.198642 0 0 1-2.978806 0l42.554371-42.19975a57.519324 57.519324 0 0 0-81.420696 0z"
            fill="#707070"
            p-id="4325"
          ></path>
        </svg>
        <nut-input v-model="searchKey" placeholder="Search" />
      </div>
    </div>
    <div class="classfication-container">
      <imgCard v-for="(items, indexs) in data" :key="indexs" :cardInfo="items" />
    </div>
    <pageFooter />
  </div>
</template>

<script>
import imgCard from "@/components/imgCard.vue";
import pageFooter from "@/components/pageFooter.vue";
import { RectLeft } from "@nutui/icons-vue";

export default {
  components: {
    imgCard,
    pageFooter,
  },
};
</script>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const { state } = useStore();
const list = ref([]);
const data = ref([]);
const name = ref("");
const searchKey = ref("");
const goBack = () => {
  router.go(-1);
};
watch(
  () => searchKey.value,
  (newValue, oldValue) => {
    data.value = list.value.filter((item) => {
      return item.gameName.toLowerCase().indexOf(newValue.toLowerCase()) > -1;
    });
  },
  { deep: true }
);
onMounted(() => {
  name.value = route.query.name;
  list.value = state.game_list.game.filter((item) => {
    return item.categoryId == route.query.id;
  });
  data.value = list.value;
});
</script>

<style lang="scss" scoped>
.search-box {
  width: 100%;
  margin-bottom: 0.277rem;
  box-sizing: border-box;
  padding: 0 0.277rem;
  .search-ipt {
    border: 1px solid #333333;
    width: 100%;
    border-radius: 0.111rem;
    box-sizing: border-box;
    padding: 0.138rem 0.277rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
.classfication-header {
  width: 100%;
  background: #222222;
  margin-bottom: 0.277rem;
  box-sizing: border-box;
  padding: 0.416rem 0.277rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .back {
    box-sizing: border-box;
    padding: 0.222rem;
    background: #333333;
    border-radius: 0.111rem;
    margin-right: 0.277rem;
  }
  span {
    color: #fff;
    font-size: 0.5rem;
    font-weight: bold;
  }
}
.classfication-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.277rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
