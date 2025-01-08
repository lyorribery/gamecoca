<template>
 <div>
  <div class="contact-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
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
      <Comment color="#fff" width=".5rem" height=".5rem" />
      <span>Live Chat</span>
    </div>
    <div class="channel-row" @click="goThrid(1)">
      <img src="@/assets/images/whatsapp.png" style="width:.611rem" />
      <span>447960076392</span>
    </div>
    <div class="channel-row" @click="goThrid(2)">
      <img src="@/assets/images/email.png" style="width:.611rem" />
      <span>gamecoca88@gmail.com</span>
    </div>

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
    location.href = "https://wa.me/447960076392";
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
  padding: calc(55px + env(safe-area-inset-top)) .416rem 0 .416rem;
  .opinion-box {
    width: calc(100% - .555rem);

    .title {
      font-size: .333rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: .222rem;
    }
    .content {
      width: 100%;
      border-radius: .444rem;
      border: .022rem solid #999999;
      overflow: hidden;
      .send-row {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        padding: 0 .277rem .277rem 0;
        .send-btn {
          width: 2.13rem;
          height: .666rem;
          background: linear-gradient(-90deg, #9343c4, #614ae6);
          border-radius: .333rem;
          font-size: .333rem;
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
    height: .008rem;
    background: #999999;
  }
  .divide-des {
    font-size: .305rem;
    font-weight: 600;
    color: #999999;
    box-sizing: border-box;
    padding: .277rem;
  }
  .channel-row {
    width: calc(100% - .555rem);
    height: 1.111rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-size: .388rem;
      font-weight: bold;
      color: #ffffff;
      padding-left: .222rem;
      // text-decoration-line: underline;
    }
  }
  .live-btn {
    margin-bottom: .416rem;
    width: calc(100% - .833rem);
    height: 1.269rem;
    background: linear-gradient(-90deg, #9343c4, #614ae6);
    border-radius: .63rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: .472rem;
      color: #ffffff;
      padding-left: .222rem;
    }
  }
  .des {
    margin: .555rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .277rem;
    .t-1 {
      font-weight: bold;
      font-size: .388rem;
      color: #ffffff;
      margin-bottom: .416rem;
    }
    .t-2 {
      font-size: .333rem;
      font-weight: 600;
      color: #ffffff;
      line-height: .416rem;
    }
  }
}
.contact-header {
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
  border-bottom: .013rem solid #29213d;
  .arrow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    left: .416rem;
    top: .555rem;
    span {
      font-weight: bold;
      font-size: .361rem;
      color: #ffffff;
      padding-left: .138rem;
    }
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: .472rem;
  }
}
</style>
