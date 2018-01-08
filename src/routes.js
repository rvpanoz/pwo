//application Routes

const routes = [
  {
    text: 'Home',
    path: '/',
    component: 'Home',
    exact: true,
    options: {
      menu: true
    }
  }, {
    component: 'Auth',
    path: '/auth',
    exact: true
  }
];

export default routes
