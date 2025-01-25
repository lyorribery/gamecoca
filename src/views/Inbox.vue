<template>
  <div>
    <div class="promotion">
      <div class="item" v-for="(item, index) in msg" :key="index">
        <div class="top">
          <div class="date">{{ item.createTime }}</div>
          <div
            class="collapse"
            :class="!item.messageRead ? 'unread' : ''"
            @click="changeShow(item, index)"
          >
            <span :style="{ color: !item.messageRead ? '' : '#B3B3B3' }">{{
              !item.isShow ? $t("inbox.Unfold") : $t("inbox.Fold")
            }}</span>
            <div class="icon">
              <img
                @click="changeShow"
                :src="
                  !item.isShow
                    ? require('../assets/images/svg/bottom.svg')
                    : require('../assets/images/svg/top.svg')
                "
              />
            </div>
          </div>
        </div>
        <div class="middle">
          <img v-if="!item.messageRead" src="../assets/images/inbox/xinfeng.png" />
          <img v-else src="../assets/images/inbox/xinfeng_yidu.png" />
          <span :class="!item.messageRead ? 'unread' : ''">{{ item.title }}</span>
        </div>

        <div class="roadshowDescValueDiv">
          <div ref="desContent" class="desContent" :class="{ 'show-all': item.isShow }">
            <span>{{ item.messageContent }}</span>
          </div>
        </div>
      </div>
    </div>
    <pageFooter />
  </div>
</template>

<script>
import pageFooter from "@/components/pageFooter.vue";

export default {
  components: {
    pageFooter,
  },
};
</script>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { readUserMessageApi } from "../apis/user";
import { preloadImage } from "@/utils/utils";
const { state, commit } = useStore();
const msg = computed(() => {
  return state.msg_list.records;
});

const changeShow = (item, index) => {
  const data = state.msg_list;
  data.records.map((items, indexs) => {
    if (indexs == index) items.isShow = !items.isShow;
    if (!item.messageRead) {
      readUserMessageApi({ id: item.id });
      item.messageRead = 1;
      if (state.unread_count > 0) commit("set_unread_count", state.unread_count - 1);
    }
  });
  commit("set_msg_list", data);
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.promotion {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.416rem 0.277rem 0.416rem;
  .item {
    width: 100%;
    border-radius: 0.361rem;
    margin-top: 0.555rem;
    background: $bg-color3;

    .roadshowDescValueDiv {
      background: #393939;
      border-bottom-left-radius: 0.361rem;
      border-bottom-right-radius: 0.361rem;
      box-sizing: border-box;
      padding: 0.277rem 0.416rem;
      .desContent {
        color: #b3b3b3;
        font-size: 0.277rem;
        line-height: 0.388rem;
        word-break: break-all;
        display: -webkit-box;
        overflow: hidden !important;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .show-all {
        -webkit-line-clamp: unset;
      }
    }

    .middle {
      background: #1c1c1c;
      width: 100%;
      box-sizing: border-box;
      padding: 0.277rem 0.416rem 0.416rem 0.416rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 0.611rem;
      }
      span {
        font-weight: bold;
        font-size: 0.333rem;
        color: $color-sub-text;
        padding: 0 0.277rem;
      }
      .unread {
        color: $primary-color;
      }
    }
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1c1c1c;
      .date {
        color: $color-sub-text;
        font-size: 0.305rem;
        margin-left: 0.416rem;
      }
      .collapse {
        width: 3.527rem;
        height: 0.833rem;
        background: $bg-color3;
        border-top-right-radius: 0.361rem;
        border-bottom-left-radius: 0.361rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.666rem;
        span {
          color: $color-black;
          font-size: 0.305rem;
          font-weight: bold;
        }
        .icon {
          margin-left: 0.277rem;
          background: $color-black;
          border-radius: 50%;
          width: 0.416rem;
          height: 0.416rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 0.277rem;
          }
        }
      }
      .unread {
        background: #fec02d;
      }
    }
  }
}
</style>
