// https://vitepress.dev/guide/custom-theme
import Antd from 'ant-design-vue'
import { Theme, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Login from './components/auth/Login.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Login', Login)
    app.use(Antd)
    if (typeof window !== 'undefined') {
      const loginPath = withBase('/docs/auth/login')
      const isLogin = sessionStorage!.getItem('isLogin')
      console.log('isLogin', isLogin)
      router.onBeforeRouteChange = async (to: string) => {
        if (isLogin && to.includes(loginPath)) {
          await router.go(withBase('/'))
          return true
        }
        router.route
        const whitelist = [loginPath]
        const isRequiredAuth = !whitelist.includes(to)
        if (isRequiredAuth && !isLogin) {
          await router.go(loginPath)
          return false
        }
        return true
      }
    }
  }
} satisfies Theme
