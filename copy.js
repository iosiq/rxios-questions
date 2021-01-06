const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

console.log('copy docsmd/.vuepress/dist to docs')

const distPath = join(__dirname, './docsmd/.vuepress/dist')
let targetPath = join(__dirname, './docs')

const getArguments = process.argv.splice(2) || ''
const arg = String(getArguments)

if (arg === 'docs') {
  targetPath = join(__dirname, '../docs')
}

removeSync(targetPath)
copySync(distPath, targetPath)