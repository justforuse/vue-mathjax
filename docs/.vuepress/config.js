module.exports = {
  title: 'Vue Mathjax',
  head: [
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [{ text: 'Guide', link: '/guide/quick-start' }],
    repo: 'https://github.com/justforuse/vue-mathjax',
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/guide/quick-start']
      }
    ]
  },
  plugins: [
    'demo-container'
  ]
}
