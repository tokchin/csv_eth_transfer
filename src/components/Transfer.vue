<template>
    <div>
  <b-card :title="transaction.id +'. '+transaction.address">
      <b-button variant="danger" v-on:click="sendEthereum(transaction.address, transaction.amount, transaction.id)">Send {{transaction.amount}} eth</b-button>
    </b-card>
  </div>
</template>

<script>
import { TransferEth } from '../../web3-util';

export default {
  name: 'Transfer',
  props: {
    transaction: Object
  },
  methods:{
    async sendEthereum(address, amount, id){
      await TransferEth(address, amount)
      this.$parent.moveToCompletedTransactions(id)
    },
  }
}
</script>