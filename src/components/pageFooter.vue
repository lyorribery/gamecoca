<template>
  <div class="page-footer">
    <img src="@/assets/images/logo.png" height="15" style="margin-bottom: 20px" />
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
        <img src="../assets/images/icon_wechat.png" width="20" />
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

    <div
      class="des"
      style="
        font-weight: bold;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <span>SUITABLE FOR</span>
      <div class="icon-box">18+</div>
    </div>

    <div class="des">
      This product is intended for use by those 18 or old and is for amusement purposes
      only.
    </div>

    <div class="des">
      Practice or success at social casino gaming does not imply futu success at real
      money gambling and gaming
    </div>

    <div class="des" style="font-weight: bold; margin: 10px">LICENCE</div>

    <div class="des">
      GameCoca is licensed by BCLB under the Betting,lotteries and Gaming Act,Cap
      131,Laws of Kenya under license number:0000344
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  box-sizing: border-box;
  padding: 50px 15px 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .contact-box {
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
