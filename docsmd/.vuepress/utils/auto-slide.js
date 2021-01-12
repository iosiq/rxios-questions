// https://www.jianshu.com/p/7b78f570fc4e

const fs = require('fs');
const path = require("path")
// 排除检查的文件
const excludes = ['.DS_Store']
// const ChildrenExcludes = ['_nextSlides']

const AutoSlide = {
  getSlide: function (prefix, subdir) {
    const childrenObj = this.getFileName(prefix, subdir)
    const children = childrenObj.children || []
    const next = childrenObj._nextSlides || []

    let array = []
    if (children && Array.isArray(children) && children.length) {
      array.push(childrenObj)
    }
    array = array.concat(next)
    console.log('\n\n next' + JSON.stringify(next) + '\n\n')
    console.log('\n\narray =', array)

    const slide = {}
    slide[subdir] = array
    console.log('\n\n\nslide=', slide)

    // 让程序崩溃
    // const abs = []
    // abs = abs.push('aa')
    return slide
  },
  
  getFileName: function (prefix, subdir, _nextSlides = []) {
    let children = [];
    // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
    let fileTypes = /\.md$/; // 只匹配以md结尾的文件
    let rpath = path.join(prefix, subdir)
    let slideNamePath = ''
    fs.readdirSync(rpath).forEach(file => {
      if (excludes.indexOf(file) < 0) {
        fullpath = rpath + "/" + file
        var fileinfo = fs.statSync(fullpath)
        if (fileinfo.isFile()) {
          if(file === 'name.s') {
            slideNamePath = fullpath
          } 
          else if (fileTypes.test(file) > 0) {
            if (file === 'README.md') {
              file = '';
            } else {
              file = file.replace('.md', '');
            }
            let lastFile = path.join(subdir, file)
            children.push(lastFile);
            // console.log('lastFile=>', lastFile)
          }
        } else if (fileinfo.isDirectory()) {
          // console.log('dir file=', file)
          const chilSubdir = path.join(subdir, '/' + file + '/')
          const childrenObj = this.getFileName(prefix, chilSubdir)
          _nextSlides.push(childrenObj)
        }
      }
    })
    // console.log(children)
    children.sort(); // 排序
    // console.log('children=>', children)
    const title = readSlideName(slideNamePath)
    const collapsable = false // 可选的, 默认值是 true,
    const sidebarDepth = 3    // 可选的, 默认值是 1
    const slid = { children, title, _nextSlides, collapsable, sidebarDepth, '_name.s': title }
    // console.log('\n\n' + JSON.stringify(slid) + '\n\n')
    return slid;
  }
}
module.exports = AutoSlide;

function readSlideName(slideNamePath) {
  // console.log('文件名 slideNamePath=', slideNamePath)
  if (!slideNamePath) return ''
  let name = fs.readFileSync(slideNamePath, 'utf-8');
  name = trimStr(name)
  return name
}

function trimStr(str) {
  if (!str) return ''
  return str.replace(/(^\s*)|(\s*$)/g,"");
}