import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
  path: '/',
  name: 'Catalogue',
  component: Home,
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
},
{
  path: '/admin',
  name: 'Admin',
  component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
},
{
  path: '/cart',
  name: 'Cart',
  component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
