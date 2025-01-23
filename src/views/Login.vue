<template>
  <div class="permission">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="img-box">
      <img :src="logo" />
    </div>
    <div class="title">{{ $t("login.title1") }} {{ station_name }}</div>
    <div class="form-container">
      <div class="form-type">
        <div
          class="item item-left"
          :class="mode == 'login' ? 'active' : 'unactive'"
          @click="changeTab('login')"
        >
          {{ $t("login.Entrar") }}
        </div>
        <div
          class="item item-right"
          :class="mode == 'register' ? 'active' : 'unactive'"
          @click="changeTab('register')"
        >
          {{ $t("login.Cadastro") }}
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
            <span :class="login_type == 1 ? 'active' : 'unactive'">{{
              $t("login.Telefone")
            }}</span>
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
            <span :class="login_type == 0 ? 'active' : 'unactive'">{{
              $t("login.username")
            }}</span>
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
                :clearable="true"
                :placeholder="
                  login_type == 1
                    ? $t('login.PhoneNumber')
                    : login_type === 2
                    ? $t('login.EmailAddress')
                    : $t('login.UserName')
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
                :type="showpass.login_pass ? 'text' : 'password'"
              />
              <img
                @click="showpass.login_pass = false"
                v-if="showpass.login_pass"
                class="pass-icon"
                src="../assets/images/login/yanjingguan.png"
              />
              <img
                @click="showpass.login_pass = true"
                v-else
                class="pass-icon"
                src="../assets/images/login/yanjingkai.png"
              />
            </div>
          </nut-form-item>
          <nut-form-item prop="action">
            <div class="forget-row">
              <div class="check" @click="is_check = !is_check">
                <i
                  :style="{ color: is_check ? '#06a950' : '#808080' }"
                  class="iconfont icon-duoxuanyixuan"
                ></i>
                <span>{{ $t("login.Lembrar") }}</span>
              </div>
              <div class="forget" @click="modal_visible = true">
                {{ $t("login.Esqueceu") }}?
              </div>
            </div>
          </nut-form-item>
          <nut-form-item prop="submit">
            <div class="login-btn" @click="submitLogin()">
              {{ $t("login.Entrar") }}
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
            <div class="register-btn">{{ $t("login.Cadastro") }}</div>
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
              <span>{{ $t("login.RealName") }}</span>
              <div class="circle"></div>
            </div>
            <div class="ipt-box">
              <div class="icon-box">
                <i class="iconfont icon-geren"></i>
              </div>
              <nut-input
                v-model="registerForm1.realName"
                :placeholder="$t('login.RealName')"
                type="text"
              />
            </div>
          </nut-form-item>
          <nut-form-item prop="sex">
            <div class="ipt-title">
              <span>{{ $t("login.Gender") }}</span>
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
                <span
                  :style="{ color: !registerForm1.sex == 1 ? '#E6E6E6' : '#181717' }"
                  >{{ $t("login.Guy") }}</span
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
                <span
                  :style="{ color: !registerForm1.sex == 0 ? '#E6E6E6' : '#181717' }"
                  >{{ $t("login.Girl") }}</span
                >
              </div>
            </div>
          </nut-form-item>
          <nut-form-item
            prop="birthday"
            :rules="[{ validator: customValidatorBirthday }]"
          >
            <div class="ipt-title">
              <span>{{ $t("login.DatadeNascimento") }}</span>
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
            <div class="login-btn" @click="submitRegisterStep1()">
              {{ $t("btn.confirm") }}
            </div>
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
                :clearable="true"
                :placeholder="
                  login_type == 1
                    ? $t('login.PhoneNumber')
                    : login_type === 2
                    ? $t('login.EmailAddress')
                    : $t('login.UserName')
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
                :type="showpass.register_pass ? 'text' : 'password'"
              />
              <img
                @click="showpass.register_pass = false"
                v-if="showpass.register_pass"
                class="pass-icon"
                src="../assets/images/login/yanjingguan.png"
              />
              <img
                @click="showpass.register_pass = true"
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
                v-model="registerForm2.repassword"
                placeholder="Confirm Password"
                :type="showpass.register_pass_again ? 'text' : 'password'"
              />
              <img
                @click="showpass.register_pass_again = false"
                v-if="showpass.register_pass_again"
                class="pass-icon"
                src="../assets/images/login/yanjingguan.png"
              />
              <img
                @click="showpass.register_pass_again = true"
                v-else
                class="pass-icon"
                src="../assets/images/login/yanjingkai.png"
              />
            </div>
          </nut-form-item>

          <nut-form-item prop="submit">
            <div class="login-btn" @click="submitRegister2()">
              {{ $t("login.Entrar") }}
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
              {{ $t("login.tip1") }}<span>Terms of Service</span>
            </div>
          </nut-form-item>
        </nut-form>
      </div>
    </div>

    <nut-overlay
      v-model:visible="modal_visible"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="modal-close" @click="modal_visible = false">
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
            {{ $t("login.ForgetPassword") }}
            <div class="line"></div>
          </div>
          <nut-form ref="forgetRef" :model-value="forgetForm">
            <nut-form-item prop="mobile" :rules="[{ validator: customValidatorMobile }]">
              <div class="ipt-box">
                <div class="icon-box">
                  <i class="iconfont icon-shouji"></i>
                  <span>+55</span>
                </div>
                <nut-input
                  :clearable="true"
                  v-model="forgetForm.mobile"
                  :placeholder="$t('login.PhoneNumber')"
                  type="number"
                />
              </div>
            </nut-form-item>
            <nut-form-item prop="password" :rules="[{ validator: customValidatorPass }]">
              <div class="ipt-box">
                <div class="icon-box">
                  <i class="iconfont icon-mima"></i>
                </div>
                <nut-input
                  v-model="forgetForm.password"
                  placeholder="Password"
                  :type="showpass.forget_pass ? 'text' : 'password'"
                />
                <img
                  @click="showpass.forget_pass = false"
                  v-if="showpass.forget_pass"
                  class="pass-icon"
                  src="../assets/images/login/yanjingguan.png"
                />
                <img
                  @click="showpass.forget_pass = true"
                  v-else
                  class="pass-icon"
                  src="../assets/images/login/yanjingkai.png"
                />
              </div>
            </nut-form-item>
            <nut-form-item prop="code" :rules="[{ validator: customValidatorCode }]">
              <div class="code-row">
                <div class="code-col">
                  <modalCode :showTitle="false" :codeLen="4" @complete="onComplete" />
                </div>
                <div class="code-btn">Code</div>
              </div>
            </nut-form-item>
            <nut-form-item prop="submit">
              <div class="login-btn" @click="confirmForget()">
                {{ $t("login.Continuar")
                }}<svg
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
            </nut-form-item>
          </nut-form>
        </div>
      </div>
    </nut-overlay>

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

<script>
import modalCode from "@/components/modalCode.vue";
export default {
  components: {
    modalCode,
  },
};
</script>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Close } from "@nutui/icons-vue";
import {
  _validpassword,
  _validname,
  _validemail,
  _validphone,
  _validbirth,
  checkOnline
} from "@/utils/utils";
import { useStore } from "vuex";
import { login, register } from "@/apis/user.js";
let { dispatch, state, commit } = useStore();


const modal_visible = ref(false);
const showpass = ref({
  login_pass: false,
  register_pass: false,
  register_pass_again: false,
  forget_pass: false,
});
const onComplete = (val) => {
  console.log("complete", val);
  forgetForm.value.code = val;
};
const is_check = ref(true);
const showBirthday = ref(false);
const min = new Date(1900, 0, 1);
const val = ref(new Date(2022, 4, 10));
const confirm = ({ selectedValue }) => {
  registerForm1.value.birthday =
    selectedValue[0] + "-" + selectedValue[1] + "-" + selectedValue[2];
  showBirthday.value = false;
};
const confirmForget = () => {
  if (is_loading.value) return;
  forgetRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      is_loading.value = true;
    } else {
      console.warn("error:", errors);
    }
  });
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
const forgetRef = ref(null);
const forgetForm = ref({
  mobile: "",
  password: "",
  code: "",
});
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
      //  if (localStorage.getItem("agentId")) obj.agentid = localStorage.getItem("agentId");
      register({ ...obj })
        .then((res) => {
          if (res.code == 200) {
            router.push({
              path: "/home",
            });
            commit("set_show_tip", { type: 1, msg: "register success" });
          } else {
            commit("set_show_tip", { type: 0, msg: res.msg });
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
            checkOnline(1);
            router.push({
              path: "/home",
            });
            commit("set_show_tip", { type: 1, msg: "login success" });
            commit("set_login_tip_visible", true);
          } else {
            commit("set_show_tip", { type: 1, msg: res.msg });
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
    return Promise.reject("please Enter Real Name");
  }
};
const customValidatorCode = (val) => {
  let code = forgetForm.value.code.filter(
    (item) => item !== undefined && item !== null && item !== ""
  );
  if (code.length == 4) {
    return Promise.resolve();
  } else {
    return Promise.reject("please Enter Code");
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
const customValidatorMobile = (val) => {
  if (_validphone(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("account error");
  }
};
const customValidatorPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-20 digit password.");
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
  mode.value = route.query.mode ? route.query.mode : "login";
  reg_step.value = state.is_cpf ? 1 : 2;
});
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
    .code-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .code-col {
        width: calc(100% - 2.832rem);
      }
      .code-btn {
        width: 2rem;
        height: 0.916rem;
        border-radius: 0.472rem;
        border: 0.027rem solid #ffc02e;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.361rem;
        color: #e6e6e6;
      }
    }

    .modal-close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: 0.416rem 0 0 0;
    }
    .login-btn {
      margin-top: 1.2rem;
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
