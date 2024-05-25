<template>
  <div class="change-pass-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width=".361rem" height=".361rem" /><span>Back</span>
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
              v-model="changepassForm.identifier"
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
            <span v-else>Submit</span>
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
import { changePass, getVerifyCode } from "@/apis/apis";
import { useStore } from "vuex";

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
const is_loading = ref(false);
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
  if (!changepassForm.value.identifier || changepassForm.value.identifier.length != 9) {
    commit("set_tip_info", "Please Enter your phone number.");
    commit("set_tip_type", 3);
    commit("set_tip_modal", true);
  } else {
    getVerifyCode
      .post("", {
        loginType: "phone",
        identifier: "233" + changepassForm.value.identifier,
      })
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
  changepassRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      if (is_loading.value) return;
      is_loading.value = true;
      changePass
        .post("", {
          ...changepassForm.value,
          identifier: "233" + changepassForm.value.identifier,
        })
        .then((res) => {
          if (res.code == 200) {
            localStorage.removeItem("token");
            commit("set_user_info", {});
            commit("set_tip_info", "Password has been changed.");
            commit("set_tip_type", 1);
            commit("set_tip_modal", true);
          } else {
            commit("set_tip_info", res.msg);
            commit("set_tip_type", 3);
            commit("set_tip_modal", true);
          }
          is_loading.value = false;
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
  if (/^\d+$/.test(val) && val.length <= 10) {
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
  padding: calc(1.944rem + env(safe-area-inset-top)) 0.416rem 0 0.416rem;
  .form-container {
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
}
.change-pass-header {
  z-index: 9;
  background: #18171e;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.013rem solid #29213d;
  .arrow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    left: 0.416rem;
    top: 0.555rem;
    span {
      font-weight: bold;
      font-size: 0.361rem;
      color: #ffffff;
      padding-left: 0.138rem;
    }
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 0.472rem;
  }
}
</style>
