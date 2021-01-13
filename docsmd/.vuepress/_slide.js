const path = require("path")
const ROOT_PATH = path.dirname(__dirname) // 执行一次dirname将目录定位到docs目录
const AutoSlide = require('./utils/auto-slide')

const vuePressSlide = {
  config: function () {
    let sidebar = {}
    sidebar = createSide(sidebar, '/guide/')
    sidebar = createSide(sidebar, '/oc/')
    sidebar = createSide(sidebar, '/cross-platform/')
    sidebar = createSide(sidebar, '/swift/')
    sidebar = createSide(sidebar, '/iq/')
    sidebar = createSide(sidebar, '/update/')
    return sidebar
  }
}

module.exports = vuePressSlide

function createSide(sidebar, path) {
  sidebar = Object.assign(sidebar, AutoSlide.getSlide(ROOT_PATH, path))
  return sidebar
}