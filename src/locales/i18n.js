// i18n配置
import { createI18n } from "vue-i18n";
import por from "./por";
import en from "./en";

// 创建i18n
const i18n = createI18n({
    locale: "por", // 语言标识
    fallbackLocale: "por", 
    globalInjection: true, // 全局注入,可以直接使用$t
    legacy: false,
    messages: {
        por,
        en
    }
})

export default i18n;
