<template>
  <div class="invite">
    <div class="box1">
      <div class="top">
        <div class="des">
          <div class="name">Bonus</div>
          <div class="val">0</div>
        </div>
        <div class="btn-box">
          <div class="deposit-btn">{{ $t("invite.Saque") }}</div>
          <div class="transfer-btn">{{ $t("invite.Transferir") }}</div>
        </div>
      </div>
      <div class="bottom">
        {{ $t("invite.des1") }}
      </div>
    </div>
    <div class="share-box" :style="{backgroundImage:'url(../assets/images/refer/fenxiang_di.png)'}">
      <div class="des" style="margin-bottom: 0.416rem">
        {{ $t("invite.des2") }}
      </div>
      <div class="des">{{ $t("invite.title1") }}</div>
      <div class="channel">
        <img src="../assets/images/footer/tg.png" />
        <img src="../assets/images/footer/youtube.png" />
      <img src="../assets/images/footer/ins.png" />
      <img src="../assets/images/footer/whatsapp.png" />
      <img src="../assets/images/footer/x.png" />
      <img src="../assets/images/footer/douyin.png" />
      </div>
      <div class="des">{{ $t("invite.title2") }}</div>
      <div class="link-box">
        <div class="link">{{ link_val }}</div>
        <div class="copy-btn" @click="copyLink()">{{ $t("invite.Copy") }}</div>
      </div>
    </div>
    <div class="text">
      {{ $t("invite.des3") }}
    </div>
    <div class="text-box" v-html="rule"></div>
    <div class="invite-img">
      <div class="title">{{ $t("invite.title3") }}</div>
      <div class="sub-title">{{ $t("invite.title4") }}</div>
      <img src="../assets/images/refer/fenxiao.png" />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { GetUserRule } from "@/apis/proxy";
import { useStore } from "vuex";
import { preloadImage } from "@/utils/utils";

const { state, commit } = useStore();
const link_val = ref("");
const rule = ref("");
const copyLink = async () => {
  try {
    commit("set_show_tip", { type: 1, msg: "copied" });
    await navigator.clipboard.writeText(link_val.value);
  } catch (err) {
    console.error("复制到剪贴板失败", err);
  }
};

const invite_img = computed(() => {
  return state.static_img.invite;
});
onBeforeMount(() => {
  link_val.value =
    "https://" + window.location.hostname + "/#/?agentid=" + state.user_info.userId;
  GetUserRule().then((res) => {
    if (res.code == 200) rule.value = res.data.content;
  });
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.invite {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.277rem;
  .invite-img {
    width: 100%;
    background: rgba(74, 74, 74, 0.4);
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.461rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      font-weight: bold;
      font-size: 0.388rem;
      color: $primary-color;
    }
    .sub-title {
      font-size: 0.361rem;
      color: $color-sub-text;
      font-weight: bold;
      margin: 0.416rem 0;
    }
    img {
      width: 100%;
    }
  }
  .text-box {
    margin: 0.832rem 0 0.416rem 0;
    width: 100%;
    min-height: 2.777rem;
    background: rgba(74, 74, 74, 0.4);
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.277rem 0.461rem;
    font-size: 0.305rem;
    color: $color-sub-text;
    text-align: center;
  }
  .text {
    width: 100%;
    height: 0.638rem;
    font-weight: bold;
    font-size: 0.361rem;
    color: $color-sub-text;
    text-align: center;
    box-sizing: border-box;
    padding: 0.277rem 1rem;
  }
  .share-box {
    width: 9.444rem;
    height: 5.277rem;
    // background-image: url("../assets/images/refer/fenxiang_di.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0.416rem 0;
    box-sizing: border-box;
    padding: 0.416rem 0.277rem;
    .link-box {
      margin-top: 0.277rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .link {
        width: 7.027rem;
        height: 0.75rem;
        background: #1b1b1b;
        border-radius: 0.194rem;
        box-sizing: border-box;
        padding-left: 0.277rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.277rem;
        color: $color-white;
      }
      .copy-btn {
        width: 1.305rem;
        height: 0.75rem;
        background: $primary-color;
        border-radius: 0.194rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.277rem;
        color: $color-black;
        font-weight: bold;
      }
    }
    .channel {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0.277rem 0;
      img {
        width: 0.888rem;
      }
    }
    .des {
      width: 100%;
      color: $color-sub-text;
      font-size: 0.305rem;
    }
  }
  .box1 {
    width: 100%;
    background: rgba(74, 74, 74, 0.4);
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.416rem 0.277rem;
    .bottom {
      width: 100%;
      font-size: 0.305rem;
      color: $color-sub-text;
      box-sizing: border-box;
      padding-top: 0.416rem;
    }
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .des {
        display: flex;
        align-items: center;
        .name {
          font-size: 0.333rem;
          font-weight: bold;
          color: $color-sub-text;
          margin-right: 0.277rem;
        }
        .val {
          font-weight: bold;
          font-size: 0.555rem;
          color: $primary-color;
        }
      }
      .btn-box {
        display: flex;
        align-items: center;
        .deposit-btn {
          width: 2.111rem;
          height: 0.6rem;
          background: $primary-color2;
          border-radius: 0.444rem;
          color: $color-white;
          font-size: 0.305rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.277rem;
        }
        .transfer-btn {
          width: 2.111rem;
          height: 0.6rem;
          background: $primary-color;
          border-radius: 0.444rem;
          color: $color-black;
          font-size: 0.305rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
