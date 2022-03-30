<template>
  <div class="hello">
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    <hr>
    <h2>Result: </h2>
    <vue-mathjax
      :formula="formula"
      :safe="false"
      :options="customOptions"
    />
  </div>
</template>

<script>
export default {
  name: 'TestComp',
  data () {
    return {
      formula: '<button>dfgtest</button> $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      msg: 'Welcome to Your Vue.js App',
      customOptions: {
        displayAlign: 'left'
      }
    }
  }
}
</script>
