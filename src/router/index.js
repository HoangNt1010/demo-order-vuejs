import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login/Login'
import Register from '../page/register/Register'
import Home from '../page/home/Home'
import Order from '../page/order/Order'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)) {
    if (Vue.$cookies.get("token")) {
      next({
        path: "/home",
        query: {}
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)) {
    if (Vue.$cookies.get("token")) {
      next({
        path: "/home",
        query: {}
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
router.beforeEach((to, from, next) => {
  if (to.name == "order" && !Vue.$cookies.get("token")) {
    // alert("hãy đăng nhập để sử dụng chức năng này");
    next({
      path: "/",
      query: {}
    });
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.name == "home" && !Vue.$cookies.get("token")) {
    // alert("hãy đăng nhập để sử dụng chức năng này");
    next({
      path: "/",
      query: {}
    });
  } else {
    next();
  }
});



export default router;