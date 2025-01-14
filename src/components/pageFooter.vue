<template>
  <div class="page-footer">
    <div class="help">
      <span>Ajuda</span>
      <i
        @click="changeShow"
        class="iconfont"
        :class="!show ? 'icon-xiangxiajiantou' : 'icon-xiangshangjiantou'"
      ></i>
    </div>
    <div class="help-des" v-if="show"></div>
    <div class="contact-box">
      <img src="../assets/images/footer/18.png" />
      <img src="../assets/images/footer/youtube.png" />
      <img src="../assets/images/footer/ins.png" />
      <img src="../assets/images/footer/whatsapp.png" />
      <img src="../assets/images/footer/x.png" />
      <img src="../assets/images/footer/douyin.png" />
    </div>
    <div class="game-box">
      <img src="../assets/images/footer/cp.png" />
      <img src="../assets/images/footer/evol.png" />
      <img src="../assets/images/footer/pg.png" />
      <img src="../assets/images/footer/pp.png" />
    </div>
    <div class="game-box">
      <img src="../assets/images/footer/evop.png" />
      <img src="../assets/images/footer/tada.png" />
      <img src="../assets/images/footer/cqg.png" />
      <img src="../assets/images/footer/jbd.png" />
    </div>
    <div class="game-box">
      <img src="../assets/images/footer/goo.png" />
      <img src="../assets/images/footer/face.png" />
    </div>
    <div class="des" style="margin-top:0.555rem;">Copyright @ 2025</div>
    <div class="des">@todos os direitos reservados</div>
    <div class="des">2002-2025</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const show = ref(false);
const changeShow = () => {
  show.value = !show.value;
};
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
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 0.833rem;
    }
  }

  .contact-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.416rem 0.416rem 0.555rem 0.416rem;
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
    i {
      font-size: 0.361rem;
      color: $color-sub-text;
      font-weight: bold;
    }
  }
}
</style>
