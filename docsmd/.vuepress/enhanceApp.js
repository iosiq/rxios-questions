
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // console.log('router=>', router)
  router.beforeEach((to, from, next) => {
    setTimeout(() => {
      // 百度 SPA 统计
      // webpack-webpackPrefetch 异步加载js(代码分割) https://gitee.com/srxboys/learn-webpack-5/tree/master/class/24_%E6%87%92%E5%8A%A0%E8%BD%BDjs_lazyloading_copy_23%E7%9A%84demo3
      import('./common/baidu-spa').then(module => {
        let prettifyTable = module.default;
        if (to.path) prettifyTable(to.fullPath)
      }).catch(error => {
          // console.log(error);
      });
      
    }, 10);
    next();
  })
}