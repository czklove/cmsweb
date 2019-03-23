<template>
  <div>
    <count-to :end-val='100'></count-to>
  </div>
</template>
<script>
import countTo from '@/components/count-to'
export default {
  components: {
    countTo
  }
}
</script>
