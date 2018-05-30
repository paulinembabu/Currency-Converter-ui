import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import Currency from './components/Currency.vue'
import CurrencyValue from './components/CurrencyValue.vue'
import FinancialTrading from './components/FinancialTrading.vue'
import FinancialAssets from './components/FinancialAssets.vue'

window.eventHub = new Vue()

Vue.prototype.$eventHub = new Vue()

Vue.use(axios)
Vue.component('currency', Currency)
Vue.component('currency-value', CurrencyValue)
Vue.component('financial-trading', FinancialTrading)
Vue.component('financial-assets', FinancialAssets)

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
