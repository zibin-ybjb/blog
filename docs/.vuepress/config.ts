
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import sidebar from './sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '子斌的前端分享',
  description: 'Just playing around',
  base:'/vuepress-blog/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    sidebar
  },
})
