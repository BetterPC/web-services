import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'services', component: () => import('pages/ServicesPage.vue') },
      { path: 'compare', component: () => import('pages/ComparisonPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'login', component: () => import('pages/LogInPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'api', component: () => import('pages/api.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
