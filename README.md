# vue-mathjax

[![npm](https://img.shields.io/npm/v/vue-mathjax.svg) ![npm](https://img.shields.io/npm/dm/vue-mathjax.svg)](https://www.npmjs.com/package/vue-mathjax)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A Vue.js Plugin for Mathjax

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save vue-mathjax
```


# Usage
Don't forget to import the Mathjax.js:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"></script>
```
---
```
import VueMathjax from 'vue-mathjax'
Vue.use(VueMathjax)
```
OR
```
import {VueMathjax} from 'vue-mathjax'
export default {
  ...
  components: {
    'vue-mathjax': VueMathjax
  },
  ...
```
```
<template>
<div>
<textarea v-model="formula" cols="30" rows="10"></textarea>
  <vue-mathjax :formula="formula"></vue-mathjax>
</div>
</template>

<script>
<!-- You can also define globally -->
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  },
  name: 'HelloWorld',
  data () {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
```
---
# Demo
![demo.gif](https://github.com/justforuse/vue-mathjax/raw/master/demo.gif)
## License

[MIT](http://opensource.org/licenses/MIT)
