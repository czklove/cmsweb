<template>
  <div><span :id='eleId'></span></div>
</template>
<script>
import CountUp from 'countUp'
export default {
  name: 'CountTo',
  data() {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_$(this._uid)`
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 0,
      required: true
    },
    /* 自己封装的延迟启动 ,默认是毫秒*/
    yanchi: {
      type: Number,
      default: 0,
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    /*
    */
    useEasing: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId,this.startVal,this.endVal,this.decimals,this.duration,{})
      setTimeout(() => {
        this.counter.start()
      },this.yanchi)
    })
  }
}
</script>

