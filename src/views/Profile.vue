<template>
  <div class="profile-header">
    <div class="user-avtar">
      <div class="avatar">
        <img src="@/assets/images/img_tx.png" width="20.3" />
      </div>
      <span>2029123123</span>
    </div>
    <div class="header-btn">
      <img src="@/assets/images/icon-sett.png" width="19" @click="goPath('/setting')" />
      <img src="@/assets/images/icon_kefu.png" width="19" style="margin-left: 10px" />
    </div>
  </div>
  <div class="profile">
    <div class="wallet-box">
      <div class="info-box">
        <div class="label">Main Wallet(GHS)</div>
        <div class="value">65.00</div>
      </div>
      <div class="wallet-row">
        <div class="info-box">
          <div class="label">Withdrawable:50</div>
          <div class="wallet-btn w-btn" @click="goPath('/withdraw')">WITHDRAW</div>
        </div>
        <div class="info-box">
          <div class="label">Frozen:15</div>
          <div class="wallet-btn d-btn" @click="goPath('/deposit')">DEPOSIT</div>
        </div>
      </div>
      <div class="coin-box">
        <div class="left">
          <div class="label">Coins</div>
          <div class="value" style="font-size: 20px">20</div>
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
            width="8"
            height="8"
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
        <img src="@/assets/images/bnt_history.png" width="40.3" />
        <span>Transaction Records</span>
      </div>
      <div class="right">
        <RectRight color="#9A87C8" width="13" height="13" />
      </div>
    </div>
    <div class="cell-row" @click="goPath('/invite')">
      <div class="left">
        <img src="@/assets/images/bnt_invite.png" width="40.3" />
        <span>Invite Friends</span>
      </div>
      <div class="right">
        <span>Get Cash</span>
        <RectRight color="#9A87C8" width="13" height="13" />
      </div>
    </div>
    <div class="cell-row">
      <div class="left">
        <img src="@/assets/images/bnt_contact.png" width="40.3" />
        <span>Contact Us</span>
      </div>
      <div class="right">
        <RectRight color="#9A87C8" width="13" height="13" />
      </div>
    </div>
    <div class="cell-row">
      <div class="left">
        <img src="@/assets/images/bnt_terms.png" width="40.3" />
        <span>Terms and Conditions</span>
      </div>
      <div class="right">
        <RectRight color="#9A87C8" width="13" height="13" />
      </div>
    </div>
    <div class="quit-btn">Log out</div>
  </div>
</template>

<script setup>
import { RectRight } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goPath = (path) => {
  router.push({
    path,
  });
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  box-sizing: border-box;
  padding: calc(70px + env(safe-area-inset-top)) 15px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .quit-btn {
    margin: 20px 0;
    width: 100%;
    height: 45.7px;
    background: linear-gradient(-90deg, #351f5f, #2a2059);
    border-radius: 22.6px;
    font-weight: bold;
    font-size: 17.3px;
    color: #9a87c8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cell-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      font-size: 12.3px;
      color: #ffffff;
      span {
        padding-left: 8px;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        padding-right: 10px;
        font-size: 11.3px;
        color: #e556ff;
      }
    }
  }
  .wallet-box {
    width: 100%;
    border-radius: 16px;
    background: linear-gradient(90deg, #5e30fa, #9932fc);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 20px;
    .wallet-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 30px;
      .wallet-btn {
        width: 86.7px;
        height: 26.7px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: 1.5px solid #ffffff;
        font-weight: bold;
        font-size: 11.7px;
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
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 30px;
      background: rgba(56, 43, 99, 0.6);
      .left {
        text-align: left;
      }
      .coin-btn {
        width: 86.7px;
        height: 26.7px;
        border-radius: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1.5px solid #bd35fc;
        font-weight: bold;
        font-size: 11.7px;
        color: #ffffff;
        span {
          padding-right: 5px;
        }
      }
    }
    .label {
      font-weight: 400;
      font-size: 13px;
      color: #ffffff;
      padding-bottom: 5px;
    }
    .value {
      font-weight: bold;
      font-size: 25px;
      color: #ffffff;
    }
    .info-box {
      box-sizing: border-box;
      padding-top: 15px;
      text-align: center;
    }
  }
}
.profile-header {
  z-index: 9;
  background: #19142b;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
  .user-avtar {
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #583188;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }
    span {
      font-weight: bold;
      font-size: 13px;
      color: #ffffff;
    }
  }
}
</style>
