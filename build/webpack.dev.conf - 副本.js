'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')


//建立模仿请求后台的json
const express = require('express')
const app = express()
const appData = require('../static/json/data.json')
const ratings = appData.seller

const usersData = require('../static/json/users.json')
const usersRatings = usersData.seller

//获取佛山地图的json
const foshanData=require('../static/json/foshan.json')
const foshanRatings=foshanData.fshMap

//底部的icon图json
const footerIconData=require('../static/json/footerIcon.json')
const footerIconRatings=footerIconData.imgDatas

//navICON图json
const navIconData=require('../static/json/navLists.json')
const navIconRatings=navIconData.imgDatas

//subNavICON图json
const subNavIconData=require('../static/json/subNavLists.json')
const subNavIconRatings=subNavIconData.imgDatas

//recommends图json
const recommendsData=require('../static/json/recommends.json')
const recommendsRatings=recommendsData.imgDatas

//猜你喜欢的清单json
const likeListsData=require('../static/json/likeLists.json')
const likeListsRatings=likeListsData.imgDatas

//树结构的清单json
const treeData=require('../static/json/treeData.json')
const treeDataRatings=treeData.treeDatas

//附近的清单json
const nearbyData=require('../static/json/nearby.json')

//附近的tag清单
const tagListsRatings=nearbyData.tagLists
//附近的详列表清单
const nearbyListsRatings=nearbyData.nearbyLists
//附近的种类列表清单
const moreKindListsRatings=nearbyData.moreKindLists

//用户的清单json
const myUserData=require('../static/json/myUser.json')
//用户的列表清单
const myUserListsRatings=myUserData.myUserLists



const apiRouter = express.Router()
app.use('http://localhost:8080/api',apiRouter)





const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/ratings',(req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      }),
      app.post('/api/users-ratings',(req,res)=>{
        res.json({
          error:0,
          data:usersRatings
        })
      }),
      app.get('/api/foshanMap',(req,res)=>{
        res.json({
          error:0,
          data:foshanRatings
        })
      }),

      app.post('/api/footerIcon',(req,res)=>{
        res.json({
          error:0,
          data:footerIconRatings
        })
      }),

      app.post('/api/navIcon',(req,res)=>{
        res.json({
          error:0,
          data:navIconRatings
        })
      }),


      app.post('/api/subNavIcon',(req,res)=>{
        res.json({
          error:0,
          data:subNavIconRatings
        })
      }),

      app.post('/api/recommends',(req,res)=>{
        res.json({
          error:0,
          data:recommendsRatings
        })
      }),


      app.post('/api/likeLists',(req,res)=>{
        res.json({
          error:0,
          data:likeListsRatings
        })
      }),

      app.post('/api/treeData',(req,res)=>{
        res.json({
          error:0,
          data:treeDataRatings
        })
      }),
      app.post('/api/tagLists',(req,res)=>{
        res.json({
          error:0,
          data:tagListsRatings
        })
      }),
      app.post('/api/nearbyLists',(req,res)=>{
        res.json({
          error:0,
          data:nearbyListsRatings
        })
      }),
      app.post('/api/moreKindLists',(req,res)=>{
        res.json({
          error:0,
          data:moreKindListsRatings
        })
      }),
      app.post('/api/myUserLists',(req,res)=>{
        res.json({
          error:0,
          data:myUserListsRatings
        })
      })


    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
