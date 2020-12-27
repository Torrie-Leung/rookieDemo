<template>
  <div class="hello">
    <h2>staff</h2>
    <span>{{ msg }}</span>
    <span>count a number {{count}}</span>
    <div>
      
      <button @click="sendIt">send a msg from staff</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    count: Number
  },
  methods: {
    sendIt() {
      this.$emit('currentMsg', 'ææææææ~')
      this.$bus.$emit('toMyBro', 'hey bro~')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
