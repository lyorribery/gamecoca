<template>
  <div class="contact-header">
    <div class="arrow">
      <RectLeft color="#fff" width="18px" height="18px" @click="goBack" />
    </div>
    <div class="title">Contact Us</div>
  </div>
  <div class="contact">
    <div class="des">
      <div class="t-1">Need Help?</div>
      <div class="t-2">
        Gamecoca will respond to all of your requests. Contact us using one of the methods
        listed below.
      </div>
    </div>
    <div class="live-btn" @click="goThrid(3)">
      <Comment color="#fff" width="18px" height="18px" />
      <span>Live Chat</span>
    </div>
    <div class="channel-row" @click="goThrid(1)">
      <img src="@/assets/images/icon_whatsapp.svg" width="20" />
      <span>017858145</span>
    </div>
    <div class="channel-row" @click="goThrid(2)">
      <img src="@/assets/images/icon_email.svg" width="20" />
      <span>gamecoca88@gmail.com</span>
    </div>
    <!-- <div class="channel-row" >
      <img src="@/assets/images/icon_facebook.svg" width="20" />
      <span>gamecoca88@gmail.com</span>
    </div> -->
    <div class="divide-des">Available form 08:00-00:00</div>
    <div class="divide-line"></div>
    <div class="des">
      <div class="t-1" style="margin-bottom: 0">We value your feedback</div>
    </div>
    <div class="opinion-box">
      <div class="title">Give us your opinion</div>
      <div class="content">
        <nut-textarea
          v-model="val"
          placeholder="We hope there will be more updates."
          rows="3"
          autosize
        />
        <div class="send-row">
          <div class="send-btn" @click="sendAdvice">Send</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RectLeft, Comment } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const { commit } = useStore();
const val = ref("");
const goBack = () => {
  router.go(-1);
};
const goThrid = (type) => {
  if (type == 1) {
    location.href = "https://wa.me/+233203131028";
  } else if (type == 2) {
    location.href = "mailto:gamecoca88@gmail.com";
  } else if (type == 3) {
    location.href = "https://tawk.to/chat/6641bda89a809f19fb303295/1htocpnf9";
  }
};
const sendAdvice = () => {
  if (!val.value) {
    commit("set_tip_info", "Please enter your suggestion.");
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  } else {
    commit(
      "set_tip_info",
      "The platform has received your suggestions, thank you for your support."
    );
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
    val.value = "";
  }
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 15px 0 15px;
  .opinion-box {
    width: calc(100% - 20px);

    .title {
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .content {
      width: 100%;
      border-radius: 16px;
      border: 0.8px solid #ccc3e2;
      overflow: hidden;
      .send-row {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        padding: 0 10px 10px 0;
        .send-btn {
          width: 76.7px;
          height: 24px;
          background: linear-gradient(-90deg, #9343c4, #614ae6);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .divide-line {
    width: 100%;
    height: 0.3px;
    background: #ccc3e2;
  }
  .divide-des {
    font-size: 11px;
    font-weight: 600;
    color: #ccc3e2;
    box-sizing: border-box;
    padding: 10px;
  }
  .channel-row {
    width: calc(100% - 20px);
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
      padding-left: 5px;
      text-decoration-line: underline;
    }
  }
  .live-btn {
    margin-bottom: 15px;
    width: calc(100% - 30px);
    height: 45.7px;
    background: linear-gradient(-90deg, #9343c4, #614ae6);
    border-radius: 22.7px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 17.3px;
      color: #ffffff;
      padding-left: 8px;
    }
  }
  .des {
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    .t-1 {
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 15px;
    }
    .t-2 {
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      line-height: 15px;
    }
  }
}
.contact-header {
  z-index: 9;
  background: #161326;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #29213d;
  .arrow {
    position: fixed;
    left: 15px;
    top: calc(env(safe-area-inset-top) + 18.5px);
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
