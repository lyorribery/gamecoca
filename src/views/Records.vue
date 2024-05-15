<template>
  <div class="records-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width="13px" height="13px" /><span>Back</span>
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
              <span class="time">{{ items.updatedAt }}</span>
              <span
                class="status"
                :class="
                  items.status == 2
                    ? 'status-1'
                    : items.status == 1
                    ? 'status-2'
                    : 'status-3'
                "
                >{{
                  items.status == 2 ? "Done" : items.status == 1 ? "Forward" : "Failed"
                }}</span
              >
            </div>
            <div class="bottom">
              <div class="left">
                <img
                  v-if="items.channel == 'vodafone-gh'"
                  src="../assets/images/vodafone.png"
                  width="30"
                />
                <img
                  v-else-if="items.channel == 'tigo-gh'"
                  src="../assets/images/tigo.png"
                  width="30"
                />
                <img
                  v-else-if="items.channel == 'MTN-gh'"
                  src="../assets/images/mtn.png"
                  width="30"
                />
              </div>
              <div class="right">
                <div class="r-row">
                  <span class="m-color" v-if="items.channel == 'vodafone-gh'"
                    >Vodafone</span
                  >
                  <span class="m-color" v-if="items.channel == 'tigo-gh'"
                    >AirtelTigo</span
                  >
                  <span class="m-color" v-if="items.channel == 'MTN-gh'">MoMo</span>
                  <span class="m-color">₵{{ (items.amount / 100).toFixed(2) }}</span>
                </div>
                <div class="r-row">
                  <span class="s-color">Order No: {{ items.orderId }}</span>
                  <div class="c-btn" @click="copyorder(items.orderId)">Copy</div>
                </div>
                <div class="r-row">
                  <span class="s-color">User Mobile: {{ items.mobile }}</span>
                </div>
                <!-- <div class="r-row" v-if="items.gift">
                  <div class="val">(Of funds) arrive:</div>
                  <div class="val">₵{{ (items.amount + items.gift).toFixed(2) }}</div>
                </div>
                <div class="r-row" v-if="items.gift">
                  <div class="val">Offers:</div>
                  <div class="val">₵{{ items.gift.toFixed(2) }}</div>
                </div> -->
                <!-- <div class="r-row">
                  <div class="b-val">Payment:</div>
                  <div class="b-val">₵{{ items.amount.toFixed(2) }}</div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="no-data" v-if="item.content.length == 0">
            <svg
              t="1715067007166"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5112"
              width="50"
              height="50"
            >
              <path
                d="M708.2 194.6c-4.8 1.1-9.9-0.2-13.5-3.6-2.7-2.5-4.2-5.9-4.2-9.6 0-3.6 1.5-7.1 4.2-9.6l37.2-37.3c2.5-2.7 5.9-4.2 9.6-4.2 3.7 0 7.1 1.5 9.6 4.2 2.7 2.5 4.2 5.9 4.2 9.6 0 3.6-1.5 7.1-4.2 9.6L713.9 191c-2.3 2.3-3.4 3.4-5.7 3.4M791.6 281.6c-1.7 0.9-3.7 1.3-5.7 1.2l-47.3-5.6c-7.5-0.6-13-7.2-12.4-14.7 0.6-7.5 7.2-13 14.7-12.4l47.3 4.5c7.5 0.7 13 7.2 12.4 14.7 0 5.6-3.6 10.6-9 12.3M628.1 176.6c-3.4 1.2-7.2 0.8-10.4-0.9-3.2-1.7-5.5-4.7-6.5-8.1l-15.8-45.2c-2.4-6.8 1.1-14.4 7.9-17 3.4-1.2 7.2-0.9 10.4 0.8 3.2 1.7 5.6 4.6 6.6 8.1l15.8 45.2c1.4 3.3 1.4 7-0.1 10.2-1.5 3.3-4.4 5.7-7.9 6.9M451.2 915.6H279.8c-6.2 0-11.3-5.1-11.3-11.3 0-6.2 5.1-11.3 11.3-11.3h171.3c3.1-0.2 6 0.9 8.2 3.1 2.2 2.2 3.3 5.2 3.1 8.2 0 3-1.2 5.9-3.3 8-2.1 2.1-4.9 3.3-7.9 3.3z m-171.4-60.1c-6.2 0-11.3-5.1-11.3-11.3 0-6.2 5.1-11.3 11.3-11.3l381.1-1.1c6.2 0 11.3 5.1 11.3 11.3 0 6.2-5.1 11.3-11.3 11.3l-381.1 1.1z m0 0"
                p-id="5113"
                fill="#fff"
              ></path>
              <path
                d="M208.5 390c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-26-81.5-39.1-122.2-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 26 82.2 39.1 123.4 5.1 5.2 12.8 7 19.6 4.5z m103.9 320.5c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-26-81.5-39.1-122.2-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 26 82.2 39.1 123.4 5 5.3 12.7 7 19.6 4.5z m28 78.8c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-0.3-0.6-13.3-41.3-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 0.3 1.4 13.3 42.5 5.1 5.3 12.8 7 19.6 4.5z m-7.3 2.2c41.2-12.7 1.3-0.6 42.5-13.3 7.6-2.3 11.6-11.5 8.9-20.3-2.7-8.8-11.1-14.1-18.7-11.8-40.9 12.5-0.6 0.1-41.5 12.7-5.5 4.7-7.8 12.1-6 19.1 1.8 7 7.6 12.3 14.8 13.6z m-73.1-241c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-26-81.5-39.1-122.2-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 26 82.2 39.1 123.4 5.1 5.2 12.8 6.9 19.6 4.5z m479.5 99.6c40.7-14.3 81.4-28.5 122.1-42.8 7.6-2.6 11.1-11.9 8.1-20.6-3-8.7-11.6-13.7-19.1-11.1-40.4 14-80.8 28.1-121.2 42.1-5.3 4.9-7.3 12.4-5.2 19.3 2.1 7 8.1 12.1 15.3 13.1zM419.8 761.3c40.7-14.3 81.4-28.5 122.1-42.8 7.6-2.6 11.1-11.9 8.1-20.6-3-8.7-11.6-13.7-19.1-11.1-40.4 14-80.8 28.1-121.2 42.1-5.3 4.9-7.3 12.4-5.2 19.3 2.1 6.9 8.1 12.1 15.3 13.1zM579.3 707c40.7-14.3 81.4-28.5 122.1-42.8 7.6-2.6 11.1-11.9 8.1-20.6-3-8.7-11.6-13.7-19.1-11.1-40.4 14-80.8 28.1-121.2 42.1-5.3 4.9-7.3 12.4-5.2 19.3 2 7 8 12.1 15.3 13.1z m228.6-102.5M406.7 574.8l42.8-82.9 96.4 49.8c4 2.1 8.6 2.5 12.9 1.1l0.4-0.1c4.4-1.5 8-4.8 9.9-9l102.6-226.5c3.9-8.5 0.1-18.6-8.4-22.4-8.5-3.8-18.6-0.1-22.4 8.4l-95.3 210.2-95.6-49.3c-8.3-4.3-18.5-1-22.8 7.3l-50.6 97.9c-4.3 8.3-1 18.5 7.3 22.8 8.3 4.2 18.5 1 22.8-7.3z m0 0"
                p-id="5114"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>
        <div class="records-item" v-if="active == 2">
          <div
            class="records-content"
            v-for="(items, indexs) in item.content"
            :key="indexs"
          >
            <div class="top">
              <span class="time">{{ items.updatedAt }}</span>
              <span
                class="status"
                :class="
                  items.status == 4
                    ? 'status-1'
                    : items.status == 1 || item.status == 2
                    ? 'status-2'
                    : 'status-3'
                "
                >{{
                  items.status == 4
                    ? "Done"
                    : items.status == 2 || items.status == 1
                    ? "Forward"
                    : "Failed"
                }}</span
              >
            </div>
            <div class="bottom">
              <div class="left">
                <img
                  v-if="items.channel == 'vodafone-gh'"
                  src="../assets/images/vodafone.png"
                  width="30"
                />
                <img
                  v-else-if="items.channel == 'tigo-gh'"
                  src="../assets/images/tigo.png"
                  width="30"
                />
                <img
                  v-else-if="items.channel == 'MTN-gh'"
                  src="../assets/images/mtn.png"
                  width="30"
                />
              </div>
              <div class="right">
                <div class="r-row">
                  <span class="m-color" v-if="items.channel == 'vodafone-gh'"
                    >Vodafone</span
                  >
                  <span class="m-color" v-if="items.channel == 'tigo-gh'"
                    >AirtelTigo</span
                  >
                  <span class="m-color" v-if="items.channel == 'MTN-gh'">MoMo</span>
                  <span class="m-color">₵{{ (items.amount / 100).toFixed(2) }}</span>
                </div>
                <div class="r-row">
                  <span class="s-color">Order No: {{ items.orderId }}</span>
                  <div class="c-btn" @click="copyorder(items.orderId)">Copy</div>
                </div>
                <div class="r-row">
                  <span class="s-color">User Mobile: {{ items.mobile }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="no-data" v-if="item.content.length == 0">
            <svg
              t="1715067007166"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5112"
              width="50"
              height="50"
            >
              <path
                d="M708.2 194.6c-4.8 1.1-9.9-0.2-13.5-3.6-2.7-2.5-4.2-5.9-4.2-9.6 0-3.6 1.5-7.1 4.2-9.6l37.2-37.3c2.5-2.7 5.9-4.2 9.6-4.2 3.7 0 7.1 1.5 9.6 4.2 2.7 2.5 4.2 5.9 4.2 9.6 0 3.6-1.5 7.1-4.2 9.6L713.9 191c-2.3 2.3-3.4 3.4-5.7 3.4M791.6 281.6c-1.7 0.9-3.7 1.3-5.7 1.2l-47.3-5.6c-7.5-0.6-13-7.2-12.4-14.7 0.6-7.5 7.2-13 14.7-12.4l47.3 4.5c7.5 0.7 13 7.2 12.4 14.7 0 5.6-3.6 10.6-9 12.3M628.1 176.6c-3.4 1.2-7.2 0.8-10.4-0.9-3.2-1.7-5.5-4.7-6.5-8.1l-15.8-45.2c-2.4-6.8 1.1-14.4 7.9-17 3.4-1.2 7.2-0.9 10.4 0.8 3.2 1.7 5.6 4.6 6.6 8.1l15.8 45.2c1.4 3.3 1.4 7-0.1 10.2-1.5 3.3-4.4 5.7-7.9 6.9M451.2 915.6H279.8c-6.2 0-11.3-5.1-11.3-11.3 0-6.2 5.1-11.3 11.3-11.3h171.3c3.1-0.2 6 0.9 8.2 3.1 2.2 2.2 3.3 5.2 3.1 8.2 0 3-1.2 5.9-3.3 8-2.1 2.1-4.9 3.3-7.9 3.3z m-171.4-60.1c-6.2 0-11.3-5.1-11.3-11.3 0-6.2 5.1-11.3 11.3-11.3l381.1-1.1c6.2 0 11.3 5.1 11.3 11.3 0 6.2-5.1 11.3-11.3 11.3l-381.1 1.1z m0 0"
                p-id="5113"
                fill="#fff"
              ></path>
              <path
                d="M208.5 390c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-26-81.5-39.1-122.2-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 26 82.2 39.1 123.4 5.1 5.2 12.8 7 19.6 4.5z m103.9 320.5c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-26-81.5-39.1-122.2-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 26 82.2 39.1 123.4 5 5.3 12.7 7 19.6 4.5z m28 78.8c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-0.3-0.6-13.3-41.3-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 0.3 1.4 13.3 42.5 5.1 5.3 12.8 7 19.6 4.5z m-7.3 2.2c41.2-12.7 1.3-0.6 42.5-13.3 7.6-2.3 11.6-11.5 8.9-20.3-2.7-8.8-11.1-14.1-18.7-11.8-40.9 12.5-0.6 0.1-41.5 12.7-5.5 4.7-7.8 12.1-6 19.1 1.8 7 7.6 12.3 14.8 13.6z m-73.1-241c6.8-2.4 11.6-8.6 12.3-15.8-13-40.7-26-81.5-39.1-122.2-2.4-7.6-11.5-11.5-20.3-8.7-8.8 2.8-14.1 11.2-11.6 18.8 13 41.1 26 82.2 39.1 123.4 5.1 5.2 12.8 6.9 19.6 4.5z m479.5 99.6c40.7-14.3 81.4-28.5 122.1-42.8 7.6-2.6 11.1-11.9 8.1-20.6-3-8.7-11.6-13.7-19.1-11.1-40.4 14-80.8 28.1-121.2 42.1-5.3 4.9-7.3 12.4-5.2 19.3 2.1 7 8.1 12.1 15.3 13.1zM419.8 761.3c40.7-14.3 81.4-28.5 122.1-42.8 7.6-2.6 11.1-11.9 8.1-20.6-3-8.7-11.6-13.7-19.1-11.1-40.4 14-80.8 28.1-121.2 42.1-5.3 4.9-7.3 12.4-5.2 19.3 2.1 6.9 8.1 12.1 15.3 13.1zM579.3 707c40.7-14.3 81.4-28.5 122.1-42.8 7.6-2.6 11.1-11.9 8.1-20.6-3-8.7-11.6-13.7-19.1-11.1-40.4 14-80.8 28.1-121.2 42.1-5.3 4.9-7.3 12.4-5.2 19.3 2 7 8 12.1 15.3 13.1z m228.6-102.5M406.7 574.8l42.8-82.9 96.4 49.8c4 2.1 8.6 2.5 12.9 1.1l0.4-0.1c4.4-1.5 8-4.8 9.9-9l102.6-226.5c3.9-8.5 0.1-18.6-8.4-22.4-8.5-3.8-18.6-0.1-22.4 8.4l-95.3 210.2-95.6-49.3c-8.3-4.3-18.5-1-22.8 7.3l-50.6 97.9c-4.3 8.3-1 18.5 7.3 22.8 8.3 4.2 18.5 1 22.8-7.3z m0 0"
                p-id="5114"
                fill="#fff"
              ></path>
            </svg>
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
import { depositRecord, withdrawRecord } from "@/apis/apis";
import { formatDate } from "@/utils/utils";
import { useStore } from "vuex";
const { commit } = useStore();
const route = useRoute();
const router = useRouter();
const active = ref(1);
onMounted(() => {
  if (route.query.type) active.value = route.query.type;
  getList();
});
const getList = () => {
  depositRecord.post("", { page: 1, pageSize: 100 }).then((res) => {
    if (res.list) {
      res.list.map((item) => {
        item.updatedAt = formatDate(item.updatedAt * 1000, "-");
      });
      r_list.value[0].content = res.list;
    }
  });
  withdrawRecord.post("", { page: 1, pageSize: 100 }).then((res) => {
    if (res.list) {
      res.list.map((item) => {
        item.updatedAt = formatDate(item.updatedAt * 1000, "-");
      });
      r_list.value[1].content = res.list;
    }
  });
};
const r_list = ref([
  {
    title: "Deposit",
    paneKey: 1,
    content: [],
  },
  {
    title: "Withdrawal",
    paneKey: 2,
    content: [],
  },
]);
const goBack = () => {
  router.go(-1);
};
const copyorder = (order) => {
  copyToClipboard(order);
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    commit("set_tip_info", `Order number copied`);
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  } catch (err) {
    console.error("Failed to copy: ", err);
    commit("set_tip_info", `Order number copy faild.`);
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  }
};
</script>

<style lang="scss" scoped>
.no-data {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 0;
  text-align: center;
}
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
              font-size: 11px;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    left: 15px;
    top: 20px;
    span {
      font-weight: bold;
      font-size: 13px;
      color: #ffffff;
      padding-left: 5px;
    }
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
