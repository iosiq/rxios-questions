// https://www.jianshu.com/p/7b78f570fc4e

const fs = require('fs');
const path = require("path")
// 排除检查的文件
var excludes = ['.DS_Store']

const traversed = {
  getFileName: function (prefix, subdir) {
    let filenames = [];
    // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
    let fileTypes = /\.md$/; // 只匹配以md结尾的文件
    let rpath = path.join(prefix, subdir)
    fs.readdirSync(rpath).forEach(file => {
      if (excludes.indexOf(file) < 0) {
        fullpath = rpath + "/" + file
        var fileinfo = fs.statSync(fullpath)
        if (fileinfo.isFile()) {
          // if(file.indexOf('.md') > 0) {
          if (fileTypes.test(file) > 0) {
            if (file === 'README.md') {
              file = '';
            } else {
              file = file.replace('.md', '');
            }
            let lastFile = path.join(subdir, file)
            filenames.push(lastFile);
            // console.log('lastFile=>', lastFile)
          }
        }
      }
    })
    // console.log(filenames)
    filenames.sort(); // 排序
    // console.log('filenames=>', filenames)
    return filenames;
  }
}
module.exports = traversed;