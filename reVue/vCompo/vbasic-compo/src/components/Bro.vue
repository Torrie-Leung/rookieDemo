<template>
  <div>
    <h2>staff's bro area~~</h2>
    <p>here's staff bro's msg: {{myBrosMsg}}</p>
    <Rookie/>
  </div>
</template>

<script>
import Rookie from './Rookie.vue'
  export default {
    components: {
      Rookie,
    },
    created () {
      this.$bus.$on('toMyBro', this.getMsg);
    },
    data() {
      return {
        myBrosMsg: ''
      }
    },
    methods: {
      getMsg(msg) {
        this.myBrosMsg = msg.msg
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>