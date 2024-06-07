type NavTypeItem = {
  text: string
  link?: string
  items?: NavTypeItem[]
}

const useNav = (): NavTypeItem[] => [
  { text: '指南', link: '/guide/installation' },
  { text: '组件', link: '/examples/button/' },
  {
    text: 'beta',
    items: [
      {
        text: '更新日志',
        link: 'https://github.com/Ranaran315/capybara-ui.git',
      },
      {
        text: '参与贡献',
        link: 'https://github.com/Ranaran315/capybara-ui.git',
      },
    ],
  },
]

export const nav = useNav() as any
