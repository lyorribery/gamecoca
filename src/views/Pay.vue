<template>
  <div class="pay">
    <svg
      t="1714975599671"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4484"
      width="50"
      height="50"
    >
      <path
        d="M512 972.8a460.8 460.8 0 1 0 0-921.6 460.8 460.8 0 0 0 0 921.6z m0 51.2C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512zM460.8 179.2v358.4a25.6 25.6 0 1 0 51.2 0v-358.4a25.6 25.6 0 0 0-51.2 0z m384 332.8h-358.4a25.6 25.6 0 1 0 0 51.2h358.4a25.6 25.6 0 1 0 0-51.2z"
        fill="#42BB4B"
        p-id="4485"
      ></path>
    </svg>
    <div class="label">{{ labels }}</div>
    <div class="sub-label">{{ subLabels }}</div>
    <div class="btn" @click="goBack">Back</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const { dispatch } = useStore();
const route = useRoute();
const router = useRouter();
const labels = ref("Order has been generated");
const subLabels = ref(
  "If you have paid, please click the button below to return to the homepage"
);
const goBack = () => {
  router.push({
    path: "/home",
  });
  dispatch("GET_USER_INFO");
};
onMounted(() => {
  const type = route.query.type || "";
  if (type == "2") {
    labels.value = "Withdrawal application has been submitted";
    subLabels.value = "Please pay attention to the arrival of funds";
  }
});
</script>

<style lang="scss" scoped>
.pay {
  width: 100%;
  height: 100vh;
  background: linear-gradient(35deg, #161326, #241e44);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 100px 20px 0 20px;
  .btn {
    width: 308px;
    height: 45.7px;
    background: linear-gradient(-90deg, #9343c4, #614ae6);
    border-radius: 22.7px;
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom) + 50px);
    left: calc((100% - 308px) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    font-weight: bold;
    font-size: 17.3px;
    color: #ffffff;
  }
  .label {
    font-family: Arial;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    margin: 30px 0 20px 0;
  }
  .sub-label {
    font-family: Arial;
    font-weight: 400;
    font-size: 13px;
    color: #ccc3e2;
    text-align: center;
  }
}
</style>
