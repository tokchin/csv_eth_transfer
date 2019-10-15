<template>
    <div>
  <b-card :title="transaction.id +'. '+transaction.address">
      <b-button variant="danger" v-on:click="sendEthereum(transaction.address, transaction.amount)">Send {{transaction.amount}} eth</b-button>
    </b-card>
  </div>
</template>

<script>
import { TransferEth } from '../../web3-util';
import _ from 'lodash';

export default {
  name: 'Transfer',
  props: {
    transaction: Object
  },
  methods:{
    async sendEthereum(address, amount){
      console.log("eth")
      await TransferEth(address, amount)
    }
  }
}
</script>