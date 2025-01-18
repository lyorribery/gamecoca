<template>
  <div class="deposit">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="form-type">
      <div
        class="item item-left"
        :class="mode == 'deposit' ? 'active' : 'unactive'"
        @click="changeTab('deposit')"
      >
        Deposit
      </div>
      <div
        class="item item-right"
        :class="mode == 'withdraw' ? 'active' : 'unactive'"
        @click="changeTab('withdraw')"
      >
        Withdraw
      </div>
    </div>
    <div class="form-box" v-if="mode == 'deposit'">
      <div class="title-row">Select Type</div>
      <div class="form-row">
        <div
          class="type-item"
          :class="item.methodId == type_id ? 'active-type' : ''"
          v-for="(item, index) in pay_method"
          :key="index"
        >
          <img :src="item.fullMethodIcon" />
          <span>{{ item.methodName }}</span>
        </div>
      </div>
      <div class="title-row">Select a Channel</div>
      <div class="form-row">
        <div
          @click="changeChannel(item.channelId)"
          class="type-item"
          :class="item.channelId == deposit_form.channelId ? 'active-type' : ''"
          v-for="(item, index) in channel_list"
          :key="index"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="title-row">Amount Options</div>
      <div class="form-row">
        <div
          :class="
            item.basicValue == deposit_form.basicValue ? 'active-amount' : 'amount-item'
          "
          v-for="(item, index) in amount_list"
          :key="index"
          @click="changeAmount(item)"
        >
          <div class="basic">{{ item.basicValue }}</div>
          <div class="prize" v-if="item.prize">+{{ item.prize }}</div>
        </div>
      </div>
      <div class="title-row">Enter your amount</div>
      <div class="form-row">
        <div class="ipt-box">
          <div class="unit">
            <span>R$</span>
          </div>
          <nut-input
            v-model="deposit_form.basicValue"
            placeholder="Enter your amount"
            type="number"
          />
          <div class="promotion-des" v-if="deposit_form.prize">
            Extra+R${{ deposit_form.prize }}
          </div>
        </div>
      </div>

      <div class="bonus-list" v-for="(item, index) in active_list" :key="index">
        <span>{{ item.title }}</span>
        <svg
          @click="changeActive(item)"
          v-if="deposit_form.activityId == item.activityId"
          t="1737204345774"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6149"
          width="13"
          height="13"
        >
          <path
            d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"
            fill="#FFC02E"
            p-id="6150"
          ></path>
        </svg>
        <svg
          @click="changeActive(item)"
          v-else
          t="1737204345774"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6149"
          width="13"
          height="13"
        >
          <path
            d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"
            fill="#999999"
            p-id="6150"
          ></path>
        </svg>
      </div>
      <div class="confirm-btn" @click="depositSubmit()">
        Pay
        <svg
          v-if="is_loading"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="22px"
          height="22px"
          viewBox="0 0 50 50"
          style="enable-background: new 0 0 50 50"
          xml:space="preserve"
        >
          <path
            fill="#181717"
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
      </div>
    </div>
    <div class="rule" v-if="mode == 'deposit'" v-html="deposit_rule"></div>

    <div class="form-box" v-if="mode == 'withdraw'">
      <div class="withdraw-able">
        <div class="name">Withdrawable</div>
        <div class="able-amount">
          <span>
            {{
              withdraw_info.sumCompletedAmount
                ? withdraw_info.sumCompletedAmount.toFixed(2)
                : "0.00"
            }}
          </span>
          <svg
            t="1737227137216"
            class="icon"
            viewBox="0 0 1030 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7183"
            width="20"
            height="20"
          >
            <path
              d="M512 0C228.969 0 0 228.969 0 512s228.969 512 512 512 512-228.969 512-512C1022.41 228.969 793.441 0 512 0z m30.211 812.522h-90.633v-90.634h90.633v90.634z m106.534-357.764c-9.54 17.49-28.62 38.161-55.652 65.192-28.62 27.031-46.112 47.702-50.882 58.833-4.77 11.13-7.95 30.21-7.95 60.422l7.95 23.85h-90.633l-1.59-25.44c1.59-30.211 6.36-57.242 14.31-77.913 9.54-22.261 28.621-47.702 57.242-77.913 27.031-27.031 42.932-47.702 49.292-57.242 4.77-9.54 7.95-20.671 7.95-36.572 0-22.26-6.36-39.751-20.67-52.472-14.31-12.72-33.392-20.67-58.832-20.67-54.063 0-73.143 38.16-77.914 106.533h-90.633v-9.54c1.59-31.801 4.77-55.652 12.72-74.733 7.95-19.08 19.081-36.571 36.572-52.472 17.49-15.9 36.571-27.03 57.242-33.391 20.67-6.36 41.342-11.13 63.603-11.13 46.111 0 85.863 14.31 116.074 41.341s46.112 65.193 46.112 111.304c0 23.851-4.77 44.522-14.31 62.013z"
              p-id="7184"
              fill="#666666"
            ></path>
          </svg>
        </div>
        <div class="title-row">Enter your amount</div>
        <div class="form-row">
          <div class="ipt-box">
            <div class="unit">
              <span>R$</span>
            </div>
            <nut-input
              v-model="withdraw_form.basicValue"
              placeholder="Enter your amount"
              type="number"
            />
          </div>
        </div>
        <div class="tax-row">
          <div class="item">
            Withdraw Fee:<span>R${{ withdraw_form.basicValue }}</span>
          </div>
          <div class="item">Handing Fee:<span>R$1.00</span></div>
        </div>
        <div class="title-row">Carteira / Banco / Cartao</div>
        <div class="withdraw-box">
          <div
            class="item"
            v-for="(item, index) in trans_info.withdrawalAccounts"
            :key="index"
          >
            <img :src="pay_method[0].fullMethodIcon" />
            <div class="item-info">
              <div class="type">
                PIX<span style="color: #666666">({{ item.accountType }})</span>
              </div>
              <div class="pix-account">{{ item.account }}</div>
            </div>
          </div>
        </div>
        <div class="add-pix">
          <div class="left">
            <svg
              t="1737228926918"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="16142"
              width="21"
              height="21"
            >
              <path
                d="M1024 1024H0V234.666667h1024v789.333333zM85.333333 938.666667h853.333334V320H85.333333v618.666667z"
                p-id="16143"
                fill="#999999"
              ></path>
              <path
                d="M768 320H0V0h768v320zM85.333333 234.666667h597.333334V85.333333H85.333333v149.333334z"
                p-id="16144"
                fill="#999999"
              ></path>
              <path
                d="M778.666667 629.333333m-74.666667 0a74.666667 74.666667 0 1 0 149.333333 0 74.666667 74.666667 0 1 0-149.333333 0Z"
                p-id="16145"
                fill="#999999"
              ></path>
            </svg>
            <span>Add PIX</span>
          </div>
          <svg
            t="1737229102401"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3136"
            width="15"
            height="15"
          >
            <path
              d="M372.679931 191.690834c8.782014 0 17.565051 3.235694 24.26873 9.708106l297.484322 287.175535c13.408381 12.932544 13.408381 33.9226 0 46.855144l-297.485345 287.172465c-13.408381 12.9438-35.130102 12.9438-48.53746 0-13.408381-12.932544-13.408381-33.9226 0-46.855144l273.215592-263.744893L348.411201 248.25306c-13.408381-12.932544-13.408381-33.9226 0-46.855144C355.11488 194.926528 363.897917 191.68981 372.679931 191.690834z"
              p-id="3137"
              fill="#E6E6E6"
            ></path>
          </svg>
        </div>
        <div class="form-row">
            <modalCode :titleTrans="true" title="Transfication Password" @complete="onComplete" />
        </div>
        <div class="confirm-btn" style="margin-top:1.111rem" @click="withdrawSubmit()">
        Pay
        <svg
          v-if="is_loading"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="22px"
          height="22px"
          viewBox="0 0 50 50"
          style="enable-background: new 0 0 50 50"
          xml:space="preserve"
        >
          <path
            fill="#181717"
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
      </div>
      </div>
    </div>

    <div class="rule" v-if="mode == 'withdraw'" v-html="withdraw_rule"></div>

    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="deposit-page" v-if="show_deposit_page">
        <div class="deposit-close">
          <Close
            color="#CCC3E2"
            width=".361rem"
            height=".361rem"
            @click="show_deposit_page = false"
          />
        </div>
        <iframe
          :src="depositUrl"
          width="100%"
          :style="{ height: iframeHeight + 'px' }"
          frameborder="0"
          loading="lazy"
        ></iframe>
      </div>
    </transition>

    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="deposit-page" v-if="show_deposit_page_qr">
        <div class="deposit-close">
          <Close
            color="#CCC3E2"
            width=".361rem"
            height=".361rem"
            @click="show_deposit_page_qr = false"
          />
        </div>
        <div class="qr-box">
          <div class="amount">
            <img :src="pay_method[0].fullMethodIcon" />
            <span>R${{ deposit_form.basicValue }}</span>
          </div>
          <div class="des">OPen your payment app and scan the QR code below to pay</div>
          <img style="margin: 1.111rem 0 0.555rem 0" :src="qrCodeSrc" />
          <div class="count-down">
            <nut-countdown :start-time="nowtime" :end-time="countdown"></nut-countdown>
          </div>
          <div class="copy-qr-btn" @click="copyPix()">Copy PIX Code</div>
          <div class="des-copy">
            Paste the Pix code into your preferred banking app or digtal wallet and
            comfirm the payment
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import modalCode from "@/components/modalCode.vue";
export default {
  components: {
    modalCode,
  },
};
</script>

<script setup>
import QRCode from "qrcode";
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Close } from "@nutui/icons-vue";
import {
  WithdrawalInfo,
  GetRechargeActivity,
  GetTranscationInfo,
  GetRechargeActivityMoneyList,
  RechargeRule,
  WithdrawRule,
  RechargeActivityParticipation,
  PayOrderCreate,
} from "@/apis/deposit";

const { state, dispatch, commit } = useStore();
const route = useRoute();
const router = useRouter();

const withdrawSubmit=()=>{}
const onComplete = (val) => {
  console.log("complete", val);
  withdraw_form.value.transficaiton_password = val;
};
const withdraw_form = ref({
  basicValue: "",
  transficaiton_password:""
});
const copyPix = async () => {
  try {
    await navigator.clipboard.writeText(pix_no.value);
    commit("set_show_tip", { type: 1, msg: "copied" });
  } catch (err) {
    console.error("复制到剪贴板失败", err);
  }
};
const nowtime = ref(Date.now());
const pix_no = ref("");
const trade_no = ref("");
const countdown = ref(0);
const qrCodeSrc = ref("");
const iframeHeight = ref(0);
const depositUrl = ref("");
const show_deposit_page = ref(false);
const show_deposit_page_qr = ref(false);
const amount_list = ref([
  {
    basicValue: "100",
    prize: "",
  },
  {
    basicValue: "200",
    prize: "",
  },
  {
    basicValue: "300",
    prize: "",
  },
  {
    basicValue: "500",
    prize: "",
  },
  {
    basicValue: "1000",
    prize: "",
  },
  {
    basicValue: "2000",
    prize: "",
  },
  {
    basicValue: "5000",
    prize: "",
  },
]);

const is_loading = ref(false);
const depositSubmit = () => {
  if (is_loading.value) return;

  if (deposit_form.value.basicValue) is_loading.value = true;
  if (deposit_form.value.activityId != "") {
    RechargeActivityParticipation(deposit_form.value).then((res) => {
      if (res.code == 200) {
        if (res.data.type == "http") {
          depositUrl.value = res.data.content;
          show_deposit_page.value = true;
        } else {
          trade_no.value = res.data.outTradeNo;
          nowtime.value = Date.now();
          countdown.value = new Date().getTime() + res.data.timeExpire * 1000;
          pix_no.value = res.data.content;
          QRCode.toDataURL(res.data.content).then((url) => {
            qrCodeSrc.value = url;
            show_deposit_page_qr.value = true;
          });
        }
      } else {
        commit("set_show_tip", { type: 0, msg: res.msg });
      }
      is_loading.value = false;
    });
  } else {
    PayOrderCreate({
      rechargeAmount: deposit_form.value.basicValue,
      channelId: deposit_form.value.channelId,
      max: 10000,
      min: 10,
    }).then((res) => {
      if (res.code == 200) {
        if (res.data.type == "http") {
          depositUrl.value = res.data.content;
          show_deposit_page.value = true;
        } else {
          trade_no.value = res.data.outTradeNo;
          nowtime.value = Date.now();
          countdown.value = new Date().getTime() + res.data.timeExpire * 1000;
          pix_no.value = res.data.content;
          QRCode.toDataURL(res.data.content).then((url) => {
            qrCodeSrc.value = url;
            show_deposit_page_qr.value = true;
          });
        }
      } else {
        commit("set_show_tip", { type: 0, msg: res.msg });
      }
      is_loading.value = false;
    });
  }
};

const getRule = () => {
  RechargeRule().then((res) => {
    if (res.code == 200) deposit_rule.value = res.data.content;
  });
  WithdrawRule().then((res) => {
    if (res.code == 200) withdraw_rule.value = res.data.content;
  });
};
const getTransInfo = () => {
  GetTranscationInfo().then((res) => {
    if (res.code == 200) trans_info.value = res.data;
  });
};
const getDepositActive = () => {
  GetRechargeActivity().then((res) => {
    if (res.code == 200 && res.data) {
      GetRechargeActivityMoneyList({ activityId: res.data.activityId }).then((result) => {
        if (result.code == 200) {
          active_list.value = result.data;
          const list = amount_list.value;
          list.map((item) => {
            item.prize = (active_list.value[0].prizeValue / 100) * item.basicValue;
          });
          amount_list.value = list;
          deposit_form.value.activityId = active_list.value[0].activityId;
          deposit_form.value.prize =
            (active_list.value[0].prizeValue / 100) * deposit_form.value.basicValue;
        }
      });
    }
  });
};
const getWithdrawInfo = () => {
  WithdrawalInfo().then((res) => {
    if (res.code == 200) withdraw_info.value = res.data;
  });
};

const active_list = ref([]);
const current_active_list = ref({});
const trans_info = ref({});
const withdraw_info = ref({});
const withdraw_rule = ref("");
const deposit_rule = ref("");
const mode = ref("deposit");
const type_id = ref("");
const channel_list = ref([]);
const deposit_form = ref({
  activityId: "",
  basicValue: "100",
  channelId: "",
  prize: "",
});
const pay_method = ref([]);

const changeTab = (type) => {
  mode.value = type;
};
const changeChannel = (id) => {
  deposit_form.value.channelId = id;
};
const changeAmount = (data) => {
  deposit_form.value.basicValue = data.basicValue;
};
const changeActive = (data) => {
  if (deposit_form.value.activityId != "") {
    deposit_form.value.activityId = "";
    deposit_form.value.prize = "";
    amount_list.value.map((item) => {
      item.prize = "";
    });
  } else {
    deposit_form.value.activityId = data.activityId;
    deposit_form.value.prize = (data.prizeValue / 100) * deposit_form.value.basicValue;
    amount_list.value.map((item) => {
      item.prize = (item.basicValue * data.prizeValue) / 100;
    });
  }
};
const back = () => {
  router.go(-1);
};
watch(
  () => deposit_form.value.basicValue,
  (val) => {
    if (Number(val) < 10) deposit_form.value.basicValue = "10";
    if (active_list.value.length > 0)
      deposit_form.value.prize = (val * active_list.value[0].prizeValue) / 100;
  }
);
onBeforeUnmount(() => {
  dispatch("GET_USER_BALANCE");
});
onMounted(() => {
  getRule();
  getDepositActive();
  getTransInfo();
  getWithdrawInfo();
  pay_method.value = state.pay_method;
  type_id.value = pay_method.value[0].methodId;
  channel_list.value = pay_method.value[0].payChannels;
  deposit_form.value.channelId = channel_list.value[0].channelId;

  if (route.query.mode) mode.value = route.query.mode;

  iframeHeight.value = window.innerHeight - 40;
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.deposit {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.277rem 0.277rem 0.277rem;
  position: relative;
  .deposit-page {
    z-index: 3;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: $bg-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .qr-box {
      width: 100%;
      background: #222222;
      height: calc(100vh - 1.111rem);
      box-sizing: border-box;
      padding: 0.555rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .des-copy {
        width: 90%;
        font-size: 0.277rem;
        color: #cccccc;
      }
      .copy-qr-btn {
        margin: 0.416rem 0;
        width: 90%;
        height: 1.111rem;
        background: #ffc02e;
        border-radius: 0.555rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.361rem;
        color: #181717;
      }
      .count-down {
        color: $color-white;
        font-size: 0.416rem;
        font-weight: bold;
      }
      .des {
        width: 80%;
        background: #333333;
        color: $color-sub-text;
        font-size: 0.277rem;
        border-radius: 0.277rem;
        box-sizing: border-box;
        padding: 0.138rem 0.277rem;
      }
      .amount {
        width: 100%;
        margin-bottom: 0.416rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0.555rem;
          margin-right: 0.277rem;
        }
        span {
          color: $color-white;
          font-size: 0.555rem;
          font-weight: bold;
        }
      }
      img {
        width: 4.166rem;
      }
    }
    .deposit-close {
      width: 100%;
      height: 1.111rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.694rem;
    }
  }
  .form-box {
    margin: 0.416rem 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.416rem;
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;
    .add-pix {
      width: 100%;
      height: 1.111rem;
      background: rgba(15, 15, 15, 1);
      border-radius: 0.555rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.416rem;
      margin-top:0.277rem;
      .left {
        display: flex;
        align-items: center;
        span {
            padding-left: 0.416rem;
          font-weight: 400;
          font-size: 0.361rem;
          color: #e6e6e6;
        }
      }
    }
    .withdraw-box {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .active-item {
        border: 0.027rem solid $primary-color;
        color: #181717;
        background: $primary-color;
      }
      .item {
        width: 2.777rem;
        height: 0.916rem;
        border-radius: 0.472rem;
        border: 0.027rem solid #808080;
        font-weight: bold;
        font-size: 0.361rem;
        color: #808080;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.277rem;
        img {
          width: 0.472rem;
          margin-right: 0.222rem;
        }
        .item-info {
          .pix-account {
            font-size: #666666;
            font-size: 0.277rem;
            margin-top: 0.027rem;
          }
          .type {
            font-size: 0.305rem;
            color: $color-white;
            span {
              font-size: #666666;
              font-size: 0.25rem;
            }
          }
        }
      }
    }
    .tax-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.138rem;
      .item {
        font-weight: 400;
        font-size: 0.277rem;
        color: #e5e5e5;
        margin-right: 0.277rem;
        span {
          color: $primary-color2;
          font-size: 0.361rem;
          font-weight: 600;
        }
      }
    }
    .withdraw-able {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0.555rem 0 0.277rem 0;
      .name {
        font-weight: 400;
        font-size: 0.361rem;
        color: #e5e5e5;
        margin-bottom: 0.277rem;
      }
      .able-amount {
        position: relative;
        height: 0.916rem;
        svg {
          position: absolute;
          right: -0.8rem;
          bottom: 0.12rem;
        }
        span {
          font-weight: 400;
          font-size: 0.916rem;
          color: $primary-color;
        }
      }
    }
    .confirm-btn {
      margin: 0.416rem 0;
      width: 100%;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
    }

    .bonus-list {
      margin-top: 0.277rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        font-weight: 400;
        font-size: 0.361rem;
        color: #ffc02e;
        padding-right: 0.277rem;
      }
    }
    .form-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      .ipt-box {
        width: 100%;
        height: 1.111rem;
        background: rgba(15, 15, 15, 1);
        border-radius: 0.555rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0.416rem;
        .promotion-des {
          font-weight: 400;
          font-size: 0.361rem;
          color: #21f52b;
        }
        .unit {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-right: 0.416rem;
          border-right: 0.054rem solid #e5e5e5;
          span {
            font-weight: bold;
            font-size: 0.361rem;
            color: #e5e5e5;
          }
        }
      }
      .active-amount {
        margin-right: 0.277rem;
        margin-bottom: 0.277rem;
        width: calc((100% - 0.554rem) / 3);
        height: 1.472rem;
        box-sizing: border-box;
        border-radius: 0.277rem;
        border: 0.027rem solid #ffc02e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(77, 60, 21, 0.3);
        .basic {
          font-weight: bold;
          font-size: 0.444rem;
          color: #ffc02e;
        }
        .prize {
          margin-top: 0.138rem;
          font-weight: bold;
          font-size: 0.361rem;
          color: #21f52b;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      .amount-item {
        margin-right: 0.277rem;
        margin-bottom: 0.277rem;
        width: calc((100% - 0.554rem) / 3);
        height: 1.472rem;
        box-sizing: border-box;
        background: rgba(15, 15, 15, 0.3);
        border-radius: 0.277rem;
        border: 0.027rem solid #3d3d3d;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .basic {
          font-weight: 400;
          font-size: 0.444rem;
          color: #cccccc;
        }
        .prize {
          margin-top: 0.138rem;
          font-weight: 400;
          font-size: 0.361rem;
          color: #ffcb78;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      .type-item {
        width: 2.777rem;
        height: 0.916rem;
        border-radius: 0.472rem;
        border: 0.027rem solid #808080;
        font-weight: bold;
        font-size: 0.361rem;
        color: #808080;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.277rem;
        img {
          width: 0.472rem;
          margin-right: 0.277rem;
        }
      }
      .active-type {
        border: 0.027rem solid $primary-color;
        color: #181717;
        background: $primary-color;
      }
    }
    .title-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 0.416rem 0 0.222rem 0;
      font-weight: bold;
      font-size: 0.361rem;
      color: #999999;
    }
  }
  .form-type {
    display: flex;
    align-items: center;
    .item {
      width: 3.222rem;
      height: 0.916rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
    }
    .item-left {
      border-radius: 0.472rem 0px 0px 0.472rem;
    }
    .item-right {
      border-radius: 0px 0.472rem 0.472rem 0px;
    }
    .active {
      background: $primary-color;
      color: $color-black;
    }
    .unactive {
      background: #0d0d0d;
      color: #808080;
    }
  }

  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0.416rem 0.694rem;
  }
}
</style>
