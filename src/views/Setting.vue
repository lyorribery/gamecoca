<template>
  <div class="setting-header">
    <div class="arrow">
      <RectLeft color="#fff" width="18px" height="18px" @click="goBack" />
    </div>
    <div class="title">Setting</div>
  </div>
  <div class="setting">
    <div class="item">
      <div class="label">Phone Number</div>
      <div class="right">
        <span>+228 {{ user_info.mobile ? user_info.mobile : "" }}</span>
      </div>
    </div>
    <div class="item">
      <div class="label">
        <div>Name</div>
        <div class="des">Create your name first time to get <span>5 coins</span></div>
      </div>
      <div
        class="right"
        @click="
          () => {
            name_visible = true;
          }
        "
      >
        <span style="padding-right: 5px">{{
          user_info.name ? user_info.name : "Player" + user_info.id ? user_info.id : ""
        }}</span>
        <RectRight color="#CCC3E2" width="13px" height="13px" />
      </div>
    </div>
    <div class="item" @click="goPath('/forgetPass')">
      <div class="label">Change Password</div>
      <div class="right">
        <RectRight color="#CCC3E2" width="13px" height="13px" />
      </div>
    </div>
    <div class="item">
      <div class="label">Sound</div>
      <div class="right">
        <nut-switch v-model="sound_val" active-color="#E556FF" inactive-color="#382B63" />
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
        width="16px"
        height="16px"
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
        <Close color="#CCC3E2" width="13px" height="13px" @click="clearVal" />
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
const submit = () => {};
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
  left: 20px;
  top: 30%;
  width: calc(100% - 40px);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  background: #19142b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .submit-btn {
    margin-top: 30px;
    width: calc(100% - 60px);
    height: 42px;
    background: linear-gradient(-90deg, #351f5f, #2a2059);
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
  }
  .active-btn {
    background: linear-gradient(-90deg, #9932fc, #5b2efa);
  }
  .name-title {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
  .ipt-box {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border-radius: 13px;
    border: 1.5px solid #692ddb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
  }
}
.name-close {
  position: fixed;
  right: 20px;
  top: calc(30% - 30px);
}
.setting {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 15px 0 15px;
  .item {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      font-size: 13.3px;
      color: #fff;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .label {
      color: #fff;
      font-size: 14px;
      .des {
        padding-top: 3px;
        font-size: 11px;
        color: #CCC3E2;
        span {
          color: #e556ff;
        }
      }
    }
  }
}
.setting-header {
  z-index: 9;
  background: #19142b;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #29213d;
  .arrow {
    position: fixed;
    left: 15px;
    top: calc(env(safe-area-inset-top) + 18.5px);
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
