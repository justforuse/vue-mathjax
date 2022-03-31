import Vue from 'vue'
import App from './App.vue'

import VueMathjax from './VueMathjax.umd.min.js'

Vue.config.productionTip = false

Vue.use(VueMathjax)

new Vue({
  render: h => h(App),
}).$mount('#app')
