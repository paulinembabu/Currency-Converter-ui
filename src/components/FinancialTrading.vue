<template>
  <div>
  <table id="tradingTable">
    <thead> Financial Trading
      <tr>
        <th>Base Currency
          <select v-model="baseCurrency">
            <option v-for="currency in currencies" :value="currency">
              {{ currency.currency }}
            </option>
          </select>
      </th>
        <th v-for="col in financialTradingItems">{{col.year}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Revenue</td>
        <td v-for="col in financialTradingItems">
          <currency-value :value="col.revenue.amount" :currencies="currencies" :baseCurrency="baseCurrency"></currency-value>
        </td>
      </tr>
      <tr>
        <td>Profit</td>
        <td v-for="col in financialTradingItems">
        <currency-value :value="col.grossIncome.amount" :currencies="currencies" :baseCurrency="baseCurrency"></currency-value>
        </td>
      </tr>
      <tr>
        <td>Gross Income</td>
        <td v-for="col in financialTradingItems">
          <currency-value :value="col.profit.amount" :currencies="currencies" :baseCurrency="baseCurrency"></currency-value>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>
import axios from 'axios'
import CurrencyValue from './CurrencyValue.vue'
export default {
  components: {CurrencyValue},
  data () {
    return {
      financialTradingItems: [],
      currencies: [],
      baseCurrency: {}
    }
  },
  created: function () {
    this.fetchFinancialTradingItems()
    this.fetchCurrencies()
  },

  methods: {
    fetchFinancialTradingItems () {
      let uri = 'http://localhost:3000/financial-trading'
      axios.get(uri).then((response) => {
        this.financialTradingItems = response.data
      })
    },
    fetchCurrencies () {
      let uri = 'http://localhost:3000/currencies'
      axios.get(uri).then((response) => {
        this.currencies = response.data
      })
    }
  }
}
</script>

<style>
table {
  font-family: 'Open Sans', sans-serif;
  width: 950px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}


</style>
