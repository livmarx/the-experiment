import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/views/Home.vue';
import SignUp from '@/views/auth/SignUp.vue';
import SignIn from '@/views/auth/SignIn.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/home',
      redirect: '/',
      meta: {
        requiresAuth: true,
      },
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

router.beforeEach((to, from, next) => {
  // Check if route requires administrator to be authenticaed i.e. signed in:
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check if administrator is authenticated ie.e signed in:
    let researcher = firebase.auth().currentUser;
    if (researcher) {
      next();
    } else {
      next({ name: 'signin' });
    }
  } else {
    next();
  }
});

export default router;
