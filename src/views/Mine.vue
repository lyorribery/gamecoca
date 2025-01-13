<template>
  <div class="mine">
    <div class="info-box">
      <div class="info">
        <div class="avatar">
          <img src="../assets/images/avatar/3.png" />
          <div class="level">{{ user_info.levelName }}</div>
        </div>
        <div class="info-user">
          <div class="val" style="margin-bottom: 0.138rem">
            Account:{{ user_info.userName }}
          </div>
          <div class="val">
            ID:{{ user_info.userId }}
            <div class="copy-btn" @click="copyId">
              <svg
                t="1736770609856"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4316"
                width="24"
                height="24"
              >
                <path
                  d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                  fill="#FFC536"
                  p-id="4317"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="action">
        <img src="../assets/images/mine/email.png" />
        <img src="../assets/images/mine/shouji.png" />
        <div class="action-btn">{{ $t("button.change") }}</div>
      </div>
    </div>
    <div class="action-box">
      <div class="wallet-box">
        <div class="action">
          <img src="../assets/images/mine/qianbao.png" />
          <div>
            Central <br />
            Wallet
          </div>
        </div>
        <div class="action">
          <img src="../assets/images/mine/tixian.png" />
          <div>Withdraw <br />Details</div>
        </div>
        <div class="action">
          <img src="../assets/images/mine/chongzhi.png" />
          <div>
            Desposit<br />
            Details
          </div>
        </div>
      </div>
      <div class="vip-box">
        <img src="../assets/images/mine/zuojiantou.png" class="arrow" />
        <div class="left">
          <div class="des">
            <span class="name">Deposit</span>
            <div class="data">
              <span class="cur">{{
                user_info.totalRechargeAmount
                  ? user_info.totalRechargeAmount.toFixed(2)
                  : "0.00"
              }}</span>
              <span class="total"
                >/{{ progress_data.payment ? progress_data.payment : "0.00" }}</span
              >
            </div>
          </div>
          <nut-progress
            style="margin-bottom: 0.277rem"
            :percentage="
              (user_info.totalRechargeAmount / progress_data.payment) * 100 || 0
            "
            :show-text="false"
            size="small"
            stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
          />
          <div class="des">
            <span class="name">Total Bet</span>
            <div class="data">
              <span class="cur">{{
                user_info.totalBetAmount ? user_info.totalBetAmount.toFixed(2) : "0.00"
              }}</span>
              <span class="total"
                >/{{ progress_data.statement ? progress_data.statement : "0.00" }}</span
              >
            </div>
          </div>
          <nut-progress
            :percentage="(user_info.totalBetAmount / progress_data.statement) * 100 || 0"
            :show-text="false"
            size="small"
            stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
          />
        </div>
        <div class="right">
          <img :src="cur_level.levelIcon ? cur_level.levelIcon : ''" />
          <div class="vip-progress">
            <span>{{ user_info.levelName ? user_info.levelName : "" }}</span>

            <svg
              style="margin: 0 0.138rem"
              t="1736775693647"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6165"
              width="12"
              height="12"
            >
              <path
                d="M 223.361 656.774 H 501.401 V 368.029 H 223.361 v 288.745 Z M 3.3391 394.331 v 231.082 c 0 37.8764 25.5309 31.3608 25.5309 31.3608 h 122.984 V 368.029 H 24.7458 s -21.4067 -0.678536 -21.4067 26.3028 Z m 1007.51 90.0756 c -35.2839 -34.4771 -377.398 -287.565 -377.398 -287.565 s -39.4069 -38.9818 -39.4069 19.456 v 151.729 h -0.414226 v 288.746 h 0.055993 v 161.675 c 0 47.9112 38.0065 6.25133 38.0065 6.25133 l 376.25 -291.311 c -0.000602 0.001204 28.6214 -23.9553 2.90681 -48.9811 Z m 0 0"
                p-id="6166"
                fill="#616161"
              ></path>
            </svg>

            <span>{{ next_level }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="details-box">
      <div class="item">
        <img src="../assets/images/mine/bnt_account.png" />
        <div>Account<br />Details</div>
      </div>
      <div class="item">
        <img src="../assets/images/mine/bnt_deposit.png" />
        <div>Deposit<br />Details</div>
      </div>
      <div class="item">
        <img src="../assets/images/mine/bnt_tixian.png" />
        <div>Withdraw<br />Details</div>
      </div>
      <div class="item">
        <img src="../assets/images/mine/bnt_youxiji.png" />
        <div>Bet<br />Details</div>
      </div>
      <div class="item">
        <img src="../assets/images/mine/bnt_liwu.png" />
        <div>Bonus<br />Details</div>
      </div>
    </div>
    <div class="service-box">
      <div class="item">
        <div class="left">
          <img src="../assets/images/mine/fenxiang_icon.png" />
          <span>Agente</span>
        </div>
        <svg
          @click="goPath()"
          t="1736777328996"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6511"
          width="15"
          height="15"
        >
          <path
            d="M360.79 960.22c-19.27 0-38.54-7.52-53-22.48-28.29-29.27-27.5-75.93 1.78-104.23l270.11-261.1c12.29-11.88 13.44-30.88 2.66-44.17l-278.8-343.87c-25.65-31.61-20.8-78.03 10.82-103.67 31.6-25.66 78.03-20.82 103.68 10.83l278.79 343.86c59.29 73.1 52.96 177.58-14.68 243.02L412.02 939.52c-14.31 13.82-32.78 20.7-51.23 20.7z"
            p-id="6512"
            fill="#898C8D"
          ></path>
        </svg>
      </div>
      <div class="item">
        <div class="left">
          <img src="../assets/images/mine/xiugai_icon.png" />
          <span>Personal Infomation</span>
        </div>
        <svg
          @click="goPath()"
          t="1736777328996"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6511"
          width="15"
          height="15"
        >
          <path
            d="M360.79 960.22c-19.27 0-38.54-7.52-53-22.48-28.29-29.27-27.5-75.93 1.78-104.23l270.11-261.1c12.29-11.88 13.44-30.88 2.66-44.17l-278.8-343.87c-25.65-31.61-20.8-78.03 10.82-103.67 31.6-25.66 78.03-20.82 103.68 10.83l278.79 343.86c59.29 73.1 52.96 177.58-14.68 243.02L412.02 939.52c-14.31 13.82-32.78 20.7-51.23 20.7z"
            p-id="6512"
            fill="#898C8D"
          ></path>
        </svg>
      </div>
      <div class="item">
        <div class="left">
          <img src="../assets/images/mine/kefu_icon.png" />
          <span>Surpport</span>
        </div>
        <svg
          @click="goPath()"
          t="1736777328996"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6511"
          width="15"
          height="15"
        >
          <path
            d="M360.79 960.22c-19.27 0-38.54-7.52-53-22.48-28.29-29.27-27.5-75.93 1.78-104.23l270.11-261.1c12.29-11.88 13.44-30.88 2.66-44.17l-278.8-343.87c-25.65-31.61-20.8-78.03 10.82-103.67 31.6-25.66 78.03-20.82 103.68 10.83l278.79 343.86c59.29 73.1 52.96 177.58-14.68 243.02L412.02 939.52c-14.31 13.82-32.78 20.7-51.23 20.7z"
            p-id="6512"
            fill="#898C8D"
          ></path>
        </svg>
      </div>
      <div class="item">
        <div class="left">
          <img src="../assets/images/mine/xiazai_icon.png" />
          <span>Download Applincation</span>
        </div>
        <svg
          @click="goPath()"
          t="1736777328996"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6511"
          width="15"
          height="15"
        >
          <path
            d="M360.79 960.22c-19.27 0-38.54-7.52-53-22.48-28.29-29.27-27.5-75.93 1.78-104.23l270.11-261.1c12.29-11.88 13.44-30.88 2.66-44.17l-278.8-343.87c-25.65-31.61-20.8-78.03 10.82-103.67 31.6-25.66 78.03-20.82 103.68 10.83l278.79 343.86c59.29 73.1 52.96 177.58-14.68 243.02L412.02 939.52c-14.31 13.82-32.78 20.7-51.23 20.7z"
            p-id="6512"
            fill="#898C8D"
          ></path>
        </svg>
      </div>
      <div class="item" @click="exit()">
        <div class="left">
          <img src="../assets/images/mine/tuichu_icon.png" />
          <span>Logout</span>
        </div>
        <svg
          @click="goPath()"
          t="1736777328996"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6511"
          width="15"
          height="15"
        >
          <path
            d="M360.79 960.22c-19.27 0-38.54-7.52-53-22.48-28.29-29.27-27.5-75.93 1.78-104.23l270.11-261.1c12.29-11.88 13.44-30.88 2.66-44.17l-278.8-343.87c-25.65-31.61-20.8-78.03 10.82-103.67 31.6-25.66 78.03-20.82 103.68 10.83l278.79 343.86c59.29 73.1 52.96 177.58-14.68 243.02L412.02 939.52c-14.31 13.82-32.78 20.7-51.23 20.7z"
            p-id="6512"
            fill="#898C8D"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
let { state, dispatch, commit } = useStore();
const goPath = (path) => {};
const user_info = computed(() => {
  return state.user_info;
});
const cur_level = computed(() => {
  let data = [];
  if (state.level.length > 0) {
    data = state.level.filter((item) => {
      return item.level == state.user_info.level;
    });
  } else {
    data = [
      {
        levelIcon: "",
      },
    ];
  }

  return data[0];
});
const next_level = computed(() => {
  let indexs;
  if (state.level.length > 0) {
    state.level.map((item, index) => {
      if (item.level == state.user_info.level) {
        indexs = index;
      }
    });

    if (indexs + 1 == state.level.length) {
      return state.level[indexs].levelName;
    } else {
      return state.level[indexs + 1].levelName;
    }
  } else {
    return "";
  }
});
const progress_data = computed(() => {
  let indexs;
  let cur_statement = 0;
  let cur_deposit = 0;
  let update_statement = 0;
  let update_deposit = 0;
  if (state.level.length > 0) {
    state.level.map((item, index) => {
      if (item.level == state.user_info.level) {
        indexs = index;
      }
    });
    cur_statement = state.level[indexs].gameStatement;
    cur_deposit = state.level[indexs].payment;

    if (indexs + 1 == state.level.length) {
      update_statement = state.level[indexs].gameStatement;
      update_deposit = state.level[indexs].payment;
    } else {
      update_statement = state.level[indexs + 1].gameStatement;
      update_deposit = state.level[indexs + 1].payment;
    }
  }

  return {
    payment: (update_deposit - cur_deposit).toFixed(2),
    statement: (update_statement - cur_statement).toFixed(2),
  };
});
const exit = () => {
  dispatch("LogOut");
};
const copyId = async () => {
  try {
    await navigator.clipboard.writeText(state.user_info.userId);
    console.log("文本已复制到剪贴板");
  } catch (err) {
    console.error("复制到剪贴板失败", err);
  }
};
const avatar = computed(() => {
  return state.user_info.avatar ? require(state.user_info.avatar) : "";
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.mine {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.416rem;
  .service-box {
    width: 100%;
    background: $bg-color2;
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.416rem;
    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.277rem;
      &:last-child {
        margin-bottom: 0;
      }
      .left {
        display: flex;
        align-items: center;
        img {
          width: 0.75rem;
          margin-right: 0.277rem;
        }
        span {
          font-size: 0.305rem;
          font-weight: bold;
          color: $color-sub-text;
        }
      }
    }
  }
  .details-box {
    margin: 0.555rem 0;
    width: 100%;
    background: $bg-color2;
    border-radius: 0.361rem;
    height: 2.638rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 1.305rem;
      }
      div {
        text-align: center;
        font-size: 0.25rem;
        font-weight: 600;
        color: $color-sub-text;
      }
    }
  }

  .action-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .vip-box {
      width: 100%;
      height: 2.638rem;
      background: $bg-color2;
      border-bottom-left-radius: 0.361rem;
      border-bottom-right-radius: 0.361rem;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      padding: 0.416rem;
      .right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 1.666rem;
        }
        .vip-progress {
          box-sizing: border-box;
          padding: 0 0.222rem;
          background: $bg-color;
          border-radius: 0.222rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          span {
            font-family: Arial;
            font-weight: 900;
            font-size: 0.277rem;
            color: #ddb371;
            font-style: italic;
          }
        }
      }
      .left {
        width: 55%;
        .des {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.138rem;
          .name {
            font-size: 0.305rem;
            color: $primary-color;
          }
          .data {
            .cur {
              color: #ffd781;
              font-size: 0.305rem;
            }
            .total {
              color: #7f6f50;
              font-size: 0.305rem;
            }
          }
        }
      }
      .arrow {
        position: absolute;
        right: 0;
        top: 1.027rem;
        width: 0.583rem;
      }
    }
    .wallet-box {
      width: 95%;
      height: 1.611rem;
      border-top-left-radius: 0.361rem;
      border-top-right-radius: 0.361rem;
      background: linear-gradient(-90deg, #fbd398, #fabb6e);
      display: flex;
      justify-content: center;
      align-items: center;
      .action {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 3);
        img {
          width: 0.916rem;
          margin-right: 0.138rem;
        }
        div {
          text-align: center;
          font-weight: bold;
          font-size: 0.25rem;
          color: $color-black;
        }
      }
    }
  }

  .info-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.555rem 0;
    .action {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        width: 0.638rem;
        margin-right: 0.277rem;
      }
      .action-btn {
        width: 1.361rem;
        height: 0.583rem;
        background: $primary-color;
        border-radius: 0.277rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.25rem;
        font-weight: bold;
        color: $color-black;
      }
    }
    .info {
      display: flex;
      align-items: center;
      .avatar {
        width: 1.583rem;
        height: 1.583rem;
        border: 0.055rem solid $primary-color;
        border-radius: 50%;
        position: relative;
        img {
          width: 1.583rem;
        }
        .level {
          position: absolute;
          bottom: -0.1rem;
          left: 0.3rem;
          background-image: url("../assets/images/vip_di.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 1.1rem;
          height: 0.35rem;
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
          padding-right: 0.277rem;
          align-items: center;
          font-size: 0.222rem;
          font-weight: bold;
          color: #1c1f24;
          font-style: italic;
        }
      }
      .info-user {
        margin-left: 0.277rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .val {
          font-weight: bold;
          font-size: 0.388rem;
          color: $color-sub-text;
          display: flex;
          align-items: center;
          .copy-btn {
            margin-left: 0.277rem;
          }
        }
      }
    }
  }
}
</style>
