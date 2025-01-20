<template>
  <div class="input-box">
    <div class="title" v-if="showTitle">
      <span
        :style="{
          color: titleTrans ? '#999999' : '#ffc02e',
          fontSize: titleTrans ? '0.361rem' : '0.333rem',
        }"
        >{{ title }}</span
      >
      <img
        @click="show_pass = !show_pass"
        v-if="!show_pass"
        src="../assets/images/login/yanjingkai.png"
      />
      <img
        v-else
        @click="show_pass = !show_pass"
        src="../assets/images/login/yanjingguan.png"
      />
    </div>
    <div
      class="input-content"
      @keydown="keydown"
      @keyup="keyup"
      @paste="paste"
      @mousewheel="mousewheel"
      @input="inputEvent"
    >
      <input
        max="9"
        min="0"
        maxlength="1"
        data-index="0"
        v-model.trim.number="input[0]"
        :type="codeLen == 4 || show_pass ? 'text' : 'password'"
        ref="firstinput"
      />
      <input
        max="9"
        min="0"
        maxlength="1"
        data-index="1"
        v-model.trim.number="input[1]"
        :type="codeLen == 4 || show_pass ? 'text' : 'password'"
      />
      <input
        max="9"
        min="0"
        maxlength="1"
        data-index="2"
        v-model.trim.number="input[2]"
        :type="codeLen == 4 || show_pass ? 'text' : 'password'"
      />
      <input
        max="9"
        min="0"
        maxlength="1"
        data-index="3"
        v-model.trim.number="input[3]"
        :type="codeLen == 4 || show_pass ? 'text' : 'password'"
      />
      <input
        v-if="codeLen == 6"
        max="9"
        min="0"
        maxlength="1"
        data-index="4"
        v-model.trim.number="input[4]"
        :type="codeLen == 4 || show_pass ? 'text' : 'password'"
      />
      <input
        v-if="codeLen == 6"
        max="9"
        min="0"
        maxlength="1"
        data-index="5"
        v-model.trim.number="input[5]"
        :type="codeLen == 4 || show_pass ? 'text' : 'password'"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    titleTrans: {
      type: Boolean,
      default: false,
    },
    codeLen: {
      type: Number,
      default: 6,
    },
  },
  setup() {
    const input = ref(new Array(6).fill(""));
    const show_pass = ref(false);
    return {
      input,
      show_pass,
    };
  },
  methods: {
    // 解决一个输入框输入多个字符
    inputEvent(e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      el.value = el.value
        .replace(/Digit|Numpad/i, "")
        .replace(/1/g, "")
        .slice(0, 1);
      this.input[index] = el.value;
    },
    keydown(e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      if (e.key === "Backspace") {
        if (this.input[index] && this.input[index].length > 0) {
          this.input[index] = "";
        } else {
          if (el.previousElementSibling) {
            el.previousElementSibling.focus();
            this.input[index - 1] = "";
          }
        }
      } else if (e.key === "Delete") {
        if (this.input[index].length > 0) {
          this.input[index] = "";
        } else {
          if (el.nextElementSibling) {
            this.input[(index = 1)] = "";
          }
        }
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      } else if (e.key === "Home") {
        el.parentElement.children[0] && el.parentElement.children[0].focus();
      } else if (e.key === "End") {
        el.parentElement.children[this.input.length - 1] &&
          el.parentElement.children[this.input.length - 1].focus();
      } else if (e.key === "ArrowLeft") {
        if (el.previousElementSibling) {
          el.previousElementSibling.focus();
        }
      } else if (e.key === "ArrowRight") {
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      } else if (e.key === "ArrowUp") {
        if (this.input[index] * 1 < 9) {
          this.input[index] = (this.input[index] * 1 + 1).toString();
        }
      } else if (e.key === "ArrowDown") {
        if (this.input[index] * 1 > 0) {
          this.input[index] = (this.input[index] * 1 - 1).toString();
        }
      }
    },
    keyup(e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      // 解决输入e的问题
      el.value = el.value
        .replace(/Digit|Numpad/i, "")
        .replace(/1/g, "")
        .slice(0, 1);
      if (/Digit|Numpad/i.test(e.code)) {
        // 必须在这里符直，否则输入框会是空值
        this.input[index] = e.code.replace(/Digit|Numpad/i, "");
        el.nextElementSibling && el.nextElementSibling.focus();
        if (index === 5) {
          if (this.input.join("").length === 6) {
            document.activeElement.blur();
          }
        }
      } else {
        if (this.input[index] === "") {
          this.input[index] = "";
        }
      }
      this.$emit("complete", this.input.slice());
    },
    mousewheel(e) {
      var index = e.target.dataset.index;
      if (e.wheelDelta > 0) {
        if (this.input[index] * 1 < 9) {
          this.input[index] = (this.input[index] * 1 + 1).toString();
        }
      } else if (e.wheelDelta < 0) {
        if (this.input[index] * 1 > 0) {
          this.input[index] = (this.input[index] * 1 - 1).toString();
        }
      } else if (e.key === "Enter") {
        if (this.input.join("").length === 6) {
          document.activeElement.blur();
          this.$emit("complete", this.input.slice());
        }
      }
    },
    paste(e) {
      // 当进行粘贴时
      e.clipboardData.items[0].getAsString((str) => {
        if (str.toString().length === 6) {
          document.activeElement.blur();
          this.input = str.split("");
          this.$emit("complete", this.input.slice());
        } else {
          // 如果粘贴内容不合规，清除所有内容
          this.input[0] = new Array(6);
        }
      });
    },
  },
  mounted() {
    // 等待dom渲染完成，在执行focus,否则无法获取到焦点
    this.$nextTick(() => {
      this.$refs.firstinput.focus();
    });
  },
  emits: ["complete"],
};
</script>

<style lang="scss" scoped>
.input-box {
  flex:1;
  .title {
    width: 100%;
    margin: 0.416rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #ffc02e;
      font-size: 0.333rem;
      font-weight: bold;
    }
    img {
      width: 0.472rem;
    }
  }
  .input-content {
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      font-family: Arial;
      border: 0;
      outline: 0;
      height: 0.88rem;
      width: 0.88rem;
      font-weight: bold;
      font-size: 0.555rem;
      color: #e6e6e6;
      text-align: center;
      background: #171717;
      border-radius: 10px;
      border: 0.027rem solid #2b2b2b;
    }

    input:focus {
      border: 0.027rem solid #ffc02e;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}
</style>
