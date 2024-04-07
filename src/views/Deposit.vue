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
        <div class="hot" v-if="index == 1">Hot</div>
        <div class="r-amount">₵ {{ item.r_amount }}</div>
        <div class="p-amount">Get ₵{{ item.p_amount }}</div>
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
      <Close color="#9A87C8" width="13px" height="13px" @click="clearVal" />
    </div>
    <div class="label">The minimum amount is ₵5.00</div>
    <div
      class="chanel"
      v-for="(item, index) in chanelList"
      :key="index"
      :style="{ background: item.checked ? '#322658' : '' }"
      @click="chooseChanel(index)"
    >
      <div class="left" :style="{ background: item.checked ? '#4A3885' : '' }">
        <svg
          t="1712045031517"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5395"
          width="26"
          height="26"
        >
          <path
            d="M939.1976300088891 879.6488692622222c0 12.945382968888888-2.5890770488888886 25.890765937777775-7.767230008888888 36.247071857777776-5.17815296 10.35630592-10.35630592 20.71261184-18.123535928888888 31.068917759999998-7.767230008888888 7.767230008888888-18.123535928888888 15.534458879999999-28.47984184888889 20.712612977777777-10.35630592 5.17815296-23.301688888888886 7.767230008888888-36.247071857777776 7.7672288711111115H172.83097258666663c-12.945382968888888 0-25.890765937777775-2.5890770488888886-36.247071857777776-7.7672288711111115-12.945382968888888-5.17815296-23.301688888888886-10.35630592-31.068917759999998-20.712612977777777-7.767230008888888-7.767230008888888-15.534458879999999-18.123535928888888-20.712612977777777-31.068917759999998-5.17815296-10.35630592-7.767230008888888-23.301688888888886-7.7672288711111115-36.247071857777776V364.4226366577778c0-25.890765937777775 10.35630592-49.19245482666667 28.47984184888889-67.31598961777779 18.123535928888888-18.123535928888888 41.42522481777778-28.47984184888889 67.31598961777779-28.47984184888889h678.3380548266667c25.890765937777775 0 49.19245482666667 10.35630592 67.31598961777779 28.47984184888889 18.123535928888888 18.123535928888888 28.47984184888889 41.42522481777778 28.47984184888889 67.31598961777779v139.81013333333334H706.18074112c-25.890765937777775 0-49.19245482666667 7.767230008888888-67.31599075555556 25.890765937777775-18.123535928888888 18.123535928888888-28.47984184888889 38.836147768888885-28.47984184888889 67.31598961777779 0 18.123535928888888 5.17815296 33.657994808888894 10.35630592 46.60337777777777s15.534458879999999 23.301688888888886 28.47984184888889 31.068918897777777c12.945382968888888 10.35630592 31.068918897777777 15.534458879999999 54.37060778666666 15.534458879999999H939.1976300088891v189.00258816z m-139.81013333333334-657.6254418488888H330.7646418488889c36.247071857777776-18.123535928888888 72.49414371555555-38.836147768888885 106.15213852444442-56.95968369777778l85.43952554666666-46.60337777777777c28.47984184888889-15.534458879999999 49.19245482666667-25.890765937777775 67.31599075555556-36.247071857777776 23.301688888888886-12.945382968888888 46.60337777777777-18.123535928888888 64.72691370666666-18.123535928888888s36.247071857777776 5.17815296 49.19245368888889 10.35630592c15.534458879999999 7.767230008888888 28.47984184888889 18.123535928888888 38.836147768888885 31.068918897777777l56.95968483555556 116.50844444444445z m-139.81013333333334 375.4160981333333c0-12.945382968888888 5.17815296-23.301688888888886 12.945381831111112-33.657994808888894 7.767230008888888-7.767230008888888 20.71261184-12.945382968888888 33.65799594666667-12.945382968888888s23.301688888888886 5.17815296 33.657994808888894 12.945382968888888c7.767230008888888 7.767230008888888 12.945382968888888 20.71261184 12.945382968888888 33.657994808888894s-5.17815296 23.301688888888886-12.945382968888888 33.65799594666667-20.71261184 12.945382968888888-33.657994808888894 12.945381831111112-23.301688888888886-5.17815296-33.65799594666667-12.945381831111112c-7.767230008888888-7.767230008888888-12.945382968888888-18.123535928888888-12.945381831111112-33.65799594666667z m0 0"
            fill="#7962C6"
            p-id="5396"
          ></path>
        </svg>
      </div>
      <div class="right">
        <div class="chanel-name" :style="{ color: item.checked ? '#fff' : '' }">
          {{ item.name }}
        </div>
        <div class="status-des">
          <Issue
            :color="item.checked ? '#49BF6A' : '#9a87c8'"
            width="15px"
            height="15px"
          />
          <span :style="{ color: item.checked ? '#49BF6A' : '#9a87c8' }"
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
    <div class="tip-row">1.Select or enter the amount to deposit your WinWin wallet.</div>
    <div class="tip-row">2.The minimum amount is ₵5.00.</div>
    <div class="tip-row">
      3.Please ensure that you choose right network/operator and your mobile wallet has
      enough money.
    </div>
    <div class="tip-row">
      4.lf failed to deposit due to network issue, please try again later or contact our
      customer service.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Close, Issue } from "@nutui/icons-vue";
const amount_val = ref("95");
const router = useRouter();
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
      amount_val.value = quickList.value[i].r_amount;
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
    name: "MOMO",
    icon: "",
    status: "",
    checked: true,
  },
  {
    name: "MOMO",
    icon: "",
    status: "",
    checked: false,
  },
  {
    name: "MOMO",
    icon: "",
    status: "",
    checked: false,
  },
]);
const quickList = ref([
  {
    r_amount: "48",
    p_amount: "50",
    checked: false,
  },
  {
    r_amount: "95",
    p_amount: "100",
    checked: true,
  },
  {
    r_amount: "477",
    p_amount: "500",
    checked: false,
  },
  {
    r_amount: "977",
    p_amount: "1000",
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
    font-size: 10px;
    text-align: center;
  }
  .tip-row {
    color: #9a87c8;
    font-size: 11px;
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
      background: #9a87c8;
    }
    span {
      font-size: 11px;
      color: #9a87c8;
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
    padding: 10px 15px;
    .left {
      width: 36px;
      height: 36px;
      border-radius: 13px;
      background: #2f2751;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
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
        color: #9a87c8;
        margin-bottom: 8px;
      }
      .status-des {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          font-size: 10px;
          padding-left: 5px;
        }
      }
    }
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
    span {
      color: #e556ff;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .quick-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      position: relative;
      width: calc((100% - 15px) / 4);
      border-radius: 16px;
      color: #8068c8;
      border: 1.5px solid #4b3f7a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 0;
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
        font-size: 8px;
        color: #fff;
      }
      .r-amount {
        font-size: 14px;
      }
      .p-amount {
        margin-top: 5px;
        font-size: 10px;
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
    font-size: 13px;
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
    color: #fff;
  }
}
</style>
