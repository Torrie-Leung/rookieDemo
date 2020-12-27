<template>
  <div class="home">
    <h1>boss</h1>
    <div>
      <span>staff said: {{staffMsg}}</span>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg= "msg" :count= "counter" @currentMsg= "getCurr"/>
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
  data () {
    return {
      msg: ' Welcome to dummy dummy ',
      counter: 3,
      staffMsg: ''
    }
  },
  methods: {
    getCurr(msg) {
      this.staffMsg = msg
    }
  },
}
</script>
