<template>
  <div class="home">
    <h1>boss</h1>
    <div>
      <span>staff said: {{staffMsg}}</span>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg= "msg" :count= "counter" @currentMsg= "getCurr"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
