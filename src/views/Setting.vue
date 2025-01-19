<template>
  <div class="setting">
    <div class="info-box">
      <div class="info">
        <div class="avatar">
          <img src="../assets/images/avatar/3.png" />
          <div class="level">{{ user_info.levelName }}</div>
        </div>
        <div class="info-user">
          <div class="val" style="margin-bottom: 0.138rem">
            Account:{{ user_info.userName }}
          </div>
          <div class="val">ID:{{ user_info.userId }}</div>
        </div>
      </div>
    </div>
    <div class="info-form-box">
      <div class="ipt-box">
        <i class="iconfont icon-geren"></i>
        <span>{{ user_info.userName }}</span>
      </div>
      <div class="ipt-box">
        <i class="iconfont icon-shenfenzheng"></i>
        <span>{{ user_info.idcard }}</span>
      </div>
      <div class="ipt-box">
        <i class="iconfont icon-shouji"></i>
        <span>{{ user_info.phone }}</span>
      </div>
      <div class="update-box">
        <div class="item" @click="openModal('Change Password')">
          <div class="title">
            <i class="iconfont icon-mima"></i>
            <span>Senha de saque</span>
          </div>
          <div class="btn">Referencia</div>
        </div>
        <div class="item" @click="openModal('Change transaction password')">
          <div class="title">
            <i class="iconfont icon-mima"></i>
            <span>Senha de saque</span>
          </div>
          <div class="btn">Referencia</div>
        </div>
        <div class="item" @click="openModal('Inserir senha')">
          <div class="title">
            <i class="iconfont icon-youjian"></i>
            <span>Email</span>
          </div>
          <div class="btn">Referencia</div>
        </div>
      </div>
      <div class="ipt-box">
        <i class="iconfont icon-shengri"></i>
        <span>{{ user_info.birthday }}</span>
      </div>
      <div class="return" @click="goBack()">Retomar</div>
    </div>
    <nut-overlay
      v-model:visible="modal"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="modal = false">
            <svg
              t="1737048406504"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2325"
              width="22"
              height="22"
            >
              <path
                d="M822.00345 776.822434l0.022513-0.022513L246.50423 201.317075c-5.78782-5.791913-13.785981-9.374508-22.621207-9.374508-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 8.834202 3.582595 16.832364 9.373485 22.620184L776.11226 821.339324c5.838985 6.277984 14.166651 10.209526 23.416316 10.209526 17.662265 0 31.980365-14.3181 31.980365-31.980365C831.508941 790.667767 827.871087 782.620487 822.00345 776.822434z"
                p-id="2326"
                fill="#E6E6E6"
              ></path>
              <path
                d="M776.783549 201.448058l-0.022513-0.022513L201.278189 776.947278c-5.791913 5.78782-9.374508 13.785981-9.374508 22.621207 0 17.662265 14.3181 31.980365 31.980365 31.980365 8.834202 0 16.832364-3.582595 22.620184-9.373485l574.797231-574.836117c6.277984-5.838985 10.209526-14.166651 10.209526-23.416316 0-17.662265-14.3181-31.980365-31.980365-31.980365C790.628882 191.942567 782.580578 195.58042 776.783549 201.448058z"
                p-id="2327"
                fill="#E6E6E6"
              ></path>
            </svg>
          </div>

          <div class="title">
            {{ modal_type }}
            <div class="line"></div>
          </div>
          <div v-if="modal_type == 'Change Password'">
            <nut-form ref="passwordFormRef" :model-value="passwordForm">
              <nut-form-item
                prop="oldpassword"
                :rules="[{ validator: customValidatorPass }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <i class="iconfont icon-mima"></i>
                  </div>
                  <nut-input
                    v-model="passwordForm.oldpassword"
                    placeholder="Old Password"
                    :type="showpass.old_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.old_pass = false"
                    v-if="showpass.old_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.old_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>
              <nut-form-item
                prop="newpassword"
                :rules="[{ validator: customValidatorPass }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <i class="iconfont icon-mima"></i>
                  </div>
                  <nut-input
                    v-model="passwordForm.newpassword"
                    placeholder="New Password"
                    :type="showpass.new_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.new_pass = false"
                    v-if="showpass.new_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.new_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>

              <nut-form-item
                prop="repassword"
                :rules="[{ validator: customValidatorPassAgain }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <i class="iconfont icon-mima"></i>
                  </div>
                  <nut-input
                    v-model="passwordForm.repassword"
                    placeholder="Confirm New Password"
                    :type="showpass.re_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.re_pass = false"
                    v-if="showpass.re_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.re_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>
            </nut-form>
          </div>
          <div v-if="modal_type == 'Change transaction password'">
            <nut-form ref="tranRef" :model-value="tranForm">
              <nut-form-item
                prop="oldpassword"
                :rules="[{ validator: customValidatorTransPass }]"
              >
                <modalCode title="Old Password" @complete="onComplete" />
              </nut-form-item>
              <nut-form-item
                prop="newpassword"
                :rules="[{ validator: customValidatorTransPass }]"
              >
                <modalCode title="New Password" @complete="onComplete2" />
              </nut-form-item>
              <nut-form-item
                prop="repassword"
                :rules="[{ validator: customValidatorTransPassAgain }]"
              >
                <modalCode title="Confirm Password" @complete="onComplete3" />
              </nut-form-item>
            </nut-form>

            <div class="tips">
              <div class="circle"></div>
              <span
                >E a sua primeira retirada, você precisa definir a senha de retira da
                primeiro.</span
              >
            </div>
            <div class="tips">
              <div class="circle"></div>
              <span>
                Nota: A senha de saque é muito importante para proteger a seg uran çade
                seus fundos. Você só pode conhecê-la para evitar a per dade fundos.</span
              >
            </div>
          </div>
          <div v-if="modal_type == 'Inserir senha'">
            <nut-form ref="emailRef" :model-value="emailForm">
              <nut-form-item prop="email" :rules="[{ validator: customValidatorEmail }]">
                <div class="ipt-box">
                  <div class="icon-box">
                    <i class="iconfont icon-youjian"></i>
                  </div>
                  <nut-input
                    :clearable="true"
                    v-model="emailForm.email"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </nut-form-item>
              <nut-form-item
                prop="password"
                :rules="[{ validator: customValidatorPass }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <i class="iconfont icon-mima"></i>
                  </div>
                  <nut-input
                    v-model="emailForm.password"
                    placeholder="Password"
                    :type="showpass.email_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.email_pass = false"
                    v-if="showpass.email_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.email_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>
            </nut-form>
          </div>
          <div class="confirm-btn" @click="confirmPass()">
            Confirmar<svg
              v-if="is_loading"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="22px"
              height="22px"
              viewBox="0 0 50 50"
              style="enable-background: new 0 0 50 50"
              xml:space="preserve"
            >
              <path
                fill="#181717"
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
          </div>
        </div>
      </div>
    </nut-overlay>
  </div>
</template>

<script>
import modalCode from "@/components/modalCode.vue";
export default {
  components: {
    modalCode,
  },
};
</script>

<script setup>
import { SetEmail } from "@/apis/setting";
import { ChangeTranscationPassword } from "@/apis/deposit";
import { _validpassword, _validemail } from "@/utils/utils";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const { state, commit } = useStore();
const router = useRouter();

const showpass = ref({
  email_pass: false,
  re_pass: false,
  old_pass: false,
  new_pass: false,
});
const tranRef = ref(null);
const tranForm = ref({
  oldpassword: "",
  newpassword: "",
  repassword: "",
});
const emailRef = ref(null);
const emailForm = ref({
  email: "",
  password: "",
});
const passwordFormRef = ref(null);
const customValidatorTransPass = (val) => {
  let code = val.filter((item) => item !== undefined && item !== null && item !== "");
  if (code.length == 6) {
    return Promise.resolve();
  } else {
    return Promise.reject("please Enter Correct Password");
  }
};
const customValidatorTransPassAgain = (val) => {
  let code = val.filter((item) => item !== undefined && item !== null && item !== "");
  if (
    code.length == 6 &&
    code !=
      tranForm.value.newpassword.filter(
        (item) => item !== undefined && item !== null && item !== ""
      )
  ) {
    return Promise.resolve();
  } else {
    return Promise.reject("please Enter Correct Password");
  }
};
const customValidatorEmail = (val) => {
  if (_validemail(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter correct emial.");
  }
};
const customValidatorPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
  }
};
const customValidatorPassAgain = (val) => {
  if (_validpassword(val) && val == passwordForm.value.newpassword) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
  }
};

const passwordForm = ref({
  oldpassword: "",
  newpassword: "",
  repassword: "",
});

const onComplete = (val) => {
  console.log("complete", val);
  tranForm.value.oldpassword = val;
};

const onComplete2 = (val) => {
  tranForm.value.newpassword = val;
};

const onComplete3 = (val) => {
  tranForm.value.repassword = val;
};

const user_info = computed(() => {
  return state.user_info;
});
const modal = ref(false);
const modal_type = ref("");
const openModal = (type) => {
  modal_type.value = type;
  modal.value = true;
};
const is_loading = ref(false);
const confirmPass = () => {
  if (is_loading.value) return;
  if (modal_type.value == "Change Password") {
    passwordFormRef.value.validate().then(({ valid, errors }) => {
      if (valid) {
        is_loading.value = true;
        modal.value = false;
      } else {
        console.warn("error:", errors);
      }
    });
  } else if (modal_type.value == "Change transaction password") {
    tranRef.value.validate().then(({ valid, errors }) => {
      if (valid) {
        is_loading.value = true;

        const pram = {
          oldPassword: tranForm.value.oldpassword.join(""),
          newPassword: tranForm.value.newpassword.join(""),
        };

        ChangeTranscationPassword(pram)
          .then((res) => {
            if (res.code == 200) {
              commit("set_show_tip", {
                type: 1,
                msg: "success",
              });
            } else {
              commit("set_show_tip", {
                type: 0,
                msg: res.msg,
              });
            }
          })
          .finally(() => {
            is_loading.value = false;
          });
      } else {
        console.warn("error:", errors);
      }
    });
  } else if (modal_type.value == "Inserir senha") {
    emailRef.value.validate().then(({ valid, errors }) => {
      if (valid) {
        is_loading.value = true;
        SetEmail(emailForm.value)
          .then((res) => {
            if (res.code == 200) {
              commit("set_show_tip", {
                type: 1,
                msg: "success",
              });
            } else {
              commit("set_show_tip", {
                type: 0,
                msg: res.msg,
              });
            }
          })
          .finally(() => {
            is_loading.value = false;
          });
      } else {
        console.warn("error:", errors);
      }
    });
  }
};
const closeModal = () => {
  console.log(456456);
};
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.pass-icon {
  position: absolute;
  right: 0.416rem;
  bottom: 0.333rem;
  width: 0.444rem;
}
.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .overlay-content {
    width: calc(100% - 0.833rem);
    background: #1f1e1e;
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;
    box-sizing: border-box;
    padding: 0 0.416rem 0.555rem 0.416rem;
    .ipt-box {
      width: 100%;
      height: 1.111rem;
      background: #0f0f0f;
      border-radius: 0.555rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.416rem;
      position: relative;
      .icon-box {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-right: 0.416rem;
        span {
          font-size: 0.305rem;
          color: #808080;
          padding-left: 0.138rem;
        }
        i {
          font-size: 0.444rem;
          font-weight: bold;
          color: #808080;
        }
      }
    }
    .confirm-btn {
      width: 100%;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.555rem;
    }
    .tips {
      margin-top: 0.555rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      .circle {
        width: 0.138rem;
        height: 0.138rem;
        background: #ff0707;
        border-radius: 50%;
        position: absolute;
        top: 0.058rem;
        left: 0;
      }
      span {
        padding-left: 0.305rem;
        color: $color-white;
        font-size: 0.277rem;
      }
    }
    .title {
      width: 100%;
      height: 1.188rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.027rem solid #383838;
      position: relative;
      font-weight: bold;
      font-size: 0.461rem;
      color: #e6e6e6;
      .line {
        position: absolute;
        bottom: 0;
        left: calc((100% - 1.861rem) / 2);
        width: 1.861rem;
        height: 0.055rem;
        background: #ffcb78;
        border-radius: 0.027rem;
      }
    }
    .close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: 0.416rem 0 0 0;
    }
  }
}
.setting {
  width: 100%;
  .info-form-box {
    background: #212020;
    width: 100%;
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.555rem 0.416rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .return {
      width: 8.611rem;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.555rem 0;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
    }
    .update-box {
      margin-bottom: 0.461rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        width: 2.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .btn {
          width: 100%;
          height: 0.694rem;
          background: #ffc02e;
          border-radius: 0px 0px 0.361rem 0.361rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 0.305rem;
          color: #181717;
        }
        .title {
          width: 100%;
          height: 2.305rem;
          background: #303030;
          border-radius: 0.361rem 0.361rem 0px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          i {
            color: #ffcb78;
            font-size: 0.555rem;
            font-weight: bold;
          }
          span {
            padding-top: 0.277rem;
            font-size: 0.277rem;
            color: #e6e6e6;
          }
        }
      }
    }
    .ipt-box {
      width: 100%;
      height: 1.027rem;
      background: $bg-color;
      border-radius: 0.277rem;
      margin-bottom: 0.416rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.416rem;
      i {
        font-size: 0.555rem;
        color: #939393;
        font-weight: bold;
      }
      span {
        font-weight: bold;
        font-size: 0.416rem;
        color: #e6e6e6;
        padding-left: 0.416rem;
      }
    }
  }
  .info-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.555rem 0.416rem;
    background: $bg-color;
    .info {
      display: flex;
      align-items: center;

      .avatar {
        width: 1.583rem;
        height: 1.583rem;
        border: 0.055rem solid $primary-color;
        border-radius: 50%;
        position: relative;
        img {
          width: 1.583rem;
        }
        .level {
          position: absolute;
          bottom: -0.1rem;
          left: 0.3rem;
          background-image: url("../assets/images/vip_di.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 1.1rem;
          height: 0.35rem;
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
          padding-right: 0.277rem;
          align-items: center;
          font-size: 0.222rem;
          font-weight: bold;
          color: #1c1f24;
          font-style: italic;
        }
      }
      .info-user {
        margin-left: 0.277rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .val {
          font-weight: bold;
          font-size: 0.388rem;
          color: $color-sub-text;
          display: flex;
          align-items: center;
          .copy-btn {
            margin-left: 0.277rem;
          }
        }
      }
    }
  }
}
</style>
