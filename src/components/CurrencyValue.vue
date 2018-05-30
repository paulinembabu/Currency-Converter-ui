<template>
    <span>
      {{ convertedCurrency }}
      <select v-model="currency">
        <option v-for="currency in currencies" :value="currency">{{ currency.currency }}</option>
      </select>
      <span v-if="currency != -1 && baseCurrency.isoCode != currency.isoCode">
        {{ value }} X {{ conversionRate }}
      </span>
  </span>
</template>

<script>
import axios from 'axios'

export default {
  props: ['value', 'currencies', 'baseCurrency'],
  data () {
    return {
      currency: -1,
      conversionRate: 0.00,
      convertedCurrency: 0
    }
  },
  created () {
    this.convertedCurrency = this.value
  },
  methods: {
    convertCurrency () {
      if (this.currency === -1 || this.baseCurrency === undefined || this.currency.isoCode === this.baseCurrency.isoCode) {
        this.convertedCurrency = 10
      }
      this.fetchConversionRate().then((response) => {
        this.conversionRate = response.data.rate
        this.convertedCurrency = this.conversionRate * this.value
      })
    },
    fetchConversionRate () {
      let uri = 'http://localhost:3000/currency-conversion-rate/' + this.baseCurrency.isoCode + '/' + this.currency.isoCode
      return axios.get(uri)
    }
  },
  watch: {
    baseCurrency (value) {
      this.convertCurrency()
    },

    currency (value) {
      this.convertCurrency()
    }
  },
  computed: {
  }
}
</script>
