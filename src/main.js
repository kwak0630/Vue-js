//import router from './router';
//import Vue from 'vue';
//import VueRouter from 'vue-router';
//import routers from './router.js';
//import App from './App.vue';

import Vue from 'vue';
import router from './router';
//Vue.use(VueRouter);

/*
const router = new VueRouter({
  mode: 'history',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

 */
const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return router[this.currentRoute];
      //자동으로 변경해준다.
    }
  },
  render(h) { return h(this.ViewComponent); } //렌더링 해줌
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
  //currentRoute를 윈도우로
});

//popstate -> history.pushstate
