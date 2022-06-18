# Quick start

## Installation

```sh
npm install --save vue-mathjax
```


## Usage
### ❗️❗️Don't forget to import the Mathjax.js:
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"></script>
```

Import globally
```js
import VueMathjax from 'vue-mathjax'
Vue.use(VueMathjax)
```
OR
```js
import {VueMathjax} from 'vue-mathjax'
export default {
  ...
  components: {
    'vue-mathjax': VueMathjax
  },
  ...
}
```

## Demo

:::demo
```html
<div class="demo-container">
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    <vue-mathjax :formula="formula"></vue-mathjax>
</div>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
    }
  }
}
</script>
<style>
.demo-container {
  text-align: center;
}
</style>
```
:::

## Props
### formula
`type: string` mathjax string

### safe
`type: boolean; default: true` sometimes you want render the html in your mathjax, so just set it to false. demo: [codesandbox](https://codesandbox.io/s/vue-template-ftd5s)

### options
`type: object; default: {}` custom Mathjax configurations
