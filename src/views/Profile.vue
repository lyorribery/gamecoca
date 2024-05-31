<template>
  <div class="profile-header">
    <div class="user-avtar">
      <div class="avatar">
        <img src="../assets/images/client/other/img_tx.png"  style="width: 0.563rem" />
      </div>
      <span>{{ user_info.id ? "ID " + user_info.id : "" }}</span>
    </div>
    <div class="header-btn">
      <img
        src="../assets/images/client/other/icon_sett.png"
        style="width: 0.527rem"
        @click="goPath('/setting')"
      />
      <img
        @click="goLivechat()"
        src="../assets/images/client/other/icon_kefu.png"
        style="margin-left: 0.277rem; width: 0.527rem"
      />
    </div>
  </div>
  <div class="profile">
    <div class="wallet-box">
      <div class="info-box">
        <div class="label">Main Wallet(GHS)</div>
        <div class="value">
          {{ user_info.bindGold ? (user_info.bindGold / 100).toFixed(2) : "0.00" }}
        </div>
      </div>
      <div class="wallet-row">
        <div class="info-box">
          <div class="label">
            Withdrawable:{{
              user_info.gold
                ? user_info.gold > user_info.bindGold
                  ? (user_info.bindGold / 100).toFixed(2)
                  : (user_info.gold / 100).toFixed(2)
                : "0.00"
            }}
          </div>
          <div class="wallet-btn w-btn" @click="goPath('/withdraw')">WITHDRAW</div>
        </div>
        <div class="info-box">
          <div class="label">
            Frozen:{{
              user_info.bindGold
                ? ((user_info.bindGold - user_info.gold) / 100).toFixed(2) > 0
                  ? ((user_info.bindGold - user_info.gold) / 100).toFixed(2)
                  : "0.00"
                : "0.00"
            }}
          </div>
          <div class="wallet-btn d-btn" @click="goPath('/deposit')">DEPOSIT</div>
        </div>
      </div>
      <div class="coin-box">
        <div class="left">
          <div class="label">Coins</div>
          <div class="value" style="font-size: 0.583rem">
            {{ user_info.point ? user_info.point : "0" }}
          </div>
        </div>
        <div class="coin-btn" @click="goPath('/spin')">
          <span>Win Cash</span>
          <svg
            t="1712043800059"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1452"
            width=".222rem"
            height=".222rem"
          >
            <path
              d="M145.9094953 23.87932707l732.1810094 488.12067293-732.1810094 488.12067293z"
              p-id="1453"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="cell-row" @click="goPath('/records')">
      <div class="left">
        <img src="@/assets/images/bnt_history.png" style="width: 1.194rem" />
        <span>Transaction Records</span>
      </div>
      <div class="right">
        <RectRight color="#CCC3E2" width=".361rem" height=".361rem" />
      </div>
    </div>
    <div class="cell-row" @click="goPath('/invite')">
      <div class="left">
        <img src="@/assets/images/bnt_invite.png" style="width: 1.194rem" />
        <span>Invite Friends</span>
      </div>
      <div class="right">
        <span>Get Cash</span>
        <RectRight color="#CCC3E2" width=".361rem" height=".361rem" />
      </div>
    </div>
    <div class="cell-row" @click="goPath('/contact')">
      <div class="left">
        <img src="@/assets/images/bnt_contact.png" style="width: 1.194rem" />
        <span>Contact Us</span>
      </div>
      <div class="right">
        <RectRight color="#CCC3E2" width=".361rem" height=".361rem" />
      </div>
    </div>
    <div class="cell-row" @click="goDescription()">
      <div class="left">
        <img src="@/assets/images/bnt_terms.png" style="width: 1.194rem" />
        <span>Terms and Conditions</span>
      </div>
      <div class="right">
        <RectRight color="#CCC3E2" width=".361rem" height=".361rem" />
      </div>
    </div>
    <div class="quit-btn" @click="exit">Log out</div>
  </div>
</template>

<script setup>
import { onActivated, computed } from "vue";
import { RectRight } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
let { state, dispatch, commit } = useStore();
const goPath = (path) => {
  if (path != "/withdraw") {
    router.push({
      path,
    });
  } else {
    if (state.user_info.gold <= 0 || state.user_info.bindGold <= 0) {
      commit(
        "set_tip_info",
        "Your current available quota is insufficient and you cannot apply for withdrawal."
      );
      commit("set_tip_type", 5);
      commit("set_tip_modal", true);
      return;
    }
    router.push({
      path,
    });
  }
};
const goLivechat = () => {
  location.href = "https://tawk.to/chat/6641bda89a809f19fb303295/1htocpnf9";
};
const user_info = computed(() => {
  return state.user_info;
});
const goDescription = () => {
  router.push({
    path: "/description",
    query: {
      type: "3",
    },
  });
};
const exit = () => {
  commit("set_tip_info", "Do you confirm to log out of the current account?");
  commit("set_tip_type", 2);
  commit("set_tip_modal", true);
};
onActivated(() => {
  dispatch("GET_USER_INFO");
});
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  box-sizing: border-box;
  padding: calc(1.944rem + env(safe-area-inset-top)) 0.416rem 0.277rem 0.416rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .quit-btn {
    margin: 0.277rem 0;
    width: 100%;
    height: 1.269rem;
    background: linear-gradient(-90deg, #351f5f, #2a2059);
    border-radius: 7.544rem;
    font-weight: bold;
    font-size: 0.5rem;
    color: #ccc3e2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cell-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.083rem 0;
    .left {
      display: flex;
      align-items: center;
      font-size: 0.388rem;
      font-weight: 600;
      color: #ffffff;
      span {
        padding-left: 0.222rem;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        padding-right: 0.277rem;
        font-size: 0.361rem;
        color: #e556ff;
      }
    }
  }
  .wallet-box {
    width: 100%;
    border-radius: 0.444rem;
    background: linear-gradient(90deg, #5e30fa, #9932fc);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 0.555rem;
    .wallet-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.633rem;
      .wallet-btn {
        width: 3.569rem;
        height: 0.741rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.444rem;
        border: 0.0416rem solid #ffffff;
        font-weight: bold;
        font-size: 0.333rem;
      }
      .w-btn {
        color: #fff;
      }
      .d-btn {
        color: #8831fb;
        background: #fff;
      }
    }
    .coin-box {
      width: 100%;
      margin-top: 0.416rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.138rem 0.833rem;
      background: rgba(56, 43, 99, 0.6);
      .left {
        text-align: left;
      }
      .coin-btn {
        width: 3.569rem;
        height: 0.741rem;
        border-radius: 0.361rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.041rem solid #bd35fc;
        font-weight: bold;
        font-size: 0.333rem;
        color: #ffffff;
        span {
          padding-right: 0.138rem;
        }
      }
    }
    .label {
      font-weight: 600;
      font-size: 0.388rem;
      color: #ffffff;
      padding-bottom: 0.138rem;
    }
    .value {
      font-weight: bold;
      font-size: 0.694rem;
      color: #ffffff;
    }
    .info-box {
      box-sizing: border-box;
      padding-top: 0.416rem;
      text-align: center;
    }
  }
}
.profile-header {
  z-index: 9;
  background: #18171e;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.416rem;
  .user-avtar {
    display: flex;
    align-items: center;
    .avatar {
      width: 1.111rem;
      height: 1.111rem;
      border-radius: 100%;
      background: #583188;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.277rem;
    }
    span {
      font-weight: bold;
      font-size: 0.388rem;
      color: #ffffff;
    }
  }
}
</style>
