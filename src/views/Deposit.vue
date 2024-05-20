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
        <div class="hot" v-if="item.isRecommend == 2">Hot</div>
        <div class="r-amount">₵ {{ item.amount }}</div>
        <div class="p-amount">Get ₵{{ Number(item.amount) + Number(item.gift) }}</div>
      </div>
    </div>
    <div class="label" style="margin-top: 0">The minimum amount is ₵5.00</div>
    <div class="ipt-box">
      <span>₵</span>
      <nut-input
        style="background: transparent"
        v-model="amount_val"
        placeholder="Enter amount"
        type="number"
      />
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="clearVal" />
    </div>
    <div class="label">Select pay channel below</div>
    <div class="chanel-box">
      <div
        class="chanel"
        v-for="(item, index) in chanelList"
        :key="index"
        :class="item.checked ? 'in-checked' : ''"
        @click="chooseChanel(index)"
      >
        <img :src="item.icon" />
        <div class="chanel-name" :style="{ color: item.checked ? '#fff' : '' }">
          {{ item.showname }}
        </div>
      </div>
    </div>

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
  <div class="btn-row">
    <div class="btn" @click="submit">
      <svg
        v-if="is_loading"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width=".694rem"
        height=".694rem"
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
        xml:space="preserve"
      >
        <path
          fill="#FFFFFF"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          transform="rotate(275.098 25 25)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
      <span v-else> Pay ₵{{ amount_val ? amount_val : "--" }} </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { Close, Issue } from "@nutui/icons-vue";
import { deposit } from "@/apis/apis";
const { state, commit } = useStore();
const amount_val = ref("19.6");
const amount_id = ref(0);
const route = useRoute();
const router = useRouter();
// watch(
//   () => state.deposit_config,
//   (newValue) => {
//     quickList.value = newValue;
//     amount_val.value = newValue[2].amount;
//     amount_id.value = newValue[2].id;
//   }
// );
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
      amount_id.value = quickList.value[i].id;
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
  amount_id.value = 0;
};
const chanelList = ref([
  {
    showname: "MoMo",
    name: "MTN-gh",
    icon: require("../assets/images/mtn.png"),
    status: "",
    checked: false,
  },
  {
    showname: "Vodafone",
    name: "vodafone-gh",
    icon: require("../assets/images/vodafone.png"),
    status: "",
    checked: false,
  },
  {
    showname: "AirtelTigo",
    name: "tigo-gh",
    icon: require("../assets/images/tigo.png"),
    status: "",
    checked: false,
  },
]);
const is_loading = ref(false);
const submit = () => {
  if (!localStorage.getItem("token")) {
    commit("set_tip_info", "You have not logged in yet,please login.");
    commit("set_tip_type", 1);
    commit("set_tip_modal", true);
    return;
  }
  if (
    !amount_val.value ||
    Number(amount_val.value) < state.global_config.minRecharge / 100
  ) {
    commit("set_tip_info", "The minimum amount is ₵5.00");
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
    return;
  }
  let chanel_name = "";
  for (let i in chanelList.value) {
    if (chanelList.value[i].checked) {
      chanel_name = chanelList.value[i].name;
      break;
    }
  }
  let flag = false;
  for (let i in quickList.value) {
    if (quickList.value[i].amount == amount_val.value) {
      flag = true;
      break;
    }
  }
  if (is_loading.value) return;
  is_loading.value = true;
  deposit
    .post("", {
      channel: chanel_name,
      amount: Number((Number(amount_val.value) * 100).toFixed(0)),
      phone: state.user_info.mobile,
      id: flag ? amount_id.value : 0,
    })
    .then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        if (res.data.result === 0) {
          router.push({
            path: "/pay",
            query: {
              type: 1,
            },
          });
        } else if (res.data.result === 1) {
          commit("set_tip_info", "You have a recharge order that is being processed");
          commit("set_tip_type", 3);
          commit("set_tip_modal", true);
        }
      } else if (res.code == 2002) {
        commit("set_user_info", {});
        localStorage.removeItem("token");
        commit("set_tip_info", "You have not logged in yet,please login.");
        commit("set_tip_type", 1);
        commit("set_tip_modal", true);
      } else {
        commit("set_tip_info", res.msg);
        commit("set_tip_type", 3);
        commit("set_tip_modal", true);
      }
    });
};
onMounted(() => {
  quickList.value = state.deposit_config;
  if (JSON.stringify(state.user_info) != "{}") {
    const channel_num = state.user_info.mobile.slice(3).slice(0, 3);
    switch (channel_num) {
      case "024":
      case "054":
      case "055":
      case "059":
        chanelList.value[0].checked = true;
        break;
      case "020":
      case "050":
        chanelList.value[1].checked = true;
        break;
      case "027":
      case "057":
      case "026":
      case "056":
        chanelList.value[2].checked = true;
        break;
      default:
        chanelList.value[0].checked = true;
        break;
    }
  } else {
    chanelList.value[0].checked = true;
  }
  if (route.query.amount) {
    amount_val.value = route.query.amount;
    amount_id.value = 0;
    for (let i in quickList.value) {
      quickList.value[i].checked = false;
    }
  } else {
    chooseQuick(2);
    amount_val.value = quickList.value[2].amount;
    amount_id.value = quickList.value[2].id;
  }
});
</script>

<style lang="scss" scoped>
.btn-row {
  position: fixed;
  z-index: 9;
  bottom: calc(env(safe-area-inset-bottom) + 1.527rem);
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #18171e;
  box-sizing: border-box;
  padding-bottom: .277rem;
  .btn {
    width: calc(100% - 1.666rem);
    height: 1.166rem;
    background: linear-gradient(-90deg, #9343c4, #614ae6);
    border-radius: .611rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: .472rem;
    font-weight: bold;
  }
}

.deposit {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) .416rem
    calc(env(safe-area-inset-bottom) + .277rem + 1.166rem) .416rem;
  .des {
    margin: .416rem 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 .555rem;
    color: #D9D9D9;
    font-weight: bold;
    font-size: .333rem;
    text-align: center;
  }
  .tip-row {
    color: #999999;
    font-size: .333rem;
    width: 100%;
    text-align: left;
    margin-top: .277rem;
  }
  .line-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .555rem;
    .line {
      flex: 1;
      height: .0138rem;
      background: #999999;
    }
    span {
      font-weight: 600;
      font-size: .333rem;
      color: #999999;
      padding: 0 .138rem;
    }
  }
  .chanel-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .277rem;
    .chanel {
      width: calc((100% - .555rem) / 3);
      height: 1.444rem;
      border-radius: .444rem;
      border: .041rem solid #382b63;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0 .277rem;
      color: #ccc3e2;
      img {
        height: .416rem;
        margin-bottom: .222rem;
      }
      .chanel-name {
        font-weight: bold;
        font-size: .361rem;
      }
    }
    .in-checked {
      color: #fff;
      border: .041rem solid #ff4bf4;
      background: #9d18b9;
    }
  }

  .ipt-box {
    margin-top: .138rem;
    width: 100%;
    height: 1.111rem;
    border-radius: .361rem;
    border: .041rem solid #692ddb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .416rem;
    span {
      color: #e556ff;
      font-weight: bold;
      font-size: .416rem;
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
      width: calc((100% - .555rem) / 3);
      border-radius: .444rem;
      color: #8068c8;
      border: .041rem solid #4b3f7a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: .138rem 0;
      margin-bottom: .277rem;
      .hot {
        position: absolute;
        top: -.138rem;
        right: -.055rem;
        width: .758rem;
        height: .341rem;
        background: linear-gradient(-90deg, #be42fd, #7802fd);
        border-radius: .036rem .222rem .036rem .036rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .25rem;
        font-weight: 600;
        color: #fff;
      }
      .r-amount {
        font-size: .416rem;
        font-weight: 600;
      }
      .p-amount {
        margin-top: .138rem;
        font-size: .333rem;
        font-weight: 600;
      }
    }
    .in-checked {
      color: #fff;
      border: .041rem solid #ff4bf4;
      background: #9d18b9;
    }
  }
  .label {
    margin: .277rem 0;
    font-weight: bold;
    color: #fff;
    font-size: .416rem;
  }
}
.deposit-header {
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
  border-bottom: .0138rem solid #29213d;
  .title {
    color: #fff;
    font-weight: bold;
    font-size: .472rem;
  }
  .sub-title {
    position: fixed;
    right: .416rem;
    top: calc(env(safe-area-inset-top) + .555rem);
    font-size: .347rem;
    font-weight: 600;
    color: #fff;
  }
}
</style>
