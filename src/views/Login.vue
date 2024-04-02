<template>
  <div class="permission">
    <div class="close">
      <Close color="#9A87C8" width="13px" height="13px" @click="back" />
    </div>
    <div class="title">Hello,</div>
    <div class="title" style="margin-top: 5px">Welcome to GameCoca</div>

    <div class="form-container">
      <nut-form ref="loginRef" :model-value="loginForm">
        <nut-form-item
          prop="phone"
          :rules="[
            { required: true, message: 'Enter phone number' },
            { validator: customValidatorPhone },
          ]"
        >
          <nut-input
            v-model="loginForm.phone"
            placeholder="Enter phone number"
            type="number"
            @blur="customBlurValidate('phone')"
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
            placeholder="Enter password"
            type="password"
            @blur="customBlurValidate('password')"
          />
        </nut-form-item>
        <nut-form-item>
          <div class="forget" @click="goPath('/forgetPass')">Forgot password?</div>
          <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="submit">
            Login
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
const router = useRouter();
const loginRef = ref(null);
const loginForm = ref({
  phone: "",
  password: "",
});
const is_enter = ref(false);
watch(
  () => loginForm,
  (newValue, oldValue) => {
    if (newValue.value.phone && newValue.value.password) {
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
      console.log("success:", loginForm.value);
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  loginRef.value.validate(prop);
};
const customValidatorPhone = (val) => {
  if (/^\d+$/.test(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter the correct phone number");
  }
};
const customValidatorPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject(
      "Please enter a 6-16 digit password."
    );
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
</script>

<style lang="scss" scoped>
.permission {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 90px 0 0 0;
  .form-container {
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .submit-btn {
      margin: 30px 0;
      width: 100%;
      height: 42px;
      background: linear-gradient(-90deg, #351f5f, #2a2059);
      border-radius: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 17px;
      font-weight: bold;
    }
    .active-btn {
      background: linear-gradient(-90deg, #9932fc, #5b2efa);
    }
    .des {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #e556ff;
      text-decoration-line: underline;
    }
    .forget {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #e556ff;
      font-size: 14px;
    }
  }
  .title {
    box-sizing: border-box;
    padding: 0 16px;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
  .close {
    position: fixed;
    top: calc(env(safe-area-inset-top) + 25px);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 25px;
  }
}
</style>
