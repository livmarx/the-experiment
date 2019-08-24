import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/views/Home.vue';
import SignUp from '@/views/auth/SignUp.vue';
import SignIn from '@/views/auth/SignIn.vue';

// Labs:
import Laboratories from '@/views/laboratoryViews/Laboratories.vue';
// Labs:
import Subjects from '@/views/subjectViews/Subjects.vue';
// Labs:
import Trials from '@/views/trialViews/Trials.vue';

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

    // Laboratory routes:
    {
      path: '/laboratories',
      name: 'laboratories',
      component: Laboratories,
      meta: {
        requiresAuth: true,
      },
    },

    // Subject Routes:
    {
      path: '/subjects',
      name: 'subjects',
      component: Subjects,
      meta: {
        requiresAuth: true,
      },
    },

    // Trail Routes:
    {
      path: '/trials',
      name: 'trials',
      component: Trials,
      meta: {
        requiresAuth: true,
      },
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
