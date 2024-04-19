<template>
  <div class="change-pass-header">
    <div class="arrow">
      <RectLeft color="#fff" width="18px" height="18px" @click="goBack" />
    </div>
    <div class="title">Change Password</div>
  </div>
  <div class="change-pass">
    <div class="form-container">
      <nut-form ref="changepassRef" :model-value="changepassForm">
        <nut-form-item
          prop="identifier"
          :rules="[
            { required: true, message: 'Enter phone number' },
            { validator: customValidatorPhone },
          ]"
        >
          <nut-input
            v-model="changepassForm.identifier"
            placeholder="Enter phone number"
            type="number"
            @blur="customBlurValidate('identifier')"
          />
        </nut-form-item>
        <nut-form-item
          prop="authCode"
          :rules="[
            { required: true, message: 'Enter Captcha Code' },
            { validator: customValidatorCode },
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
            <nut-input
              style="flex: 1"
              v-model="changepassForm.authCode"
              placeholder="Enter Captcha Code"
              type="number"
              @blur="customBlurValidate('authCode')"
            />
            <div class="code-btn" @click="getVerify">
              {{ code_second == 60 ? "GET CAPTCHA" : code_second + "s" }}
            </div>
          </div>
        </nut-form-item>
        <nut-form-item
          prop="certificate"
          :rules="[
            { required: true, message: 'Enter new password' },
            { validator: customValidatorPass },
          ]"
        >
          <nut-input
            v-model="changepassForm.certificate"
            placeholder="Enter new password"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('certificate')"
          />
        </nut-form-item>
        <nut-form-item>
          <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="submit">
            Submit
          </div>
        </nut-form-item>
      </nut-form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { RectLeft } from "@nutui/icons-vue";
import { useRouter } from "vue-router";
import { _validpassword } from "@/utils/utils";
import { changePass,getVerifyCode } from "@/apis/apis";
import { useStore } from "vuex";
import { showNotify } from "@nutui/nutui";

let timer = null;
let { commit } = useStore();
const router = useRouter();
const changepassRef = ref(null);
const changepassForm = ref({
  loginType: "phone",
  identifier: "",
  certificate: "",
  authCode: "",
});
const is_enter = ref(false);
const code_second = ref(60);
watch(
  () => changepassForm,
  (newValue, oldValue) => {
    if (
      newValue.value.identifier &&
      newValue.value.certificate &&
      newValue.value.authCode
    ) {
      is_enter.value = true;
    } else {
      is_enter.value = false;
    }
  },
  { deep: true }
);
const getVerify = () => {
  if (code_second.value != 60) return;
  if (!changepassForm.value.identifier) {
    showNotify.text("Please Enter your phone number", {
      color: "#fff",
      background: "#CCC3E2",
    });
  } else {
    getVerifyCode
      .post("", { loginType: "phone", identifier: changepassForm.value.identifier })
      .then((res) => {
        if (res.code == 200) {
          showNotify.text(
            "The SMS verification code has been sent, please check it carefully.",
            {
              color: "#fff",
              background: "#CCC3E2",
            }
          );
          timer = setInterval(() => {
            if (code_second.value > 0) {
              code_second.value -= 1;
            } else {
              clearInterval(timer);
              code_second.value = 60;
              timer = null;
            }
          }, 1000);
        }
      });
  }
};
const submit = () => {
  changepassRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      changePass.post("", changepassForm.value).then((res) => {
        if (res.code == 200) {
          localStorage.removeItem("token");
          commit("set_user_info", {});
          router.replace("/");
        }
      });
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  changepassRef.value.validate(prop);
};
const customValidatorPhone = (val) => {
  if (/^\d+$/.test(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter the correct phone number");
  }
};
const customValidatorCode = (val) => {
  if (val.length < 4) {
    return Promise.reject("Please enter correct verify code");
  } else {
    return Promise.resolve();
  }
};
const customValidatorPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
  }
};
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.change-pass {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: calc(70px + env(safe-area-inset-top)) 15px 0 15px;
  .form-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .code-btn {
      font-size: 10.7px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #CCC3E2;
      border-radius: 16px;
      width: 86.6px;
      height: 26.7px;
    }
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
      background: linear-gradient(-90deg, #9343C4, #614AE6);
    }
    .text-box {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      font-size: 13px;
      color: #CCC3E2;
      span {
        color: #e556ff;
        text-decoration-line: underline;
      }
    }
  }
}
.change-pass-header {
  z-index: 9;
  background: #161326;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #29213d;
  .arrow {
    position: fixed;
    left: 15px;
    top: calc(env(safe-area-inset-top) + 18.5px);
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
