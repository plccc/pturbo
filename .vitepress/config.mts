import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TurboCat',
  description: 'Record something.',
  base: '/turbo/',
  markdown: {
    lineNumbers: true
  },
  cleanUrls: true, // 去除html后缀
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpg',
    siteTitle: false,
    nav: nav,
    sidebar: sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/plccc/turbo.git' }]
  }
})
