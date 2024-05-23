<template>
  <div class="page-footer">
    <img
      src="@/assets/images/logo.png"
      style="margin-bottom: .555rem; width: 3.533rem"
    />
    <div class="content-box">
      <div class="item" @click="goDescription('1')">PRIVACY POLICY</div>
      <div class="item" @click="goDescription('2')">ABOUT US</div>
      <div class="item" @click="goPath('/contact')" style="border-right: 0">
        CONTACT US
      </div>
    </div>

    <div class="des">
      GameCoca will respond to all of your requests.Contact us using amusement purposes
      only.
    </div>

    <div class="contact-box" style="margin: .555rem 0 .416rem 0">
      <div class="contact-item" @click="goThrid(1)">
        <img src="../assets/images/whatsapp.png" />
        <span>WhatsApp</span>
      </div>

      <div class="contact-item" @click="goThrid(2)">
        <img src="../assets/images/email.png" />
        <span>Email</span>
      </div>
      <div class="contact-item" @click="goThrid(3)">
        <img src="../assets/images/kefu.png" />
        <span>Live Chat</span>
      </div>
    </div>

    <div class="contact-box" style="margin-bottom: .555rem">
      <div class="contact-item-bank">
        <span>Make deposit via</span>
        <img src="../assets/images/vodafone.png" style="width: .518rem" />
        <img src="../assets/images/tigo.png" style="width: .518rem" />
        <img src="../assets/images/mtn.png" style="width: .518rem" />
      </div>
    </div>

    <div
      class="des"
      style="font-weight: bold; margin: .277rem; color: #d9d9d9; font-size: .328rem"
    >
      LICENCE
    </div>

    <div class="des">
      GAMECOCA ,the proprietor and operator of this website is licensed by Gaming Coming
      Commission of Ghana with register No.GCRG23P1036T
    </div>

    <div class="img-box">
      <img
        src="@/assets/images/img_18+.svg"
        style="margin-right: .277rem; width: .648rem"
      />
      <img src="@/assets/images/img_biaozhi.svg" style="width: .787rem" />
    </div>

    <div class="des">
      This game is only for people over the age of 18 years. Betting can be addictive,
      please bet responsibly.
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goPath = (path) => {
  router.push({
    path,
  });
};
const goDescription = (type) => {
  router.push({
    path: "/description",
    query: {
      type,
    },
  });
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
</script>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  box-sizing: border-box;
  padding: .833rem .277rem 0 .277rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img-box {
    margin: .416rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .95rem;
    .contact-item-bank {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #999999;
        font-size: .333rem;
        font-weight: bold;
      }
      img {
        margin-left: .222rem;
      }
    }
    .contact-item {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #999999;
        font-size: .37rem;
        font-weight: bold;
        text-decoration-line: underline;
      }
      img {
        width: .555rem;
        height: .555rem;
        margin-right: 0.138rem;
      }
    }
  }
  .des {
    width: 100%;
    text-align: center;
    color: #999999;
    font-size: .333rem;
    line-height: .416rem;
  }
  .content-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: .462rem;
    flex-wrap: wrap;

    .item {
      font-weight: bold;
      color: #d9d9d9;
      font-size: .328rem;
      width: calc(100% / 3);
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      border-right: .055rem solid #d9d9d9;
    }
  }
}
</style>
