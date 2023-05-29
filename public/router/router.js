import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePage.vue';
import SecondPage from './components/SecondPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/second',
      name: 'second',
      component: SecondPage
    }
  ]
});
