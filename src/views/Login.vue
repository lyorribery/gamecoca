<template>
  <div class="permission">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="title">Hello,</div>
    <div class="title" style="margin-top: 0.138rem">Welcome to GameCoca</div>

    <div class="form-container">
      <nut-form ref="loginRef" :model-value="loginForm">
        <nut-form-item>
          <div class="tab-box">
            <div
              class="tab-item"
              :class="tabVal == 1 ? 'tab-active' : ''"
              @click="changeTab(1)"
            >
              {{ $t("tel") }}
            </div>
            <div
              class="tab-item"
              :class="tabVal == 2 ? 'tab-active' : ''"
              @click="changeTab(2)"
            >
              {{ $t("email") }}
            </div>
            <div
              class="tab-item"
              :class="tabVal == 3 ? 'tab-active' : ''"
              @click="changeTab(3)"
            >
              {{ $t("user") }}
            </div>
          </div>
        </nut-form-item>

        <nut-form-item
          v-if="tabVal == 1"
          prop="phone"
          :rules="[
            { required: true, message: 'Enter phone number' },
            { validator: customValidatorPhone },
          ]"
        >
          <div
            style="
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span
              style="
                color: #fff;
                font-size: 0.388rem;
                font-weight: bold;
                padding-right: 0.277rem;
              "
              >+55</span
            >
            <nut-input
              style="flex: 1"
              v-model="loginForm.phone"
              placeholder="Phone number"
              type="number"
              maxLength="9"
              @blur="customBlurValidate('phone')"
            />
          </div>
        </nut-form-item>

        <nut-form-item
          v-if="tabVal == 2"
          prop="email"
          :rules="[
            { required: true, message: 'Enter E-mail' },
            { validator: customValidatorEmail },
          ]"
        >
          <nut-input
            v-model="loginForm.email"
            placeholder="E-mail"
            @blur="customBlurValidate('email')"
          />
        </nut-form-item>

        <nut-form-item
          v-if="tabVal == 3"
          prop="username"
          :rules="[
            { required: true, message: 'Enter User Name' },
            { validator: customValidatorUserName },
          ]"
        >
          <nut-input
            v-model="loginForm.username"
            placeholder="User Name"
            @blur="customBlurValidate('username')"
          />
        </nut-form-item>

        <nut-form-item
          prop="password"
          :rules="[
            { required: true, message: 'Enter password' },
            { validator: customValidatorPass },
          ]"
        >
          <nut-input
            v-model="loginForm.password"
            placeholder="Password (Must be 6-16 characters long)"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('password')"
          />
        </nut-form-item>
        <nut-form-item prop="btn">
          <div class="forget" @click="goPath('/forgetPass')">Forgot password?</div>
          <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="submit">
            <svg
              v-if="is_loading"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width=".694rem"
              height=".694rem"
              viewBox="0 0 50 50"
              style="enable-background: new 0 0 50 50"
              xml:space="preserve"
            >
              <path
                fill="#FFFFFF"
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
            <span v-else>Login</span>
          </div>
          <div class="des" @click="goPath('/register')">Create New Account ></div>
        </nut-form-item>
      </nut-form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { Close } from "@nutui/icons-vue";
import { _validpassword } from "@/utils/utils";
import { useStore } from "vuex";
let { commit, dispatch } = useStore();
const router = useRouter();
const loginRef = ref(null);
const loginForm = ref({
  loginType: "front",
  username: "",
  phone: "",
  email: "",
  password: "",
});
const is_loading = ref(false);
const is_enter = ref(false);
const tabVal = ref("1");
watch(
  () => loginForm,
  (newValue, oldValue) => {
    if (tabVal.value == 1 && newValue.value.phone && newValue.value.password) {
      is_enter.value = true;
    } else if (tabVal.value == 2 && newValue.value.email && newValue.value.password) {
      is_enter.value = true;
    } else if (tabVal.value == 3 && newValue.value.username && newValue.value.password) {
      is_enter.value = true;
    } else {
      is_enter.value = false;
    }
  },
  { deep: true }
);
const submit = () => {
  loginRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      if (is_loading.value) return;
      is_loading.value = true;
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  loginRef.value.validate(prop);
};
const customValidatorPhone = (val) => {
  if (/^\d+$/.test(val) && val.length == 9) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter the correct phone number");
  }
};
const customValidatorEmail = (val) => {
  return Promise.resolve();
};
const customValidatorUserName = (val) => {
  return Promise.resolve();
};
const customValidatorPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
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
  tabVal.value = val;
};
</script>

<style lang="scss" scoped>
.permission {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 2.5rem 0 0 0;
  .form-container {
    margin-top: 2.222rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .tab-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.866rem;
      border-radius: 0.611rem;
      background: linear-gradient(-90deg, #351f5f, #2a2059);
      overflow: hidden;
      box-sizing: border-box;
      .tab-item {
        width: calc(100% / 3);
        height: 0.866rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.388rem;
        font-weight: bold;
        color: #fff;
      }
      .tab-active {
        background: #e556ff;
        border-radius: 0.611rem;
      }
    }
    .submit-btn {
      margin: 0.833rem 0;
      width: 100%;
      height: 1.166rem;
      background: linear-gradient(-90deg, #351f5f, #2a2059);
      border-radius: 0.611rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #9a87c8;
      font-size: 0.472rem;
      font-weight: bold;
    }
    .active-btn {
      color: #ffffff;
      background: linear-gradient(-90deg, #9343c4, #614ae6);
    }
    .des {
      width: 100%;
      text-align: center;
      font-size: 0.388rem;
      color: #e556ff;
      text-decoration-line: underline;
    }
    .forget {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #e556ff;
      font-size: 0.388rem;
    }
  }
  .title {
    box-sizing: border-box;
    padding: 0 0.416rem;
    font-weight: bold;
    font-size: 0.555rem;
    color: #ffffff;
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
