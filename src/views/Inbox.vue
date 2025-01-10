<template>
  <div>
    <div class="promotion">
        <div class="item" v-for="(item, index) in msg" :key="index">{{ item.title }}</div>
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
const msg = computed(() => {
  return state.msg_list.records;
});
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.416rem 0.277rem 0.416rem;
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

</style>
