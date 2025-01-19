<template>
  <div class="betbonus">
    <div class="form-type">
      <div
        class="item item-left"
        :class="mode == 'bonus' ? 'active' : 'unactive'"
        @click="changeTab('bonus')"
      >
        Bet Bonus
      </div>
      <div
        class="item item-right"
        :class="mode == 'detail' ? 'active' : 'unactive'"
        @click="changeTab('detail')"
      >
        Details
      </div>
    </div>
    <div v-if="mode == 'bonus'" style="width: 100%">
      <div class="game-box">
        <div class="game-header">
          <div class="header-item" style="color: #e6e6e6">Games</div>
          <div class="header-item" style="color: #159b52">Atual V0</div>
          <div class="header-item" style="color: #ffcb78">Proximo V1</div>
        </div>
        <div class="game-row">
          <div class="game-col" style="color: #e6e6e6">Slot</div>
          <div class="game-col" style="color: #ffcb78">0.4%</div>
          <div class="game-col" style="color: #808080">
            <div class="arrow">
              <img src="../assets/images/right_arrow.png" />
            </div>
            0.4%
          </div>
        </div>
        <div class="game-row">
          <div class="game-col" style="color: #e6e6e6">In-House</div>
          <div class="game-col" style="color: #ffcb78">0.4%</div>
          <div class="game-col" style="color: #808080">
            <div class="arrow">
              <img src="../assets/images/right_arrow.png" />
            </div>
            0.4%
          </div>
        </div>
        <div class="game-row">
          <div class="game-col" style="color: #e6e6e6">Table</div>
          <div class="game-col" style="color: #ffcb78">0.4%</div>
          <div class="game-col" style="color: #808080">
            <div class="arrow">
              <img src="../assets/images/right_arrow.png" />
            </div>
            0.4%
          </div>
        </div>
        <div class="game-row">
          <div class="game-col" style="color: #e6e6e6">Live</div>
          <div class="game-col" style="color: #ffcb78">0.4%</div>
          <div class="game-col" style="color: #808080">
            <div class="arrow">
              <img src="../assets/images/right_arrow.png" />
            </div>
            0.4%
          </div>
        </div>
        <div class="game-row">
          <div class="game-col" style="color: #e6e6e6">Fish</div>
          <div class="game-col" style="color: #ffcb78">0.4%</div>
          <div class="game-col" style="color: #808080">
            <div class="arrow">
              <img src="../assets/images/right_arrow.png" />
            </div>
            0.4%
          </div>
        </div>
      </div>

      <div class="accept-box">
        <div class="left">
          <img src="../assets/images/coins.png" style="width: 0.833rem" />
          <span>0.00</span>
        </div>
        <div class="btn">Receive</div>
      </div>
      <div class="title-box">Ratio of Bet Bonus<div class="line"></div></div>
      <div class="game-box" style="margin-top:0;">
        <div class="game-header2">
          <div class="header-item">Level</div>
          <div class="header-item">Slot</div>
          <div class="header-item">In-House</div>
          <div class="header-item">Table</div>
          <div class="header-item">Live</div>
          <div class="header-item">Fish</div>
        </div>
        <div class="game-row2" v-for="(item, index) in level_list" :key="index">
          <div class="game-col">
            <img :src="item.levelIcon" />
          </div>
          <div class="game-col">0.4%</div>
          <div class="game-col">0.5%</div>
          <div class="game-col">0.5%</div>
          <div class="game-col">0.4%</div>
          <div class="game-col">0.4%</div>
        </div>
      </div>
    </div>
    <div v-if="mode=='detail'" style="width:100%;overflow-x:auto;margin-top:0.277rem;">
        <nut-table :columns="columns" :data="data" :bordered="false">
      <template #nodata>
        <svg
          t="1736940845642"
          class="icon"
          viewBox="0 0 1127 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5364"
          width="64"
          height="64"
        >
          <path
            d="M944.3 565.594L821.966 367.53c-2.33-4.66-6.408-7.574-11.068-7.574h-506.23c-4.66 0-8.737 2.33-11.068 7.574L171.267 565.594c-1.166 1.165-1.166 2.33-1.166 4.66v242.338c0 7.573 4.66 12.233 12.234 12.233h751.48c7.572 0 12.233-4.66 12.233-12.233V570.254c-0.583-1.747-0.583-2.912-1.748-4.66zM312.242 385.006h491.665l110.1 173.597H643.709c-7.573 0-12.233 4.66-12.233 12.234 0 40.195-33.205 73.4-73.4 73.4-40.196 0-73.4-33.205-73.4-73.4 0-7.573-4.661-12.234-12.234-12.234H201.559l110.683-173.597zM920.998 800.94h-726.43V583.07h266.805c6.408 47.768 47.768 85.633 96.702 85.633s90.876-37.865 96.702-85.634H921.58v217.87zM113.595 685.598v-13.399c0-3.495-2.913-6.408-6.408-6.408-3.495 0-6.408 2.913-6.408 6.408v13.399H87.38c-3.495 0-6.408 2.912-6.408 6.408 0 3.495 2.913 6.408 6.408 6.408H100.78v13.398c0 3.495 2.913 6.408 6.408 6.408 3.495 0 6.408-2.913 6.408-6.408v-13.398h13.398c3.496 0 6.408-2.913 6.408-6.408 0-3.496-2.912-6.408-6.408-6.408H113.595zM992.069 420.54h20.389c5.242 0 9.903 4.66 9.903 9.903 0 5.826-4.078 9.903-9.903 9.903h-20.39v20.39c0 5.242-4.66 9.903-9.903 9.903s-9.903-4.078-9.903-9.904v-20.389h-20.389c-5.243 0-9.903-4.66-9.903-9.903 0-5.825 4.078-9.903 9.903-9.903h20.39v-20.39c0-5.242 4.66-9.902 9.902-9.902 5.826 0 9.904 4.077 9.904 9.903v20.389z m71.652 86.799h12.816c3.495 0 6.408 2.912 6.408 6.408 0 3.495-2.913 6.408-6.408 6.408h-12.816v12.816c0 3.495-2.912 6.407-6.408 6.407-3.495 0-6.408-2.912-6.408-5.825v-12.816H1038.09c-3.495 0-6.408-2.913-6.408-6.408 0-3.495 2.913-6.408 6.408-6.408h12.816v-13.398c0-3.496 2.913-6.408 6.408-6.408 3.496 0 6.408 2.912 6.408 6.408v12.816zM130.49 404.23v-20.39c0-5.825-4.66-9.903-9.904-9.903-5.825 0-9.903 4.66-9.903 9.904v19.806H90.876c-5.826 0-9.904 4.66-9.904 9.903 0 5.826 4.66 9.904 9.904 9.904h19.806v19.806c0 5.825 4.66 9.903 9.903 9.903 5.826 0 9.904-4.66 9.904-9.903v-19.806h19.806c5.825 0 9.903-4.66 9.903-9.904 0-5.825-4.66-9.903-9.903-9.903 0 0.583-19.806 0.583-19.806 0.583z m-90.294 198.647c-22.137 0-40.196-18.06-40.196-40.196s18.059-40.195 40.196-40.195c22.136 0 40.195 18.059 40.195 40.195 0 22.72-18.059 40.196-40.195 40.196z m0-19.807c11.068 0 19.806-8.738 19.806-19.806s-8.738-19.807-19.806-19.807-19.807 8.738-19.807 19.807 8.738 19.806 19.807 19.806zM1109.16 471.805c-9.904 0-18.642-8.156-18.642-18.642s8.156-18.641 18.642-18.641c9.903 0 18.64 8.155 18.64 18.641 0 10.486-8.155 18.642-18.64 18.642z m0-8.739c5.242 0 9.32-4.077 9.32-9.32s-4.078-9.32-9.32-9.32c-5.243 0-9.321 4.077-9.321 9.32s4.66 9.32 9.32 9.32zM298.843 170.048c8.156-8.156 21.554-8.156 29.71 0l74.565 73.983c8.156 8.155 8.156 21.554 0 29.71-8.155 8.155-21.554 8.155-29.71 0l-74.565-73.984c-8.155-8.155-8.155-21.554 0-29.71z m259.232-37.283c11.65 0 20.971 9.32 20.971 20.972v104.857c0 11.651-9.32 20.972-20.971 20.972s-20.972-9.321-20.972-20.972V153.737c-0.582-11.069 9.32-20.972 20.972-20.972-0.583 0 0 0 0 0z m259.813 32.04c8.156 8.155 8.156 21.554 0 29.71l-73.982 73.982c-8.156 8.156-21.555 8.156-29.71 0-8.156-8.155-8.156-21.554 0-29.71l73.983-73.982c8.155-8.156 21.554-8.156 29.71 0z"
            p-id="5365"
            fill="#999999"
          ></path>
        </svg>
      </template>
    </nut-table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const { state } = useStore();
const mode = ref("bonus");
const level_list = computed(() => {
  return state.level;
});
const columns = ref([
  {
    title: "Date",
    key: "date",
  },
  {
    title: "TotalBonus",
    key: "total",
  },
  {
    title: "SlotBonus",
    key: "slot",
  },
  {
    title: "In-HouseBonus",
    key: "inhouse",
  },
  {
    title: "TableBonus",
    key: "table",
  },
  {
    title: "LiveBonus",
    key: "live",
  },
  {
    title: "FishBonus",
    key: "fish",
  },
]);
const data = ref([]);
const changeTab = (val) => {
  mode.value = val;
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.betbonus {
  width: 100%;
  box-sizing: border-box;
  padding: 0.277rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .accept-box {
    margin-top: 0.277rem;
    width: 100%;
    height: 1.111rem;
    background: #262626;
    border-radius: 0.361rem;
    display: flex;
    align-items: center;
    .left {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.416rem;
      span {
        font-weight: bold;
        font-size: 0.361rem;
        color: #e6e6e6;
      }
    }
    .btn {
      width: 50%;
      height: 1.111rem;
      background: #159b52;
      border-radius: 0.361rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
      color: #e6e6e6;
    }
  }
  .title-box {
    margin-top:0.277rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.972rem;
    position: relative;
    color: $primary-color;
    font-weight: bold;
    font-size: 0.361rem;
    .line {
      position: absolute;
      bottom: 0;
      left: calc((100% - 1.138rem) / 2);
      width: 1.138rem;
      height: 0.054rem;
      background: $primary-color;
      border-radius: 0.027rem;
    }
  }
  .game-box {
    margin-top: 0.277rem;
    width: 100%;
    background: #262626;
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.416rem;
    .game-header2 {
      width: 100%;
      height: 0.972rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 0.027rem solid rgba(54, 54, 54, 0.99);
      .header-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 6);
        font-weight: bold;
        font-size: 0.305rem;
        color: #808080;
      }
    }
    .game-row2 {
      width: 100%;
      height: 0.972rem;
      display: flex;
      align-items: center;
      .game-col {
        width: calc(100% / 6);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 0.305rem;
        color: #e5e5e5;
        img {
          width: 0.777rem;
        }
      }
    }
    .game-header {
      width: 100%;
      height: 0.972rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 0.027rem solid rgba(54, 54, 54, 0.99);
      .header-item {
        width: calc(100% / 3);
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 0.305rem;
      }
    }
    .game-row {
      width: 100%;
      height: 0.972rem;
      display: flex;
      align-items: center;
      .game-col {
        width: calc(100% / 3);
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-size: 0.305rem;
        position: relative;
        .arrow {
          position: absolute;
          left: 0;
          top: 0;
          img {
            width: 0.333rem;
          }
        }
      }
    }
  }
  .form-type {
    display: flex;
    align-items: center;
    .item {
      width: 3.222rem;
      height: 0.916rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
    }
    .item-left {
      border-radius: 0.472rem 0px 0px 0.472rem;
    }
    .item-right {
      border-radius: 0px 0.472rem 0.472rem 0px;
    }
    .active {
      background: $primary-color;
      color: $color-black;
    }
    .unactive {
      background: #262626;
      color: #808080;
    }
  }
}
</style>
