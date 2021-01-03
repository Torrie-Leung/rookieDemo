<template>
  <div>
    <h4>rookie's area</h4>
    <p>msg from top: {{mssg}}</p>
    <p>msg from staff: {{staffMssg}}</p>
    <p>{{layerr}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Rookie',
    inject: ["upper","upperObj"],
    mounted () {
      console.log(this.upperObj);
    },
    data() {
      return {
        mssg: this.upper.msg,
        staffMssg: this.upper.staffMsg.msg,
        layerr:this.upperObj.layerMsg
      }
    },
    watch: {
      deep:true,
      immediate: true,
      layerr: {
        handler(v){
          console.log(v)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>