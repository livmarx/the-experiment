import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import SignUp from '@/views/auth/SignUp.vue';
import SignIn from '@/views/auth/SignIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/',
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
  ],
});
