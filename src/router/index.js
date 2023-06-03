import { createRouter, createWebHistory } from 'vue-router';
import Conformation from '../pages/Confirmation.vue';
import Impressum from '../pages/Impressum.vue';
import Order from '../pages/Order.vue';
import Product from '../pages/Product.vue';
import FAQ from '../pages/FAQ.vue';

import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Confirmation',
    name: 'Confirmation',
    component: Conformation
  },
  {
    path: '/Impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
