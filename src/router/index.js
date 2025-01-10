import { createRouter, createWebHashHistory } from 'vue-router'

let routes = []


// if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//   routes = mobileRoute
// } else {
//   routes = webRoute
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        transition: 'slide-right',
      }
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      meta: {
        keepAlive: false
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            auth: false,
            transition: 'slide-right',
          }
        },
        {
          path: '/deposit',
          name: 'deposit',
          component: () => import('@/views/Deposit.vue'),
          meta: {
            auth: false,
            transition: 'slide-right',
          }
        },
        {
          path: '/promotion',
          name: 'promotion',
          component: () => import('@/views/Promotion.vue'),
          meta: {
            auth: false,
            transition: 'slide-right',
          }
        },
        {
          path: '/inbox',
          name: 'inbox',
          component: () => import('@/views/Inbox.vue'),
          meta: {
            auth: true,
            transition: 'slide-right',
          }
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('@/views/Mine.vue'),
          meta: {
            
            auth: true,
            transition: 'slide-right',
          }
        },

        {
          path: '/forgetPass',
          name: 'forgetPass',
          component: () => import('@/views/ForgetPass.vue'),
          meta: {
            transition: 'slide-left',
            auth: false
          },
        },
        {
          path: '/activity',
          name: 'activity',
          component: () => import('@/views/Activity.vue'),
          meta: {
            auth: false,
            transition: 'slide-right',
          }
        },
        {
          path: '/vip',
          name: 'vip',
          component: () => import('@/views/Vip.vue'),
          meta: {
            auth: false,
            transition: 'slide-right',
          }
        },
        {
          path: '/classification',
          name: 'classification',
          component: () => import('@/views/Classification.vue'),
          meta: {
            auth: false,
            transition: 'slide-left',
          }
        },
        {
          path: '/records',
          name: 'records',
          component: () => import('@/views/Records.vue'),
          meta: {
            transition: 'slide-left',
            auth: true
          },
        },
        {
          path: '/withdraw',
          name: 'withdraw',
          component: () => import('@/views/Withdraw.vue'),
          meta: {
            transition: 'slide-left',
            auth: true
          },
        },
        {
          path: '/spin',
          name: 'spin',
          component: () => import('@/views/Spin.vue'),
          meta: {
            transition: 'slide-left',
            auth: false
          }
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/views/Contact.vue'),
          meta: {
            transition: 'slide-left',
            auth: false
          }
        },
        {
          path: '/pay',
          name: 'pay',
          component: () => import('@/views/Pay.vue'),
          meta: {
            transition: 'slide-left',
            auth: false
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        transition: 'slide-left',
        auth: false
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        transition: 'slide-left',
        auth: false
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('accessToken')
  if (!token) {
    if (to.meta.auth) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
