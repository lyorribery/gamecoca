import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  base: '/template02/',
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
          path: '/refer',
          name: 'refer',
          component: () => import('@/views/Home.vue'),
          meta: {
            auth: true,
            transition: 'slide-right',
          },
          component: () => import('@/views/Refer.vue'),
          children: [
            {
              path: '/refer/invite',
              name: 'invite',
              component: () => import('@/views/Invite.vue'),
              meta: {
                auth: true,
              }
            },
            {
              path:'/refer/referc',
              name: 'referc',
              component: () => import('@/views/Referc.vue'),
              meta: {
                auth: true,
              }
            },
            {
              path:'/refer/member',
              name: 'member',
              component: () => import('@/views/Member.vue'),
              meta: {
                auth: true,
              }
            },
            {
              path:'/refer/bonus',
              name: 'bonus',
              component: () => import('@/views/Bonus.vue'),
              meta: {
                auth: true,
              }
            },
          ]
        },
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
          path: '/report',
          name: 'report',
          component: () => import('@/views/Report.vue'),
          meta: {
            auth: false,
            transition: 'slide-right',
          }
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/views/Setting.vue'),
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
          path: '/spin',
          name: 'spin',
          component: () => import('@/views/Spin.vue'),
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
      path:'/deposit',
      name:'deposit',
      component: () => import('@/views/Deposit.vue'),
      meta: {
        transition: 'slide-right',
        auth: false
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
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
