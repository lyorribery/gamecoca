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
              <div class="left"></div>
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
              <div class="left"></div>
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
  active.value = route.query.type;
});
const r_list = ref([
  {
    title: "Recharge Record",
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
    title: "Withdrawals record",
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
          width: 53px;
          height: 53px;
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
              font-size: 11px;
            }
            .c-btn {
              color: #e556ff;
              font-size: 8px;
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
          font-size: 12px;
        }
        .status {
          font-size: 13px;
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
    font-size: 13.3px;
  }
  .custom-title.active {
    color: #e556ff;
  }
}
.records-header {
  z-index: 9;
  background: #19142b;
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
