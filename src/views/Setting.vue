<template>
  <div class="setting-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
    </div>
    <div class="title">Setting</div>
  </div>
  <div class="setting">
    <div class="item">
      <div class="label">Phone Number</div>
      <div class="right">
        <span>{{ user_info.mobile ? user_info.mobile : "" }}</span>
      </div>
    </div>

    <div class="item" @click="goPath('/forgetPass')">
      <div class="label">Change Password</div>
      <div class="right">
        <RectRight color="#CCC3E2" width=".361rem" height=".361rem" />
      </div>
    </div>
  </div>
  <nut-overlay
    v-model:visible="name_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="name-close">
      <Close
        color="#fff"
        width=".444rem"
        height=".444rem"
        @click="
          () => {
            name_visible = false;
          }
        "
      />
    </div>
    <div class="name-box">
      <div class="name-title">Name</div>
      <div class="ipt-box">
        <nut-input
          style="background: transparent"
          v-model="name_val"
          placeholder="Enter a 6-16 digit name"
          maxLength="16"
        />
        <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="clearVal" />
      </div>
      <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="submit">
        Submit
      </div>
    </div>
  </nut-overlay>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { RectLeft, RectRight, Close } from "@nutui/icons-vue";
const router = useRouter();
const name_visible = ref(false);
const sound_val = ref(true);
const name_val = ref("");
const is_enter = ref(false);
let { state } = useStore();
watch(
  () => name_val,
  (newValue, oldValue) => {
    if (newValue.value && newValue.value.length >= 6 && newValue.value.length <= 16) {
      is_enter.value = true;
    } else {
      is_enter.value = false;
    }
  },
  { deep: true }
);
const user_info = computed(() => {
  name_val.value = state.user_info.name ? state.user_info.name : "";
  return state.user_info;
});
const submit = () => {
  name_visible.value = false;
};
const clearVal = () => {
  name_val.value = "";
};
const goPath = (path) => {
  router.push({
    path,
  });
};
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.name-box {
  position: fixed;
  left: 0.555rem;
  top: 30%;
  width: calc(100% - 1.111rem);
  border-radius: 0.277rem;
  box-sizing: border-box;
  padding: 0.416rem;
  background: #181b2c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .submit-btn {
    margin-top: 0.833rem;
    width: calc(100% - 1.666rem);
    height: 1.166rem;
    background: linear-gradient(-90deg, #351f5f, #2a2059);
    border-radius: 0.6111rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.472rem;
    font-weight: bold;
  }
  .active-btn {
    background: linear-gradient(-90deg, #9343c4, #614ae6);
  }
  .name-title {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 0.388rem;
  }
  .ipt-box {
    margin-top: 0.555rem;
    width: 100%;
    height: 40px;
    border-radius: 0.361rem;
    border: 0.041rem solid #692ddb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.416rem;
  }
}
.name-close {
  position: fixed;
  right: 0.555rem;
  top: calc(30% - 0.833rem);
}
.setting {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 0.416rem 0 0.416rem;
  .item {
    width: 100%;
    height: 1.388rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      font-size: 0.388rem;
      color: #fff;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .label {
      color: #fff;
      font-size: 0.416rem;
      .des {
        padding-top: 0.083rem;
        font-size: 0.305rem;
        color: #ccc3e2;
        span {
          color: #e556ff;
        }
      }
    }
  }
}
.setting-header {
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
  border-bottom: 0.013rem solid #29213d;
  .arrow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    left: 0.416rem;
    top: 0.555rem;
    span {
      font-weight: bold;
      font-size: 0.361rem;
      color: #ffffff;
      padding-left: 0.138rem;
    }
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 0.472rem;
  }
}
</style>
