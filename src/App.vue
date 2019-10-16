<template>
  <div id="app">
          <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">CSV-ETH-TRANSFER</span>
            <b-button v-b-modal.modal-1>Load Csv File</b-button>

</nav>

    <div class="container">

      <div class="row">
        <div class="col12">
          <b-modal id="modal-1" title="Please select csv file, and select columns.">
            <p class="my-4">
              <VueCsvImport v-model="csvData" :map-fields="['address','amount']"></VueCsvImport>
            </p>
          </b-modal>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
          <h3>To be transfer</h3>
          <Transfer v-for="item in transactions" :transaction="item" :key="item.id" />
        </div>
        <div class="col-4">
          <h3>Transfered</h3>
          <CompletedTransfer
            v-for="item in completed_transactions"
            :transaction="item"
            :key="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";
import { TransferEth } from "../web3-util";
import Transfer from "../src/components/Transfer.vue";
import CompletedTransfer from "../src/components/CompletedTransfer.vue";

import _ from "lodash";
export default {
  name: "app",
  data: function() {
    return {
      csvData: [],
      transactions: [],
      completed_transactions: []
    };
  },
  methods: {
    async sendEthereum() {
      await TransferEth(
        "0x7eD4c8fa1Fb0301647F725bB4912A7e929a54809",
        "100000000000000"
      );
    },
    moveToCompletedTransactions(id) {
      console.log("completed_transactions");
      let target_transaction = _.filter(this.transactions, function(o) {
        return o.id == id;
      });
      console.log(target_transaction[0]);
      this.completed_transactions.push(target_transaction[0]);
      _.remove(this.transactions, function(o) {
        return o.id == id;
      });
    }
  },
  components: {
    VueCsvImport,
    Transfer,
    CompletedTransfer
  },
  watch: {
    csvData: function() {
      this.transactions = this.csvData;
      for (let i = 0; i < this.transactions.length; i++) {
        this.transactions[i].id = i;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}
.row {
  padding: 10px;
}
</style>
