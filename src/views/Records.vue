<template>
  <div class="records-header">
    <div class="arrow">
      <RectLeft color="#fff" width="18px" height="18px" @click="goBack" />
    </div>
    <div class="title">Records</div>
  </div>
  <div class="records">
    <nut-tabs v-model="active" auto-height>
      <template #titles>
        <div
          v-for="item in r_list"
          :key="item.paneKey"
          class="custom-tab-item"
          @click="active = item.paneKey"
        >
          <div
            class="custom-title"
            :class="{
              active: active === item.paneKey,
            }"
          >
            {{ item.title }}
          </div>
          <div class="b_border" v-show="active == item.paneKey"></div>
        </div>
      </template>
      <nut-tab-pane v-for="item in r_list" :key="item.paneKey" :pane-key="item.paneKey">
        <div class="records-item" v-if="active == 1">
          <div
            class="records-content"
            v-for="(items, indexs) in item.content"
            :key="indexs"
          >
            <div class="top">
              <span class="time">{{ items.time }}</span>
              <span
                class="status"
                :class="
                  items.status == 1
                    ? 'status-1'
                    : items.status == 2
                    ? 'status-2'
                    : 'status-3'
                "
                >{{
                  items.status == 1 ? "Done" : items.status == 2 ? "Forward" : "Failed"
                }}</span
              >
            </div>
            <div class="bottom">
              <div class="left">
                <svg
                  t="1712045031517"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5395"
                  width="30"
                  height="30"
                >
                  <path
                    d="M939.1976300088891 879.6488692622222c0 12.945382968888888-2.5890770488888886 25.890765937777775-7.767230008888888 36.247071857777776-5.17815296 10.35630592-10.35630592 20.71261184-18.123535928888888 31.068917759999998-7.767230008888888 7.767230008888888-18.123535928888888 15.534458879999999-28.47984184888889 20.712612977777777-10.35630592 5.17815296-23.301688888888886 7.767230008888888-36.247071857777776 7.7672288711111115H172.83097258666663c-12.945382968888888 0-25.890765937777775-2.5890770488888886-36.247071857777776-7.7672288711111115-12.945382968888888-5.17815296-23.301688888888886-10.35630592-31.068917759999998-20.712612977777777-7.767230008888888-7.767230008888888-15.534458879999999-18.123535928888888-20.712612977777777-31.068917759999998-5.17815296-10.35630592-7.767230008888888-23.301688888888886-7.7672288711111115-36.247071857777776V364.4226366577778c0-25.890765937777775 10.35630592-49.19245482666667 28.47984184888889-67.31598961777779 18.123535928888888-18.123535928888888 41.42522481777778-28.47984184888889 67.31598961777779-28.47984184888889h678.3380548266667c25.890765937777775 0 49.19245482666667 10.35630592 67.31598961777779 28.47984184888889 18.123535928888888 18.123535928888888 28.47984184888889 41.42522481777778 28.47984184888889 67.31598961777779v139.81013333333334H706.18074112c-25.890765937777775 0-49.19245482666667 7.767230008888888-67.31599075555556 25.890765937777775-18.123535928888888 18.123535928888888-28.47984184888889 38.836147768888885-28.47984184888889 67.31598961777779 0 18.123535928888888 5.17815296 33.657994808888894 10.35630592 46.60337777777777s15.534458879999999 23.301688888888886 28.47984184888889 31.068918897777777c12.945382968888888 10.35630592 31.068918897777777 15.534458879999999 54.37060778666666 15.534458879999999H939.1976300088891v189.00258816z m-139.81013333333334-657.6254418488888H330.7646418488889c36.247071857777776-18.123535928888888 72.49414371555555-38.836147768888885 106.15213852444442-56.95968369777778l85.43952554666666-46.60337777777777c28.47984184888889-15.534458879999999 49.19245482666667-25.890765937777775 67.31599075555556-36.247071857777776 23.301688888888886-12.945382968888888 46.60337777777777-18.123535928888888 64.72691370666666-18.123535928888888s36.247071857777776 5.17815296 49.19245368888889 10.35630592c15.534458879999999 7.767230008888888 28.47984184888889 18.123535928888888 38.836147768888885 31.068918897777777l56.95968483555556 116.50844444444445z m-139.81013333333334 375.4160981333333c0-12.945382968888888 5.17815296-23.301688888888886 12.945381831111112-33.657994808888894 7.767230008888888-7.767230008888888 20.71261184-12.945382968888888 33.65799594666667-12.945382968888888s23.301688888888886 5.17815296 33.657994808888894 12.945382968888888c7.767230008888888 7.767230008888888 12.945382968888888 20.71261184 12.945382968888888 33.657994808888894s-5.17815296 23.301688888888886-12.945382968888888 33.65799594666667-20.71261184 12.945382968888888-33.657994808888894 12.945381831111112-23.301688888888886-5.17815296-33.65799594666667-12.945381831111112c-7.767230008888888-7.767230008888888-12.945382968888888-18.123535928888888-12.945381831111112-33.65799594666667z m0 0"
                    fill="#7962C6"
                    p-id="5396"
                  ></path>
                </svg>
              </div>
              <div class="right">
                <div class="r-row">
                  <span class="m-color">{{ items.chanel }}</span>
                  <span class="m-color">₵{{ items.amount.toFixed(2) }}</span>
                </div>
                <div class="r-row">
                  <span class="s-color">Order No: {{ items.order }}</span>
                  <div class="c-btn">Copy</div>
                </div>
                <div class="r-row">
                  <span class="s-color">User ID: {{ items.userid }}</span>
                </div>
                <div class="r-row" v-if="items.gift">
                  <div class="val">(Of funds) arrive:</div>
                  <div class="val">₵{{ (items.amount + items.gift).toFixed(2) }}</div>
                </div>
                <div class="r-row" v-if="items.gift">
                  <div class="val">Offers:</div>
                  <div class="val">₵{{ items.gift.toFixed(2) }}</div>
                </div>
                <div class="r-row">
                  <div class="b-val">Payment:</div>
                  <div class="b-val">₵{{ items.amount.toFixed(2) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="records-item" v-if="active == 2">
          <div
            class="records-content"
            v-for="(items, indexs) in item.content"
            :key="indexs"
          >
            <div class="top">
              <span class="time">{{ items.time }}</span>
              <span
                class="status"
                :class="
                  items.status == 1
                    ? 'status-1'
                    : items.status == 2
                    ? 'status-2'
                    : 'status-3'
                "
                >{{
                  items.status == 1 ? "Done" : items.status == 2 ? "Forward" : "Failed"
                }}</span
              >
            </div>
            <div class="bottom">
              <div class="left">
                <svg
                  t="1712045031517"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5395"
                  width="30"
                  height="30"
                >
                  <path
                    d="M939.1976300088891 879.6488692622222c0 12.945382968888888-2.5890770488888886 25.890765937777775-7.767230008888888 36.247071857777776-5.17815296 10.35630592-10.35630592 20.71261184-18.123535928888888 31.068917759999998-7.767230008888888 7.767230008888888-18.123535928888888 15.534458879999999-28.47984184888889 20.712612977777777-10.35630592 5.17815296-23.301688888888886 7.767230008888888-36.247071857777776 7.7672288711111115H172.83097258666663c-12.945382968888888 0-25.890765937777775-2.5890770488888886-36.247071857777776-7.7672288711111115-12.945382968888888-5.17815296-23.301688888888886-10.35630592-31.068917759999998-20.712612977777777-7.767230008888888-7.767230008888888-15.534458879999999-18.123535928888888-20.712612977777777-31.068917759999998-5.17815296-10.35630592-7.767230008888888-23.301688888888886-7.7672288711111115-36.247071857777776V364.4226366577778c0-25.890765937777775 10.35630592-49.19245482666667 28.47984184888889-67.31598961777779 18.123535928888888-18.123535928888888 41.42522481777778-28.47984184888889 67.31598961777779-28.47984184888889h678.3380548266667c25.890765937777775 0 49.19245482666667 10.35630592 67.31598961777779 28.47984184888889 18.123535928888888 18.123535928888888 28.47984184888889 41.42522481777778 28.47984184888889 67.31598961777779v139.81013333333334H706.18074112c-25.890765937777775 0-49.19245482666667 7.767230008888888-67.31599075555556 25.890765937777775-18.123535928888888 18.123535928888888-28.47984184888889 38.836147768888885-28.47984184888889 67.31598961777779 0 18.123535928888888 5.17815296 33.657994808888894 10.35630592 46.60337777777777s15.534458879999999 23.301688888888886 28.47984184888889 31.068918897777777c12.945382968888888 10.35630592 31.068918897777777 15.534458879999999 54.37060778666666 15.534458879999999H939.1976300088891v189.00258816z m-139.81013333333334-657.6254418488888H330.7646418488889c36.247071857777776-18.123535928888888 72.49414371555555-38.836147768888885 106.15213852444442-56.95968369777778l85.43952554666666-46.60337777777777c28.47984184888889-15.534458879999999 49.19245482666667-25.890765937777775 67.31599075555556-36.247071857777776 23.301688888888886-12.945382968888888 46.60337777777777-18.123535928888888 64.72691370666666-18.123535928888888s36.247071857777776 5.17815296 49.19245368888889 10.35630592c15.534458879999999 7.767230008888888 28.47984184888889 18.123535928888888 38.836147768888885 31.068918897777777l56.95968483555556 116.50844444444445z m-139.81013333333334 375.4160981333333c0-12.945382968888888 5.17815296-23.301688888888886 12.945381831111112-33.657994808888894 7.767230008888888-7.767230008888888 20.71261184-12.945382968888888 33.65799594666667-12.945382968888888s23.301688888888886 5.17815296 33.657994808888894 12.945382968888888c7.767230008888888 7.767230008888888 12.945382968888888 20.71261184 12.945382968888888 33.657994808888894s-5.17815296 23.301688888888886-12.945382968888888 33.65799594666667-20.71261184 12.945382968888888-33.657994808888894 12.945381831111112-23.301688888888886-5.17815296-33.65799594666667-12.945381831111112c-7.767230008888888-7.767230008888888-12.945382968888888-18.123535928888888-12.945381831111112-33.65799594666667z m0 0"
                    fill="#7962C6"
                    p-id="5396"
                  ></path>
                </svg>
              </div>
              <div class="right">
                <div class="r-row">
                  <span class="m-color">{{ items.chanel }}</span>
                  <span class="m-color">₵{{ items.amount.toFixed(2) }}</span>
                </div>
                <div class="r-row">
                  <span class="s-color">Order No: {{ items.order }}</span>
                  <div class="c-btn">Copy</div>
                </div>
                <div class="r-row">
                  <span class="s-color">User ID: {{ items.userid }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { RectLeft } from "@nutui/icons-vue";
const route = useRoute();
const router = useRouter();
const active = ref(1);
onMounted(() => {
  if (route.query.type) active.value = route.query.type;
});
const r_list = ref([
  {
    title: "Deposit Records",
    paneKey: 1,
    content: [
      {
        time: "2024-04-01 23:00:12",
        status: 1,
        chanel: "MOMO",
        order: "2024040123567",
        userid: "2021239",
        amount: 500,
        gift: 5,
      },
      {
        time: "2024-04-01 23:00:12",
        status: 2,
        chanel: "MOMO",
        order: "2024040123567",
        userid: "2021239",
        amount: 500,
        gift: 5,
      },
      {
        time: "2024-04-01 23:00:12",
        status: 3,
        chanel: "MOMO",
        order: "2024040123567",
        userid: "2021239",
        amount: 500,
        gift: 5,
      },
    ],
  },
  {
    title: "Withdrawals Records",
    paneKey: 2,
    content: [
      {
        time: "2024-04-01 23:00:12",
        status: 1,
        chanel: "MOMO",
        order: "2024040123567",
        userid: "2021239",
        amount: 500,
      },
      {
        time: "2024-04-01 23:00:12",
        status: 2,
        chanel: "MOMO",
        order: "2024040123567",
        userid: "2021239",
        amount: 500,
      },
      {
        time: "2024-04-01 23:00:12",
        status: 3,
        chanel: "MOMO",
        order: "2024040123567",
        userid: "2021239",
        amount: 500,
      },
    ],
  },
]);
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.records {
  width: 100%;
  box-sizing: border-box;
  padding: calc(55px + env(safe-area-inset-top)) 0 0 0;
  .records-item {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px 20px 15px;
    .records-content {
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      border-radius: 16px;
      background-color: #382b63;
      margin-top: 15px;
      .bottom {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .left {
          width: 43px;
          height: 43px;
          border-radius: 13px;
          background: #2f2751;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
        }
        .right {
          flex: 1;
          .r-row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            &:last-child {
              margin-bottom: 0;
            }
            .val {
              width: 50%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              font-size: 13px;
              color: #8174ac;
            }
            .b-val {
              width: 50%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              font-weight: bold;
              font-size: 13px;
              color: #ffffff;
            }
            .m-color {
              color: #fefefe;
              font-size: 13px;
            }
            .s-color {
              color: #8174ac;
              font-size: 12px;
            }
            .c-btn {
              color: #e556ff;
              font-size: 9px;
              font-weight: 600;
              border: 1px solid #bd35fc;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 35px;
              height: 15.3px;
              border-radius: 7.3px;
            }
          }
        }
      }
      .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .time {
          color: #fefefe;
          font-size: 13px;
        }
        .status {
          font-size: 13px;
          font-weight: 600;
        }
        .status-1 {
          color: #e556ff;
        }
        .status-2 {
          color: #40c966;
        }
        .status-3 {
          color: #d75858;
        }
      }
    }
  }
  .custom-tab-item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #29213d;
    position: relative;
    .b_border {
      position: absolute;
      bottom: 1px;
      left: 40px;
      width: calc(100% - 80px);
      height: 2px;
      background-color: #e556ff;
    }
  }
  .custom-title {
    color: #fff;
    font-size: 13px;
    font-weight: 600;
  }
  .custom-title.active {
    color: #e556ff;
  }
}
.records-header {
  z-index: 9;
  background: #161326;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #29213d;
  .arrow {
    position: fixed;
    left: 15px;
    top: calc(env(safe-area-inset-top) + 18.5px);
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
