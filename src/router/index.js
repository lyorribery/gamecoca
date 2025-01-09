import { createRouter, createWebHashHistory } from 'vue-router'

let routes = []

const mobileRoute = [
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
          tab: true,
          auth: false,
          transition: 'slide-right',
        }
      },
      {
        path: '/deposit',
        name: 'deposit',
        component: () => import('@/views/Deposit.vue'),
        meta: {
          tab: true,
          auth: false,
          transition: 'slide-right',
        }
      },
      {
        path: '/promotion',
        name: 'promotion',
        component: () => import('@/views/Promotion.vue'),
        meta: {
          tab: true,
          auth: false,
          transition: 'slide-right',
        }
      },
      {
        path:'/inbox',
        name: 'inbox',
        component: () => import('@/views/Inbox.vue'),
        meta: {
          tab: true,
          auth: false,
          transition: 'slide-right',
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/Mine.vue'),
        meta: {
          tab: true,
          auth: true,
          transition: 'slide-right',
        }
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
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/Setting.vue'),
        meta: {
          transition: 'slide-left',
          auth: true
        },
      },
      {
        path: '/invite',
        name: 'invite',
        component: () => import('@/views/Invite.vue'),
        meta: {
          transition: 'slide-left',
          auth: false
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
]

const webRoute = []

if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  routes = mobileRoute
} else {
  routes = webRoute
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
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
