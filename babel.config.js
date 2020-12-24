/*
 * @Descripttion: babel
 * @Company: 思宏科技
 * @version: v1.0
 * @Author: HJ
 * @Date: 2020-10-30 13:58:05
 * @LastEditors: HJ
 * @LastEditTime: 2020-12-24 13:44:19
 */
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []
// 生产环境下删除所有console
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

// 按需加载antd文件
plugins.push([
  'import',
  {
    libraryName: 'ant-design-vue',
    libraryDirectory: 'es',
    style: true // `style: true` 会加载 less 文件
  }
])

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins
}
