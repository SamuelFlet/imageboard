import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'

import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider({
    httpEndpoint: 'https://projectimageblog.herokuapp.com/graphql',
    wsEndpoint: null,
  }),
  render: h => h(App)
}).$mount('#app')
