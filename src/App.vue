<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <test-comp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TestComp from './components/test-comp.vue'

export default {
  name: 'App',
  components: {
    TestComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
