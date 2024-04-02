import { createRouter, createWebHashHistory } from 'vue-router'
// import mobile from './mobile/mobile'
// import pc from './pc/pc'



// const isMobile = () => {
//   const flag = navigator.userAgent.match(
//     /(phone|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
//   )
//   return flag
// }

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
            keepAlive: true
          }
        },
        {
          path: '/deposit',
          name: 'deposit',
          component: () => import('@/views/Deposit.vue'),
          meta: {
            keepAlive: false
          }
        },
        {
          path: '/promotion',
          name: 'promotion',
          component: () => import('@/views/Promotion.vue'),
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/forgetPass',
      name: 'forgetPass',
      component: () => import('@/views/ForgetPass.vue'),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/records',
      name: 'records',
      component: () => import('@/views/Records.vue'),
      meta: {
        keepAlive: false
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token) {
    if (to.path == '/startGame' || to.path == '/partnerDetail') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
