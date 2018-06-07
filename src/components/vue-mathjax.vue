<template>
  <span ref="mathJaxEl">
    {{formula}}
  </span>
</template>

<script>
export default {
  props: ['formula'],

  methods: {
    renderContent () {
      this.$refs.mathJaxEl.textContent = this.formula
    },

    renderMathJax () {
      this.renderContent()
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ['(', ')']],
            displayMath: [['$$', '$$'], ['[', ']']],
            processEscapes: true,
            processEnvironments: true
          },
          // Center justify equations in code and markdown cells. Elsewhere
          // we use CSS to left justify single line equations in code cells.
          displayAlign: 'center',
          'HTML-CSS': {
            styles: { '.MathJax_Display': { margin: 0 } },
            linebreaks: { automatic: true }
          }
        })
        window.MathJax.Hub.Queue([
          'Typeset',
          window.MathJax.Hub,
          this.$refs.mathJaxEl
        ])
      }
    }
  },
  watch: {
    formula () {
      this.renderMathJax()
    }
  }
}
</script>
