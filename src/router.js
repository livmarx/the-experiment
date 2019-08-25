import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/views/Home.vue';
import SignUp from '@/views/auth/SignUp.vue';
import SignIn from '@/views/auth/SignIn.vue';

// Laboratory Views:
import Laboratories from '@/views/laboratoryViews/Laboratories.vue';
import AddLaboratory from '@/views/laboratoryViews/AddLaboratory.vue';
import EditLaboratory from '@/views/laboratoryViews/EditLaboratory.vue';

// Subject Views:
import Subjects from '@/views/subjectViews/Subjects.vue';
import AddSubject from '@/views/subjectViews/AddSubject.vue';
import EditSubject from '@/views/subjectViews/EditSubject.vue';

// Trial Views:
import Trials from '@/views/trialViews/Trials.vue';
import AddTrial from '@/views/trialViews/AddTrial.vue';
import EditTrial from '@/views/trialViews/EditTrial.vue';

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
    {
      path: '/laboratories/add',
      name: 'addLaboratory',
      component: AddLaboratory,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/laboratories/:laboratory_id/edit',
      name: 'editLaboratory',
      component: EditLaboratory,
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
    {
      path: '/subjects/add',
      name: 'addSubject',
      component: AddSubject,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/subjects/:subject_id/edit',
      name: 'editSubject',
      component: EditSubject,
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
    {
      path: '/trials/add',
      name: 'addTrial',
      component: AddTrial,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/trials/:trial_id/edit',
      name: 'editTrial',
      component: EditTrial,
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
