// https://www.jianshu.com/p/7b78f570fc4e
const utils = {
  genSidebar: function (title, children = [''], collapsable = false, sidebarDepth = 3) {
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