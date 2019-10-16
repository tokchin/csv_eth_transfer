<template>
    <div>
  <b-card :title="transaction.id +'. '+transaction.address">
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'CompletedTransfer',
  props: {
    transaction: Object
  }
}
</script>