<template>
  <div class="permission">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="title">Sign up</div>
    <div class="title" style="margin-top: 0.138rem">To GameCoca</div>

    <div class="form-container">
      <nut-form ref="registerRef" :model-value="registerForm">
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
              v-model="registerForm.phone"
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
            v-model="registerForm.email"
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
            v-model="registerForm.username"
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
            v-model="registerForm.password"
            placeholder="Password (Must be 6-16 characters long)"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('password')"
          />
        </nut-form-item>

        <nut-form-item
          prop="repassword"
          :rules="[
            { required: true, message: 'Enter password' },
            { validator: customValidatorRePass },
          ]"
        >
          <nut-input
            v-model="registerForm.repassword"
            placeholder="Confirm Password"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('repassword')"
          />
        </nut-form-item>

        <nut-form-item prop="btn">
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
            <span v-else>{{ $t("button.register") }}</span>
          </div>
          <div class="text-box">
            <svg
              v-if="is_check"
              @click="
                () => {
                  is_check = !is_check;
                }
              "
              t="1716955672523"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2481"
              width="12"
              height="12"
              style="margin-right: 0.216rem"
            >
              <path
                d="M512 0C229.248 0 0 229.248 0 512c0 282.752 229.248 512 512 512 282.688 0 512-229.248 512-512C1024 229.248 794.752 0 512 0zM824.896 364.928l-351.04 343.808c-1.792 2.88-3.904 5.888-6.784 8.768l-16.448 16.512c-9.088 9.088-19.776 13.056-23.936 8.96L259.52 568C255.424 563.904 259.456 553.152 268.544 544.128l16.448-16.448c9.088-9.152 19.84-13.184 23.936-9.088l125.312 131.136 341.312-334.208c9.088-9.088 23.808-9.088 33.024 0l16.384 16.448C833.92 341.056 833.92 355.84 824.896 364.928z"
                p-id="2482"
                fill="#e556ff"
              ></path>
            </svg>
            <svg
              @click="
                () => {
                  is_check = !is_check;
                }
              "
              v-else
              t="1716955620181"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2282"
              width="12"
              height="12"
              style="margin-right: 0.216rem"
            >
              <path
                d="M512 964.213335c-249.349021 0-452.209242-202.864314-452.209242-452.218452 0-249.349021 202.860221-452.209242 452.209242-452.209242 249.350045 0 452.210265 202.860221 452.210265 452.209242 0 249.354138-202.860221 452.218452-452.210265 452.218452z m0-838.95554c-213.247802 0-386.737088 173.489286-386.737088 386.737088 0 213.251895 173.489286 386.745275 386.737088 386.745275s386.738112-173.493379 386.738112-386.745275c0-213.247802-173.491333-386.737088-386.738112-386.737088z"
                fill="#999999"
                p-id="2283"
              ></path>
              <path
                d="M512 959.862237c-246.951415 0-447.858144-200.916962-447.858144-447.867354 0-246.950392 200.907753-447.858144 447.858144-447.858144s447.858144 200.906729 447.858144 447.858144c0.001023 246.951415-200.906729 447.867354-447.858144 447.867354z m0-838.954516c-215.645408 0-391.088186 175.441754-391.088186 391.087162 0 215.646432 175.441754 391.095349 391.088186 391.09535s391.088186-175.450964 391.088186-391.09535c0-215.645408-175.441754-391.087163-391.088186-391.087162z"
                fill="#999999"
                p-id="2284"
              ></path>
              <path
                d="M290.62817 532.063965l46.291303-46.291303 134.173862 134.163629 220.99423-319.384097 53.838185 37.254485-265.645172 383.919926z"
                fill="#999999"
                p-id="2285"
              ></path>
              <path
                d="M479.669664 714.962551l-182.889377-182.898586 40.139186-40.138163 134.784776 134.775566 221.48644-320.094272 46.680159 32.302707z"
                fill="#999999"
                p-id="2286"
              ></path>
            </svg>
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
import { useStore } from "vuex";

let timer = null;
const { commit, dispatch } = useStore();
const is_loading = ref(false);
const router = useRouter();
const registerRef = ref(null);
const is_check = ref(true);
const registerForm = ref({
  loginType: "front",
  username: "",
  phone: "",
  email: "",
  password: "",
  repassword: "",
});
const is_enter = ref(false);
const tabVal = ref("1");
watch(
  () => registerForm,
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
const customValidatorRePass = (val) => {
  if (_validpassword(val) && val === registerForm.password) {
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
    margin-top: 1.822rem;
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
