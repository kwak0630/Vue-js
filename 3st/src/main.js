import Vue from 'vue';
import router from './router';

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