<template>
  <div class="permission">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="img-box">
      <img :src="logo" />
    </div>
    <div class="title">Hello,Welcome to {{ station_name }}</div>
    <div class="form-container">
      <div class="form-type">
        <div
          class="item item-left"
          :class="mode == 'login' ? 'active' : 'unactive'"
          @click="changeTab('login')"
        >
          Entrar
        </div>
        <div
          class="item item-right"
          :class="mode == 'register' ? 'active' : 'unactive'"
          @click="changeTab('register')"
        >
          Cadastro
        </div>
      </div>
      <div class="form-box" v-if="mode == 'login'">
        <div class="login-type-box">
          <div @click="changeLoginType(1)" class="type-item">
            <div class="active-type" v-if="login_type == 1"></div>
            <i
              class="iconfont icon-shouji"
              :class="login_type == 1 ? 'active' : 'unactive'"
            ></i>
            <span :class="login_type == 1 ? 'active' : 'unactive'">Telefone</span>
          </div>
          <div @click="changeLoginType(2)" class="type-item">
            <div class="active-type" v-if="login_type == 2"></div>
            <i
              :class="login_type == 2 ? 'active' : 'unactive'"
              class="iconfont icon-youjian"
            ></i>
            <span :class="login_type == 2 ? 'active' : 'unactive'">E-mail</span>
          </div>
          <div @click="changeLoginType(0)" class="type-item">
            <div class="active-type" v-if="login_type == 0"></div>
            <i
              class="iconfont icon-geren"
              :class="login_type == 0 ? 'active' : 'unactive'"
            ></i>
            <span :class="login_type == 0 ? 'active' : 'unactive'">Usuário</span>
          </div>
        </div>
        <nut-form ref="loginRef" :model-value="loginForm">
          <nut-form-item prop="account" :rules="[{ validator: customValidatorAccount }]">
            <div class="ipt-box">
              <div class="icon-box">
                <i
                  class="iconfont"
                  :class="
                    login_type == 1
                      ? 'icon-shouji'
                      : login_type == 2
                      ? 'icon-youjian'
                      : 'icon-geren'
                  "
                ></i>
                <span v-if="login_type == 1">+55</span>
              </div>
              <nut-input
                v-model="loginForm.account"
                :placeholder="
                  login_type == 1
                    ? 'Phone Number'
                    : login_type === 2
                    ? 'Email Address'
                    : 'User Name'
                "
                type="text"
              />
            </div>
          </nut-form-item>
          <nut-form-item prop="password" :rules="[{ validator: customValidatorPass }]">
            <div class="ipt-box">
              <div class="icon-box">
                <i class="iconfont icon-mima"></i>
              </div>
              <nut-input
                v-model="loginForm.password"
                placeholder="Password"
                type="password"
              />
            </div>
          </nut-form-item>
          <nut-form-item prop="action">
            <div class="forget-row">
              <div class="check">
                <i class="iconfont icon-duoxuanyixuan"></i>
                <span>Lembrar</span>
              </div>
              <div class="forget">Esqueceu?</div>
            </div>
          </nut-form-item>
          <nut-form-item prop="submit">
            <div class="login-btn" @click="submitLogin()">
              Entrar
              <svg
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
            <div class="register-btn">Cadastro</div>
            <div class="des">
              By accessing the site.l confirm that l am 18 years old and l have read
              the<span>Terms of Service</span>
            </div>
          </nut-form-item>
        </nut-form>
      </div>
      <div class="form-box" v-if="mode == 'register' && reg_step == 1">
        <nut-form ref="registerRef1" :model-value="registerForm1">
          <nut-form-item prop="idcard" :rules="[{ validator: customValidatorPassCPF }]">
            <div class="ipt-title">
              <span>CPF</span>
              <div class="circle"></div>
            </div>
            <div class="ipt-box">
              <div class="icon-box">
                <i class="iconfont icon-shenfenzheng"></i>
              </div>
              <nut-input v-model="registerForm1.idcard" placeholder="CPF" type="text" />
            </div>
          </nut-form-item>
          <nut-form-item
            prop="realName"
            :rules="[{ validator: customValidatorRealName }]"
          >
            <div class="ipt-title">
              <span>Real Name</span>
              <div class="circle"></div>
            </div>
            <div class="ipt-box">
              <div class="icon-box">
                <i class="iconfont icon-geren"></i>
              </div>
              <nut-input
                v-model="registerForm1.realName"
                placeholder="Real Name"
                type="text"
              />
            </div>
          </nut-form-item>
          <nut-form-item prop="sex">
            <div class="ipt-title">
              <span>Gender</span>
              <div class="circle"></div>
            </div>
            <div class="gender">
              <div
                class="item"
                @click="changeSex(1)"
                :class="registerForm1.sex == 1 ? 'active' : 'unactive'"
              >
                <i
                  class="iconfont icon-nanxing"
                  :style="{ color: !registerForm1.sex == 1 ? '#E6E6E6' : '#181717' }"
                ></i>
                <span :style="{ color: !registerForm1.sex == 1 ? '#E6E6E6' : '#181717' }"
                  >Guy</span
                >
              </div>
              <div
                class="item"
                @click="changeSex(0)"
                :class="registerForm1.sex == 0 ? 'active' : 'unactive'"
              >
                <i
                  class="iconfont icon-nvxing"
                  :style="{ color: !registerForm1.sex == 0 ? '#E6E6E6' : '#181717' }"
                ></i>
                <span :style="{ color: !registerForm1.sex == 0 ? '#E6E6E6' : '#181717' }"
                  >Girl</span
                >
              </div>
            </div>
          </nut-form-item>
          <nut-form-item
            prop="birthday"
            :rules="[{ validator: customValidatorBirthday }]"
          >
            <div class="ipt-title">
              <span>Data de Nascimento</span>
              <div class="circle"></div>
            </div>
            <div class="ipt-box" @click="showBirthday = true">
              <div class="icon-box">
                <i class="iconfont icon-shengri"></i>
              </div>
              <span>{{
                registerForm1.birthday ? registerForm1.birthday : "Insira o aniversário"
              }}</span>
            </div>
          </nut-form-item>
          <nut-form-item prop="submit">
            <div class="login-btn" @click="submitRegisterStep1()">Continuar</div>
          </nut-form-item>
        </nut-form>
      </div>
      <div class="form-box" v-if="mode == 'register' && reg_step == 2">
        <div class="login-type-box">
          <div @click="changeLoginType(1)" class="type-item">
            <div class="active-type" v-if="login_type == 1"></div>
            <i
              class="iconfont icon-shouji"
              :class="login_type == 1 ? 'active' : 'unactive'"
            ></i>
            <span :class="login_type == 1 ? 'active' : 'unactive'">Telefone</span>
          </div>
          <div @click="changeLoginType(2)" class="type-item">
            <div class="active-type" v-if="login_type == 2"></div>
            <i
              :class="login_type == 2 ? 'active' : 'unactive'"
              class="iconfont icon-youjian"
            ></i>
            <span :class="login_type == 2 ? 'active' : 'unactive'">E-mail</span>
          </div>
          <div @click="changeLoginType(0)" class="type-item">
            <div class="active-type" v-if="login_type == 0"></div>
            <i
              class="iconfont icon-geren"
              :class="login_type == 0 ? 'active' : 'unactive'"
            ></i>
            <span :class="login_type == 0 ? 'active' : 'unactive'">Usuário</span>
          </div>
        </div>
        <nut-form ref="registerRef2" :model-value="registerForm2">
          <nut-form-item prop="account" :rules="[{ validator: customValidatorAccount }]">
            <div class="ipt-box">
              <div class="icon-box">
                <i
                  class="iconfont"
                  :class="
                    login_type == 1
                      ? 'icon-shouji'
                      : login_type == 2
                      ? 'icon-youjian'
                      : 'icon-geren'
                  "
                ></i>
                <span v-if="login_type == 1">+55</span>
              </div>
              <nut-input
                v-model="registerForm2.account"
                :placeholder="
                  login_type == 1
                    ? 'Phone Number'
                    : login_type === 2
                    ? 'Email Address'
                    : 'User Name'
                "
                type="text"
              />
            </div>
          </nut-form-item>
          <nut-form-item prop="password" :rules="[{ validator: customValidatorPass }]">
            <div class="ipt-box">
              <div class="icon-box">
                <i class="iconfont icon-mima"></i>
              </div>
              <nut-input
                v-model="registerForm2.password"
                placeholder="Password"
                type="password"
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
                v-model="registerForm2.repassword"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
          </nut-form-item>

          <nut-form-item prop="submit">
            <div class="login-btn" @click="submitRegister2()">
              Entrar
              <svg
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
            <div class="des" style="margin-top: 0.416rem">
              By accessing the site.l confirm that l am 18 years old and l have read
              the<span>Terms of Service</span>
            </div>
          </nut-form-item>
        </nut-form>
      </div>
    </div>
    <nut-popup v-model:visible="showBirthday" position="bottom">
      <nut-date-picker
        v-model="val"
        :min-date="min"
        :three-dimensional="false"
        @confirm="confirm"
        @cancel="cancel"
      ></nut-date-picker>
    </nut-popup>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Close } from "@nutui/icons-vue";
import {
  _validpassword,
  _validname,
  _validemail,
  _validphone,
  _validbirth,
} from "@/utils/utils";
import { useStore } from "vuex";
import { login, register } from "@/apis/user.js";
let { dispatch, state } = useStore();

const showBirthday = ref(false);
const min = new Date(1900, 0, 1);
const val = ref(new Date(2022, 4, 10));
const confirm = ({ selectedValue }) => {
  registerForm1.value.birthday =
    selectedValue[0] + "-" + selectedValue[1] + "-" + selectedValue[2];
  showBirthday.value = false;
};
const cancel = () => {
  showBirthday.value = false;
};

const logo = state.station_base.fullStationLogo;
const station_name = state.station_base.stationName;
const mode = ref("login");
const router = useRouter();
const route = useRoute();
const loginRef = ref(null);
const loginForm = ref({
  account: "",
  password: "",
});
const registerRef1 = ref(null);
const registerRef2 = ref(null);
const registerForm1 = ref({
  birthday: "",
  idcard: "",
  sex: 1,
  realName: "",
});
const registerForm2 = ref({
  account: "",
  password: "",
  repassword: "",
});
const reg_step = ref(1);
const is_loading = ref(false);
const is_enter = ref(false);
const login_type = ref("1");
watch(
  () => loginForm,
  (newValue, oldValue) => {
    if (newValue.value.account && newValue.value.password) {
      is_enter.value = true;
    } else {
      is_enter.value = false;
    }
  },
  { deep: true }
);
const submitRegisterStep1 = () => {
  registerRef1.value.validate().then(({ valid, errors }) => {
    if (valid) {
      reg_step.value = 2;
    } else {
      console.warn("error:", errors);
    }
  });
};
const submitRegister2 = () => {
  if (is_loading.value) return;
  registerRef2.value.validate().then(({ valid, errors }) => {
    if (valid) {
      is_loading.value = true;
      let obj = {
        account: registerForm2.value.account,
        password: registerForm2.value.password,
        type: login_type.value,
        birthday: registerForm1.value.birthday,
        idcard: registerForm1.value.idcard,
        sex: registerForm1.value.sex,
        realName: registerForm1.value.realName,
      };
      if (localStorage.getItem("agentId")) obj.agentid = localStorage.getItem("agentId");
      console.log(obj)
      return
      register(...obj)
        .then((res) => {
          if (res.code == 200) {
            router.push({
              path: "/home",
            });
          }
          is_loading.value = false;
        })
        .catch((err) => {
          is_loading.value = false;
        });
    } else {
      console.warn("error:", errors);
    }
  });
};
const submitLogin = () => {
  if (is_loading.value) return;
  loginRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      is_loading.value = true;
      login(loginForm.value.account, loginForm.value.password, login_type.value)
        .then((res) => {
          if (res.code == 200) {
            localStorage.setItem("loginInfo", res.data);
            localStorage.setItem("accessToken", res.data.accessToken);
            dispatch("GET_USER_INFO");
            dispatch("GET_USER_BALANCE");
            dispatch("GET_MSG_LIST");
            dispatch("GET_UNREAD_COUNT");
            router.push({
              path: "/home",
            });
          }
          is_loading.value = false;
        })
        .catch((err) => {
          is_loading.value = false;
        });
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  loginRef.value.validate(prop);
};
const customValidatorPassCPF = (val) => {
  if (val) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please Enter CPF");
  }
};
const customValidatorRealName = (val) => {
  if (val) {
    return Promise.resolve();
  } else {
    return Promise.reject("lease Enter Real Name");
  }
};
const customValidatorAccount = (val) => {
  if (login_type.value == 1 && _validphone(val)) {
    return Promise.resolve();
  } else if (login_type.value == 2 && _validemail(val)) {
    return Promise.resolve();
  } else if (login_type.value == 0 && _validname(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("account error");
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
  if (_validpassword(val) && val == registerForm2.value.password) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
  }
};
const customValidatorBirthday = (val) => {
  if (_validbirth(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Menor de 18 anos.");
  }
};
const back = () => {
  router.go(-1);
};
const goPath = (path) => {
  router.push({
    path: path,
  });
};
const changeTab = (val) => {
  mode.value = val;
};
const changeLoginType = (type) => {
  login_type.value = type;
};
const changeSex = (sex) => {
  registerForm1.value.sex = sex;
};
onMounted(() => {
  mode.value = route.query.mode;
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.permission {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1.5rem 0 0 0;

  .form-container {
    width: calc(100% - 0.554rem);
    border-radius: 0.555rem;
    box-sizing: border-box;
    padding: 0.416rem 0.277rem;
    background: #1f1e1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 00.555rem;
    .form-box {
      width: 100%;
      .gender {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item {
          width: 3.883rem;
          height: 1.111rem;
          border-radius: 0.555rem;
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            font-weight: bold;
            font-size: 0.305rem;
            color: #e6e6e6;
            padding-left: 0.138rem;
          }
          i {
            font-size: 0.416rem;
            font-weight: bold;
          }
        }
        .active {
          background: $primary-color;
        }
        .unactive {
          background: #0d0d0d;
        }
      }
      .ipt-title {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        padding-left: 0.277rem;
        span {
          color: #e6e6e6;
          font-size: 0.333rem;
          font-weight: bold;
        }
        .circle {
          margin-left: 0.138rem;
          width: 0.166rem;
          height: 0.166rem;
          background: #ff0707;
          border-radius: 50%;
          margin-bottom: 0.138rem;
        }
      }
      .des {
        width: 100%;
        color: #808080;
        font-size: 0.305rem;
        line-height: 0.361rem;
        span {
          color: $primary-color;
        }
      }
      .login-btn {
        margin-top: 1.5rem;
        width: 100%;
        height: 1.111rem;
        background: $primary-color;
        border-radius: 0.555rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.361rem;
        color: #181717;
      }
      .register-btn {
        width: 100%;
        height: 1.111rem;
        border: 0.027rem solid $primary-color;
        border-radius: 0.555rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.416rem 0;
        font-weight: bold;
        font-size: 0.361rem;
        color: $primary-color;
      }
      .forget-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .forget {
          font-size: 0.305rem;
          font-weight: bold;
          color: #06a950;
        }
        .check {
          display: flex;
          align-items: center;
          i {
            font-size: 0.305rem;
            color: #06a950;
          }
          span {
            padding-left: 0.138rem;
            font-size: 0.305rem;
            font-weight: bold;
            color: #06a950;
          }
        }
      }
      .ipt-box {
        width: 100%;
        height: 1.111rem;
        background: #0f0f0f;
        border-radius: 0.555rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.416rem;
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
      .login-type-box {
        margin-top: 0.416rem;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 0.027rem solid #383838;
        .type-item {
          width: calc(100% / 3);
          height: 1.111rem;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 0.555rem;
            font-weight: bold;
          }
          span {
            font-size: 0.305rem;
            font-weight: bold;
            padding-left: 0.138rem;
          }

          .active {
            color: $primary-color;
          }
          .unactive {
            color: #808080;
          }

          .active-type {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.055rem;
            background: #ffcb78;
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
        background: #0d0d0d;
        color: #808080;
      }
    }
  }

  .img-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 0.416rem 0.416rem;
    img {
      height: 1rem;
    }
  }

  .title {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.416rem;
    font-weight: bold;
    font-size: 0.361rem;
    color: $color-sub-text;
  }
  .close {
    position: fixed;
    top: calc(env(safe-area-inset-top) + 0.694rem);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 0.694rem;
  }
}
</style>
