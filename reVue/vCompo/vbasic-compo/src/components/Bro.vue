<template>
  <div>
    <h2>staff's bro area~~</h2>
  </div>
</template>

<script>
  export default {
    created () {
      this.$bus.$on('toMyBro', this.getMsg);
    },
    methods: {
      getMsg(msg) {
        console.log(msg)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>