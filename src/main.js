import { createApp } from 'vue'
import './utils/noscale.js'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vconsole from 'vconsole'

import { Locale, Tabbar, TabbarItem, Tabs, TabPane, Noticebar, Swiper, SwiperItem, Input, Image, Form, FormItem, Checkbox, Overlay, Popup, Switch, Textarea } from "@nutui/nutui"
import "@nutui/nutui/dist/style.css"

import './assets/styles/common.scss'
import animated from 'animate.css'

import enUS from '@nutui/nutui/dist/packages/locale/lang/en-US'
Locale.use('en-US', enUS)
// let vConsole = new Vconsole()
const app = createApp(App)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Tabs)
app.use(TabPane)
app.use(Noticebar)
app.use(Swiper)
app.use(SwiperItem)
app.use(Input)
app.use(Image)
app.use(Form)
app.use(FormItem)
app.use(Checkbox)
app.use(Overlay)
app.use(Popup)
app.use(Switch)
app.use(Textarea)
// app.use(vConsole)

app.use(router).use(store).mount('#app')
