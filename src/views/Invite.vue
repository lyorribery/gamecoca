<template>
  <div class="invite-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
    </div>
  </div>
  <div class="invite">
    <img :src="img_url + 'invite/top_img.png'" style="width: 100%" />
    <div class="invite-btn" @click="shareLink">Invite Friends Now</div>
    <div class="label">
      Click this button to generate a link containing your invitation code
    </div>
    <div class="invite-box">
      <div class="title-box">Invite Friends <span>Bonus</span></div>
      <div class="invite-step">
        <div class="step-item">
          <img :src="img_url + 'invite/icon_yqhy.png'" style="width:.925rem" />
        </div>
        <img :src="img_url + 'invite/img_dijin.png'" style="width:.655rem" />
        <div class="step-item">
          <img :src="img_url + 'invite/icon_100.png'" style="width:.925rem" />
        </div>
        <img :src="img_url + 'invite/img_dijin.png'" style="width:.655rem" />
        <div class="step-item">
          <img :src="img_url + 'invite/icon_bankcard.png'" style="width:.925rem" />
        </div>
      </div>
      <div class="invite-des">
        <span>Invite Friend</span>
        <span>Friend bets ₵{{ state.invite_config.bet }}</span>
        <span>Get ₵{{ state.invite_config.reward }}</span>
      </div>
      <div class="invite-label">
        There is a limit of <span>₵ {{ state.invite_config.max }} Cash</span>, please
        contact us to increase the limitation.
      </div>
      <div class="cur-title">Current Yield</div>
      <div class="invite-data-box">
        <div class="item">
          <div class="value" style="color: #f8e0fd">{{ infos.promoteCount }}</div>
          <div class="item-label">Invited Friends</div>
        </div>
        <div class="item item-b">
          <div class="value" style="color: #f45e84">{{ infos.betCount / 100 }}</div>
          <div class="item-label">Bets</div>
        </div>
        <div class="item">
          <div class="value" style="color: #fff76a">{{ infos.rewardCount / 100 }}</div>
          <div class="item-label">Cash</div>
        </div>
      </div>
      <div class="no-data-label" v-if="infos.promoteCount == 0">
        There is no friend yet,invite friends now to get reward!<span @click="shareLink">
          Invite Now</span
        >
      </div>
    </div>
    <div class="tip-label">TERMS AND CONDITIONS</div>
    <div class="tip">
      1. To qualify for a referral gift, the referred customer must be a new customer and
      not hold any account at GameCoca.
    </div>
    <div class="tip">
      2. Inviter can get ₵ {{ state.invite_config.reward }} Cash if the invitee’s betting
      amount reach ₵ {{ state.invite_config.bet }}.
    </div>
    <div class="tip">
      3. GameCoca reserves itself the right to amend, cancel, reclaim or refuse any
      promotion in order to ensure equality and the balance of promotions at its own
      discretion. Promotions and Gifts are created in order to reward our most valued
      customers. Uder suspect of fraud or abuse of the promotion by any customer, we
      reserve ourselves the right to remove Gifts and associated winnings from a given
      Account or any associated accounts.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RectLeft } from "@nutui/icons-vue";
import apiconfig from "@/utils/apiConfig";
import { useStore } from "vuex";
import { getInviteInfo } from "@/apis/apis";
const img_url = apiconfig.fileURL;
const { state, commit } = useStore();
const router = useRouter();
const shareLink = () => {
  if (JSON.stringify(state.user_info) == "{}") {
    commit("set_tip_info", "You have not logged in yet,please login.");
    commit("set_tip_type", 1);
    commit("set_tip_modal", true);
  } else {
    copyToClipboard(`www.gamecoca.com/#/home?i_code=${state.user_info.id}`);
  }
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    commit(
      "set_tip_info",
      `The link with your invitation code has been copied, please send it to your friends. www.gamecoca.com/#/home?i_code=${state.user_info.id}.`
    );
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  } catch (err) {
    console.error("Failed to copy: ", err);
    commit(
      "set_tip_info",
      `The link with your invitation code www.gamecoca.com/#/home?i_code=${state.user_info.id} copy faild.`
    );
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  }
};

const goBack = () => {
  router.go(-1);
};
const infos = ref({
  betCount: 0,
  promoteCount: 0,
  rewardCount: 0,
});
onMounted(() => {
  if (!localStorage.getItem("token")) return;
  getInviteInfo.get("", {}).then((res) => {
    if (res.code == 2002) {
      commit("set_user_info", {});
      localStorage.removeItem("token");
      commit("set_tip_info", "You have not logged in yet,please login.");
      commit("set_tip_type", 1);
      commit("set_tip_modal", true);
      return;
    }
    if (res) infos.value = { ...res };
  });
});
</script>

<style lang="scss" scoped>
.invite {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #360c7e;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) .416rem
    calc(env(safe-area-inset-bottom) + .416rem) .416rem;
  .invite-box {
    margin-top: .416rem;
    width: 100%;
    background: linear-gradient(-31deg, #af1de4, #4f19cc);
    border-radius: .463rem;
    border: 1.3px solid #de47f9;
    box-sizing: border-box;
    padding: .416rem .277rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .no-data-label {
      width: 100%;
      color: #fff;
      font-size: .361rem;
      span {
        color: #fff76a;
        text-decoration-line: underline;
      }
    }
    .cur-title {
      width: 2.416rem;
      height: .647rem;
      background: #f8e0fd;
      box-shadow: 0px .036rem 0px 0px #df4afd;
      border-radius: .072rem .333rem .072rem .333rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c14ded;
      font-size: .361rem;
    }
    .invite-data-box {
      margin: .416rem 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: .369rem;
      box-sizing: border-box;
      padding: .416rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item-b {
        border-left: .013rem solid rgba(255, 255, 255, 0.2);
        border-right: .013rem solid rgba(255, 255, 255, 0.2);
      }
      .item {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        .item-label {
          font-size: .361rem;
          color: #f8e0fd;
          margin-top: .138rem;
        }
        .value {
          font-size: .555rem;
        }
      }
    }
    .invite-label {
      margin: .416rem 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: .369rem;
      box-sizing: border-box;
      padding: .277rem .416rem;
      color: #fff;
      font-size: .388rem;
      span {
        color: #fff76a;
      }
    }
    .invite-des {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #fff;
      font-size: .361rem;
      margin-top: .138rem;
    }
    .invite-step {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: .416rem;
      .step-item {
        width: 1.388rem;
        height: 1.388rem;
        border-radius: 100%;
        background: rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .title-box {
      position: absolute;
      top: -.509rem;
      left: calc((100% - 4.722rem) / 2);
      width: 4.722rem;
      height: 1.019rem;
      background: linear-gradient(-90deg, #600afd, #7b42fd);
      border-radius: .091rem .463rem .091rem .463rem;
      border: .019rem solid #de47f9;
      box-shadow: 0px .075rem .13rem 0px #de47f9;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: .416rem;
      color: #ffffff;
      span {
        color: #fff76a;
      }
    }
  }
  .tip-label {
    margin: .416rem 0 .277rem 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 .416rem;
    font-size: .388rem;
    color: #fff;
  }
  .tip {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .416rem .138rem .416rem;
    font-size: .361rem;
    color: #ccc3e2;
  }
  .label {
    margin: .416rem 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 .416rem;
    font-size: .361rem;
    color: #ccc3e2;
  }
  .invite-btn {
    margin-top: -.416rem;
    width: calc(100% - .833rem);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.269rem;
    background: linear-gradient(-90deg, #fd823c, #e520fc);
    box-shadow: 0px .075rem .13rem 0px #770dcf;
    border-radius: .63rem;
    font-weight: bold;
    font-size: .48rem;
    color: #ffffff;
  }
}
.invite-header {
  z-index: 9;
  background: #360c7e;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-left: .416rem;
  .arrow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-weight: bold;
      font-size: .361rem;
      color: #ffffff;
      padding-left: .138rem;
    }
  }
}
</style>
