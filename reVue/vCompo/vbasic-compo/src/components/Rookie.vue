<template>
  <div>
    <h4>rookie's area</h4>
    <p>msg from top: {{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Rookie',
    inject: ["upper"],
    data() {
      return {
        msg: this.upper.msg
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>