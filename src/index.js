import "./styles/main.scss";

import Vue from "vue";

const app = new Vue({
  render: (h) => h("div", "Hi!"),
});

app.$mount("#app");
