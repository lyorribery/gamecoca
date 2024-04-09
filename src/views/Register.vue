<template>
  <div class="permission">
    <div class="close">
      <Close color="#9A87C8" width="13px" height="13px" @click="back" />
    </div>
    <div class="title">Sign up</div>
    <div class="title" style="margin-top: 5px">To GameCoca</div>

    <div class="form-container">
      <nut-form ref="registerRef" :model-value="registerForm">
        <nut-form-item
          prop="identifier"
          :rules="[
            { required: true, message: 'Enter phone number' },
            { validator: customValidatorPhone },
          ]"
        >
          <nut-input
            v-model="registerForm.identifier"
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
              v-model="registerForm.authCode"
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
            { required: true, message: 'Enter password' },
            { validator: customValidatorPass },
          ]"
        >
          <nut-input
            v-model="registerForm.certificate"
            placeholder="Enter password"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('certificate')"
          />
        </nut-form-item>
        <nut-form-item>
          <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="submit">
            Create Account
          </div>
          <div class="text-box">
            <nut-checkbox
              v-model="is_check"
              icon-size="11"
              style="display: inline-block; width: 0; height: 0; margin-right: 15px"
            ></nut-checkbox>
            By signing up,I agree to GameCoca’s
            <span>Service Agreement</span>,<span> Terms and Conditions</span> &
            <span>Privacy Policy</span>, You must be 18yrs and above in order to sign up.
          </div>
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
import { showNotify } from "@nutui/nutui";
import { register, getVerifyCode } from "@/apis/apis";

let timer = null;
const router = useRouter();
const registerRef = ref(null);
const is_check = ref(true);
const registerForm = ref({
  loginType: "phone",
  identifier: "",
  certificate: "",
  authCode: "",
  deviceId: localStorage.getItem("d_id"),
  invateCode: "",
});
const is_enter = ref(false);
const code_second = ref(60);
watch(
  () => registerForm,
  (newValue, oldValue) => {
    if (
      newValue.value.identifier &&
      newValue.value.authCode &&
      newValue.value.certificate
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
  if (!registerForm.value.identifier) {
    showNotify.text("Please Enter your phone number", {
      color: "#fff",
      background: "#9a87c8",
    });
  } else {
    getVerifyCode
      .post("", { loginType: "phone", identifier: registerForm.value.identifier })
      .then((res) => {
        if (res.code == 200) {
          showNotify.text(
            "The SMS verification code has been sent, please check it carefully.",
            {
              color: "#fff",
              background: "#9a87c8",
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
  registerRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      if (!is_check.value) {
        showNotify.text(
          "Please check GameCoca’s Service Agreement,Terms and Conditions & Privacy Policy",
          { color: "#fff", background: "#9a87c8" }
        );
      } else {
        register.post("", registerForm.value).then((res) => {
          if (res.code == 200) {
            showNotify.text("Registration successful, please sign in", {
              color: "#fff",
              background: "#9a87c8",
            });
            router.push({
              path: "/login",
            });
          }
        });
      }
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  registerRef.value.validate(prop);
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
const back = () => {
  router.go(-1);
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
    .code-btn {
      font-size: 10.7px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #9a87c8;
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
      background: linear-gradient(-90deg, #9932fc, #5b2efa);
    }
    .text-box {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      font-size: 13px;
      color: #9a87c8;
      span {
        color: #e556ff;
        text-decoration-line: underline;
      }
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
