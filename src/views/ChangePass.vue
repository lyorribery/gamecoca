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
          prop="oldpass"
          :rules="[
            { required: true, message: 'Enter old password' },
            { validator: customValidatorOldPass },
          ]"
        >
          <nut-input
            v-model="changepassForm.oldpass"
            placeholder="Enter old password"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('oldpass')"
          />
        </nut-form-item>
        <nut-form-item
          prop="newpass"
          :rules="[
            { required: true, message: 'Enter new password' },
            { validator: customValidatorNewPass },
          ]"
        >
          <nut-input
            v-model="changepassForm.newpass"
            placeholder="Enter new password"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('newpass')"
          />
        </nut-form-item>
        <nut-form-item
          prop="newpassagain"
          :rules="[
            { required: true, message: 'Enter new password again' },
            { validator: customValidatorNewPassAgain },
          ]"
        >
          <nut-input
            v-model="changepassForm.newpassagain"
            placeholder="Enter new password again"
            type="password"
            maxLength="16"
            @blur="customBlurValidate('newpassagain')"
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
const router = useRouter();
const changepassRef = ref(null);
const changepassForm = ref({
  oldpass: "",
  newpass: "",
  newpassagain: "",
});
const is_enter = ref(false);
watch(
  () => changepassForm,
  (newValue, oldValue) => {
    if (newValue.value.oldpass && newValue.value.newpass && newValue.value.newpassagain) {
      is_enter.value = true;
    } else {
      is_enter.value = false;
    }   
  },
  { deep: true }
);
const submit = () => {
  changepassRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      console.log("success:", changepassForm.value);
    } else {
      console.warn("error:", errors);
    }
  });
};
const customBlurValidate = (prop) => {
  changepassRef.value.validate(prop);
};
const customValidatorOldPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
  }
};
const customValidatorNewPass = (val) => {
  if (!_validpassword(val)) {
    return Promise.reject("Please enter a 6-16 digit password.");
  } else if (val == changepassForm.value.oldpass) {
    return Promise.reject("The new password cannot be the same as the old password.");
  } else {
    return Promise.resolve();
  }
};
const customValidatorNewPassAgain = (val) => {
  if (!_validpassword(val)) {
    return Promise.reject("Please enter a 6-16 digit password.");
  } else if (val != changepassForm.value.newpass) {
    return Promise.reject("The password entered twice is not the same");
  } else {
    return Promise.resolve();
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
  padding: calc(55px + env(safe-area-inset-top)) 15px 0 15px;
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
}
.change-pass-header {
  z-index: 9;
  background: #19142b;
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
