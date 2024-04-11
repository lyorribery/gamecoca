import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        keepAlive: false
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
            keepAlive: true,
            auth: false
          }
        },
        {
          path: '/deposit',
          name: 'deposit',
          component: () => import('@/views/Deposit.vue'),
          meta: {
            keepAlive: false,
            auth: false
          }
        },
        {
          path: '/promotion',
          name: 'promotion',
          component: () => import('@/views/Promotion.vue'),
          meta: {
            keepAlive: true,
            auth: false
          }
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/Profile.vue'),
          meta: {
            keepAlive: true,
            auth: true
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        keepAlive: false,
        auth: false
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        keepAlive: false,
        auth: false
      },
    },
    {
      path: '/forgetPass',
      name: 'forgetPass',
      component: () => import('@/views/ForgetPass.vue'),
      meta: {
        keepAlive: false,
        auth: false
      },
    },
    {
      path: '/records',
      name: 'records',
      component: () => import('@/views/Records.vue'),
      meta: {
        keepAlive: false,
        auth: true
      },
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('@/views/Withdraw.vue'),
      meta: {
        keepAlive: false,
        auth: true
      },
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/Setting.vue'),
      meta: {
        keepAlive: false,
        auth: true
      },
    },
    {
      path: '/invite',
      name: 'invite',
      component: () => import('@/views/Invite.vue'),
      meta: {
        keepAlive: false,
        auth: false
      },
    },
    {
      path: '/spin',
      name: 'spin',
      component: () => import('@/views/Spin.vue'),
      meta: {
        keepAlive: false,
        auth: false
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
      meta: {
        keepAlive: false,
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
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
