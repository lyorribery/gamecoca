<template>
  <div class="withdraw">
    <div class="withdraw-header">
      <div @click="goBack" class="arrow">
        <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
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
          <RectRight color="#fff" width=".361rem" height=".361rem" />
        </div>
      </div>
    </div>

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
      <span v-else>Confirm</span>
    </div>
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
          <Close color="#fff" width=".416rem" height=".416rem" />
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
          <span>{{ item.showname }}</span>
        </div>
        <Check v-if="item.checked" color="#49BF6A" width=".444rem" height=".444rem" />
      </div>
    </div>
  </nut-popup>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { RectLeft, RectRight, Close, Check } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { withdraw } from "@/apis/apis";
const router = useRouter();
let { state, commit } = useStore();
const max_amount = computed(() => {
  if (state.user_info.gold < state.user_info.bindGold) {
    return state.user_info.gold / 100;
  } else {
    return state.user_info.bindGold / 100;
  }
});
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
    Number(amount_val.value) < state.global_config.minWithdraw / 100
  ) {
    commit(
      "set_tip_info",
      `The minimum withdrawal amount is ₵${state.global_config.minWithdraw / 100}`
    );
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
    return;
  }
  let chanel_name = "";
  for (let i in channel_list.value) {
    if (channel_list.value[i].checked) {
      chanel_name = channel_list.value[i].name;
      break;
    }
  }
  if (is_loading.value) return;
  is_loading.value = true;
  withdraw
    .post("", {
      channel: chanel_name,
      amount: Number((Number(amount_val.value) * 100).toFixed(0)),
    })
    .then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        if (res.data.result === 0) {
          router.push({
            path: "/pay",
            query: {
              type: 2,
            },
          });
        } else if (res.data.result === 1) {
          commit("set_tip_info", "You have a withdrawal order being processed");
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
      channel_list.value[i].checked = true;
      cur_channel.value = channel_list.value[i].showname;
    } else {
      channel_list.value[i].checked = false;
    }
  }
  channel_visible.value = false;
};
const channel_list = ref([
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
onMounted(() => {
  if (JSON.stringify(state.user_info) != "{}") {
    const channel_num = state.user_info.mobile.slice(3).slice(0, 3);
    switch (channel_num) {
      case "024":
      case "054":
      case "055":
      case "059":
        cur_channel.value = "MoMo";
        channel_list.value[0].checked = true;
        break;
      case "020":
      case "050":
        cur_channel.value = "Vodafone";
        channel_list.value[1].checked = true;
        break;
      case "027":
      case "057":
      case "026":
      case "056":
        cur_channel.value = "AirtelTigo";
        channel_list.value[2].checked = true;
        break;
      default:
        cur_channel.value = "MoMo";
        channel_list.value[0].checked = true;
        break;
    }
  }
});
</script>

<style lang="scss" scoped>
.channel-box {
  width: 100%;
  background: #382b63;
  box-sizing: border-box;
  padding: 0 0.416rem;
  .channel-item {
    width: 100%;
    height: 1.388rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.027rem solid #514380;
    div {
      display: flex;
      align-items: center;
      img {
        width: 0.694rem;
        margin-right: 0.222rem;
      }
      span {
        font-size: 0.361rem;
        color: #fff;
      }
    }
  }
  .channel-title {
    width: 100%;
    height: 1.111rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.425rem;
    color: #ffffff;
    .close {
      position: absolute;
      right: 0;
      top: 0.416rem;
    }
  }
}
.withdraw {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #432084, #161326);
  .btn {
    width: calc(100% - 1.666rem);
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom) + 0.833rem);
    left: 0.833rem;
    height: 1.269rem;
    background: linear-gradient(-90deg, #9343c4, #614ae6);
    border-radius: 0.63rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.472rem;
    color: #ffffff;
  }
  .withdraw-box {
    width: calc(100% - 0.833rem);
    border-radius: 0.444rem;
    background: linear-gradient(90deg, #5e30fa, #9932fc);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.416rem;
    overflow: hidden;
    margin-top: 0.416rem;
    .pay-type-row {
      margin-top: 0.277rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 0.361rem;
        color: #fff;
        padding-right: 0.083rem;
      }
    }
    .sub-title {
      width: 100%;
      text-align: left;
      font-size: 0.361rem;
      color: #ffffff;
    }
    .ipt-box {
      width: 100%;
      height: 1.388rem;
      border-bottom: 0.041rem solid rgba(255, 255, 255, 0.2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #fff;
        font-weight: bold;
        font-size: 0.416rem;
      }
      .all-btn {
        width: 1.063rem;
        height: 0.527rem;
        border-radius: 0.258rem;
        border: 0.027rem solid #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.333rem;
        color: #ffffff;
      }
    }
  }
  .label {
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding: 0.416rem 0.416rem 0 0.416rem;
    color: #ffffff;
    .l {
      font-size: 0.369rem;
      font-weight: 600;
    }
    .i {
      font-weight: bold;
      font-size: 0.741rem;
      padding-right: 0.138rem;
    }
    .d {
      font-weight: bold;
      font-size: 1.202rem;
    }
  }
  .withdraw-header {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    .sub-title {
      color: #fff;
      font-size: 0.347rem;
      font-weight: 600;
      position: fixed;
      top: 0.583rem;
      right: 0.416rem;
    }
  }
}
</style>
