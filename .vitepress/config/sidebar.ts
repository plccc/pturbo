import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/docs/': [
    { text: 'Markdown Examples', link: '/docs/markdown-examples' },
    { text: 'Runtime API Examples', link: '/docs/api-examples' }
  ],
  '/docs/trace/pet/': [
    {
      text: '内容创作指南',
      link: '/docs/trace/pet/index'
    }
  ],
  '/docs/trace/unaffiliatedsite/': [
    {
      text: '海外独立站',
      link: '/docs/trace/unaffiliatedsite/index'
    }
  ],
  '/docs/trace/novel/': [
    {
      text: '海外小说',
      link: '/docs/trace/novel/index'
    }
  ],
  '/docs/coding/': [
    {
      text: '架构',
      link: '/docs/coding/frame/index'
    },
    {
      text: 'git',
      link: '/docs/coding/git/index'
    },
    {
      text: 'nginx',
      link: '/docs/coding/git/index'
    },
    {
      text: 'docker',
      link: '/docs/coding/git/index'
    },
    {
      text: 'npm',
      link: '/docs/coding/git/index'
    }
  ],
  '/docs/tools/': [
    {
      text: 'frp',
      link: '/docs/tools/frp/index'
    }
  ]
}
