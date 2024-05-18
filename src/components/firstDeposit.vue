<template>
  <nut-overlay
    v-model:visible="fisrt_deposit_visilbe"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div
      style="display: flex; height: 100%; align-items: center; justify-content: center"
    >
      <div class="f-d-box">
        <div class="f-d-icon">
          <img :src="img_url + 'invite/img_lihe.png'" style="width: 1.833rem" />
        </div>
        <div class="f-d-close">
          <Close color="#fff" width=".444rem" height=".444rem" @click="close()" />
        </div>
        <div class="f-d-title">
          <img :src="img_url + 'other/img_dian.png'" />
          <span>GAMECOCA</span>
          <img :src="img_url + 'other/img_dian.png'" />
        </div>
        <div class="line-back"></div>
        <div class="d-option-box">
          <template v-for="(item, index) in f_d_list" :key="index">
            <div :class="item.active ? 'item-active' : 'item'" @click="changeFD(index)">
              <div class="top">
                <div class="l-1">Deposit</div>
                <div class="l-2">₵{{ item.amount }}</div>
              </div>
              <div class="bottom">
                <div class="b-content">
                  <div class="l-1">Get GHS</div>
                  <div class="l-2">{{ Number(item.amount) + Number(item.reward) }}</div>
                  <div class="l-3">Cash Gifts</div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="f-d-bottom">
          <div class="btn" @click="goPath">Deposit {{ f_d_val }} Now</div>
          <div class="tip">
            After you do this,the funds and cash gifts will appear in your account
            immediately
          </div>
          <div class="des-t">Terms and conditions</div>
          <div class="des">
            1.Make a first deposit of ₵ 48/95/477,and you get Cash Gifts of ₵ 80/150/550.
          </div>
          <div class="des">2.Each account can get these Cash Gifts only once.</div>
          <div class="des">
            3.You will receive the Gift once you make the first deposit.
          </div>
          <div class="des">4.Cash Gift can only be used in the game.</div>
          <div class="des">5.GameCoca reserves the final rights of these Cash Gifts.</div>
        </div>
      </div>
    </div>
  </nut-overlay>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { Close } from "@nutui/icons-vue";
import apiconfig from "@/utils/apiConfig";
import { useRouter } from "vue-router";
const img_url = apiconfig.fileURL;
const { state, commit } = useStore();
const rouer = useRouter();
const fisrt_deposit_visilbe = computed(() => {
  return state.fisrt_deposit_visilbe;
});
const close = () => {
  commit("set_fisrt_deposit_visilbe", false);
};
watch(
  () => state.f_d_config,
  (newValue) => {
    f_d_list.value = newValue;
    f_d_val.value = newValue[1].amount;
  }
);
const goPath = () => {
  close();
  rouer.push({
    path: "/deposit",
    query: {
      amount: f_d_val.value,
    },
  });
};
const f_d_val = ref(95);
const f_d_list = ref(state.f_d_config);
const changeFD = (index) => {
  for (let i in f_d_list.value) {
    if (i == index) {
      f_d_list.value[i].active = true;
      f_d_val.value = f_d_list.value[i].amount;
    } else {
      f_d_list.value[i].active = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.f-d-box {
  position: relative;
  width: calc(100% - 0.555rem);
  // background: linear-gradient(-90deg, #741cb1, #6b4ee1);
  background: #741cb1;
  border-radius: 0.463rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .d-option-box {
    margin-top: -0.333rem;
    width: calc(100% - 0.555rem);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .item {
      width: 2.719rem;
      height: 4.416rem;
      background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/other/hd_fl_di_2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bottom {
        width: 100%;
        height: calc(65% - 0.055rem);
        box-sizing: border-box;
        padding: 0.166rem;
        .b-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(-20deg, #fff6cb, #fffcf0);
          border-radius: 0.186rem;
          font-weight: bold;
          color: #dd9478;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-1 {
            font-size: 0.388rem;
          }
          .l-2 {
            font-size: 0.869rem;
          }
          .l-3 {
            font-size: 0.352rem;
          }
        }
      }
      .top {
        width: 100%;
        height: calc(35% + 0.055rem);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #d5884f;
        .l-1 {
          font-size: 0.416rem;
          margin-bottom: 0.138rem;
        }
        .l-2 {
          font-weight: bold;
          font-size: 0.463rem;
        }
      }
    }

    .item-active {
      width: 2.991rem;
      height: 4.861rem;
      background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/other/hd_fl_di_1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bottom {
        width: 100%;
        height: calc(65% - 0.055rem);
        box-sizing: border-box;
        padding: 0.166rem;
        .b-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(-20deg, #ffdd78, #fff1d2);
          border-radius: 0.186rem;
          font-weight: bold;
          color: #de531d;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-1 {
            font-size: 0.425rem;
          }
          .l-2 {
            font-size: 0.952rem;
          }
          .l-3 {
            font-size: 0.388rem;
          }
        }
      }
      .top {
        width: 100%;
        height: calc(35% + 0.055rem);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #c16744;
        .l-1 {
          font-size: 0.463rem;
          margin-bottom: 0.138rem;
        }
        .l-2 {
          font-weight: bold;
          font-size: 0.508rem;
        }
      }
    }
  }
  .f-d-icon {
    position: absolute;
    top: -0.916rem;
    left: 0;
  }
  .f-d-bottom {
    background: #ffffff;
    box-shadow: 0px 0.008rem 0.027rem 0px #ffffff;
    border-radius: 0.463rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.555rem;
    width: 100%;
    margin-top: 0.277rem;
    .des {
      width: 100%;
      text-align: left;
      font-size: 0.319rem;
      font-weight: 600;
      color: #583188;
      line-height: 0.5rem;
    }
    .des-t {
      margin-bottom: 0.416rem;
      font-weight: bold;
      font-size: 0.425rem;
      color: #9932fc;
      font-weight: 600;
    }
    .tip {
      margin: 0.416rem 0;
      width: calc(100% - 1.388rem);
      text-align: center;
      font-size: 0.333rem;
      font-weight: 600;
      color: #583188;
    }
    .btn {
      width: calc(100% - 1.388rem);
      height: 1.111rem;
      background: linear-gradient(-90deg, #9343c4, #614ae6);
      border-radius: 0.555rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 0.516rem;
    }
  }
  .line-back {
    width: calc(100% - 0.555rem);
    height: 0.266rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.027rem;
    border: 0.091rem solid rgba(25, 12, 12, 0.3);
  }
  .f-d-title {
    width: 100%;
    box-sizing: border-box;
    padding: 0.416rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-weight: bold;
      font-size: 0.572rem;
      color: #ffffff;
      padding: 0 0.555rem;
    }
    img {
      width: 0.258rem;
    }
  }
  .f-d-close {
    position: absolute;
    top: -0.694rem;
    right: 0.277rem;
  }
}
</style>
