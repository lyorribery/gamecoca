import { createApp } from 'vue'
import './utils/noscale.js'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales/i18n';
// import Vconsole from 'vconsole'

import { Locale, Tabs, TabPane, Swiper, SwiperItem, Input, Image, Form, FormItem, Overlay, Popup, Textarea, Noticebar, Animate, Collapse, CollapseItem, Progress, Calendar, Table } from "@nutui/nutui"
import "@nutui/nutui/dist/style.css"

import './assets/styles/common.scss'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import animated from 'animate.css'

import enUS from '@nutui/nutui/dist/packages/locale/lang/en-US'
Locale.use('en-US', enUS)
// let vConsole = new Vconsole()
const app = createApp(App)

app.use(Tabs)
app.use(TabPane)
app.use(Swiper)
app.use(SwiperItem)
app.use(Input)
app.use(Image)
app.use(Form)
app.use(FormItem)
app.use(Overlay)
app.use(Popup)
app.use(Textarea)
app.use(Noticebar)
app.use(Animate)
app.use(Collapse)
app.use(CollapseItem)
app.use(Progress)
app.use(Calendar)
app.use(Table)
// app.use(vConsole)

app.use(router).use(store).use(i18n).mount('#app')
