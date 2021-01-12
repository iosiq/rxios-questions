const path = require("path")
const ROOT_PATH = path.dirname(__dirname) // 执行一次dirname将目录定位到docs目录
const Traversed = require('./utils/traversed');
const AutoSlide = require('./utils/auto-slide')

const slide = {
  // 不采用手写了
  // '/guide/': [
  //   createSidebarContent('指南', [
  //     '/guide/',
  //   ]),
  //   createSidebarContent('代码编辑器', [
  //     '/guide/code-editor/',
  //     '/guide/code-editor/xcode',
  //     '/guide/code-editor/app-code',
  //   ]),
  //   createSidebarContent('证书', [
  //     '/guide/cer/',
  //     '/guide/cer/app-store',
  //   ]),
  //   autoSidebarAutoContent('App Store', '/guide/app-store/'),
  //   createSidebarContent('ci', [
  //     '/guide/ci/',
  //     '/guide/ci/github-actions',
  //     '/guide/ci/gitlab-ci',
  //     '/guide/ci/jenkins',
  //     '/guide/ci/shell',
  //     '/guide/ci/nodejs',
  //   ]),
  // ],
  '/swift/': [
    autoSidebarAutoContent('Swift', '/swift/'),
  ],
  '/cross-platform/': [
    createSidebarContent('跨平台', [
      '/cross-platform/',
    ]),
    autoSidebarAutoContent('navite-app', '/cross-platform/native/'),
    autoSidebarAutoContent('web-app', '/cross-platform/hybrid/'),
  ],
  '/iq/': [
    autoSidebarAutoContent('面试题', '/iq/'),
  ],
  '/update/': ['/update/'],
}
let sidebar = Object.assign(AutoSlide.getSlide(ROOT_PATH, '/guide/'), slide)
sidebar = Object.assign(sidebar, AutoSlide.getSlide(ROOT_PATH, '/oc/'))

module.exports = sidebar

// 创建有 顺序排序的 侧边栏
function createSidebarContent(title, childrens) {
  return {
    title: title || '',
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 3,    // 可选的, 默认值是 1
    children: childrens || [],
  }
}

// 创建有 无序的侧边栏
function autoSidebarAutoContent(title, homePath) {
  return {
    title: title || '',
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 3,    // 可选的, 默认值是 1
    children: Traversed.getFileName(ROOT_PATH, homePath)
  }
}