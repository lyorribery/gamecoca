<template>
  <div class="mine">
    <div class="info-box">
      <div class="info">
        <div class="avatar">
          <img :src="static_img.img_1" @click="showAvatar = true" />
          <div class="level">{{ user_info.levelName }}</div>
        </div>
        <div class="info-user">
          <div class="val" style="margin-bottom: 0.138rem">
            {{ $t("main.Account") }}:{{ user_info.userName }}
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
        <i class="iconfont icon-youjian1"></i>
        <i class="iconfont icon-shouji1"></i>
        <div class="action-btn" @click="goPath('/setting')">
          {{ $t("button.change") }}
        </div>
      </div>
    </div>
    <div class="action-box">
      <div class="wallet-box">
        <div class="action">
          <img :src="static_img.img_2" />
          <div>
            Central <br />
            Wallet
          </div>
        </div>
        <div class="action" @click="goDeposit('withdraw')">
          <img :src="static_img.img_3" />
          <div>Withdraw <br />Details</div>
        </div>
        <div class="action" @click="goDeposit('deposit')">
          <img :src="static_img.img_4" />
          <div>
            Desposit<br />
            Details
          </div>
        </div>
      </div>
      <div class="vip-box" @click="goPath('/vip')">
        <img :src="static_img.img_5" class="arrow" />
        <div class="left">
          <div class="des">
            <span class="name">{{ $t("mine.Deposit") }}</span>
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
            <span class="name">{{ $t("mine.totalbet") }}</span>
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
      <div class="item" @click="goReport('Account')">
        <img :src="static_img.img_6" />
        <div>Account<br />Details</div>
      </div>
      <div class="item" @click="goReport('Deposit')">
        <img :src="static_img.img_7" />
        <div>Deposit<br />Details</div>
      </div>
      <div class="item" @click="goReport('Withdraw')">
        <img :src="static_img.img_8" />
        <div>Withdraw<br />Details</div>
      </div>
      <div class="item" @click="goReport('Bets')">
        <img :src="static_img.img_9" />
        <div>Bet<br />Details</div>
      </div>
      <div class="item" @click="goReport('Bonus')">
        <img :src="static_img.img_10" />
        <div>Bonus<br />Details</div>
      </div>
    </div>
    <div class="service-box">
      <div class="item" @click="goPath('/refer/invite')">
        <div class="left">
          <img :src="static_img.img_11" />
          <span>{{ $t("mine.Agente") }}</span>
        </div>
        <svg
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
      <div class="item" @click="goPath('/setting')">
        <div class="left">
          <img :src="static_img.img_12" />
          <span>{{ $t("mine.info") }}</span>
        </div>
        <svg
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
      <div class="item" @click="goPath('/service')">
        <div class="left">
          <img :src="static_img.img_13" />
          <span>{{ $t("mine.Surpport") }}</span>
        </div>
        <svg
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
          <img :src="static_img.img_14" />
          <span>{{ $t("mine.downapp") }}</span>
        </div>
        <svg
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
          <img :src="static_img.img_15" />
          <span>{{ $t("mine.logout") }}</span>
        </div>
        <svg
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

    <nut-overlay
      v-model:visible="showAvatar"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="showAvatar = false">
            <svg
              t="1737048406504"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2325"
              width="22"
              height="22"
            >
              <path
                d="M822.00345 776.822434l0.022513-0.022513L246.50423 201.317075c-5.78782-5.791913-13.785981-9.374508-22.621207-9.374508-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 8.834202 3.582595 16.832364 9.373485 22.620184L776.11226 821.339324c5.838985 6.277984 14.166651 10.209526 23.416316 10.209526 17.662265 0 31.980365-14.3181 31.980365-31.980365C831.508941 790.667767 827.871087 782.620487 822.00345 776.822434z"
                p-id="2326"
                fill="#E6E6E6"
              ></path>
              <path
                d="M776.783549 201.448058l-0.022513-0.022513L201.278189 776.947278c-5.791913 5.78782-9.374508 13.785981-9.374508 22.621207 0 17.662265 14.3181 31.980365 31.980365 31.980365 8.834202 0 16.832364-3.582595 22.620184-9.373485l574.797231-574.836117c6.277984-5.838985 10.209526-14.166651 10.209526-23.416316 0-17.662265-14.3181-31.980365-31.980365-31.980365C790.628882 191.942567 782.580578 195.58042 776.783549 201.448058z"
                p-id="2327"
                fill="#E6E6E6"
              ></path>
            </svg>
          </div>

          <div class="title">
            {{ $t("mine.avatar") }}
            <div class="line"></div>
          </div>
          <div class="avatar-box">
            <div class="img-box" @click="changeAvatar(1)">
              <img
                :style="{ filter: avatar_index == 1 ? '' : 'grayscale(100%)' }"
                :src="avatar_img.avatar1"
              />
              <i v-if="avatar_index == 1" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(2)">
              <img
                :style="{ filter: avatar_index == 2 ? '' : 'grayscale(100%)' }"
               :src="avatar_img.avatar2"
              />
              <i v-if="avatar_index == 2" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(3)">
              <img
                :style="{ filter: avatar_index == 3 ? '' : 'grayscale(100%)' }"
              :src="avatar_img.avatar3"
              />
              <i v-if="avatar_index == 3" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(4)">
              <img
                :style="{ filter: avatar_index == 4 ? '' : 'grayscale(100%)' }"
               :src="avatar_img.avatar4"
              />
              <i v-if="avatar_index == 4" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(5)">
              <img
                :style="{ filter: avatar_index == 5 ? '' : 'grayscale(100%)' }"
               :src="avatar_img.avatar5"
              />
              <i v-if="avatar_index == 5" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(6)">
              <img
                :style="{ filter: avatar_index == 6 ? '' : 'grayscale(100%)' }"
              :src="avatar_img.avatar6"
              />
              <i v-if="avatar_index == 6" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(7)">
              <img
                :style="{ filter: avatar_index == 7 ? '' : 'grayscale(100%)' }"
                :src="avatar_img.avatar7"
              />
              <i v-if="avatar_index == 7" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(8)">
              <img
                :style="{ filter: avatar_index == 8 ? '' : 'grayscale(100%)' }"
              :src="avatar_img.avatar8"
              />
              <i v-if="avatar_index == 8" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(9)">
              <img
                :style="{ filter: avatar_index == 9 ? '' : 'grayscale(100%)' }"
               :src="avatar_img.avatar9"
              />
              <i v-if="avatar_index == 9" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(10)">
              <img
                :style="{ filter: avatar_index == 10 ? '' : 'grayscale(100%)' }"
                :src="avatar_img.avatar10"
              />
              <i v-if="avatar_index == 10" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(11)">
              <img
                :style="{ filter: avatar_index == 11 ? '' : 'grayscale(100%)' }"
               :src="avatar_img.avatar11"
              />
              <i v-if="avatar_index == 11" class="iconfont icon-xuanzhong"></i>
            </div>
            <div class="img-box" @click="changeAvatar(12)">
              <img
                :style="{ filter: avatar_index == 12 ? '' : 'grayscale(100%)' }"
              :src="avatar_img.avatar12"
              />
              <i v-if="avatar_index == 12" class="iconfont icon-xuanzhong"></i>
            </div>
          </div>
          <div class="confirm-btn" @click="showAvatar = false">Confirmar</div>
        </div>
      </div>
    </nut-overlay>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { preloadImage } from "@/utils/utils";

const static_img=computed(()=>{
  return state.static_img.mine
})
const avatar_img=computed(()=>{
  return state.static_img.avatar
})
const showAvatar = ref(false);
const avatar_index = ref(1);
const changeAvatar = (index) => {
  avatar_index.value = index;
};
const router = useRouter();
let { state, dispatch, commit } = useStore();
const goPath = (path) => {
  router.push({
    path,
  });
};
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
    commit("set_show_tip", { type: 1, msg: "copied" });
    await navigator.clipboard.writeText(state.user_info.userId);
  } catch (err) {
    console.error("复制到剪贴板失败", err);
  }
};
// const avatar = computed(() => {
//   return state.user_info.avatar ? require(state.user_info.avatar) : "";
// });
const goReport = (type) => {
  router.push({
    path: "/report",
    query: { type },
  });
};
const goDeposit = (type) => {
  router.push({
    path: "/deposit",
    query: {
      mode: type,
    },
  });
};

</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .overlay-content {
    width: calc(100% - 0.833rem);
    background: #1f1e1e;
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;
    box-sizing: border-box;
    padding: 0 0.416rem 0.555rem 0.416rem;
    .avatar-box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.555rem 0.277rem;
      .img-box {
        border-radius: 50%;
        width: 1.583rem;
        height: 1.583rem;
        box-sizing: border-box;
        // border: 0.054rem solid $primary-color;
        margin: 0 0.277rem 0.277rem 0;
        position: relative;
        i {
          position: absolute;
          bottom: -0.138rem;
          right: 0;
          font-size: 0.555rem;
          font-weight: bold;
          color: $primary-color;
        }
        img {
          width: 1.583rem;
          height: 1.583rem;
        }
      }
    }
    .confirm-btn {
      width: 100%;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.555rem;
    }

    .title {
      width: 100%;
      height: 1.188rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.027rem solid #383838;
      position: relative;
      font-weight: bold;
      font-size: 0.461rem;
      color: #e6e6e6;
      .line {
        position: absolute;
        bottom: 0;
        left: calc((100% - 1.861rem) / 2);
        width: 1.861rem;
        height: 0.055rem;
        background: #ffcb78;
        border-radius: 0.027rem;
      }
    }
    .close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: 0.416rem 0 0 0;
    }
  }
}

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
      i {
        font-size: 0.638rem;
        margin-right: 0.277rem;
        color: #ffffff;
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
