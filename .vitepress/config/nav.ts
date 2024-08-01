import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '示例', link: '/docs/markdown-examples' },
  {
    text: '赛道',
    items: [
      { text: '宠物', link: '/docs/trace/pet/index' },
      { text: '独立站', link: '/docs/trace/unaffiliatedsite/index' },
      { text: '小说', link: '/docs/trace/novel/index' }
    ]
  },
  {
    text: '编程',
    items: [
      { text: 'nodejs', link: '/docs/coding/service/index' },
      { text: 'typescript', link: '/docs/coding/service/index' },
      { text: 'golang', link: '/docs/coding/service/index' },
      { text: '前端', link: '/docs/coding/service/index' },
      { text: '服务端', link: '/docs/coding/service/index' }
    ]
  },
  {
    text: '工具',
    link: '/docs/tools/frp/index'
  }
]
