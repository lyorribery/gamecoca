<template>
  <div class="permission">
    <div class="close">
      <Close color="#9A87C8" width="13px" height="13px" @click="back" />
    </div>

    <div class="form-container">
      <nut-form ref="forgetRef" :model-value="forgetForm" v-show="!valid_phone">
        <nut-form-item
          prop="phone"
          :rules="[
            { required: true, message: 'Enter phone number' },
            { validator: customValidatorPhone },
          ]"
        >
          <nut-input
            v-model="forgetForm.phone"
            placeholder="Enter phone number(233xxxxxxxxxx)"
            type="number"
            @blur="customBlurValidate('phone')"
          />
        </nut-form-item>
        <nut-form-item>
          <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="goOn">
            Continue
          </div>
        </nut-form-item>
      </nut-form>
      <nut-form ref="passRef" :model-value="passForm" v-show="valid_phone">
        <nut-form-item
          prop="password"
          :rules="[
            { required: true, message: 'Enter new password' },
            { validator: customValidatorPass },
          ]"
        >
          <nut-input
            v-model="passForm.password"
            placeholder="Enter new password"
            type="password"
            @blur="customBlurValidatePass('password')"
          />
        </nut-form-item>

        <nut-form-item>
          <div class="submit-btn" :class="is_enter ? 'active-btn' : ''" @click="submit">
            Confirm
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
import { showNotify } from "@nutui/nutui";
import { _validpassword } from "@/utils/utils";
const router = useRouter();
const forgetRef = ref(null);
const passRef = ref(null);
const valid_phone = ref(false);
const is_check = ref(true);
const forgetForm = ref({
  phone: "",
});
const passForm = ref({
  password: "",
});
const is_enter = ref(false);
watch(
  () => forgetForm,
  (newValue, oldValue) => {
    if (newValue.value.phone) {
      is_enter.value = true;
    } else {
      is_enter.value = false;
    }
  },
  { deep: true }
);
const goOn = () => {
  forgetRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      valid_phone.value = true;
    } else {
      console.warn("error:", errors);
    }
  });
};
const submit = () => {
  forgetRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      console.log("success:", forgetForm.value);
      if (!is_check.value) {
        showNotify.text(
          "Please check GameCoca’s Service Agreement,Terms and Conditions & Privacy Policy",
          { color: "#fff", background: "#9a87c8" }
        );
      } else {
      }
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  forgetRef.value.validate(prop);
};
const customBlurValidatePass = (prop) => {
  passRef.value.validate(prop);
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
    margin-top: 60px;
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
