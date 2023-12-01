<template>
    <div class="header">
        <img src="@/assets/images/logo.png" style="width: 40px;height: auto;">
        <div class="header-btn-box">
            <i class="iconfont icon-guanbi" style="font-size: 28px;color:#ADB6C4;" @click="closeParse()"></i>
        </div>
    </div>
    <div class="parse-content" v-html="parse"></div>
</template>

<script setup>

import description from '@/mixin/description'

const {
    base_img_url,
    closeParse,
    parse
} = description()

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    height: calc(50px + env(safe-area-inset-top));
    background-color: #111923;
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: env(safe-area-inset-top);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #2C353F;
    color: #ADB6C4;
    font-size: 18px;
    font-weight: bold;

    .header-btn-box {
        position: fixed;
        top: calc(env(safe-area-inset-top) + 12px);
        right: 15px;
    }
}

.parse-content {
    width: 100%;
    box-sizing: border-box;
    padding: calc(50px + env(safe-area-inset-top)) 10px env(safe-area-inset-bottom) 10px;
    overflow-y: auto;
    color: #ADB6C4 !important;
}
</style>