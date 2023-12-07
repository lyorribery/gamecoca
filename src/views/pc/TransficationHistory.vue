<template>
  <div class="transfication-history">
    <div class="records-box">
      <div class="records-label">
        {{ $t("personal.transferhistory") }}
      </div>
      <div class="head-box">
        <div class="type-box">
          <div
            class="type"
            :style="{ background: type == 0 ? '#D4BD78' : '' }"
            @click="changePageType(0)"
          >
            {{ $t("index.deposit") }}
          </div>
          <div
            class="type"
            :style="{ background: type == 1 ? '#D4BD78' : '' }"
            @click="changePageType(1)"
          >
            {{ $t("personal.tixian") }}
          </div>
        </div>
      </div>
      <div class="table-box" v-if="type == 0 && historyList.data.length > 0">
        <div class="row">
          <div class="col">
            {{ $t("transfer.label5") }}
          </div>
          <div class="col">
            {{ $t("transfer.label1") }}
          </div>
          <div class="col">
            {{ $t("transfer.label2") }}
          </div>
          <div class="col">
            {{ $t("transfer.label3") }}
          </div>
          <div class="col">
            {{ $t("transfer.label4") }}
          </div>
        </div>
        <div class="row" v-for="(item, index) in historyList.data" :key="index">
          <div class="col">
            {{ item.orderNo }}
          </div>
          <div class="col">
            {{ item.payConfigName }}
          </div>
          <div class="col">R${{ item.amount }}</div>
          <div class="col">
            {{
              item.orderStatus == 1
                ? $t("transfer.statu1")
                : item.orderStatus == 2
                ? $t("transfer.statu2")
                : item.orderStatus == 3
                ? $t("transfer.statu3")
                : ""
            }}
          </div>
          <div class="col">
            {{ item.createAt }}
          </div>
        </div>
      </div>
      <div class="table-box" v-if="type == 1 && historyList.data.length > 0">
        <div class="row">
          <div class="col">
            {{ $t("transfer.label5") }}
          </div>
          <div class="col">
            {{ $t("transfer.label6") }}
          </div>
          <div class="col">
            {{ $t("transfer.label7") }}
          </div>
          <div class="col">
            {{ $t("transfer.label3") }}
          </div>
          <div class="col">
            {{ $t("transfer.label9") }}
          </div>
        </div>
        <div class="row" v-for="(item, index) in historyList.data" :key="index">
          <div class="col">
            {{ item.orderNo }}
          </div>
          <div class="col">
            {{ item.payConfigName }}
          </div>
          <div class="col">R${{ item.amount }}</div>
          <div class="col">
            {{
              item.orderStatus == 1
                ? $t("transfer.statu1")
                : item.orderStatus == 2
                ? $t("transfer.statu2")
                : item.orderStatus == 3
                ? $t("transfer.statu3")
                : ""
            }}
          </div>
          <div class="col">
            {{ item.createAt }}
          </div>
        </div>
      </div>
      <svg
        v-if="isLoading"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="35px"
        height="35px"
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
        xml:space="preserve"
      >
        <path
          fill="#FAF5F9"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          transform="rotate(275.098 25 25)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
      <i
        class="iconfont icon-nodata"
        v-if="historyList.data.length == 0 && !isLoading"
        style="font-size: 30px; color: #FAF5F9; margin: 20px 0"
      ></i>
      <div v-if="hasNext == 1 && !isLoading" class="more-btn" @click="loadmore()">
        {{ $t("common.getmore") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import transficationHistory from "@/mixin/transficationHistory";

const {
  type,
  isLoading,
  historyList,
  hasNext,
  changePageType,
  loadmore,
} = transficationHistory();
</script>

<style lang="scss" scoped>
.transfication-history {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;

  .records-box {
    width: 100%;
    margin: 30px 0 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .more-btn {
      cursor: pointer;
      margin: 15px 0;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #024D46;
      color: #FAF5F9;
      font-size: 13px;
      font-weight: 600;
      box-sizing: border-box;
      padding: 8px 15px;
    }

    .records-label {
      width: 100%;
      text-align: left;
      font-size: 16px;
      color: #FAF5F9;
      font-weight: bold;
      padding-bottom: 10px;
    }

    .table-box {
      width: 100%;
      border: 1px solid #FAF5F9;
      border-radius: 6px;

      .row {
        width: 100%;
        border-bottom: 1px solid #FAF5F9;
        display: flex;
        flex-wrap: wrap;

        &:last-child {
          border-bottom: 0;
        }

        .col {
          width: calc(100% / 5);
          box-sizing: border-box;
          padding: 8px;
          color: #FAF5F9;
          font-size: 13px;
          font-weight: bold;
          border-right: 1px solid #FAF5F9;

          &:last-child {
            border-right: 0;
          }
        }
      }
    }
  }
}
</style>
