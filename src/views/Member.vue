<template>
  <div class="member">
    <div class="search-box">
      <div class="search-ipt">
        <nut-input v-model="searchKey" placeholder="Enter ID" />
        <svg
          t="1736528506232"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4324"
          width="16"
          height="16"
        >
          <path
            d="M951.941266 475.970633a475.970633 475.970633 0 1 0-475.970633 475.970633 475.970633 475.970633 0 0 0 475.970633-475.970633z m-832.434409 0a356.463776 356.463776 0 1 1 356.463776 356.463776 356.463776 356.463776 0 0 1-356.463776-356.463776z m609.945976 253.553124a57.732096 57.732096 0 0 0 0 81.491619L925.770328 1007.1201A57.590248 57.590248 0 0 0 1007.1201 925.62848l-196.175648-196.033799-42.55437 42.19975 196.104723 196.104724a2.127719 2.127719 0 0 1 0-3.04973 2.198642 2.198642 0 0 1 2.978806 0l-195.608256-196.0338a2.056795 2.056795 0 0 1 0 2.978806 2.198642 2.198642 0 0 1-2.978806 0l42.554371-42.19975a57.519324 57.519324 0 0 0-81.420696 0z"
            fill="#C4C3C8"
            p-id="4325"
          ></path>
        </svg>
      </div>
    </div>

    <div class="date-box">
      <div class="date-container" @click="show = true">
        <span>{{ date[0] }} - {{ date[1] }}</span>
      </div>
      <nut-animate type="ripple" action="click">
        <div class="search-btn">{{ $t('referc.Procurar') }}</div>
      </nut-animate>
    </div>

    <div class="tab-box">
      <div
        class="item"
        @click="changeType('all')"
        :style="{ color: type == 'all' ? '#fdc24a' : '' }"
      >
      {{$t('referc.All')}}
        <div class="active" v-if="type == 'all'"></div>
      </div>
      <div
        class="item"
        @click="changeType('today')"
        :style="{ color: type == 'today' ? '#fdc24a' : '' }"
      >
      {{ $t('referc.Today') }}
        <div class="active" v-if="type == 'today'"></div>
      </div>
      <div
        class="item"
        @click="changeType('yesterday')"
        :style="{ color: type == 'yesterday' ? '#fdc24a' : '' }"
      >
      {{ $t('referc.Yesterday') }}
        <div class="active" v-if="type == 'yesterday'"></div>
      </div>
      <div
        class="item"
        @click="changeType('week')"
        :style="{ color: type == 'week' ? '#fdc24a' : '' }"
      >
      {{ $t('referc.Week') }}
        <div class="active" v-if="type == 'week'"></div>
      </div>
      <div
        class="item"
        @click="changeType('month')"
        :style="{ color: type == 'month' ? '#fdc24a' : '' }"
      >
      {{ $t('referc.Month') }}
        <div class="active" v-if="type == 'month'"></div>
      </div>
    </div>

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
import { useI18n} from 'vue-i18n'

const { t } = useI18n();

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
const searchKey = ref("");
const columns = ref([
  {
    title: "ID",
    key: "id",
  },
  {
    title: t('member.time'),
    key: "time",
  },
  {
    title: t('member.subid'),
    key: "subid",
  },
  {
    title: t('subno'),
    key: "subno",
  },
]);
const data = ref([]);
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.member {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.277rem;

  .search-box {
    width: 100%;
    margin-bottom: 0.277rem;

    .search-ipt {
      border: 1px solid #333333;
      width: 100%;
      border-radius: 0.111rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      padding-right: 0.416rem;
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
