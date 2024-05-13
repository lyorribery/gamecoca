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
      <div class="contact-item">
        <img src="../assets/images/icon_whatsapp.svg" width="20" @click="goThrid(1)" />
        <span style="font-size: 13px">+233203131028</span>
      </div>
      <div class="contact-item">
        <img src="../assets/images/icon_facebook.svg" width="20" />
        <span style="font-size: 13px">Follow us on</span>
      </div>
    </div>

    <div class="contact-box">
      <div class="contact-item-email" @click="goThrid(2)">
        <img src="../assets/images/icon_email.svg" width="20" />
        <span style="color: #fff; text-decoration-line: underline; font-size: 13px"
          >gamecoca88@gmail.com</span
        >
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

    <div class="des" style="font-weight: bold; margin: 10px">LICENCE</div>

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
    // location.href = "https://api.whatsapp.com/send?phone=+233203131028&amp;text=Hello";
    location.href = "https://wa.me/+233203131028";
  } else if (type == 2) {
    location.href = "mailto:gamecoca88@gmail.com";
  }
};
</script>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 15px 0 15px;
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
        color: #ccc3e2;
        font-size: 12px;
        font-weight: bold;
      }
      img {
        margin-left: 10px;
      }
    }
    .contact-item-email {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        color: #ccc3e2;
        font-size: 12px;
        font-weight: bold;
      }
      img {
        margin-right: 5px;
      }
    }
    .contact-item {
      width: 50%;
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
