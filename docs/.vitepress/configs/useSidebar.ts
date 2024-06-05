const useSidebar = () => {
  const GUIDE_PREFIX = '/guide'
  const EXAMPLE_PREFIX = '/examples'
  return {
    [GUIDE_PREFIX]: [
      {
        text: '基础',
        items: [
          {
            text: '安装',
            link: `${GUIDE_PREFIX}/installation`,
          },
          {
            text: '快速上手',
            link: `${GUIDE_PREFIX}/quick-start`,
          },
        ],
      },
    ],
    [EXAMPLE_PREFIX]: [
      {
        text: '基础组件',
        items: [
          {
            text: '按钮Button',
            link: `${EXAMPLE_PREFIX}/button/`,
          },
          {
            text: '链接Link',
            link: `${EXAMPLE_PREFIX}/link/`,
          },
        ],
      },
      {
        text: '布局组件',
        items: [
          {
            text: '行和列Row & Column',
            link: `${EXAMPLE_PREFIX}/row-col/`,
          },
        ],
      },
      {
        text: '表单组件',
        items: [
          {
            text: '输入框Input',
            link: `${EXAMPLE_PREFIX}/input/`,
          },
          {
            text: '文本域Textarea',
            link: `${EXAMPLE_PREFIX}/textarea/`,
          },
          {
            text: '开关Switch',
            link: `${EXAMPLE_PREFIX}/switch/`,
          },
          {
            text: '单选框Radio',
            link: `${EXAMPLE_PREFIX}/radio/`,
          },
          {
            text: '复选框Checkbox',
            link: `${EXAMPLE_PREFIX}/checkbox/`,
          },
          {
            text: '表单Form',
            link: `${EXAMPLE_PREFIX}/form/`,
          },
          {
            text: '颜色选取器Color Picker',
            link: `${EXAMPLE_PREFIX}/color-picker/`,
          },
          {
            text: '下拉选择框Select',
            link: `${EXAMPLE_PREFIX}/select/`,
          },
          {
            text: '上传Upload',
            link: `${EXAMPLE_PREFIX}/upload/`,
          },
        ],
      },
      {
        text: '数据展示',
        items: [
          {
            text: '表格Table',
            link: `${EXAMPLE_PREFIX}/table/`,
          },
          {
            text: '分页Pagination',
            link: `${EXAMPLE_PREFIX}/pagination/`,
          },
          {
            text: '图片Image',
            link: `${EXAMPLE_PREFIX}/image/`,
          },
        ],
      },
      {
        text: '反馈组件',
        items: [
          {
            text: '消息Message',
            link: `${EXAMPLE_PREFIX}/message/`,
          },
          {
            text: '弹出框Alert',
            link: `${EXAMPLE_PREFIX}/alert/`,
          },
          {
            text: '对话框Dialog',
            link: `${EXAMPLE_PREFIX}/dialog/`,
          },
          {
            text: '通知Notification',
            link: `${EXAMPLE_PREFIX}/notification/`,
          },
          {
            text: '文字提示Tooltip',
            link: `${EXAMPLE_PREFIX}/tooltip/`,
          },
        ],
      },
    ],
  }
}

export default useSidebar
