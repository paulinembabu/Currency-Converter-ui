<template>
  <div id="app">
    <section class="main">
<financial-trading></financial-trading>
<br>
<financial-assets></financial-assets>
<br>
<currency></currency>

    </section>
  </div>
</template>


<script>
import Currency from './components/Currency.vue'
import FinancialTrading from './components/FinancialTrading.vue'
import FinancialAssets from './components/FinancialAssets.vue'

export default {
  name: 'app',
  components: {Currency,
    FinancialAssets,
    FinancialTrading
  },

  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
