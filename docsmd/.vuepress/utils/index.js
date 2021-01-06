// https://www.jianshu.com/p/7b78f570fc4e
const utils = {
  genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
    var arr = new Array();
    arr.push({
      title,
      children,
      collapsable,
      sidebarDepth
    })
    return arr;
  }
};

module.exports = utils;