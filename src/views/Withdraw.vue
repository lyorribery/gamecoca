<template>
  <div class="withdraw">
    <div class="withdraw-header">
      <div class="arrow">
        <RectLeft color="#fff" width="15px" height="15px" @click="goBack" />
      </div>
      <div class="title">Withdraw</div>
      <div class="sub-title" @click="goRecords()">Records</div>
    </div>
    <div class="label">
      <span class="l">Withdrawable Amount</span>
    </div>
    <div class="label">
      <span class="i">₵</span>
      <span class="d">{{ max_amount ? max_amount.toFixed(2) : "--" }}</span>
    </div>
    <div class="withdraw-box">
      <div class="sub-title">Withdrawal Amount</div>
      <div class="ipt-box">
        <span>₵</span>
        <nut-input
          style="background: transparent"
          v-model="amount_val"
          placeholder="Enter amount"
          type="number"
        />
        <div class="all-btn" @click="quick">ALL</div>
      </div>
      <div class="pay-type-row">
        <span>Withdrawal channels</span>
        <div class="right" @click="showChannels">
          <span>{{ cur_channel }}</span>
          <RectRight color="#fff" width="13px" height="13px" />
        </div>
      </div>
    </div>

    <div class="btn">Confirm</div>
  </div>
  <nut-popup v-model:visible="channel_visible" position="bottom" round>
    <div class="channel-box">
      <div class="channel-title">
        <span>Choose a withdrawal channel</span>
        <div
          class="close"
          @click="
            () => {
              channel_visible = false;
            }
          "
        >
          <Close color="#fff" width="15px" height="15px" />
        </div>
      </div>
      <div
        class="channel-item"
        v-for="(item, index) in channel_list"
        :key="index"
        @click="chooseChannel(index)"
      >
        <div>
          <img :src="item.icon" />
          <span>{{ item.name }}</span>
        </div>
        <Check v-if="item.isChecked" color="#49BF6A" width="16px" height="16px" />
      </div>
    </div>
  </nut-popup>
</template>

<script setup>
import { ref, computed } from "vue";
import { RectLeft, RectRight, Close, Check } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
let { state } = useStore();
const max_amount = computed(() => {
  return state.user_info.gold / 100;
});
const amount_val = ref("");
const channel_visible = ref(false);
const cur_channel = ref("MoMo");
const quick = () => {
  amount_val.value = max_amount.value.toString();
};
const showChannels = () => {
  channel_visible.value = true;
};
const chooseChannel = (index) => {
  for (let i in channel_list.value) {
    if (i == index) {
      channel_list.value[i].isChecked = true;
      cur_channel.value = channel_list.value[i].name;
    } else {
      channel_list.value[i].isChecked = false;
    }
  }
  channel_visible.value = false;
};
const channel_list = ref([
  {
    name: "MoMo",
    isChecked: true,
    icon: require("../assets/images/img_zf_1.svg"),
  },
  {
    name: "Vodafone",
    isChecked: false,
    icon: require("../assets/images/img_zf_2.svg"),
  },
  {
    name: "AirtelTigo",
    isChecked: false,
    icon: require("../assets/images/img_zf_3.svg"),
  },
]);
const goBack = () => {
  router.go(-1);
};
const goRecords = () => {
  router.push({
    path: "/records",
    query: {
      type: 2,
    },
  });
};
</script>

<style lang="scss" scoped>
.channel-box {
  width: 100%;
  background: #382b63;
  box-sizing: border-box;
  padding: 0 15px;
  .channel-item {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #514380;
    div {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        margin-right: 8px;
      }
      span {
        font-size: 13px;
        color: #fff;
      }
    }
  }
  .channel-title {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15.3px;
    color: #ffffff;
    .close {
      position: absolute;
      right: 0;
      top: 15px;
    }
  }
}
.withdraw {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #432084, #19142b);
  .btn {
    width: calc(100% - 60px);
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom) + 30px);
    left: 30px;
    height: 45.7px;
    background: linear-gradient(-90deg, #9932fc, #5b2efa);
    border-radius: 22.7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 17.3px;
    color: #ffffff;
  }
  .withdraw-box {
    width: calc(100% - 30px);
    border-radius: 16px;
    background: linear-gradient(90deg, #5e30fa, #9932fc);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    overflow: hidden;
    margin-top: 15px;
    .pay-type-row {
      margin-top: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 13px;
        color: #fff;
        padding-right: 3px;
      }
    }
    .sub-title {
      width: 100%;
      text-align: left;
      font-size: 13px;
      color: #ffffff;
    }
    .ipt-box {
      width: 100%;
      height: 50px;
      border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #fff;
        font-weight: bold;
        font-size: 15px;
      }
      .all-btn {
        width: 38.3px;
        height: 19px;
        border-radius: 9.3px;
        border: 1px solid #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12.7px;
        color: #ffffff;
      }
    }
  }
  .label {
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding: 15px 15px 0 15px;
    color: #ffffff;
    .l {
      font-size: 13.3px;
      font-weight: 600;
    }
    .i {
      font-weight: bold;
      font-size: 26.7px;
      padding-right: 5px;
    }
    .d {
      font-weight: bold;
      font-size: 43.3px;
    }
  }
  .withdraw-header {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow {
      position: fixed;
      top: 20px;
      left: 15px;
    }
    .title {
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
    .sub-title {
      color: #fff;
      font-size: 12.5px;
      font-weight: 600;
      position: fixed;
      top: 21px;
      right: 15px;
    }
  }
}
</style>
