import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    private: false,
    restricted: false,
    component: lazy(() => import('./views/HomeView')),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    private: false,
    restricted: true,
    component: lazy(() => import('./views/RegisterView')),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    private: false,
    restricted: true,
    component: lazy(() => import('./views/LoginView')),
  },
  {
    path: '/tasks',
    label: 'Tasks',
    exact: true,
    private: true,
    restricted: false,
    component: lazy(() => import('./views/TaskerView')),
  },
];
