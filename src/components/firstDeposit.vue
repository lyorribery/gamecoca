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
          <img :src="img_url + 'invite/img_lihe.png'" width="66" />
        </div>
        <div class="f-d-close">
          <Close color="#fff" width="16px" height="16px" @click="close()" />
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
          <div class="btn">Deposit {{ f_d_val }} Now</div>
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
const img_url = apiconfig.fileURL;
const { state, commit } = useStore();
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
  width: calc(100% - 20px);
  // background: linear-gradient(-90deg, #741cb1, #6b4ee1);
  background: #741cb1;
  border-radius: 16.7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .d-option-box {
    margin-top: -12px;
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .item {
      width: 97.9px;
      height: 159px;
      background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/other/hd_fl_di_2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bottom {
        width: 100%;
        height: calc(65% - 2px);
        box-sizing: border-box;
        padding: 6px;
        .b-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(-20deg, #fff6cb, #fffcf0);
          border-radius: 6.7px;
          font-weight: bold;
          color: #dd9478;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-1 {
            font-size: 14px;
          }
          .l-2 {
            font-size: 31.3px;
          }
          .l-3 {
            font-size: 12.7px;
          }
        }
      }
      .top {
        width: 100%;
        height: calc(35% + 2px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #d5884f;
        .l-1 {
          font-size: 15px;
          margin-bottom: 5px;
        }
        .l-2 {
          font-weight: bold;
          font-size: 16.7px;
        }
      }
    }

    .item-active {
      width: 107.7px;
      height: 175px;
      background-image: url("https://chuangmd.oss-cn-hongkong.aliyuncs.com/client/other/hd_fl_di_1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bottom {
        width: 100%;
        height: calc(65% - 2px);
        box-sizing: border-box;
        padding: 6px;
        .b-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(-20deg, #ffdd78, #fff1d2);
          border-radius: 6.7px;
          font-weight: bold;
          color: #de531d;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-1 {
            font-size: 15.3px;
          }
          .l-2 {
            font-size: 34.3px;
          }
          .l-3 {
            font-size: 14px;
          }
        }
      }
      .top {
        width: 100%;
        height: calc(35% + 2px);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #c16744;
        .l-1 {
          font-size: 16.7px;
          margin-bottom: 5px;
        }
        .l-2 {
          font-weight: bold;
          font-size: 18.3px;
        }
      }
    }
  }
  .f-d-icon {
    position: absolute;
    top: -33px;
    left: 0;
  }
  .f-d-bottom {
    background: #ffffff;
    box-shadow: 0px 0.3px 1px 0px #ffffff;
    border-radius: 16.7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    margin-top: 10px;
    .des {
      width: 100%;
      text-align: left;
      font-size: 11px;
      font-weight: 600;
      color: #583188;
      line-height: 18px;
    }
    .des-t {
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 15.3px;
      color: #9932fc;
      font-weight: 600;
    }
    .tip {
      margin: 15px 0;
      width: calc(100% - 50px);
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      color: #583188;
    }
    .btn {
      width: calc(100% - 50px);
      height: 40px;
      background: linear-gradient(-90deg, #9932fc, #5b2efa);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 18.6px;
    }
  }
  .line-back {
    width: calc(100% - 20px);
    height: 9.6px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    border: 3.3px solid rgba(25, 12, 12, 0.3);
  }
  .f-d-title {
    width: 100%;
    box-sizing: border-box;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-weight: bold;
      font-size: 20.6px;
      color: #ffffff;
      padding: 0 20px;
    }
    img {
      width: 9.3px;
    }
  }
  .f-d-close {
    position: absolute;
    top: -25px;
    right: 10px;
  }
}
</style>
