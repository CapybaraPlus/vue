type SidebarItem = {
  text: string
  link?: string
  items?: SidebarItem[]
}

/**
 * guide
 */
const guide_prefix = '/guide'
const useGuide: SidebarItem[] = [
  {
    text: '基础',
    items: [
      {
        text: '安装',
        link: `${guide_prefix}/installation`,
      },
      {
        text: '快速上手',
        link: `${guide_prefix}/quick-start`,
      },
    ],
  }
]

/**
 * examples
 */
const examples_prefix = '/examples'
const useExamples: SidebarItem[] = [
  {
    text: '基础组件',
    items: [
      {
        text: '按钮Button',
        link: `${examples_prefix}/button/`,
      },
      {
        text: '链接Link',
        link: `${examples_prefix}/link/`,
      },
    ],
  },
  {
    text: '布局组件',
    items: [
      {
        text: '行和列Row & Column',
        link: `${examples_prefix}/row-col/`,
      },
    ],
  },
  {
    text: '表单组件',
    items: [
      {
        text: '输入框Input',
        link: `${examples_prefix}/input/`,
      },
      {
        text: '文本域Textarea',
        link: `${examples_prefix}/textarea/`,
      },
      {
        text: '开关Switch',
        link: `${examples_prefix}/switch/`,
      },
      {
        text: '单选框Radio',
        link: `${examples_prefix}/radio/`,
      },
      {
        text: '复选框Checkbox',
        link: `${examples_prefix}/checkbox/`,
      },
      {
        text: '表单Form',
        link: `${examples_prefix}/form/`,
      },
      {
        text: '颜色选取器Color Picker',
        link: `${examples_prefix}/color-picker/`,
      },
      {
        text: '下拉选择框Select',
        link: `${examples_prefix}/select/`,
      },
      {
        text: '上传Upload',
        link: `${examples_prefix}/upload/`,
      },
    ],
  },
  {
    text: '数据展示',
    items: [
      {
        text: '表格Table',
        link: `${examples_prefix}/table/`,
      },
      {
        text: '分页Pagination',
        link: `${examples_prefix}/pagination/`,
      },
      {
        text: '图片Image',
        link: `${examples_prefix}/image/`,
      },
    ],
  },
  {
    text: '反馈组件',
    items: [
      {
        text: '消息Message',
        link: `${examples_prefix}/message/`,
      },
      {
        text: '弹出框Alert',
        link: `${examples_prefix}/alert/`,
      },
      {
        text: '对话框Dialog',
        link: `${examples_prefix}/dialog/`,
      },
      {
        text: '通知Notification',
        link: `${examples_prefix}/notification/`,
      },
      {
        text: '文字提示Tooltip',
        link: `${examples_prefix}/tooltip/`,
      },
    ],
  },
]

export const sidebar = {
  '/guide': useGuide,
  '/examples': useExamples,
}
