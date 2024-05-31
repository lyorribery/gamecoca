<template>
  <nut-overlay
    v-model:visible="daily_visible"
    :lock-scroll="true"
    :close-on-click-overlay="false"
    :duration="0.8"
  >
    <div class="daily-close">
      <Close color="#fff" width=".444rem" height=".444rem" @click="close()" />
    </div>
    <div class="daily-box">
      <img src="../assets/images/client/other/daily_top.png" style="width: 100%" />
      <div class="daily-container">
        <div class="daily-line-box">
          <div class="item">
            <div class="coin">+50</div>
            <div class="step">
              <div class="step-line" style="background: transparent"></div>
              <div class="step-container check-step">1</div>
              <div class="step-line" :class="check_times > 0 ? 'check-line' : ''"></div>
            </div>
            <div class="day">Day 1</div>
          </div>
          <div class="item">
            <div class="coin">+50</div>
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
            <div class="coin">+80</div>
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
            <div class="coin">+80</div>
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
        <div class="daily-line-box" style="margin-top: 0.277rem">
          <div class="item">
            <div class="coin" style="color: #ffc23e">+120</div>
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
            <div class="coin" style="color: #ffc23e">+120</div>
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
            <div class="coin" style="color: #ffc23e">+200</div>
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
          <li>Check-in daily to claim up to 200 coins</li>
          <li>Check-in 7 days continuously to claim 700 coins</li>
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
import { signCheck } from "@/apis/apis";

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
  right: 0.555rem;
  top: calc(20% - 0.833rem);
}
.daily-box {
  position: fixed;
  left: 0.555rem;
  top: 20%;
  width: calc(100% - 1.111rem);

  .daily-container {
    border-bottom-left-radius: 0.277rem;
    border-bottom-right-radius: 0.277rem;
    border-left: 0.138rem solid #ac8fff;
    border-bottom: 0.138rem solid #ac8fff;
    border-right: 0.138rem solid #ac8fff;
    background: linear-gradient(-24deg, rgba(204, 186, 255), #f7fdfd);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.416rem;
    .daily-line-box {
      width: calc(100% - 0.555rem);
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
          font-size: 0.361rem;
          font-weight: 600;
          color: #c1c1c1;
        }
        .day {
          color: #ccc3e2;
          font-weight: 600;
          font-size: 0.388rem;
        }
        .step {
          margin: 0.083rem 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .step-line {
            flex: 1;
            background: #e4d8fe;
            height: 0.138rem;
          }
          .step-container {
            width: 0.777rem;
            height: 0.777rem;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e4d8fe;
            font-size: 0.416rem;
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
      width: calc(100% - 0.555rem);
      height: 1.166rem;
      background: linear-gradient(-90deg, #9343c4, #614ae6);
      border-radius: 0.611rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 0.472rem;
      font-weight: bold;
      margin: 0.416rem 0;
    }
    .line-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line {
        flex: 1;
        height: 0.0138rem;
        background: #666666;
      }
      span {
        font-size: 0.347rem;
        font-weight: 600;
        color: #666666;
        padding: 0 0.138rem;
      }
    }
  }
}
</style>
