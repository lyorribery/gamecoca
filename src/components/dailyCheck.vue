<template>
  <nut-overlay
    v-model:visible="daily_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="daily-close">
      <Close color="#fff" width="16px" height="16px" @click="close()" />
    </div>
    <div class="daily-box">
      <img :src="img_url + 'other/daily_top.png'" style="width: 100%" />
      <div class="daily-container">
        <div class="daily-line-box">
          <div class="item">
            <div class="coin">+20</div>
            <div class="step">
              <div class="step-line" style="background: transparent"></div>
              <div class="step-container check-step">1</div>
              <div class="step-line" :class="check_times > 0 ? 'check-line' : ''"></div>
            </div>
            <div class="day">Day 1</div>
          </div>
          <div class="item">
            <div class="coin">+20</div>
            <div class="step">
              <div class="step-line" :class="check_times > 1 ? 'check-line' : ''"></div>
              <div class="step-container" :class="check_times > 1 ? 'check-step' : ''">
                2
              </div>
              <div class="step-line" :class="check_times > 1 ? 'check-line' : ''"></div>
            </div>
            <div class="day">Day 2</div>
          </div>
          <div class="item">
            <div class="coin">+40</div>
            <div class="step">
              <div class="step-line" :class="check_times > 2 ? 'check-line' : ''"></div>
              <div class="step-container" :class="check_times > 2 ? 'check-step' : ''">
                3
              </div>
              <div class="step-line" :class="check_times > 2 ? 'check-line' : ''"></div>
            </div>
            <div class="day">Day 3</div>
          </div>
          <div class="item">
            <div class="coin">+40</div>
            <div class="step">
              <div class="step-line" :class="check_times > 3 ? 'check-line' : ''"></div>
              <div class="step-container" :class="check_times > 3 ? 'check-step' : ''">
                4
              </div>
              <div class="step-line" style="background: transparent"></div>
            </div>
            <div class="day">Day 4</div>
          </div>
        </div>
        <div class="daily-line-box" style="margin-top: 10px">
          <div class="item">
            <div class="coin" style="color: #ffc23e">+60</div>
            <div class="step">
              <div class="step-line" style="background: transparent"></div>
              <div class="step-container" :class="check_times > 4 ? 'check-step' : ''">
                5
              </div>
              <div class="step-line" :class="check_times > 4 ? 'check-line' : ''"></div>
            </div>
            <div class="day">Day 5</div>
          </div>
          <div class="item">
            <div class="coin" style="color: #ffc23e">+60</div>
            <div class="step">
              <div class="step-line" :class="check_times > 5 ? 'check-line' : ''"></div>
              <div class="step-container" :class="check_times > 5 ? 'check-step' : ''">
                6
              </div>
              <div class="step-line" :class="check_times > 5 ? 'check-line' : ''"></div>
            </div>
            <div class="day">Day 6</div>
          </div>
          <div class="item">
            <div class="coin" style="color: #ffc23e">+100</div>
            <div class="step">
              <div class="step-line" :class="check_times > 6 ? 'check-line' : ''"></div>
              <div class="step-container" :class="check_times > 6 ? 'check-step' : ''">
                7
              </div>
              <div class="step-line" style="background: transparent"></div>
            </div>
            <div class="day">Day 7</div>
          </div>
        </div>
        <div class="check-btn" @click="checkIn">Check in</div>
        <div class="line-box">
          <div class="line"></div>
          <span>Instructions</span>
          <div class="line"></div>
        </div>
        <ul>
          <li>Check-in daily to claim up to 100 coins</li>
          <li>Check-in 7 days continuously to claim 340 coins</li>
          <li>Coins can only be used to win Cash Gift by playing Coins Spin</li>
        </ul>
      </div>
    </div>
  </nut-overlay>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { Close } from "@nutui/icons-vue";
import apiconfig from "@/utils/apiConfig";
import { signCheck } from "@/apis/apis";
const img_url = apiconfig.fileURL;
const { state, commit, dispatch } = useStore();
const check_times = computed(() => {
  return state.user_info.signTimes ? state.user_info.signTimes : 0;
});
const check_loading = ref(false);
const checkIn = () => {
  if (!localStorage.getItem("token")) {
    close();
    commit("set_tip_info", "You have not logged in yet,please login.");
    commit("set_tip_type", 1);
    commit("set_tip_modal", true);
    return;
  }

  if (
    state.user_info.signTime &&
    new Date().getTime() / 1000 - state.user_info.signTime < 86400
  ) {
    close();
    commit(
      "set_tip_info",
      "Sign in has been completed today, go to the coins spin to get cash rewards."
    );
    commit("set_tip_type", 6);
    commit("set_tip_modal", true);
    return;
  }
  if (check_loading.value) return;
  check_loading.value = true;
  signCheck.post("", {}).then((res) => {
    if (res.code == 200) {
      dispatch("GET_USER_INFO");
      commit(
        "set_tip_info",
        "Sign in has been completed today, go to the coins spin to get cash rewards."
      );
      commit("set_tip_type", 6);
      commit("set_tip_modal", true);
    } else if (res.code == 2002) {
      commit("set_user_info", {});
      localStorage.removeItem("token");
      commit("set_tip_info", "You have not logged in yet,please login.");
      commit("set_tip_type", 1);
      commit("set_tip_modal", true);
    }
    close();
    check_loading.value = false;
  });
};
const daily_visible = computed(() => {
  return state.daily_visible;
});
const close = () => {
  commit("set_daily_visible", false);
};
</script>

<style lang="scss" scoped>
.daily-close {
  position: fixed;
  right: 20px;
  top: calc(20% - 30px);
}
.daily-box {
  position: fixed;
  left: 20px;
  top: 20%;
  width: calc(100% - 40px);

  .daily-container {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: 5px solid #ac8fff;
    border-bottom: 5px solid #ac8fff;
    border-right: 5px solid #ac8fff;
    background: linear-gradient(-24deg, rgba(204, 186, 255), #f7fdfd);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    .daily-line-box {
      width: calc(100% - 20px);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .coin {
          font-size: 12px;
          font-weight: 600;
          color: #c1c1c1;
        }
        .day {
          color: #ccc3e2;
          font-weight: 600;
          font-size: 13px;
        }
        .step {
          margin: 3px 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .step-line {
            flex: 1;
            background: #e4d8fe;
            height: 5px;
          }
          .step-container {
            width: 28px;
            height: 28px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e4d8fe;
            font-size: 14px;
            color: #af62ff;
          }
          .check-step {
            background: #af62ff;
            color: #fff;
          }
          .check-line {
            background: #af62ff;
          }
        }
      }
    }
    .check-btn {
      width: calc(100% - 20px);
      height: 42px;
      background: linear-gradient(-90deg, #9343C4, #614AE6);
      border-radius: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 17px;
      font-weight: bold;
      margin: 15px 0;
    }
    .line-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line {
        flex: 1;
        height: 0.5px;
        background: #666666;
      }
      span {
        font-size: 12px;
        font-weight: 600;
        color: #666666;
        padding: 0 5px;
      }
    }
  }
}
</style>
