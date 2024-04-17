<template>
  <div class="deposit-header">
    <span class="title">Deposit</span>
    <span class="sub-title" @click="goRecords">Records</span>
  </div>
  <div class="deposit">
    <div class="label">Select amount below</div>
    <div class="quick-box">
      <div
        class="item"
        v-for="(item, index) in quickList"
        :key="index"
        :class="item.checked ? 'in-checked' : ''"
        @click="chooseQuick(index)"
      >
        <div class="hot" v-if="item.is_hot">Hot</div>
        <div class="r-amount">₵ {{ item.amount }}</div>
        <div class="p-amount">Get ₵{{ Number(item.amount) + Number(item.gift) }}</div>
      </div>
    </div>
    <div class="ipt-box">
      <span>₵</span>
      <nut-input
        style="background: transparent"
        v-model="amount_val"
        placeholder="Enter amount"
        type="number"
      />
      <Close color="#CCC3E2" width="13px" height="13px" @click="clearVal" />
    </div>
    <div class="label">The minimum amount is ₵5.00</div>
    <div
      class="chanel"
      v-for="(item, index) in chanelList"
      :key="index"
      :style="{ background: item.checked ? '#322658' : '' }"
      @click="chooseChanel(index)"
    >
      <div class="left">
        <img :src="item.icon" />
      </div>
      <div class="right">
        <div class="chanel-name" :style="{ color: item.checked ? '#fff' : '' }">
          {{ item.name }}
        </div>
        <div class="status-des">
          <Issue
            :color="item.checked ? '#49BF6A' : '#CCC3E2'"
            width="15px"
            height="15px"
          />
          <span :style="{ color: item.checked ? '#49BF6A' : '#CCC3E2' }"
            >This channel is currenti normal,please feel feer to deposit</span
          >
        </div>
      </div>
    </div>
    <div class="btn">Pay ₵{{ amount_val ? amount_val : "--" }}</div>
    <div class="des">
      You can only use your register number to top up your wallet,if not correct please
      register with your mobile money number again.
    </div>
    <div class="line-box">
      <div class="line"></div>
      <span>Deposit Tips</span>
      <div class="line"></div>
    </div>
    <div class="tip-row">
      1.Select or enter the amount to deposit your GameCoca wallet.
    </div>
    <div class="tip-row">2.The minimum amount is ₵5.00.</div>
    <div class="tip-row">
      3.Please ensure that you choose right network/operator and your mobile wallet has
      enough money.
    </div>
    <div class="tip-row">
      4.If failed to deposit due to network issue, please try again later or contact our
      customer service.
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Close, Issue } from "@nutui/icons-vue";
import apiconfig from "@/utils/apiConfig";
const img_url = apiconfig.fileURL;
let { state } = useStore();
const amount_val = ref("5");
const router = useRouter();
watch(
  () => state.deposit_config,
  (newValue) => {
    quickList.value = newValue;
    amount_val.value = newValue[3].amount;
  }
);
const quickList = ref(state.deposit_config);
const goRecords = () => {
  router.push({
    path: "/records",
    query: {
      type: 1,
    },
  });
};
const chooseQuick = (index) => {
  for (let i in quickList.value) {
    if (index == i) {
      quickList.value[i].checked = true;
      amount_val.value = quickList.value[i].amount;
    } else {
      quickList.value[i].checked = false;
    }
  }
};
const chooseChanel = (index) => {
  for (let i in chanelList.value) {
    if (index == i) {
      chanelList.value[i].checked = true;
    } else {
      chanelList.value[i].checked = false;
    }
  }
};
const clearVal = () => {
  amount_val.value = "";
};
const chanelList = ref([
  {
    name: "MoMo",
    icon: require("../assets/images/img_zf_1.svg"),
    status: "",
    checked: true,
  },
  {
    name: "Vodafone",
    icon: require("../assets/images/img_zf_2.svg"),
    status: "",
    checked: false,
  },
  {
    name: "AirtelTigo",
    icon: require("../assets/images/img_zf_3.svg"),
    status: "",
    checked: false,
  },
]);
</script>

<style lang="scss" scoped>
.deposit {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 15px 0 15px;
  .des {
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }
  .tip-row {
    color: #ccc3e2;
    font-size: 12px;
    width: 100%;
    text-align: left;
    margin-top: 15px;
  }
  .line-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    .line {
      flex: 1;
      height: 0.5px;
      background: #ccc3e2;
    }
    span {
      font-weight: 600;
      font-size: 12px;
      color: #ccc3e2;
      padding: 0 5px;
    }
  }
  .btn {
    width: calc(100% - 30px);
    margin: 25px 0 0 15px;
    height: 42px;
    background: linear-gradient(-90deg, #9932fc, #5b2efa);
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
  }
  .chanel {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 16px;
    border: 1.5px solid #382b63;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    .left {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      img {
        width: 30px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      .chanel-name {
        font-weight: bold;
        font-size: 13px;
        color: #ccc3e2;
        margin-bottom: 8px;
      }
      .status-des {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          font-size: 10px;
          font-weight: 600;
          padding-left: 5px;
        }
      }
    }
  }
  .ipt-box {
    margin-top: 5px;
    width: 100%;
    height: 40px;
    border-radius: 13px;
    border: 1.5px solid #692ddb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
    span {
      color: #e556ff;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .quick-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .item {
      position: relative;
      width: calc((100% - 30px) / 3);
      border-radius: 16px;
      color: #8068c8;
      border: 1.5px solid #4b3f7a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 0;
      margin-bottom: 15px;
      .hot {
        position: absolute;
        top: -5px;
        right: -2px;
        width: 27.3px;
        height: 12.3px;
        background: linear-gradient(-90deg, #be42fd, #7802fd);
        border-radius: 1.3px 8px 1.3px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 9px;
        font-weight: 600;
        color: #fff;
      }
      .r-amount {
        font-size: 15px;
        font-weight: 600;
      }
      .p-amount {
        margin-top: 5px;
        font-size: 11px;
        font-weight: 600;
      }
    }
    .in-checked {
      color: #fff;
      border: 1.5px solid #ff4bf4;
      background: #9d18b9;
    }
  }
  .label {
    margin: 20px 0;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
  }
}
.deposit-header {
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
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
  .sub-title {
    position: fixed;
    right: 15px;
    top: calc(env(safe-area-inset-top) + 21.25px);
    font-size: 12.5px;
    font-weight: 600;
    color: #fff;
  }
}
</style>
