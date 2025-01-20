<template>
  <div class="service">
    <div class="rule" v-html="rule"></div>
    <div class="service-item">
      <div class="title">Service</div>
      <div class="bottom">
        <img src="../assets/images/service.png" />
        <div class="right">
          <div class="sub-title">Service</div>
          <div class="row">
            <img src="../assets/images/service.png" />
            <span>Online</span>
          </div>
          <div class="btn">
            <svg
              t="1737411204934"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5873"
              width="22"
              height="22"
            >
              <path
                d="M238.323409 764.78426c-106.980523-71.483054-175.933965-183.867658-175.933965-310.253136 0-215.956493 201.304795-391.012462 449.610044-391.012462 248.304226 0 449.610044 175.055968 449.610044 391.012462 0 215.94626-201.305819 391.004275-449.610044 391.004275-44.1178 0-86.74669-5.51869-127.026068-15.817244l-115.380844 87.308485c-17.276479 13.057387-31.270191 6.196119-31.270191-15.385409L238.322385 764.78426zM785.674545 513.176802c32.395828 0 58.644655-26.258037 58.644655-58.645678 0-32.395828-26.247804-58.653865-58.644655-58.653865s-58.645678 26.258037-58.645678 58.653865C727.02989 486.918765 753.278717 513.176802 785.674545 513.176802zM511.999488 513.176802c32.394804 0 58.644655-26.258037 58.644655-58.645678 0-32.395828-26.248827-58.653865-58.644655-58.653865-32.395828 0-58.645678 26.258037-58.645678 58.653865C453.35381 486.918765 479.603661 513.176802 511.999488 513.176802zM238.323409 513.176802c32.395828 0 58.645678-26.258037 58.645678-58.645678 0-32.395828-26.248827-58.653865-58.645678-58.653865s-58.644655 26.258037-58.644655 58.653865C179.678754 486.918765 205.926558 513.176802 238.323409 513.176802z"
                fill="#ffffff"
                p-id="5874"
              ></path>
            </svg>
            <span>Send Message</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GetServiceRule } from "@/apis/service";
import { ref, onMounted } from "vue";

const rule = ref("");

onMounted(() => {
  GetServiceRule().then((res) => {
    if (res.code == 200) rule.value = res.data.content;
  });
});
</script>

<style lang="scss" scoped>
.service {
  width: 100%;
  box-sizing: border-box;
  padding: 0.416rem;
  .service-item{
    margin-top: 0.416rem;
    width:100%;
    border-radius: 0.333rem;
    background: #333333;
    box-sizing: border-box;
    padding:0.555rem 0.416rem;
   .title{
    font-size: 0.5rem;
    color:#ffffff;
    font-weight: bold;
    margin-bottom: 0.555rem;
   }
   .bottom{
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    img{
        width:1.5rem;
        margin-right: 0.555rem;
    }
    .right{
        .sub-title{
            color:#ffffff;
            font-size: 0.5rem;
            font-weight: 600;
        }
        .row{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin:0.305rem 0;
            img{
                width:0.9rem;
                margin-right:0.138rem;
            }
            span{
                color:#ffffff;
                font-weight: 500;
                font-size: 0.416rem;
            }
        }
        .btn{
            background: #54a759;
            border-radius: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding:0.361rem 0.555rem;
            color:#ffffff;
            font-size: 0.416rem;
            span{
                padding-left: 0.138rem;
            }
        }
    }
   }
  }
}
</style>
