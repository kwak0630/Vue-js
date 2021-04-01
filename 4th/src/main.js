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
      //�ڵ����� �������ش�.
    }
  },
  render(h) { return h(this.ViewComponent); } //������ ����
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
  //currentRoute�� �������
});

//popstate -> history.pushstate
