/**
 * config.js 配置
 * https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
 * 
 * 
 * 采用 和 vue 官网的搜索，这个需要 域名
 * https://www.vuepress.cn/zh/theme/default-theme-config.html#algolia-%E6%90%9C%E7%B4%A2
 */
const path = require("path")
const rootpath = path.dirname(__dirname) // 执行一次dirname将目录定位到docs目录
const traversed = require('./utils/traversed');

const GitHubUrl = 'https://github.com/srxboys/rxios-questions'
const description = 'ios|object-c|swift|面试题|笔试题';

module.exports = {
  title: 'iOS questions',
  description, // 百度搜索 seo

  // 部署站点的基础路径 https://vuepress.vuejs.org/zh/config/#base
  base: '/rxios-questions/', // 项目名 in GitHub/Gitee

  head: [
    // pwa https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E4%BD%BF%E7%94%A8
    ['link', { rel: 'icon', href: `/qdmall_logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    
    ['meta', { name: 'keywords', content: description}], // 权重不太高，但是只要有轻重我们也要利用。
    // 数据统计: https://blog.csdn.net/lovefive5/article/details/102466820
    ['script', {type: 'text/javascript'}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?1a5d91d80ef8d90310c18a82333b9d6a";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    `]
  ],

  markdown: {
    lineNumbers: true,
  },

  plugins: [
    // 更新时间插件 https://www.vuepress.cn/zh/plugin/official/plugin-last-updated.html
    ['@vuepress/last-updated'],
    // 缩放图像
    ['@vuepress/medium-zoom', true],
    // 刷新
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true,
      // updatePopup: {
      //   '/': {
      //     message: "发现新内容可用",
      //     buttonText: "刷新"
      //   },
      // }
    }],
  ],

  themeConfig: {
    logo: '/qdmall_logo.png',

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: GitHubUrl,
    repoLabel: 'GitHub',
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'gh-pages',
    editLinks: true,
    // // // 默认为 "Edit this page"
    editLinkText: '帮助改善此页面！',
    // 不显示搜索框
    // search: false,
    // [配合]更新时间插件 vuepress/last-updated
    lastUpdated: '上次更新', // string | boolean
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'Object-c', link: '/oc/' },
      { text: 'Swift', link: '/swift/' },
      { text: '混合编程', link: '/hybrid/' },
      // { 
      //   text: '了解更多',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: '项目', items: [
      //         { text: 'aa', link: 'https://aa' },
      //         { text: '测试-mobile', link: 'http://aa' },
      //       ]
      //     },
      //     { text: '其他', items: [
      //         { text: 'bb', link: 'http://bbb' },
      //         { text: 'bb', link: 'https://bbb' },
      //       ]
      //     }
      //   ],
      // },
      { text: '更新记录', link: '/update/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            '',
            '/guide/tabbar',
          ],
        },
        // {
        //   title: '弃用',
        //   collapsable: true,  // 可选的, 默认值是 true,
        //   sidebarDepth: 2,    // 可选的, 默认值是 1
        //   children: traversed.getFileName(rootpath,'/guide/discard/')
        // },
        // {
        //   title: '不可见页面',
        //   collapsable: true,  // 可选的, 默认值是 true,
        //   sidebarDepth: 2,    // 可选的, 默认值是 1
        //   children: traversed.getFileName(rootpath, '/guide/invisible/')
        // }
      ],
      '/update/': ['/update/'],
    }
   
  },

  port: 8081,
  // dest: ''
}