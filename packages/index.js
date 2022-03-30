import VueMathjax from "./components/vue-mathjax.vue";

export { VueMathjax };
export default {
  install: function (Vue) {
    Vue.component("vue-mathjax", VueMathjax);
  },
};
