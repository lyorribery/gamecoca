<template>
  <transition
    name="fade"
    enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutUp"
  >
    <div class="tip-box" v-if="tip_visible">
      <div class="tip-content">
        {{ show_tip.msg }}
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const { state, commit } = useStore();
const show_tip = computed(() => {
  return state.show_tip;
});
const tip_visible=computed(()=>{
  return state.tip_visible
})
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.tip-box {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0.555rem;
  left: 0;
  z-index: 9999;
  .tip-content {
    border-radius: 0.194rem;
    background-color: #06a950;
    box-sizing: border-box;
    padding: 0.222rem 0.555rem;
    color: $color-white;
    font-size: 0.333rem;
    font-weight: 600;
  }
}
</style>
