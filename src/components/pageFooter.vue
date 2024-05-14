<template>
  <div class="page-footer">
    <img src="@/assets/images/logo.svg" width="130" style="margin-bottom: 20px" />
    <div class="content-box">
      <div class="item" @click="goDescription('1')">Privacy Policy</div>
      <div class="item" @click="goDescription('2')">About Us</div>
      <div class="item" @click="goPath('/contact')" style="border-right: 0">
        Contact Us
      </div>
      <!-- <div class="item" style="border-right: 0">Terms And Conditions</div> -->
    </div>
    <!-- <div class="content-box">
      <div class="item-line">Terms and Conditions</div>
      <div class="item-line" style="padding: 0 10px 5px 10px">Service Agreement</div>
      <div class="item-line">Privacy Policy</div>
      <div class="item-line" style="padding: 0 0 0 10px">Respomsible Gaming Policy</div>
    </div> -->

    <div class="des">
      GameCoca will respond to all of your requests.Contact us using amusement purposes
      only.
    </div>

    <div class="contact-box">
      <div class="contact-item" @click="goThrid(1)" style="margin-right: 15px">
        <img src="../assets/images/icon_whatsapp.svg" width="20" />
        <span>+233203131028</span>
      </div>

      <div class="contact-item" @click="goThrid(2)">
        <img src="../assets/images/icon_email.svg" width="20" />
        <span>gamecoca88@gmail.com</span>
      </div>
    </div>

    <div class="contact-box">
      <div class="contact-item" style="margin-right: 15px">
        <img src="../assets/images/icon_facebook.svg" width="20" />
        <span>Follow us on</span>
      </div>
      <div class="contact-item" @click="goThrid(3)">
        <img src="../assets/images/livechat.png" width="20" />
        <span>Live chat</span>
      </div>
    </div>

    <div class="contact-box">
      <div class="contact-item-bank">
        <span>Make deposit via</span>
        <img src="../assets/images/vodafone.png" width="22" />
        <img src="../assets/images/tigo.png" width="22" />
        <img src="../assets/images/mtn.png" width="22" />
      </div>
    </div>

    <div class="des" style="font-weight: bold; margin: 10px; color: #fff">LICENCE</div>

    <div class="des">
      GAMECOCA ,the proprietor and operator of this website is licensed by Gaming Coming
      Commission of Ghana with register No.GCRG23P1036T
    </div>

    <div class="img-box">
      <img src="@/assets/images/img_18+.svg" style="margin-right: 10px" />
      <img src="@/assets/images/img_biaozhi.svg" />
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
    location.href = "https://wa.me/+233203131028";
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
  padding: 30px 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img-box {
    margin: 15px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 25px;
    }
  }
  .contact-box {
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact-item-bank {
      margin: 10px 0 15px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #fff;
        font-size: 12px;
        font-weight: bold;
      }
      img {
        margin-left: 8px;
      }
    }
    .contact-item {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        text-decoration-line: underline;
      }
      img {
        margin-right: 5px;
      }
    }
  }
  .des {
    width: 100%;
    text-align: center;
    color: #ccc3e2;
    font-size: 12px;
    line-height: 15px;
    .icon-box {
      border-radius: 4px;
      margin-left: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid #ccc3e2;
    }
  }
  .content-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    // .item-line {
    //   text-decoration-line: underline;
    //   color: #fff;
    //   font-size: 12px;
    // }
    .item {
      font-weight: bold;
      color: #fff;
      font-size: 12px;
      width: calc(100% / 3);
      display: flex;
      box-sizing: border-box;
      padding: 1px 0;
      justify-content: center;
      border-right: 1.5px solid #fff;
      // text-decoration-line: underline;
    }
  }
}
</style>
>
