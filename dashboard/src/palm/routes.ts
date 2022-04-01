const Dashboard = () => import('./layouts/dashboard');
const Application = () => import('./layouts/application');

export default [
  {
    path: '/users',
    routes: [
      {
        path: '/users/sign-in',
        layout: Application,
        component: () => import('./routes/users/sign-in'),
      },
      {
        path: '/users/sign-up',
        layout: Application,
        component: () => import('./routes/users/sign-up'),
      },
      {
        path: '/users/logs',
        layout: Dashboard,
        component: () => import('./routes/users/logs'),
      },
    ],
  },
  {
    path: '/install',
    component: () => import('./routes/install'),
  },
  {
    path: '/',
    exact: true,
    component: () => import('./routes'),
  },
];
