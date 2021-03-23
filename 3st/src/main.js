import Vue from 'vue';
import router from './router';

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