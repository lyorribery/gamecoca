<template>
  <div class="referc">
    <div class="date-box">
      <div class="date-container" @click="show = true">
        <span>{{ date[0] }} - {{ date[1] }}</span>
      </div>
      <nut-animate type="ripple" action="click">
        <div class="search-btn">Procurar</div>
      </nut-animate>
    </div>

    <div class="tab-box">
      <div
        class="item"
        @click="changeType('all')"
        :style="{ color: type == 'all' ? '#fdc24a' : '' }"
      >
        All
        <div class="active" v-if="type == 'all'"></div>
      </div>
      <div
        class="item"
        @click="changeType('today')"
        :style="{ color: type == 'today' ? '#fdc24a' : '' }"
      >
        Today
        <div class="active" v-if="type == 'today'"></div>
      </div>
      <div
        class="item"
        @click="changeType('yesterday')"
        :style="{ color: type == 'yesterday' ? '#fdc24a' : '' }"
      >
        Yesterday
        <div class="active" v-if="type == 'yesterday'"></div>
      </div>
      <div
        class="item"
        @click="changeType('week')"
        :style="{ color: type == 'week' ? '#fdc24a' : '' }"
      >
        This Week
        <div class="active" v-if="type == 'week'"></div>
      </div>
      <div
        class="item"
        @click="changeType('month')"
        :style="{ color: type == 'month' ? '#fdc24a' : '' }"
      >
        This Month
        <div class="active" v-if="type == 'month'"></div>
      </div>
    </div>

    <div class="data-item">
      <span>Sub Commission</span>
      <span>{{ data.directSubordinatesCommission }}</span>
    </div>

    <div class="data-item">
      <span>Team Commission</span>
      <span>{{ data.indirectSubordinatesCommission }}</span>
    </div>

    <div class="data-item">
      <span>Total Commission</span>
      <span>{{ data.allCommission }}</span>
    </div>

    <div class="data-item">
      <span>New Direct Sub</span>
      <span>{{ data.directSubordinatesCount }}</span>
    </div>

    <div class="data-item">
      <span>New Team Sub</span>
      <span>{{ data.directSubordinatesCount }}</span>
    </div>

    <div class="data-item">
      <span>Total Number of People</span>
      <span>{{ data.allCount }}</span>
    </div>

    <div class="des">Os dados são o valor que aumenta durante o intervalo de tempo</div>

    <nut-calendar
      v-model:visible="show"
      :default-value="date"
      type="range"
      start-date="2025-01-01"
      end-date="2025-01-15"
      @close="show = false"
      @choose="choose"
      @select="select"
    >
    </nut-calendar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { GetCommissionByChild } from "@/apis/proxy";
const show = ref(false);
const date = ref(["0000-00-00", "0000-00-00"]);
const choose = (param) => {
  date.value = [param[0][3], param[1][3]];
};
const select = (param) => {
  console.log(param);
};
const type = ref("all");
const changeType = (data) => {
  type.value = data;
};
const data = ref({
  allCommission: 0,
  allCount: 0,
  directSubordinatesCommission: 0,
  directSubordinatesCount: 0,
  indirectSubordinatesCommission: 0,
  indirectSubordinatesCount: 0,
});
onMounted(() => {
  GetCommissionByChild().then((res) => {
    if (res.code == 200) data.value = res.data;
  });
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.referc {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.277rem;
  .des {
    width: 100%;
    font-weight: 400;
    font-size: 0.25rem;
    color: #999999;
    text-align: center;
    margin: 0.416rem 0;
  }
  .data-item {
    width: 100%;
    background: rgba(74, 74, 74, 0.4);
    border-radius: 0.194rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.388rem 0.416rem;
    margin-bottom: 0.277rem;
    span {
      color: $color-white;
      font-weight: bold;
      font-size: 0.361rem;
    }
  }
  .tab-box {
    width: 100%;
    height: 0.833rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.416rem 0;
    border-bottom: 0.027rem solid #cccccc;

    .item {
      width: 20%;
      height: 0.833rem;
      font-weight: bold;
      font-size: 0.277rem;
      color: #727272;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .active {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.055rem;
        background: #fdc24a;
        box-shadow: 0px -0.083rem 0.305rem 0px #ffd200;
        border-radius: 0.027rem;
      }
    }
  }
  .date-box {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .date-container {
      width: 4.805rem;
      height: 0.638rem;
      border-radius: 0.194rem;
      border: 0.027rem solid #323136;
      background: #0d0d0d;
      box-sizing: border-box;
      padding: 0 0.277rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.416rem;
      span {
        font-weight: 400;
        font-size: 0.277rem;
        color: #666666;
      }
    }
    .search-btn {
      width: 1.666rem;
      height: 0.638rem;
      background: $primary-color2;
      border-radius: 0.194rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 0.25rem;
      color: $color-white;
    }
  }
}
</style>
