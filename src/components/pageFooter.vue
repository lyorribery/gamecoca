<template>
  <div class="page-footer">
    <div class="help">
      <span>Ajuda</span>
      <img
        @click="changeShow"
        :src="
          !show
            ? require('../assets/images/svg/bottom.svg')
            : require('../assets/images/svg/top.svg')
        "
      />
    </div>
    <div class="help-des" v-if="show"></div>
    <div class="contact-box">
      <img :src="static_img.img_1" />
      <img :src="static_img.img_2" />
      <img :src="static_img.img_3" />
      <img :src="static_img.img_4" />
      <img :src="static_img.img_5" />
      <img :src="static_img.img_6" />
    </div>
    <div class="game-box">
      <img v-for="(item, index) in img_list" :key="index" :src="item.fullImgUrl" />
    </div>

    <div class="des" style="margin-top: 0.555rem">Copyright @ 2025</div>
    <div class="des">@todos os direitos reservados</div>
    <div class="des">2002-2025</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { preloadImage } from "@/utils/utils";

const { state } = useStore();
const static_img = computed(() => {
  return state.static_img.footer;
});

const show = ref(false);
const changeShow = () => {
  show.value = !show.value;
};
const img_list = computed(() => {
  const data = state.station_img.filter((item) => {
    return item.imgType == 4;
  });
  return data;
});

// const goThrid = (type) => {
//   if (type == 1) {
//     location.href = "https://wa.me/447960076392";
//   } else if (type == 2) {
//     location.href = "mailto:gamecoca88@gmail.com";
//   } else if (type == 3) {
//     location.href = "https://tawk.to/chat/6641bda89a809f19fb303295/1htocpnf9";
//   }
// };
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.page-footer {
  width: 100%;
  box-sizing: border-box;
  padding: 0.666rem 0.416rem 0.416rem 0.416rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  .des {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 0.305rem;
    color: #666666;
    line-height: 0.461rem;
  }
  .game-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0 calc((100% - 7.5rem) / 2);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
      width: 1.8rem;
      &:last-child {
        margin-left: 0.138rem;
      }
    }
  }

  .contact-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.416rem;
    img {
      width: 0.888rem;
    }
  }
  .help-des {
    width: 100%;
    min-height: 1rem;
  }
  .help {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 0.416rem;
      color: $color-sub-text;
    }
    img {
      width: 0.361rem;
    }
  }
}
</style>
