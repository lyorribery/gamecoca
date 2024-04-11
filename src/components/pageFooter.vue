<template>
  <div class="page-footer">
    <img src="@/assets/images/logo.svg" width="105" style="margin-bottom: 20px" />
    <div class="content-box">
      <div class="item">ABOUT US</div>
      <div class="item">CONTACT US</div>
      <div class="item" style="border-right: 0">HOW TO PLAY</div>
    </div>
    <div class="content-box">
      <div class="item-line">Terms and Conditions</div>
      <div class="item-line" style="padding: 0 10px 5px 10px">Service Agreement</div>
      <div class="item-line">Privacy Policy</div>
      <div class="item-line">Respomsible Gaming Policy</div>
    </div>

    <div class="des">
      GameCoca will respond to all of your requests.Contact us using amusement purposes
      only.
    </div>

    <div class="contact-box">
      <div class="contact-item">
        <span>Contact us online:</span>
        <img src="../assets/images/icon_whatsapp.png" width="20" />
      </div>
      <div class="contact-item">
        <span>Follow us on:</span>
        <img src="../assets/images/icon_facebook.png" width="20" />
        <img src="../assets/images/icon_ins.png" width="20" />
      </div>
    </div>

    <div class="contact-box">
      <div class="contact-item-email">
        <img src="../assets/images/icon_email.png" width="20" />
        <span>kenyagmservice@gmail.com</span>
      </div>
    </div>

    <div class="contact-box">
      <div class="contact-item-bank">
        <span>Make deposit via</span>
        <img src="../assets/images/img_bank.png" height="13.3" />
      </div>
    </div>

    <div class="des" style="color: #fff">
      This product is intended for use by those 18 or old and is for amusement purposes
      only.
    </div>

    <div class="des">
      Practice or success at social casino gaming does not imply futu success at real
      money gambling and gaming
    </div>

    <div class="des" style="font-weight: bold; margin: 10px; color: #fff">LICENCE</div>

    <div class="des" style="color: #fff">
      GOLDEN HONEY BADGER TECHNOLOGY LTD ,the proprietor and operator of this website is
      licensed by Gaming Coming Commission of Ghana with register No.GCRG23P1036T
    </div>

    <div class="img-box">
      <img src="@/assets/images/img_18.png" style="margin-right: 10px" />
      <img src="@/assets/images/img_biaozhi.png" />
    </div>

    <div class="des">
      This game is only for people over the age of 18 years. Betting can be addictive,
      please bet responsibly.
    </div>
  </div>
</template>

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
      width: 23.3px;
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
        font-size: 11px;
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
        color: #fff;
        font-size: 11px;
        font-weight: bold;
      }
      img {
        margin-right: 10px;
      }
    }
    .contact-item {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        color: #9a87c8;
        font-size: 11px;
        font-weight: bold;
      }
      img {
        margin-left: 10px;
      }
    }
  }
  .des {
    width: 100%;
    text-align: center;
    color: #9a87c8;
    font-size: 11px;
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
      border: 1px solid #9a87c8;
    }
  }
  .content-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    .item-line {
      text-decoration-line: underline;
      color: #fff;
      font-size: 11px;
    }
    .item {
      font-weight: bold;
      color: #fff;
      font-size: 11px;
      width: calc(100% / 3);
      display: flex;
      box-sizing: border-box;
      padding: 1px 0;
      justify-content: center;
      border-right: 2px solid #fff;
    }
  }
}
</style>
>
