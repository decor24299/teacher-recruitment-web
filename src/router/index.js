import Vue from 'vue';
import VueRouter from 'vue-router';
import T01 from '../components/teachers/T01.vue';
import B01 from '../components/branchs/B01.vue';
import J01 from '../components/jobs/J01.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/teachers',
    name: 'Teachers',
    component: T01
  },
  {
    path: '/branchs',
    name: 'Branchs',
    component: B01
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: J01
  },
];

const router = new VueRouter({
  routes
});

export default router;