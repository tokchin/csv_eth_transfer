<template>
  <div id="app">
    <h1>1. Import Csv</h1>
    <div>
    <VueCsvImport v-model="transactions" :map-fields="['address','amount']"></VueCsvImport>
    </div>
    <h1>2. Transafer to each Address</h1>
    <Transfer v-for="item in transactions" :transaction="item" :key="item.id" />
    <b-button v-on:click="sendEthereum">Transfer</b-button>
  </div>
</template>

<script>
import { VueCsvImport } from 'vue-csv-import';
import { TransferEth } from '../web3-util';
import Transfer from "../src/components/Transfer.vue";
export default {
  name: 'app',
  data: function(){
    return {
      transactions: {}
    }
  },
  methods:{
    async sendEthereum(){
      await TransferEth("0x7eD4c8fa1Fb0301647F725bB4912A7e929a54809", "100000000000000")
    }
  },
  components: {
    VueCsvImport,
    Transfer
  },
  watch: {
    transactions: function (old, newValue) {
      for (let i=0; i < newValue.length; i++){
        newValue.id=i
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
