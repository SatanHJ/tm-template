/*
 * @Descripttion: 打包配置文件
 * @Company: 思宏科技
 * @version: v1.0
 * @Author: HJ
 * @Date: 2020-12-24 09:09:00
 * @LastEditors: HJ
 * @LastEditTime: 2020-12-24 16:34:56
 */
const path = require('path')
const webpack = require('webpack')
const buildDate = JSON.stringify(new Date().toLocaleString())
const createThemeColorReplacerPlugin = require('./config/plugin.config')

const { VUE_APP_PUBLIC_PATH, port: envPort, npm_config_port, NODE_ENV } = process.env
function resolve(dir) {
  return path.join(__dirname, dir)
}
const isProd = NODE_ENV === 'production'
const assetsCDN = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  ]
}
const port = envPort || npm_config_port || 9532

const vueConfig = {
  publicPath: VUE_APP_PUBLIC_PATH || `//localhost:${port}`,
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  productionSourceMap: false,
  lintOnSave: !isProd,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: [],
  configureWebpack: {
    output: {
      library: 'member-system',
      filename: '[name].[hash:8].js',
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_member-system'
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        BUILD_DATE: buildDate
      })
    ],
    externals: isProd ? assetsCDN.externals : {}
  },
  chainWebpack: config => {
    // 生产环境下使用
    config.when(isProd, config => {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    })
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port,
    open: true,
    proxy: {
      '/unmock': {
        target: 'https://scrm-dev.thinkmacro.cn/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/unmock': ''
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}

// preview.pro.loacg.com only do not use in your production;
if (process.env.VUE_APP_PREVIEW === 'true') {
  console.log('VUE_APP_PREVIEW', true)
  vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin())
}

module.exports = vueConfig
