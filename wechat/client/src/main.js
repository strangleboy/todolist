import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import { Toast, Tabbar, TabbarItem, NavBar, Icon, PullRefresh, Uploader, CellGroup, Cell } from 'vant'
import '@vant/touch-emulator'
// import 'vant/lib/index.css'

Vue.use(Toast)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(PullRefresh)
Vue.use(Uploader)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Toast.setDefaultOptions({ duration: 1000 })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
