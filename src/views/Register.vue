<template>
  <div class="permission">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="title">Sign up</div>
    <div class="title" style="margin-top: 0.138rem">To GameCoca</div>

    <div class="form-container">
      <nut-form ref="registerRef" :model-value="registerForm">
        <nut-form-item
          prop="identifier"
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
                font-size: 0.416rem;
                font-weight: bold;
                padding-right: 0.277rem;
              "
              >+233</span
            >
            <nut-input
              v-model="registerForm.identifier"
              placeholder="Enter phone number"
              type="number"
              maxLength="10"
              @blur="customBlurValidate('identifier')"
            />
          </div>
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
            <span v-else>Create Account</span>
          </div>
          <div class="text-box">
            <nut-checkbox
              v-model="is_check"
              icon-size="11"
              style="display: inline-block; width: 0; height: 0; margin-right: 0.416rem"
            ></nut-checkbox>
            By signing up,I agree to GameCoca’s
            <span @click="goDescription('3')"> Terms and Conditions</span> &
            <span @click="goDescription('1')">Privacy Policy</span>, You must be 18yrs and
            above in order to sign up.
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
import { useStore } from "vuex";

let timer = null;
const { commit } = useStore();
const is_loading = ref(false);
const router = useRouter();
const registerRef = ref(null);
const is_check = ref(true);
const registerForm = ref({
  loginType: "phone",
  identifier: "",
  certificate: "",
  authCode: "",
  deviceId: localStorage.getItem("d_id"),
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
  if (!registerForm.value.identifier || registerForm.value.identifier.length != 9) {
    commit("set_tip_info", "Please Enter your phone number.");
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  } else {
    getVerifyCode
      .post("", { loginType: "phone", identifier: "233" + registerForm.value.identifier })
      .then((res) => {
        if (res.code == 200) {
          commit(
            "set_tip_info",
            "The SMS verification code has been sent, please check it carefully."
          );
          commit("set_tip_type", 3);
          commit("set_tip_modal", true);
          timer = setInterval(() => {
            if (code_second.value > 0) {
              code_second.value -= 1;
            } else {
              clearInterval(timer);
              code_second.value = 60;
              timer = null;
            }
          }, 1000);
        } else {
          commit("set_tip_info", res.msg);
          commit("set_tip_type", 3);
          commit("set_tip_modal", true);
        }
      });
  }
};
const submit = () => {
  registerRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      if (!is_check.value) {
        commit(
          "set_tip_info",
          "Please check GameCoca’s Service Agreement,Terms and Conditions & Privacy Policy."
        );
        commit("set_tip_type", 3);
        commit("set_tip_modal", true);
      } else {
        if (is_loading.value) return;
        is_loading.value = true;
        const param = localStorage.getItem("i_code")
          ? {
              ...registerForm.value,
              identifier: "233" + registerForm.value.identifier,
              invateCode: Number(localStorage.getItem("i_code")),
            }
          : { ...registerForm.value, identifier: "233" + registerForm.value.identifier };
        register
          .post("", param)
          .then((res) => {
            if (res.code == 200) {
              commit("set_tip_info", "Registration successful, please log in.");
              commit("set_tip_type", 11);
              commit("set_tip_modal", true);
            } else {
              commit("set_tip_info", res.msg);
              commit("set_tip_type", 3);
              commit("set_tip_modal", true);
            }
            is_loading.value = false;
          })
          .catch((err) => {
            is_loading.value = false;
            commit("set_tip_info", "sever error");
            commit("set_tip_type", 3);
            commit("set_tip_modal", true);
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
  if (/^\d+$/.test(val) && val.length == 9) {
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
const goDescription = (type) => {
  router.push({
    path: "/description",
    query: {
      type,
    },
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
  padding: 2.5rem 0 0 0;
  .form-container {
    margin-top: 2.222rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .code-btn {
      font-size: 0.297rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc3e2;
      border-radius: 0.444rem;
      width: 2.405rem;
      height: 0.741rem;
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
      color: #fff;
      font-size: 0.472rem;
      font-weight: bold;
    }
    .active-btn {
      background: linear-gradient(-90deg, #9343c4, #614ae6);
    }
    .text-box {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.555rem;
      font-size: 0.361rem;
      color: #ccc3e2;
      span {
        color: #e556ff;
        text-decoration-line: underline;
      }
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
