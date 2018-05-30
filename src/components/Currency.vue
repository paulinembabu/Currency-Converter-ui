<template>
  <div>
  <table id="secondTable">
    <thead> Agriculture-KPI
      <tr>
        <th>Base Currency
          <select v-model="baseCurrency">
            <option v-for="currency in currencies" :value="currency">
              {{ currency.currency }}
            </option>
          </select>
      </th>
        <th v-for="col in agricultureItems">{{col.year}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Price per acre</td>
        <td v-for="col in agricultureItems">
          <currency-value :value="col.price_per_acre.amount" :currencies="currencies" :baseCurrency="baseCurrency"></currency-value>
        </td>
      </tr>
      <tr>
        <td>Number of arces</td>
        <td v-for="col in agricultureItems">{{col.number_acres}}</td>
      </tr>
      <tr>
        <td>Input cost</td>
        <td v-for="col in agricultureItems">
          <currency-value :value="col.input_cost.amount" :currencies="currencies" :baseCurrency="baseCurrency"></currency-value>
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
      agricultureItems: [],
      currencies: [],
      baseCurrency: {}
    }
  },
  created: function () {
    this.fetchAgricultureItems()
    this.fetchCurrencies()
  },

  methods: {
    fetchAgricultureItems () {
      let uri = 'http://localhost:3000/agriculture-kpi'
      axios.get(uri).then((response) => {
        this.agricultureItems = response.data
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
