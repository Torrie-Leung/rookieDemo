<template>
  <div class="home">
    <h1>boss</h1>
    <div>
      <span>staff said: {{staffMsg.msg}}</span>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg= "msg" :count= "counter" @currentMsg= "getCurr" />
    <Bro />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Bro from '@/components/Bro.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Bro
  },
  provide() {
    return{
      upper: this,
      upperObj: {
        layerMsg: ','
      }
    }
  },
  created () {
    this.$bus.$on('leap', this.getLeap);
  },
  data () {
    return {
      msg: ' Welcome to dummy dummy ',
      counter: 3,
      staffMsg: {
        msg: '3'
      },
      layerMsg:'g'
    }
  },
  methods: {
    getCurr(msg) {
      this.staffMsg.msg = msg
    },
    getLeap(e){
      this.layerMsg = e
      this._provided.upperObj.layerMsg = e
      console.log(this._provided.upperObj)
      
    }
  },
}
</script>
